const mongoose = require("mongoose");

//Creating Student Schema

const studentSchema = new mongoose.Schema(
    {
        firstName: {
          required: [true, "First name is required"],
          type: String,
        },
        lastName: {
          required: [true, "Last name is required"],
          type: String,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
    },
    {
      toJSON: {
        virtuals: true,
      },
      toObject: {
        virtuals: true,
      },
      timestamps: true,
    }
);

//Compile schema into model
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;