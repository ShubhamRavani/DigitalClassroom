const express = require("express")
const dotenv = require("dotenv");
dotenv.config();
const teacherRoutes = require("./routes/teachers/teachersRoute");
const studentRoutes = require("./routes/students/studentsRoute");
const dbConnect = require("./config/db/dbConnect");
const { errorHandler, notFound } = require("./middlewares/error/errorHandler");

const app = express();

//DB
dbConnect();

//Middleware
app.use(express.json());

//Teachers route
app.use("/api/teachers", teacherRoutes);

//Students route
app.use("/api/students", studentRoutes);

//err handler
app.use(notFound);
app.use(errorHandler);

//server
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server is running ${PORT}`));

//4cDApzEO6Xhu0myO mongopass
