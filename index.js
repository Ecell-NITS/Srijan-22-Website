const express=require('express')
const app=express();
const port=process.env.PORT ||3000;
const path=require('path')
const mainRouter=require('./routes/index')

// const nodemailer=require('nodemailer')
// let transporter = nodemailer.createTransport({
//     service:"gmail",
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: 'adityaswa.adimithu@gmail.com', // generated ethereal user
//       pass: 'dhananjaykumar', // generated ethereal password
//     },
//   });


//   var mailOptions={
//     from: 'adityaswa.adimithu@gmail.com', // sender address
//     to: "prohelika@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     // html: "<b>Hello world?</b>", // html body
//   }
//   transporter.sendMail(mailOptions,(err,info)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Email sent to the user '+info.response);
//     }
//   });
const connectToMongo=require('./db')
connectToMongo();

app.use(express.static('public'));
app.use(express.urlencoded());
app.use("/",mainRouter)
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/public'))


app.listen(port,()=>{
    console.log(`app is listening at port ${port}`);
})