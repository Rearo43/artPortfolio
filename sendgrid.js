'use strict';

require('dotenv').config();

const sendG = require('@sendgrid/mail');
const API_KEY = process.env.API_KEY;

sendG.setApiKey(API_KEY);

const sendEmail = (person, email, subject, message) => {
  const msg = {
    to: 'rrobertscs@gmail.com',
    from: 'rrobertscs@gmail.com',
    subject: `Portfolio Message: ${subject}`,
    text: `Name: ${person} \n\n Email: ${email} \n\n Message: ${message}`,
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

module.exports.sendEmail = sendEmail;
