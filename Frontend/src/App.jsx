import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ChatPanel from "./Components/ChatPanel";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import OCR from "./Components/Ocr";
import GetStarted from "./GetStarted";
import Home from "./Components/Home";
import MultiStepForm from "./Components/MultiStepForm";
import MultiStepForm2 from "./Components/MultiStepForm2";
import Dashboard from "./Components/Dashboard/Page/Dashboard";
import TransactionHistory from "./Components/Transactions";
import SeeTransaction from "./Components/seeTransaction";


import './App.css'
export default function App() {
  return (
    // <AuthContextCheckState>
    <Router>
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/financialanalysis/*" element={<MultiStepForm />} /> Updated to handle nested paths
            <Route path="/financialanalysis2/*" element={<MultiStepForm2 />} /> Updated to handle nested paths
            <Route path="/taxbot" element={<ChatPanel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/ocr-ai" element={<OCR />} />
            <Route path="/profile" element={<Dashboard />} />
            <Route path="/transactions" element={< TransactionHistory/>} />
            <Route path="/seetransations" element={<SeeTransaction/>}/>
            <Route path="/get-started" element={<GetStarted/>}/>
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
    // /</AuthContextCheckState>
  );
}
