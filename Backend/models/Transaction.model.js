const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
  email : {
    type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: /.+\@.+\..+/
  },
  totalAmount: {
    type: String,
    required: true,
    min: 0
  },
  date: {
    type: String,
    required: true
  },
  typeOfPurchase: {
    type: String,
    required: true,
  },
  PaidTo: {
    type: String,
    required: true
  }
});

const Purchase = mongoose.model('UserTransactionHistory', PurchaseSchema);

module.exports = Purchase;