const Teacher = require("../../model/teachers/Teacher");
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../../config/token/generateToken");

//-------------------------------------
//Register Teacher
//-------------------------------------

const teacherRegisterCtrl = expressAsyncHandler(async (req, res) => {
    //Check if teacher Exist
    const teacherExists = await Teacher.findOne({ email: req?.body?.email });
  
    if (teacherExists) throw new Error("Teacher already exists");
    try {
      //Register teacher
      const teacher = await Teacher.create({
        firstName: req?.body?.firstName,
        lastName: req?.body?.lastName,
        email: req?.body?.email,
        password: req?.body?.password,
      });
      res.json(teacher);
    } catch (error) {
      res.json(error);
    }
  });
  
  //-------------------------------
  //Login Teacher
  //-------------------------------
  
  const loginTeacherCtrl = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //check if teacher exists
    const teacherFound = await Teacher.findOne({ email });
    //Check if password is match
    if (teacherFound) {
      res.json({
        _id: teacherFound?._id,
        firstName: teacherFound?.firstName,
        lastName: teacherFound?.lastName,
        email: teacherFound?.email,
        token: generateToken(teacherFound?._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Login Credentials");
    }
  });



  module.exports = {
      teacherRegisterCtrl,
      loginTeacherCtrl, 

  }

