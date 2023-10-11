

const {Addbook} =require("../controllers/addbook");
const {Viewbook} =require("../controllers/viewbook");
const {Deletebook} =require("../controllers/deletebook");
const {Updatebook} =require("../controllers/updatebook");
const {Getbook} =require("../controllers/getbook");
const router=require('express').Router();

router.post("/addbook", Addbook);
router.get("/book",Viewbook);
router.delete("/book/:id",Deletebook);
router.get("/book/:id",Getbook);
router.put("/book/:id",Updatebook);



module.exports = router;