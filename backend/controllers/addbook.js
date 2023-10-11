const User = require("../Models/books");


module.exports.Addbook = async (req, res,next) => {
    try {
      const {title,text } = req.body;
      const existingUser = await User.findOne({ title });
      if (existingUser) {
        return res.json({ message: "Book already exists" });
      }
      
      const book = await User.create({ title,text });
      
      
      res
        .status(201)
        .json({ message: "Book added succesfully", success: true,book});
      next();
    } catch (error) {
      console.error(error);
    }
  };