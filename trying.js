'use strict';

let sender = require('./sendgrid');

let person = 'Beth Roberts';
let email = 'jumpshot43ball@gmail.com';
let subject = 'Lets see';
let message = 'Hope this works';

sender.sendEmail(person, email, subject, message);
