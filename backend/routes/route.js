const express = require("express");
const router = express.Router();
const { createBill, getBills } = require('../controllers/billscontrollers')
//we dont have app here like in server js so we use router to definds routes
router.get("/", getBills);
router.post("/", createBill);
module.exports = router;
