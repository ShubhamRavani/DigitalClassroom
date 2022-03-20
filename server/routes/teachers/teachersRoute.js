const express = require("express");

//Teacher Routes
const {
    teacherRegisterCtrl,
    loginTeacherCtrl,

} = require("../../controllers/teachers/teacherCtrl");


//Document Routes
const {
    docCheck,
    docUpload,
  } = require("../../middlewares/uploads/docUpload");

//Video Route
const {
  videoUpload,
  videoCheck,
} = require("../../middlewares/uploads/videoUpload");

//Class Route
const {
  docUploadCtrl,
  videoUploadCtrl,
  createClass,
  getStudents,
} = require("../../controllers/teachers/classCtrl");
 

const teacherRoutes = express.Router();

teacherRoutes.post("/register", teacherRegisterCtrl);
teacherRoutes.post("/login", loginTeacherCtrl);
teacherRoutes.get("/student", getStudents);
teacherRoutes.post("/class", createClass);
teacherRoutes.put(
    "/doc-upload",
    docUpload.single("document"),
    docCheck,
    docUploadCtrl
  );
teacherRoutes.put(
    "/video-upload",
    videoUpload.single("video"),
    videoCheck,
    videoUploadCtrl
  );

module.exports = teacherRoutes;
