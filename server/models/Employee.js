const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    email: String,
    password: String
});

const EmployeeModel = mongoose.model("employee", EmployeeSchema, "register");
module.exports = EmployeeModel;