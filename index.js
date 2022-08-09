

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