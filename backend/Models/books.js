
const mongoose = require("mongoose");

const addbookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, "title required"],
      unique: true,
    },
    text: {
      type: String,
      required: [true, "author required"],
    }
   
   
  });


  module.exports = mongoose.model("books", addbookSchema);