import User from '../models/User.js';
import nodemailer from 'nodemailer';
import sendgridTransport from 'nodemailer-sendgrid-transport';


import dotenv from 'dotenv';
dotenv.config();

///SENDGRID SETUP////
const transporter= nodemailer.createTransport(
  sendgridTransport({
    auth:{
      api_key:process.env.SENDGRID
    }

  })
)


///SENDGRID SETUP////




//! Signup conrtoller
export const signup = async (req, res, next) => {


  try {
    const user = await User.create(req.body);



    ///////////////SENDGRID///////////////////
  transporter.sendMail({
    //to:'balazs.vago@digitalcareerinstitute.org', //req.body.email
    to:req.body.email,
    from: YOUR_EMAIL,
    subject: 'Signup succeeded',
    html: `<h1>Welcome to our page, ${req.body.name}!</h1>
          <br>
          <p>This is a record store, you are logged in, feel free to browse, and shop around!</p>
    `

  })
    /////////////////////////////////////////


    res.send('signup succeeded')
  } catch (error) {
    next(error);
  }
};

