//Comparison JS section cat, range and numbers
let range = document.getElementById('range');
let price = document.getElementById('price');
let weight = document.getElementById('weight');
let time = document.getElementById('time');
let solid = document.querySelector('.range-solid');
let thumbDot = document.querySelector('.range-thumb-dot');
let thumb = document.querySelector('.range-thumb')
let cat = document.querySelector('.fat-cat__overflow-box');
let buttonWas = document.querySelector('.comparison__text--itwas');
let buttonGot = document.querySelector('.comparison__text--gotbetter');

let priceValue = price.value;
let numberPrice = parseInt(priceValue.replace(/[^\d]/g, ''));

let weightValue = weight.value;
let numberWeight = parseInt(weightValue.replace(/[^\d]/g, ''));

let timeValue = time.value;
let numberTime = parseInt(timeValue.replace(/[^\d]/g, ''));

buttonWas.addEventListener("click", function(evt){
  evt.preventDefault();
  weight.value = 0 + ' КГ';
  price.value = 0 + ' РУБ.';
  time.value = 0 + ' ДНЕЙ';
  solid.style.width = 0 + "%";
  cat.style.width = 100 + "%";
  thumb.style.left = 0 + "%";

  console.log('hi,bro im fat');
});

buttonGot.addEventListener("click", function(evt){
  evt.preventDefault();
  weight.value = numberWeight + ' КГ';
  price.value = numberPrice + ' РУБ.';
  time.value = numberTime  + ' ДНЕЙ';
  solid.style.width = 86.9 + "%";
  cat.style.width = 0 + "%";
  thumb.style.left = 94 + "%";

  console.log('hi,bro im supercat');
});

weight.value = Math.round(numberWeight/100 * range.value) + ' КГ';
price.value = Math.round(numberPrice/100 * range.value) + ' РУБ.';
time.value = Math.round(numberTime/100 * range.value) + ' ДНЕЙ';


range.oninput = function () {
  price.value = Math.round(numberPrice/100 * this.value) + ' РУБ.';
  weight.value = Math.round(numberWeight/100 * this.value) + ' КГ';
  time.value = Math.round(numberTime/100 * this.value) + ' ДНЕЙ';
  solid.style.width = Math.round(86.9/100 * this.value) + "%";
  thumb.style.left = Math.round(94/100 * this.value) + "%";

  cat.style.width = 100 - this.value + "%";
}

//End Comparison section JS
