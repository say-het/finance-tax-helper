import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ButtonWithImage = ({ onClick, imgSrc, text }) => {
    return (
        <button
            onClick={onClick}
            className="flex flex-col hover:bg-[#ebd4ad] items-center w-[45%] h-max p-6 bg-black bg-opacity-25 backdrop-blur-md border rounded-lg shadow-md hover:bg-opacity-70 transition transform hover:scale-105 focus:outline-none"
        >
            <img src={imgSrc} alt={text} className="w-96 h-80 mb-4 rounded-lg" />
            <span className="text-3xl font-bold text-black">{text}</span>
        </button>
    );
};

const DualButtonComponent = () => {
    const navigate = useNavigate(); // Initialize navigate

    const goToFinancialAnalysis2 = () => {
        navigate('/financialanalysis2'); // Navigate to financialanalysis2
    };

    const goToFinancialAnalysis = () => {
        navigate('/financialanalysis'); // Navigate to financialanalysis
    };

    return (
        <div className="min-h-screen bg-[#ebd4ad] flex flex-col items-center justify-center">
            {/* Heading added at the top */}
            <h1 className="text-4xl font-bold text-black mb-12">
                Who Are You?
            </h1>

            <div className="flex justify-between w-full max-w-4xl">
                {/* Left Button with Image */}
                <ButtonWithImage
                    onClick={goToFinancialAnalysis2} // Left button navigates to financialanalysis2
                    imgSrc="https://www.pngitem.com/pimgs/m/54-548436_businessman-vector-characters-png-download-cartoon-business-man.png"
                    text="Businessman"
                />

                {/* Right Button with Different Image */}
                <ButtonWithImage
                    onClick={goToFinancialAnalysis} // Right button navigates to financialanalysis
                    imgSrc="https://img.freepik.com/premium-vector/bearded-office-worker-employee-sitting-chair-computer-desk-working-enthusiastically-background-cupboard-plant-scattered-papers-hardworking-man-typing-cartoon-illustration_189145-178.jpg"
                    text="Employee"
                />
            </div>
        </div>
    );
};

export default DualButtonComponent;
