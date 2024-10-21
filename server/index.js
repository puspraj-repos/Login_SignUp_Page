const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee.js");
const {
  REGISTRATION_SUCCESS,
  USER_EXISTED,
  RECORD_NOT_FOUND,
  INCORRECT_PASSWORD,
  LOGIN_SUCCESS,
  SERVER_RUNING,
  EMAIL_CRITERIA_NOT_MEET,
  PASSWORD_CRITERIA_NOT_MEET,
} = require("./constants/string.js");
const { DEFAULT_SUCCESS, DEFAULT_ERROR } = require("./constants/codes.js");
const {
  validateEmail,
  validatePassword,
} = require("./utility/commonFunction.js");

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
          statusCode: DEFAULT_SUCCESS,
          desc: LOGIN_SUCCESS,
        });
      } else {
        res.json({
          statusCode: DEFAULT_ERROR,
          desc: INCORRECT_PASSWORD,
        });
      }
    } else {
      res.json({
        statusCode: DEFAULT_ERROR,
        desc: RECORD_NOT_FOUND,
      });
    }
  });
});

app.post("/register", (req, res) => {
  const { email, password } = req.body;

  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);

  if (emailValidation) {
    return res.json({
      statusCode: DEFAULT_ERROR,
      desc: EMAIL_CRITERIA_NOT_MEET,
    });
  }

  if (
    !passwordValidation.hasUpperCase ||
    !passwordValidation.hasNumber ||
    !passwordValidation.hasSpecialChar ||
    !passwordValidation.hasMinLength
  ) {
    return res.json({
      statusCode: DEFAULT_ERROR,
      desc: PASSWORD_CRITERIA_NOT_MEET,
    });
  }
  EmployeeModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.json({
          statusCode: DEFAULT_ERROR,
          desc: USER_EXISTED,
        });
      } else {
        EmployeeModel.create(req.body)
          .then(() =>
            res.json({
              statusCode: DEFAULT_SUCCESS,
              desc: REGISTRATION_SUCCESS,
            })
          )
          .catch((err) => res.json(err));
      }
    })
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log(SERVER_RUNING);
});
