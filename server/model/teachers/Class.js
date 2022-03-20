const mongoose = require("mongoose");

//Creating Class Schema

const classSchema = new mongoose.Schema(
    {
        Subject: {
          required: [true, "Subject is required"],
          type: String,
        },
        Subject_Code: {
          required: [true, "Subject Code is required"],
          type: String,
        }
        
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
const Class = mongoose.model("Class", classSchema);

module.exports = Class;
