import './style.scss'
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import "./node_modules/waypoints/lib/noframework.waypoints.min.js";

var options = {
  strings: ['Food.....', 'Drink.....'],
  typeSpeed: 70,
  backSpeed: 70,
  loop:true,
  backDelay: 1000
};

var typed = new Typed('.element', options);

let slideUp = {
    distance: '50px',
    origin: 'top',
    duration: 1000,
    
};

ScrollReveal().reveal('.slide-up', slideUp);

let toright = {
    distance: '50px',
    origin: 'left',
    duration: 1000,
    
};

ScrollReveal().reveal('.toright', toright);

let toleft = {
    distance: '50px',
    origin: 'right',
    duration: 1000,
    
};

ScrollReveal().reveal('.toleft', toleft);

let todown = {
  distance: '50px',
  origin: 'down',
  duration: 1000,
  
};

ScrollReveal().reveal('.todown', todown);




var waypoint = new Waypoint({
  element: document.getElementById('home-contast'),
  handler: function(direction) {
      let oldlink = document.querySelector(".nav-link.active");
        if(oldlink != null){
            oldlink.classList.remove("active")
        }
      let currentlink = document.querySelector(`[href="#home"]`);
      currentlink.classList.add("active")
  },
  offset: "10%"
})


let sections = ["about","services","menu","Contast"]
sections.forEach(function(el){
    console.log(el)
    new Waypoint({
      element: document.getElementById(el),
      handler: function(direction) {
              let oldlink = document.querySelector(".nav-link.active")
              oldlink.classList.remove("active")
              let currentlink = document.querySelector(`[href="#${el}"]`);
              currentlink.classList.add("active")        
      },
      offset: "10%"
  })
  
})
