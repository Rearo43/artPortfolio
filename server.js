'use strict';

require('dotenv').config();

const PORT = process.env.PORT || 3006;

const express = require('express');
const morgan = require('morgan');

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

app.post('/contactForm', contactForm);

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
  res.status(200).render('contact');
}

function contactForm(req, res) {
  let sender = require('./sendgrid');

  let person = req.body.person;
  let email = req.body.email;
  let subject = req.body.subject;
  let message = req.body.message;

  sender.sendEmail(person, email, subject, message);

  res.status(200).redirect('contact');
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
