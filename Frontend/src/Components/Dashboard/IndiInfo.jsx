import React from 'react'
import { useState } from "react";
import { Outlet } from "react-router-dom";

const IndiInfo = () => {
    const [formData, setFormData] = useState({
      paidTo: "",
      amountPaid: "",
      date: "",
      typeofproduct: "",
    });
    
    const updateFormData = (newData) => {
      setFormData((prevData) => ({
        ...prevData,
        ...newData,
      }));
    };
  console.log(formData);
  return (
    <div>
      <Outlet context={{ formData, updateFormData }} />
    </div>
  );
}

export default IndiInfo
