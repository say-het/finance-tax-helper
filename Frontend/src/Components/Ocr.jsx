import React, { useEffect, useState } from "react";
import Gemini from "gemini-ai";
import { GoogleGenerativeAI } from "@google/generative-ai";

const OCR = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [responseData, setResponseData] = useState("");
    const [parsedResponse, setParsedResponse] = useState([]);

    const genAI = new GoogleGenerativeAI(
        "AIzaSyBVtbZmBLweYkN5Nd0CaXK7bmxfNgKaBNE"
    ); // Keep your API key secure in environment variables.
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const fileToGenerativePart = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64data = reader.result.split(",")[1];
                resolve({
                    inlineData: {
                        data: base64data,
                        mimeType: file.type,
                    },
                });
            };
            reader.onerror = (error) => reject(error);
            reader.readAsDataURL(file);
        });
    };

    const analyzeImageFile = async () => {
        if (imageFile) {
            try {
                const imagePart = await fileToGenerativePart(imageFile);
                const billData = "Date!!!!!Purpose!!!!!Paid To!!!!!Amount"; // Replace this with the actual bill data
                const prompt = ` Analyze the following bill and provide only the details the total amount, date, type of purchase, and the vendor. Here is the sample you need to give responce in this specific format strictly: ${billData}.`;
                const result = await model.generateContent([prompt, imagePart]);
                const resultString = result.response.text();

                const resultParts = resultString.split("!!!!!");
                setResponseData(resultString);
                console.log(resultParts);

                const addTransactionDetail = await fetch("http://localhost:7000/api/add/addTransactionDetail", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: "user@example.com",
                        date: resultParts[0],
                        typeOfPurchase: resultParts[1],
                        PaidTo: resultParts[2],
                        totalAmount: resultParts[3],
                    }),
                });

                const json = await addTransactionDetail.json();
                console.log(json);

                setParsedResponse(resultParts);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    };

    useEffect(() => {
        if (imageFile) {
            analyzeImageFile();
        }
    }, [imageFile]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageFile(file);
                const imageUrl = URL.createObjectURL(file);
                setSelectedImage(imageUrl);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row h-screen bg-[#FDF5E6] p-6">
            {/* Left Side for Response */}
            <div className="lg:w-1/2 flex flex-col justify-center items-center text-center bg-white shadow-lg rounded-lg p-10 m-4">
                <h2 className="text-3xl font-extrabold text-black mb-6">Response</h2>
                <div className="w-full max-w-md p-4 bg-[#e0f7fa] border border-blue-400 rounded-lg shadow-md">
                    <div className="text-black">
                        {parsedResponse.length > 0 ? (
                            <ul>
                                {parsedResponse.map((part, index) => (
                                    <li key={index} className="mb-1">
                                        {part}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Enter The Document to Analyse</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Right Side for Image Upload */}
            <div className="lg:w-1/2 flex flex-col justify-center items-center text-center bg-white shadow-lg rounded-lg p-10 m-4">
                <h2 className="text-3xl font-extrabold text-black mb-6">
                    Enter Image for AI OCR <br /> Automatic Tax Analysis
                </h2>
                <p className="text-black text-lg mb-4">
                    Upload your tax document and let our AI extract the data effortlessly.
                </p>
                <div className="w-full max-w-xs h-64 flex items-center justify-center bg-gray-100 border-2 border-dashed border-blue-400 rounded-lg mb-6 shadow-inner">
                    {selectedImage ? (
                        <img
                            src={selectedImage}
                            alt="Uploaded"
                            className="h-full object-contain rounded-lg"
                        />
                    ) : (
                        <span className="text-black">No Image Selected</span>
                    )}
                </div>
                <label className="block w-full">
                    <span className="sr-only">Choose File</span>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-400 file:text-white hover:file:bg-blue-500 cursor-pointer"
                    />
                </label>
            </div>
        </div>
    );
};

export default OCR;



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// import React, { useEffect, useState } from "react";
// import Gemini from "gemini-ai";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const TaxAnalysisComponent = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [imageFile, setImageFile] = useState(null);
//   const [responseData, setResponseData] = useState(""); // State to hold API response

//   const genAI = new GoogleGenerativeAI(
//     "AIzaSyBVtbZmBLweYkN5Nd0CaXK7bmxfNgKaBNE"
//   ); // Keep your API key secure in environment variables.
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//   const fileToGenerativePart = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const base64data = reader.result.split(",")[1]; // Get the base64 part
//         resolve({
//           inlineData: {
//             data: base64data,
//             mimeType: file.type,
//           },
//         });
//       };
//       reader.onerror = (error) => reject(error);
//       reader.readAsDataURL(file); // Read the file as a Data URL
//     });
//   };

//   const prompt = "Analyse this bill and tell me what is the total amount, date, type of purchase and from where in table form.";

//   useEffect(() => {
//     const fetch = async () => {
//       if (imageFile) {
//         try {
//           const imagePart = await fileToGenerativePart(imageFile); // Convert image file to base64
//           const result = await model.generateContent([prompt, imagePart]);
//           setResponseData(result.response.text()); // Update the state with the generated response
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         }
//       }
//     };
//     fetch();
//   }, [imageFile]); // Run effect when imageFile changes

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImageFile(file); // Set the image file
//       const imageUrl = URL.createObjectURL(file);
//       setSelectedImage(imageUrl);
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row h-screen bg-[#FDF5E6] p-6">
//       {/* Left Side for Response */}
//       <div className="lg:w-1/2 flex flex-col justify-center items-center text-center bg-white shadow-lg rounded-lg p-10 m-4">
//         <h2 className="text-3xl font-extrabold text-black mb-6">Response</h2>
//         <div className="w-full max-w-md p-4 bg-[#e0f7fa] border border-blue-400 rounded-lg shadow-md">
//           <h3 className="font-bold text-xl mb-2">{responseData || ""}</h3>
//           <pre className="text-black">{responseData || "Enter The Document to Analyse"}</pre>
//         </div>
//       </div>

//       {/* Right Side for Image Upload */}
//       <div className="lg:w-1/2 flex flex-col justify-center items-center text-center bg-white shadow-lg rounded-lg p-10 m-4">
//         <h2 className="text-3xl font-extrabold text-black mb-6">
//           Enter Image for AI OCR <br /> Automatic Tax Analysis
//         </h2>
//         <p className="text-black text-lg mb-4">
//           Upload your tax document and let our AI extract the data effortlessly.
//         </p>
//         <div className="w-full max-w-xs h-64 flex items-center justify-center bg-gray-100 border-2 border-dashed border-blue-400 rounded-lg mb-6 shadow-inner">
//           {selectedImage ? (
//             <img src={selectedImage} alt="Uploaded" className="h-full object-contain rounded-lg" />
//           ) : (
//             <span className="text-black">No Image Selected</span>
//           )}
//         </div>
//         <label className="block w-full">
//           <span className="sr-only">Choose File</span>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleFileChange}
//             className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-400 file:text-white hover:file:bg-blue-500 cursor-pointer"
//           />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default TaxAnalysisComponent;
