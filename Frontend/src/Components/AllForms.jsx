import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Info from './forms/subforms/UserDetail.Info.jsx'
import ForiegnTransection from './forms/subforms/UserDetail.foriegnTransactionForm.jsx';
import AssetAndInventory from './forms/subforms/UserDetail.AssetAndInventory.jsx';
import Deduction from './forms/subforms/UserDetail.Deduction.jsx';
import EmployeeAndBenefit from './forms/subforms/UserDetail.EmployeementAndBenefit.jsx'; // Fixed typo
import Expensess from './forms/subforms/UserDetail.Expenes.jsx';
import GeneralInformation from './forms/subforms/UserDetail.GeneralInformationForm.jsx';
import InconeAndRevanue from './forms/subforms/UserDetail.IncomeAndRevunueForm.jsx';
import InvestAndSaving from './forms/subforms/UserDetail.InvestAndSaving.jsx';
import ResearchAndDevelopment from './forms/subforms/UserDetail.ResearchAndDev.jsx';

const AllForms = () => {
    return (
        <Routes>
            <Route exact path="/userDetail" element={<Info />}> {/* Using Outlet for nested routes */}
                <Route path="genInformation" element={<GeneralInformation />} />
                <Route path="revenue" element={<InconeAndRevanue />} />
                <Route path="expensess" element={<Expensess />} />
                <Route path="invest-saving" element={<InvestAndSaving />} />
                <Route path="deduction" element={<Deduction />} />
                <Route path="inventory-assets" element={<AssetAndInventory />} /> {/* Fixed spelling */}
                <Route path="research-dev" element={<ResearchAndDevelopment />} />
                <Route path="employee-benefit" element={<EmployeeAndBenefit />} /> {/* Fixed typo */}
                <Route path="foreign-transaction" element={<ForiegnTransection />} />
            </Route>
        </Routes>
    );
};

export default AllForms;
