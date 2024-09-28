const express = require("express");
const Individual = require("../models/Individual.model")

const router = express.Router();


// getId By Mail
router.post("/getIndividualdetail",
    async  (req,res) => {
    let user = await Individual.find().where({email : req.body.email});
    return res.json(user)
})

module.exports =  router;