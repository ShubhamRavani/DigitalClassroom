const express = require("express");

const {
    studentRegisterCtrl,
    loginStudentCtrl,

} = require("../../controllers/students/studentCtrl");

const studentRoutes = express.Router();

studentRoutes.post("/register", studentRegisterCtrl);
studentRoutes.post("/login", loginStudentCtrl);

module.exports = studentRoutes;
