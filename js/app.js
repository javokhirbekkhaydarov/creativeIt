  const navAnim = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  // toggle

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //  Animate items
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkMove 0.5s linear forwards ${
          index / 7 + 0.45
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });

  // toggle
};
navAnim();


$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 10) {
      $("nav").addClass("sticy");
    } else {
      $("nav").removeClass("sticy");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

//   slide up
  $('.scroll-up-btn').click(function () {
      $("html").animate({scrollTop: 0});
  })

//   typed
   let typed = new Typed(".typing", {
       strings: ["Web saytlar", "Telegram botlar", "SMM ", "Web saytlar"],
       typeSpeed: 100,
       backSpeed:60,
       loop: true 
   });

});

const counters = document.querySelectorAll(".counter");
const speed = 320;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = target / speed;

    console.log(speed);

    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
    /*   $(window).scroll(function(){
            if(this.scrollY > 10){
                counter.innerText = count + inc;
               setTimeout(updateCount, 1);
            }
            else{
                count.innerText = target
    
            }
        }) */
    console.log(target);
  };
  updateCount();
  Math.floor(updateCount());
});


//  animation 

window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
      const rights = document.querySelectorAll(".right");

      for (let i = 0; i < rights.length; i++) {
          let windowHeitgh = window.innerHeight;
          let containerRight = rights[i].getBoundingClientRect().top;
          let containerPoint = 50;

          if (containerRight < windowHeitgh - containerPoint) {
              rights[i].classList.add("Ractive");
          }
      };
      rights.forEach((right, index) => {
        if (right.style.animation) {
          right.style.animation = "";
        } else {
          right.style.animation = `right 0.5s linear forwards ${
            index / 7 + 0.45
          }s`;
        }
      });


      const lefts = document.querySelectorAll(".left");

      for (let i = 0; i < lefts.length; i++) {
          let windowHeitgh = window.innerHeight;
          let containerLeft = lefts[i].getBoundingClientRect().top;
          let containerPoint = 50;

          if (containerLeft < windowHeitgh - containerPoint) {
            lefts[i].classList.add("leftActiv");
          }
      
          
      };
      lefts.forEach((left, index) => {
        if (left.style.animation) {
          left.style.animation = "";
        } else {
          left.style.animation = `link 0.5s linear forwards ${
            index / 7 + 0.45
          }s`;
        }
      });

      const top = document.querySelectorAll(".toTop");

      for (let i = 0; i < top.length; i++) {
          let windowHeitgh = window.innerHeight;
          let containerTop = top[i].getBoundingClientRect().top;
          let containerPoint = 50;

          if (containerTop < windowHeitgh - containerPoint) {
              top[i].classList.add("active");
          };
      };
  });
});