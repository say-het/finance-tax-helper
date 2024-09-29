import React, { useState } from 'react';
import GeneralInfoForm from './Individual/PersonalInfo';
import IncomeForm from './Individual/Income';
import ExpensesForm from './Individual/Expenses';
import InvestmentsForm from './Individual/Investment';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    generalInfo: {},
    income: {},
    expenses: {},
    investments: {},
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
    try {
      let response = await fetch("http://localhost:7000/api/add/addIndividualData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          
          email: email,  // Fix: Use formData instead of formdata
          generalInfo: {
            name: formData.generalInfo.name,
            panNumber: formData.generalInfo.panNumber,
            state: formData.generalInfo.state,
            city: formData.generalInfo.city
          },
          income: {
            salary: formData.income.salary,
            bonuses: formData.income.bonuses,
            HRallowances: formData.income.HRallowances,
            petrolAllowance: formData.income.petrolAllowance,
            profitSharing: formData.income.profitSharing,
            stockOptions: formData.income.stockOptions
          },
          expenses: {
            childrenEducation: formData.expenses.childrenEducation,
            householdRent: formData.expenses.householdRent,
            transportationExpenses: formData.expenses.transportationExpenses,
            medicalExpenses: formData.expenses.medicalExpenses,
            insurancePremiums: formData.expenses.insurancePremiums,
            debtRepayments: formData.expenses.debtRepayments
          },
          investments: {
            EPF: formData.investments.EPF,
            PPF: formData.investments.PPF,
            stocks: formData.investments.stocks,
            mutualFunds: formData.investments.mutualFunds,
            realEstate: formData.investments.realEstate,
            fixedDeposits: formData.investments.fixedDeposits,
            NPS: formData.investments.NPS
          }
        })
      });

      // Check if the response is ok (status code in the range 200-299)
      if (!response.ok) {
        const errorMessage = await response.text(); // Get error message from the server
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
      }

      const data = await response.json(); // Parse the JSON from the response
      console.log('User saved successfully:', data);
      
      // You might want to reset the form or navigate to another page after submission
      // setFormData({ email: '', generalInfo: {}, income: {}, expenses: {}, investments: {} });
      // setStep(1); // Reset to the first step

    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  switch (step) {
    case 1:
      return <GeneralInfoForm nextStep={handleNext} />;
    case 2:
      return <IncomeForm nextStep={handleNext} />;
    case 3:
      return <ExpensesForm nextStep={handleNext} />;
    case 4:
      return <InvestmentsForm nextStep={handleNext} submitForm={handleSubmit} />;
    default:
      return null;
  }
};

export default MultiStepForm;
