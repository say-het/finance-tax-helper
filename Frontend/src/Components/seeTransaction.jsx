import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

const SeeTransaction = () => {
    const [transactions, setTransactions] = useState([]);
    const [newTransaction, setNewTransaction] = useState({
        date: "",
        purpose: "",
        paidTo: "",
        amount: "",
    });

    const addToTableAndMongo = async () => {
        let response = await fetch("http://localhost:7000/api/add/addTransactionDetail",{
            method : "POST",
            headers : {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({ 
                email: "user@example.com" ,
                date : newTransaction.date,
                typeOfPurchase : newTransaction.purpose,
                PaidTo : newTransaction.paidTo,
                totalAmount : newTransaction.amount
            })
        })
        let data  = await response.json();
        console.log(data)
    }

    useEffect(() => {
        
        const email = localStorage.getItem("userEmail");
        const fetchTransactions = async () => {
            try {
                const response = await fetch("http://localhost:7000/api/add/getIndividualTranscationDetail", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: email })
                });
                const data = await response.json();
                console.log(data)
                const formattedData = data.map((transaction) => [
                    transaction.date,
                    transaction.typeOfPurchase,
                    transaction.PaidTo,
                    parseFloat(transaction.totalAmount),
                ]);
                setTransactions(formattedData);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        };

        fetchTransactions();
    }, []);

    const totalAmount = transactions.reduce(
        (sum, transaction) => sum + transaction[3],
        0
    );

    const downloadExcel = () => {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet([
            ["Date", "Purpose", "Paid To", "Amount"],
            ...transactions,
            ["Total Amount", "", "", totalAmount],
        ]);
        XLSX.utils.book_append_sheet(wb, ws, "Transactions");
        XLSX.writeFile(wb, "transaction_history.xlsx");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTransaction({ ...newTransaction, [name]: value });
    };

    const addTransaction = (e) => {
        e.preventDefault();
        if (
            newTransaction.date &&
            newTransaction.purpose &&
            newTransaction.paidTo &&
            newTransaction.amount
        ) {
            const amount = parseFloat(newTransaction.amount);
            console.log(amount)
            const updatedTransactions = [
                ...transactions,
                [
                    newTransaction.date,
                    newTransaction.purpose,
                    newTransaction.paidTo,
                    amount,
                ],
            ];
            setTransactions(updatedTransactions);
            setNewTransaction({ date: newTransaction.date, purpose: newTransaction.purpose, paidTo:newTransaction.paidTo, amount: newTransaction.amount });
        } else {
            alert("Please fill all the fields.");
        }
        addToTableAndMongo();
    };

    return (
        <div className="container mx-auto my-4">
            <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-[#3C3D37] text-[#ECDFCC]">
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Purpose</th>
                        <th className="px-4 py-2">Paid To</th>
                        <th className="px-4 py-2">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index} className="bg-[#ECDFCC] border-b border-gray-300">
                            <td className="px-4 py-2">{transaction[0]}</td>
                            <td className="px-4 py-2">{transaction[1]}</td>
                            <td className="px-4 py-2">{transaction[2]}</td>
                            <td className="px-4 py-2">{transaction[3].toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr className="bg-[#3C3D37] text-[#ECDFCC] font-bold">
                        <td colSpan="3" className="px-4 py-2 text-right">
                            Total Amount:
                        </td>
                        <td className="px-4 py-2">{totalAmount.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>

            <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Add New Transaction</h3>
                <form
                    onSubmit={addTransaction}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4"
                >
                    <input
                        type="date"
                        name="date"
                        value={newTransaction.date}
                        onChange={handleChange}
                        className="border px-4 py-2 bg-[#ECDFCC]"
                        placeholder="Date"
                    />
                    <input
                        type="text"
                        name="purpose"
                        value={newTransaction.purpose}
                        onChange={handleChange}
                        className="border px-4 py-2 bg-[#ECDFCC]"
                        placeholder="Purpose"
                    />
                    <input
                        type="text"
                        name="paidTo"
                        value={newTransaction.paidTo}
                        onChange={handleChange}
                        className="border px-4 py-2 bg-[#ECDFCC]"
                        placeholder="Paid To"
                    />
                    <input
                        type="text"
                        name="amount"
                        value={newTransaction.amount}
                        onChange={handleChange}
                        className="border px-4 py-2 bg-[#ECDFCC]"
                        placeholder="Amount"
                    />
                    <button
                        type="submit"
                        className="md:col-span-4 mt-4 bg-[#3C3D37] text-[#ECDFCC] font-bold px-4 py-2 rounded hover:bg-[#ECDFCC] hover:text-[#3C3D37] transition-all"
                        onClick={addTransaction}
                    >
                        Add Transaction
                    </button>
                </form>
            </div>

            <button
                onClick={downloadExcel}
                className="md:col-span-4 mt-4 bg-[#3C3D37] text-[#ECDFCC] font-bold px-4 py-2 rounded hover:bg-[#ECDFCC] hover:text-[#3C3D37] transition-all"
            >
                Download Excel
            </button>
        </div>
    );
};

export default SeeTransaction;
// seeTransaction