const Student = require("../../model/students/Student")
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../../config/token/generateToken");

//-------------------------------------
//Register Student
//-------------------------------------

const studentRegisterCtrl = expressAsyncHandler(async (req, res) => {
    //Check if student Exist
    const studentExists = await Student.findOne({ email: req?.body?.email });
  
    if (studentExists) throw new Error("Student already exists");
    try {
      //Register student
      const student = await Student.create({
        firstName: req?.body?.firstName,
        lastName: req?.body?.lastName,
        email: req?.body?.email,
        password: req?.body?.password,
      });
      res.json(student);
    } catch (error) {
      res.json(error);
    }
  });
  
  //-------------------------------
  //Login Student
  //-------------------------------
  
  const loginStudentCtrl = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //check if student exists
    const studentFound = await Student.findOne({ email });
    //Check if password is match
    if (studentFound) {
      res.json({
        _id: studentFound?._id,
        firstName: studentFound?.firstName,
        lastName: studentFound?.lastName,
        email: studentFound?.email,
        token: generateToken(studentFound?._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Login Credentials");
    }
  });


  module.exports = { 
      studentRegisterCtrl,
      loginStudentCtrl,
  }