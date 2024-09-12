const {Router} = require('express');
const user = require('../models/user');
// const { body, validationResult } = require('express-validator');


const router = Router();

router.get("/", async (req,res)=>{
    const User = await user.find();
    res.status(200).json(User);
});

router.post("/signup", async(req, res)=>{
    const body = req.body;
    console.log(body);
    if(!body || !body.name || !body.email || !body.password){
        return res.status(400).json({"Error" : "All fields are mandatory"});
    }
    let User = await user.find({"email" : body.email});
    console.log(User);
    if(User.length !== 0){
        return res.status(400).json({"Error" : "User already exits with thi email"});
    }
    User = await user.create(body);
    res.status(201).json(User);
});

// router.post("/", [body('name').isLength({min : 3}), body('email').isEmail(), body('password').isLength({min : 4})], async (req, res) => {
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         return res.status(400).json({errors : errors.array()});
//     }
//     const body = req.body;
//     const User = await user.create(body);
//     res.status(201).json(User);
// });

module.exports = router;