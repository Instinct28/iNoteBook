const {Router} = require('express');
const user = require('../models/user');
const { body, validationResult } = require('express-validator');


const router = Router();

router.post("/", [body('name').isLength({min : 3}), body('email').isEmail(), body('password').isLength({min : 4})], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }
    const body = req.body;
    const User = await user.create(body);
    res.status(201).json(User);
});

module.exports = router;