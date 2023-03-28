
const Bill = require('../models/bills')
const mongoose = require('mongoose')
//get all bills
const getBills = async (req, res) => {
  const bills = await Bill.find({}).sort({ createdAt: 1 })
  
  res.status(200).json(bills)
}
//get one bill

//create new bill

const createBill = async (req, res) => {
  const { client, details, amount, type, counter} = req.body;
  try {
    const bill = await Bill.create({ client, details, amount, type, counter});
    res.status(200).json(bill);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  createBill,
  getBills,
};
