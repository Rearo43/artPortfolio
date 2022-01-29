'use strict';

require('dotenv').config();

const sendG = require('@sendgrid/mail');
const API_KEY = process.env.API_KEY;

sendG.setApiKey(API_KEY);

// $('button').on('click', function() {
// let person = $('#person').val();
// let email = $('#email').val();
// let subject = $('#subject').val();
// let message = $('#message').val();

// let person = 'Beth Roberts';
// let email = 'jumpshot43ball@gmail.com';
// let subject = 'Trial TRY TWO!!!!@';
// let message = 'Trying to connect! TRY TWO!!!!@';

const sendEmail = (person, email, subject, message) => {
  const msg = {
    to: email,
    from: 'rrobertscs@gmail.com',
    subject: `Portfolio Message: ${subject}`,
    text: `Name: ${person} \n\n Message: ${message}`,
  };

  sendG
    .send(msg)
    .then((event) => {
      console.log('Email sent\n', msg, event);
    })
    .catch((error) => {
      console.error(error);
    });
};

// sendEmail(person, email, subject, message);

module.exports.sendEmail = sendEmail;
