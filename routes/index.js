const express=require('express')
const router=express.Router();
const nodemailer=require('nodemailer')
const User=require('../models/registerInfo');

router.get('/',(req,res)=>{
    // res.send('hello!! this is express from node js')
    const params={'title':'home'}
    res.render('index',params);
});
router.post('/',async(req,res)=>{
    // const {fname,lname,gender,dob,email,cnumber}=req.body;
    try{
        const exist=await User.exists({email:req.body.email});
        if(exist){
            res.render('error')
        }
    }catch(err){
        res.json({message:"internal server error"})
    }
    
let transporter = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'adityaswa.adimithu@gmail.com', // generated ethereal user
      pass: 'dhananjaykumar', // generated ethereal password
    },
  });


  var mailOptions={
    from: 'adityaswa.adimithu@gmail.com', // sender address
    to: req.body.email, // list of receivers
    subject: `Thanks for registering ${req.body.fname}` , // Subject line
    text: `Hey ${req.body.fname} `, // plain text body
    html: "<b>Thank you for registering in our event</b>", // html body
  }
//   await transporter.sendMail(mailOptions,(err,info)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Email sent to the user '+info.response);
//     }
//   });
    const user=new User({
        ...req.body
    })
    const result=await user.save();
    // res.send("data saved successfully");
    res.render('index');
})
router.get('/error',(req,res)=>{
    // res.send('hello!! this is express from node js')
    const params={'title':'gallery'}
    res.render('error',params)
});
router.get('/Ecell-Teams',(req,res)=>{
    // res.send('hello!! this is express from node js')
    const params={'title':'contact'}
    res.render('our-team',params)
});
router.get('/getallinfo',async(req,res)=>{
    // res.send('hello!! this is express from node js')
    const params={'title':'contact'}
    users=await User.find({})
    // res.render('our-team',params)
    res.json(users);
});

module.exports=router;