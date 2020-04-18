// JavaScript Document

let main = document.querySelector('main');
let submitButton = document.querySelectorAll('input[type=button]')[0];
let body = document.querySelector('body');


submitButton.addEventListener('click', function() {
  let input = document.querySelectorAll('input[type=text]')[0];
  let personName = input.value;
  let para = document.createElement('p');
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>';
  main.appendChild(para);
  body.setAttribute('class', 'meow');
  console.log('=^..^=');
});
