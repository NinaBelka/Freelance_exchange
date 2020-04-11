document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const customer = document.getElementById('customer'),
    freelancer = document.getElementById('freelancer'),
    blockCustomer = document.getElementById('block-customer'),
    blockFreelancer = document.getElementById('block-freelancer'),
    blockChoice = document.getElementById('block-choice'),
    btnExit = document.getElementById('btn-exit'),
    formCustomer = document.getElementById('form-customer');


  customer.addEventListener('click', () => {
    blockChoice.style.display = 'none';
    blockCustomer.style.display = 'block';
    btnExit.style.display = 'block';
  });

  freelancer.addEventListener('click', () => {
    blockChoice.style.display = 'none';
    blockFreelancer.style.display = 'block';
    btnExit.style.display = 'block';
  });

  btnExit.addEventListener('click', () => {
    btnExit.style.display = 'none';
    blockFreelancer.style.display = 'none';
    blockCustomer.style.display = 'none';
    blockChoice.style.display = 'block';
  });

  formCustomer.addEventListener('submit', event => {
    event.preventDefault();

    const obj = {};

    for (const elem of formCustomer.elements) {
      if ((elem.tagName === 'INPUT' && elem.type !== 'radio') || (elem.type === 'radio' && elem.checked)) {
        obj[elem.name] = elem.value;
      }
    }
    console.log(obj);
    
  });


});