'use strict'

const express = require('express');
//const createError = require('http-errors');

const router = express.Router();
//const bcrypt = require('bcrypt');

const User = require('../models/User');

router.get('/users', async (req,res,next) => {
  try{
    const users = await User.find();
    console.log(users)
    res.status(200).json({users}); //código de error
  }catch(error){
    next(error);
  }
});


module.exports = router;
