'use strict';

const contactForm = document.querySelector('.contact-form');
let name = $('#name')[0];
let email = $('#email')[0];
let subject = $('#subject')[0];
let message = $('#message')[0];

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/contact');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == 'success') {
      alert('Email Sent!');
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
    } else {
      alert('Something went wrong!');
    }
  };
  xhr.send(JSON.stringify(formData));
});
