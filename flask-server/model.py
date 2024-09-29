import google.generativeai as generative_ai
from fpdf import FPDF
import ast
# from fpdf import FPDF

API_KEY = 'AIzaSyCCiKT6_gfxzXNEiYO3VeE_sY15h3pSf9Y'

def ai(query):
    generative_ai.configure(api_key=API_KEY)
    model = generative_ai.GenerativeModel('gemini-pro')
    response = model.generate_content(query)
    cleaned_response = response.text.replace('*', '').replace('#', '')
    return cleaned_response
    
def create_pdf_with_table(content, table_data, filename='Tax_Deduction_Report_FPDF.pdf'):
    class PDF(FPDF):
        def header(self):
            self.set_font('Arial', 'B', 24)
            self.cell(0, 10, 'Tax Deduction Report', ln=True, align='C')
            self.ln(10)

        def chapter_title(self, title):
            self.set_font('Arial', 'B', 14)
            self.cell(0, 10, title, ln=True, align='L')
            self.ln(5)

        def chapter_body(self, body):
            self.set_font('Arial', '', 14)
            self.multi_cell(0, 10, body)
            self.ln()

        def add_table(self, data):
            column_widths = [50, 50, 50, 50]
            self.set_font('Arial', 'B', 10)
            headers = data[0]
            for i, header in enumerate(headers):
                self.cell(column_widths[i], 12, header, border=1, align='C')
            self.ln()
            self.set_font('Arial', '', 9)
            for row in data[1:]:
                for i, item in enumerate(row):
                    self.cell(column_widths[i], 12, str(item), border=1, align='C')
                self.ln()

    pdf = PDF()
    pdf.add_page()

    pdf.chapter_title('Introduction')
    pdf.chapter_body(content)

    pdf.chapter_title('Deductions Table')
    if isinstance(table_data, str):
        table_data = ast.literal_eval(table_data)
    pdf.add_table(table_data)

    pdf.output(filename)
    return filename