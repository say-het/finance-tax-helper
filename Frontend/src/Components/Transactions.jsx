import React, { useState } from "react";
import * as XLSX from "xlsx";

const TransactionHistory = ({ initialTransactions }) => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    purpose: "",
    paidTo: "",
    amount: "",
  });

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
      setNewTransaction({ date: "", purpose: "", paidTo: "", amount: "" });
    } else {
      alert("Please fill all the fields.");
    }
  };

  return (
    <div className="container mx-auto my-8 p-6 bg-white shadow-lg rounded-lg max-w-5xl text-black">
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-black mb-6 text-center">Transaction History</h2>

      {/* Transaction Table */}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <thead>
          <tr className="bg-[#3C3D37] text-[#ECDFCC] text-left">
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Purpose</th>
            <th className="px-6 py-3">Paid To</th>
            <th className="px-6 py-3">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="hover:bg-[#ECDFCC] border-b border-gray-300 transition duration-300">
              <td className="px-6 py-4">{transaction[0]}</td>
              <td className="px-6 py-4">{transaction[1]}</td>
              <td className="px-6 py-4">{transaction[2]}</td>
              <td className="px-6 py-4 text-right">{transaction[3].toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-[#3C3D37] text-black">
            <td colSpan="3" className="px-6 py-4 text-right font-bold">Total Amount:</td>
            <td className="px-6 py-4 text-right font-bold">{totalAmount.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>

      {/* Add New Transaction Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 text-black">Add New Transaction</h3>
        <form onSubmit={addTransaction} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="date"
            name="date"
            value={newTransaction.date}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#3C3D37] transition-all"
            placeholder="Date"
          />
          <input
            type="text"
            name="purpose"
            value={newTransaction.purpose}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#3C3D37] transition-all"
            placeholder="Purpose"
          />
          <input
            type="text"
            name="paidTo"
            value={newTransaction.paidTo}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#3C3D37] transition-all"
            placeholder="Paid To"
          />
          <input
            type="number"
            name="amount"
            value={newTransaction.amount}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#3C3D37] transition-all"
            placeholder="Amount"
          />
          <button
            type="submit"
            className="md:col-span-4 mt-4 bg-[#3C3D37] text-[#ECDFCC] font-bold px-4 py-2 rounded-lg hover:bg-[#ECDFCC] hover:text-[#3C3D37] transition-all"
          >
            Add Transaction
          </button>
        </form>
      </div>

      {/* Download Excel Button */}
      <div className="mt-4 text-center">
        <button
          onClick={downloadExcel}
          className="mt-4 bg-[#3C3D37] text-[#ECDFCC] font-bold px-6 py-3 rounded-lg hover:bg-[#ECDFCC] hover:text-[#3C3D37] transition-all"
        >
          Download Excel
        </button>
      </div>
    </div>
  );
};

export default TransactionHistory;
