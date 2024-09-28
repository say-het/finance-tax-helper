const mongoose = require("mongoose");

const IndividualSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: /.+\@.+\..+/, 
    },
  generalInfo: {
    name: { type: String, required: true },
    panNumber: { type: String, required: true, unique: true },
    state: { type: String, required: true },
    city: { type: String, required: true }
  },
  income: {
    salary: { type: Number, default: 0 },
    bonuses: { type: Number, default: 0 },
    HRallowances: { type: Number, default: 0 },
    petrolAllowance: { type: Number, default: 0 },
    profitSharing: { type: Number, default: 0 },
    stockOptions: { type: Number, default: 0 }
  },
  expenses: {
    childrenEducation: { type: Number, default: 0 },
    householdRent: { type: Number, default: 0 },
    transportationExpenses: { type: Number, default: 0 },
    medicalExpenses: { type: Number, default: 0 },
    insurancePremiums: { type: Number, default: 0 },
    debtRepayments: { type: Number, default: 0 }
  },
  investments: {
    EPF: { type: Number, default: 0 },
    PPF: { type: Number, default: 0 },
    stocks: { type: Number, default: 0 },
    mutualFunds: { type: Number, default: 0 },
    realEstate: { type: Number, default: 0 },
    fixedDeposits: { type: Number, default: 0 },
    NPS: { type: Number, default: 0 }
  }
});

const Individual = mongoose.model("UserIndividualDetail", IndividualSchema);

module.exports = Individual;