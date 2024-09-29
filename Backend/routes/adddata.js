const express = require("express");
const Individual = require("../models/Individual.model");
const Business = require("../models/Business.model"); 
const TransacationModel = require("../models/Transaction.model")

const router = express.Router();

// Add Individual Data
router.post("/addIndividualData", async (req, res) => {
    try {
        console.log("Adding individual details");
        const individualDetail = new Individual(req.body);
        await individualDetail.save();

        return res.status(200).json({ 
            message: 'Individual detail added successfully', 
            data: individualDetail, 
            status: 200 
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
});

// Add Organization Data
router.post("/addOrganizationData", async (req, res) => {
    try {
        console.log("Adding business details");
        const businessDetail = new Business(req.body);
        await businessDetail.save();

        return res.status(200).json({ 
            message: 'Business organization detail added successfully', 
            data: businessDetail, 
            status: 200 
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
});

router.post("/getIndividualTranscationDetail",
    async  (req,res) => {
        console.log("ys")
        console.log(req.body.email)
    let user = await TransacationModel.find().where({email : req.body.email});
    return res.json(user)
})

router.post("/addTransactionDetail",
    async (req,res) => {
        const transacationDetail = new TransacationModel(req.body);
        await transacationDetail.save();

        return res.status(201).json({ message: 'User organization detail added successfully', data: transacationDetail , status : 201 });
    }
)


module.exports = router;
