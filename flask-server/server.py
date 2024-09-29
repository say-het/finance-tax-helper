from flask import Flask, jsonify, send_file , request , g
from pymongo.errors import PyMongoError
from database import db_connection
from bson import ObjectId
from model import ai, create_pdf_with_table
import ast
from flask_cors import CORS , cross_origin
import numpy
app = Flask(__name__)
CORS(app)
global ai_response

def convert_objectid_to_str(data):
    if isinstance(data, list):
        return [convert_objectid_to_str(item) for item in data]
    elif isinstance(data, dict):
        return {key: convert_objectid_to_str(value) for key, value in data.items()}
    elif isinstance(data, ObjectId):
        return str(data)
    return data

@app.route("/getDetailsFromMongo", methods=["POST"])
def get_members():
    print("API called")
    data = request.get_json()
    email = data.get("email")
    print(email)
    try:
        email = "example@organization.com"
        if not email:
            return jsonify({"error": "Email is required"}), 400
        
        collection = db_connection.get_collection("useroragnizationdetails")
        latest_data = collection.find({"emailId": email}).sort("_id", -1).limit(1)
        latest_data = list(latest_data)
        
        if not latest_data:
            return jsonify({"error": "No data found for the provided email"}), 404

        latest_data = convert_objectid_to_str(latest_data)[0] 

    except PyMongoError as e:
        print(f"Error fetching data: {e}")
        return jsonify({"error": "Failed to fetch data from the database"}), 500

    financial_data = {
        "General Information": {
            "Organization Name": latest_data["generalInformation"]["organizationName"],
            "Registration Number": latest_data["generalInformation"]["registrationNumber"],
            "Business Type": latest_data["generalInformation"]["typeOfBusiness"],
            "Incorporation Year": latest_data["generalInformation"]["yearOfIncorporation"],
            "Annual Turnover (INR)": latest_data["generalInformation"]["annualTurnover"]
        },
        "Income and Revenue": {
            "Total Revenue (INR)": latest_data["incomeAndRevenue"]["grossRevenue"],
            "Income Sources": {
                "Domestic Revenue (INR)": latest_data["incomeAndRevenue"]["incomeSources"]["domestic"],
                "Foreign Revenue (INR)": latest_data["incomeAndRevenue"]["incomeSources"]["foreign"],
                "Interest Income (INR)": latest_data["incomeAndRevenue"]["incomeSources"]["interestIncome"],
                "Dividend Income (INR)": latest_data["incomeAndRevenue"]["incomeSources"]["dividendIncome"],
                "Capital Gains (INR)": latest_data["incomeAndRevenue"]["incomeSources"]["capitalGains"]
            }
        },
        "Expenses": {
            "Total Salaries and Wages (INR)": latest_data["expenses"]["salariesAndWages"],
            "Rent and Lease Expenses (INR)": latest_data["expenses"]["rentLeaseExpenses"],
            "Utility Expenses (INR)": latest_data["expenses"]["utilities"],
            "Depreciation of Fixed Assets (INR)": latest_data["expenses"]["depreciationOfFixedAssets"]
        },
        "Investments and Savings": {
            "Infrastructure Investments (INR)": latest_data["investmentsAndSavings"]["investmentsInInfrastructure"],
            "Employee Savings Schemes (INR)": latest_data["investmentsAndSavings"]["savingsSchemesForEmployees"],
            "Insurance Premiums (INR)": latest_data["investmentsAndSavings"]["insurancePremiumsPaid"]
        },
        "Deductions": {
            "Charitable Donations (INR)": latest_data["deductions"]["charitableDonations"],
            "Pension Contributions (INR)": latest_data["deductions"]["contributionToPensionFunds"],
            "Medical Insurance (INR)": latest_data["deductions"]["interestOnBusinessLoans"]
        },
        "Assets and Inventory": {
            "Current Assets Value (INR)": latest_data["assetAndInventory"]["valueOfCurrentAssets"],
            "Inventory Value (INR)": latest_data["assetAndInventory"]["inventoryAndGoodsInStock"]
        },
        "Research and Development": {
            "R&D Expenses (INR)": latest_data["researchAndDevelopment"]["rdExpenses"],
            "Eligible R&D Tax Credits (INR)": latest_data["researchAndDevelopment"]["eligibleRdTaxCredits"]
        },
        "Employee Benefits": {
            "Health Insurance for Employees (INR)": latest_data["employeeBenefits"]["medicalAndHealthInsurance"],
            "Travel and Accommodation Costs (INR)": latest_data["employeeBenefits"]["travelAndAccommodationCosts"]
        },
        "Foreign Transactions": {
            "Export Income (INR)": latest_data["foreignTransactions"]["incomeFromExport"],
            "Foreign Taxes Paid (INR)": latest_data["foreignTransactions"]["foreignTaxPaidTaxCreditClaimed"]
        }
    }

    tax_sections = [
        "Section 32 (Depreciation on Assets)",
        "Section 35 (Scientific Research Expenditure)",
        "Section 36(1)(iii) (Interest on Borrowed Capital)",
        "Section 37 (Rent expense)",
        "Section 80C (Deductions on Investments)",
        "Section 80D (Medical Insurance Premiums)",
        "Section 80G (Charitable Donations)",
        "Section 10AA (Deductions for Special Economic Zones)",
        "Section 44AD (Presumptive Taxation for Small Businesses)",
        "Section 80JJAA (Employment Generation Deduction)",
        "Section 43B (Certain Deductions Allowed on Payment Basis)",
        "Section 80IA (Deductions for Infrastructure Projects)",
        "Section 80IB (Deductions for Certain Industrial Undertakings)",
        "Section 80P (Deductions for Cooperative Societies)",
        "Section 115BA (Reduced Tax Rate for Domestic Companies)",
        "Section 80IBA (Affordable Housing Projects)",
        "Section 80IC (Deductions for Certain States)",
        "Section 80TTA (Interest on Savings Accounts)",
        "Section 80U (Deductions for Disabled Individuals)",
        "Section 80GG (Rent Deduction for Self-employed Individuals)",
        "Section 80RRB (Royalty Income Deduction)",
        "Section 24(b) (Interest on Home Loan)",
        "Section 80E (Interest on Education Loans)",
        "Section 80CCG (Rajiv Gandhi Equity Savings Scheme)",
        "Section 80DDB (Medical Expenses for Disabled Individuals)",
        "Section 80GGA (Scientific Research Donations)",
        "Section 80JJA (Deduction for Profits from New Manufacturing Units)"
    ]

    query = f"""
    Analyze the provided financial data of the organization and calculate tax deductions by cross-referencing each entry with the corresponding tax sections from the list below. For each tax section:

    Identify the applicable tax section based on the financial data and section list check every section provided in the section list.
    Perform detailed calculations for each deduction according to the specific percentage set by the government under the corresponding tax act or section.
    Cross-check for any overlapping or conflicting sections to ensure that no deduction is applied twice.
    Provide clear calculations with the formula used, and break down the deductions for transparency.
    Sum all the applicable deductions very carefully and finally calculate the grand total taxable income after applying these deductions (compulsory).

    Financial Data:
    {financial_data}

    Relevant Tax Sections:
    {tax_sections}

    Output Format:

    For each tax section, provide the following structure:

    Section Name: [The applicable section name or category from financial data, e.g., Charitable Contributions]
    Relevant Tax Act/Section: [The tax section under which the deduction is claimed, e.g., Section 80G]
    Calculation: [Show the detailed formula and calculation for the deduction, including the percentage applied as per the section]
    Deduction Amount: [The calculated deduction amount based on the financial data and the government-specified percentage]
    Explanation: [Briefly explain why this deduction applies]
    """

    ai_response = ai(query)
    print(ai_response)

    try:
        
        if ai_response is None:
            return jsonify({"error": "AI response not available"}), 400

        table_representation = f"""i am very angry strict instruction all content must be STRING first row should be ["Section Name", "Tax Act/Section Number", "Calculation", "Deduction Amount"] additionally a all content must be string string and all content must not be more than 2 words; if content not provided then write "N/A" [
    ["Section Name", "Relevant Tax Act/Section Number", "Percentage", "Deduction Amount"],
    ["Charitable Donations", "80G", "100% = 5M", "INR 5M"],
    ["Interest Loans", "36(1)(iii)", "100% = 12M", "INR 12M"],
    ["Grand Total", "N/A", "N/A", "amount"]
]
Given the following block of text related to tax deductions, extract the relevant information, then calculate the total tax to be paid and present it in a structured table format. Ensure that each piece of data is succinctly summarized while maintaining clarity. Here is the text block: {ai_response}"""
        table_representation_res = ai(table_representation)
        table_data = ast.literal_eval(table_representation_res)
        table_data = numpy.array(table_data)
        output_path = create_pdf_with_table(ai_response , table_data )
        return send_file(output_path, as_attachment=True)
    except Exception as e:
        print(f"Error creating PDF: {e}")
        return jsonify({"error": "Failed to create PDF"}), 500
if __name__ == "__main__":
    app.run(debug=True)