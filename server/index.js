const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee.js");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({
          statusCode: "2222",
          desc: "Login success",
        });
      } else {
        res.json({
          statusCode: "4444",
          desc: "Password is incorrect",
        });
      }
    } else {
      res.json({
        statusCode: "4444",
        desc: "No record found",
      });
    }
  });
});

app.post("/register", (req, res) => {
  const { email } = req.body;
  EmployeeModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.json({
          statusCode: "4444",
          desc: "User already existed",
        });
      } else {
          EmployeeModel.create(req.body)
            .then(() =>
              res.json({
                statusCode: "2222",
                desc: "Registeration success",
              })
            )
            .catch((err) => res.json(err));
      }
    })
    .catch((err) => res.json(err));;
});

app.listen(3001, () => {
  console.log("Server is running......");
});
