

var navMain = document.querySelector('.navigation-list');
var navToggle = document.querySelector('.navigation__toggle');
var navHeader = document.querySelector('.header');
var navToggleClose = document.querySelector('.navigation-button--mobile');
var description = document.querySelector('.description');


navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('navigation-list--close')) {
        navMain.classList.remove('navigation-list--close');
        description.classList.add('description--none');
        navMain.classList.add('navigation-list--active');

    } else {
        navMain.classList.add('navigation-list--close');
        navMain.classList.remove('navigation-list--active');

    }
});

navToggleClose.addEventListener('click', function () {
    if (navMain.classList.contains('navigation-list--active')) {
        navMain.classList.add('navigation-list--close');
        navMain.classList.remove('navigation-list--active');
        description.classList.remove('description--none');
    }
})



var thanksActivait = document.querySelector('.thanks--activait-div');
var formButton = document.querySelector('.form__button');
var thanksActivaitContinue = document.querySelector('.thanks--activait--continue');

formButton.addEventListener('click', function (event) {
        event.preventDefault();

    if (thanksActivait.classList.contains('thanks--activait--hidden')) {
        thanksActivait.classList.remove('thanks--activait--hidden')
    }
})

thanksActivaitContinue.addEventListener('click', function () {
    if (!thanksActivait.classList.contains('thanks--activait--hidden')) {
        thanksActivait.classList.add('thanks--activait--hidden')
    }
});