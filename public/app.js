// 'use strict';

// let person = $('#person')[0];
// let email = $('#email')[0];
// let subject = $('#subject')[0];
// let message = $('#message')[0];

// var fields = {};

// document.addEventListener('DOMContentLoaded', () => {
//     person = person;
//     email = email;
//     subject = subject;
//     message = message;
//   },

//   function check(value) {
//     if(value == null || typeof value == 'undefined') return false;

//     return (value.length > 0);
//   },

//   function isEmail(email) {
//     let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

//     return regex.test(String(email).toLowerCase());
// },

// function fieldValidation(field, validationFunction) {
//     if (field == null) return false;
//     let isFieldValid = validationFunction(field.value);

//     if (!isFieldValid) {
//         field.className = 'placeholderRed';

//     } else {
//     field.className = '';
//  }

//  return isFieldValid;
// },

// class User {
//     constructor(person, email, subject, message) {
//         this.person = person;
//         this.email = email;
//         this.subject = subject;
//         this.message = message;
        
//     }
// },

// function sendContact() {
//     fie
// }

// const contactForm = document.querySelector('.contact-form');
// let name = $('#name')[0];
// let email = $('#email')[0];
// let subject = $('#subject')[0];
// let message = $('#message')[0];

// contactForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   let formData = {
//     name: name.value,
//     email: email.value,
//     subject: subject.value,
//     message: message.value,
//   };

//   let xhr = new XMLHttpRequest();
//   xhr.open('POST', '/contact');
//   xhr.setRequestHeader('content-type', 'application/json');
//   xhr.onload = function () {
//     console.log(xhr.responseText);
//     if (xhr.responseText == 'success') {
//       alert('Email Sent!');
//       name.value = '';
//       email.value = '';
//       subject.value = '';
//       message.value = '';
//     } else {
//       alert('Something went wrong!');
//     }
//   };
//   xhr.send(JSON.stringify(formData));
// });
