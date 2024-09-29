import React, { useState } from 'react';
import AssetAndInventory from './Business/AssetAndInvetory'
import Deduction from './Business/Deduction';
import EmployeeAndBenefit from './Business/EmployeeAndBenefit';
import Expensess from './Business/Expensess';
import ForiegnTransection from './Business/ForiegnTransection';
import GeneralInformation from './Business/GeneralInformation';
import InconeAndRevanue from './Business/InconeAndRevanue';
// import Info from './Business/Info';
import InvestAndSaving from './Business/InvestAndSaving';
import ResearchAndDevelopment from './Business/ResearchAndDevelopment';
import axios from 'axios';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email:'',
    generalInformation: {},
    incomeAndRevenue: {},
    expenses: {},
    investmentsAndSavings: {},
    deductions: {},
    assetAndInventory: {},
    researchAndDevelopment: {},
    employeeBenefits: {},
    foreignTransactions: {},
  });

  const handleNext = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
    setStep((prevStep) => prevStep + 1);
  };
  let email  = localStorage.getItem("userEmail");

  const handleSubmit = async () => {
    let email = localStorage.getItem("userEmail");
  
    try {
      const response = await fetch("http://localhost:7000/api/add/addOrganizationData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailId: email,
          generalInformation: {
            organizationName: formData.generalInformation.organizationName,
            registrationNumber: formData.generalInformation.registrationNumber,
            typeOfBusiness: formData.generalInformation.typeOfBusiness,
            yearOfIncorporation: formData.generalInformation.yearOfIncorporation,
            annualTurnover: formData.generalInformation.annualTurnover,
          },
          incomeAndRevenue: {
            grossRevenue: formData.incomeAndRevenue.grossRevenue,
            incomeSources: {
              domestic: formData.incomeAndRevenue.incomeSources.domestic,
              foreign: formData.incomeAndRevenue.incomeSources.foreign,
              interestIncome: formData.incomeAndRevenue.incomeSources.interestIncome,
              dividendIncome: formData.incomeAndRevenue.incomeSources.dividendIncome,
              capitalGains: formData.incomeAndRevenue.incomeSources.capitalGains,
            },
          },
          expenses: {
            salariesAndWages: formData.expenses.salariesAndWages,
            rentLeaseExpenses: formData.expenses.rentLeaseExpenses,
            utilities: formData.expenses.utilities,
            depreciationOfFixedAssets: formData.expenses.depreciationOfFixedAssets,
          },
          investmentsAndSavings: {
            investmentsInInfrastructure: formData.investmentsAndSavings.investmentsInInfrastructure,
            savingsSchemesForEmployees: formData.investmentsAndSavings.savingsSchemesForEmployees,
            insurancePremiumsPaid: formData.investmentsAndSavings.insurancePremiumsPaid,
          },
          deductions: {
            charitableDonations: formData.deductions.charitableDonations,
            interestOnBusinessLoans: formData.deductions.interestOnBusinessLoans,
            contributionToPensionFunds: formData.deductions.contributionToPensionFunds,
          },
          assetAndInventory: {
            valueOfCurrentAssets: formData.assetAndInventory.valueOfCurrentAssets,
            inventoryAndGoodsInStock: formData.assetAndInventory.inventoryAndGoodsInStock,
          },
          researchAndDevelopment: {
            rdExpenses: formData.researchAndDevelopment.rdExpenses,
            eligibleRdTaxCredits: formData.researchAndDevelopment.eligibleRdTaxCredits,
          },
          employeeBenefits: {
            medicalAndHealthInsurance: formData.employeeBenefits.medicalAndHealthInsurance,
            travelAndAccommodationCosts: formData.employeeBenefits.travelAndAccommodationCosts,
          },
          foreignTransactions: {
            incomeFromExport: formData.foreignTransactions.incomeFromExport,
            foreignTaxPaidTaxCreditClaimed: formData.foreignTransactions.foreignTaxPaidTaxCreditClaimed,
          },
        }),
      });
  
      // Check if the response is ok (status code in the range 200-299)
      if (!response.ok) {
        const errorMessage = await response.text(); // Get error message from the server
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
      }
  
      const data = await response.json(); // Parse the JSON from the response
      console.log('Data saved successfully:', data);
      
      // You might want to reset the form or navigate to another page after submission
      // Reset your form data or handle navigation here
  
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  

  switch (step) {
    case 1:
      return <GeneralInformation nextStep={handleNext} />;
    case 2:
      return <Expensess nextStep={handleNext} />;
      case 3:
      console.log("expenses is work");
      return <InvestAndSaving nextStep={handleNext} />;
    case 4:
      return <Deduction nextStep={handleNext} />;
                case 5:
          return <InconeAndRevanue nextStep={handleNext} />;
    case 6:
      return <AssetAndInventory nextStep={handleNext} />;
    case 7:
      return <ResearchAndDevelopment nextStep={handleNext} />;
    case 8:
      return <EmployeeAndBenefit nextStep={handleNext} />;
    case 9:
      return <ForiegnTransection nextStep={handleNext} submitForm={handleSubmit} />;
    default:
      return null;
  }
};

export default MultiStepForm;
