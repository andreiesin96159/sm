

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







window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {

        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
  });

});