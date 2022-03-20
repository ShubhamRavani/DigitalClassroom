const multer = require("multer");
const path = require("path");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `/videos//admin-${file.fieldname}-${Date.now()}.${ext}`);
  },
});


//file type checking
const multerFilter = (req, file, cb) => {
  //check file type
  if (file.mimetype.split("/")[1] === "mp4") {
    cb(null, true);
  } else {
    cb(new Error("Not a Video File!!"), false);
  }
};

const videoUpload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});


const videoCheck = async (req, res, next) => {
  //check if there is no file
  if (!req.file) return next();
  req.file.filename = `user-${Date.now()}-${req.file.originalname}`;

  next();
};

module.exports = {  
    videoUpload,
    videoCheck,
 };
