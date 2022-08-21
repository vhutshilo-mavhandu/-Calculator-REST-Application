import express from "express";
const router = express.Router();
let x = 10;
let y = 2;



const data = {
  addition: x + y,
  subraction: x - y,
  multiplication: x * y,
  division: x/y
};

router.get("/", (req, res, next) => {
  try{
    res.status(200).send(data);
  } catch(e){
    console.log(e);
  } 

});

export default router;
