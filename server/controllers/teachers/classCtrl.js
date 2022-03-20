const Class = require("../../model/teachers/Class");
const Student = require("../../model/students/Student");
const expressAsyncHandler = require("express-async-handler");

//-----------------------------------
//  Document Upload
//-----------------------------------

const docUploadCtrl = expressAsyncHandler(async (req, res) => {
    console.log(req.file);
    res.json("PDF upload");
  });
  

//-----------------------------------
//  Document Upload
//-----------------------------------

const videoUploadCtrl = expressAsyncHandler(async (req, res) => {
    console.log(req.file);
    res.json("Video upload");
  });


//-----------------------------------
//  Get Students
//-----------------------------------
  
const getStudents = expressAsyncHandler(async (req, res) => {
    try{
      const allStudents = await Student.find();
      res.json(allStudents);
    } catch(error){
      res.json(error);
    }
});
  
//-----------------------------------
//  Create Class
//-----------------------------------
  
// const createClass = expressAsyncHandler(async (req, res) => {
//     const Class = req.body;
//     const newClass = new courses(Class);
  
//     try {
//       await newClass.save();
//       res.json(newClass);
//     } catch (error) {
//       res.json(error);
//     }
// });

const createClass = expressAsyncHandler(async (req, res) => {
    try {
        // Create class
        const newClass = await Class.create({
          Subject: req?.body?.Subject,
          Subject_Code: req?.body?.Subject_Code,
        });
        res.json(newClass);
      } catch (error) {
        res.json(error);
      }
});
  module.exports = { 
    docUploadCtrl, 
    videoUploadCtrl,   
    createClass,
    getStudents,

}
