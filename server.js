'use strict';

require('dotenv').config();

const PORT = process.env.PORT || 3006;

const { info } = require('console');
const express = require('express');
const morgan = require('morgan');
const nodemailer = require('nodemailer');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', home);
// app.get('/about', about);
// app.get('/mediums', mediums);
app.get('/contact', contact);

app.post('/contact', contactForm);

app.use('*', routeNotFound);
app.use(bigError);

function home(req, res) {
  res
    .status(200)
    .render('index')
    .catch((err) => console.log(err));
}

// function about(req, res) {
//   res.render('pages/index').catch((err) => console.log(err));
// }

// function mediums(req, res) {
//   res.render('pages/index').catch((err) => console.log(err));
// }

function contact(req, res) {
  res
    .status(200)
    .render('contact')
}

function contactForm(req, res) {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: 'rrobertscs@gmail.com',
            clientId: 'process.env.CLIENT_ID',
            clientSecret: 'process.env.SECRET',
            refreshToken: ''
        })
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: 'rrobertscs@gmail.com',
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log(`Email sent: ${info.response}`);
      res.send('success');
    }
  });
}

//----------404 Error
function routeNotFound(req, res) {
  res.status(404).send('Route NOT Be Found!');
}

//----------All Errors minus 404
function bigError(error, res) {
  console.log(error);
  res.status(error).send('BROKEN!');
}

//----------Connect to PORT
app.listen(PORT, () => console.log(`WORKING!: ${PORT}`));
