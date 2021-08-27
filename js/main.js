
//Navigation close-open

let burger = document.querySelector('.header__burger');
let navBlock = document.querySelector('.navigation__list');

burger.addEventListener("click", function(evt){
  evt.preventDefault();
  if(burger.classList.contains('close--burger')){
   burger.classList.remove('close--burger');
   navBlock.classList.remove('nav--close');
  }else{
    burger.classList.add('close--burger');
    navBlock.classList.add('nav--close');
  }
});




