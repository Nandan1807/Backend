const express = require("express");
const router = express.Router();

router.get("/fooddata",(req,res)=>{
    try {
        res.send([global.food_items,global.food_catagory])
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
})

module.exports = router;