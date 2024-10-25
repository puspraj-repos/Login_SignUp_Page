const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    email: String,
    password: String
});

const EmployeeModel = mongoose.model("Users", EmployeeSchema, "users");
module.exports = EmployeeModel;