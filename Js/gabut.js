window.addEventListener('load', function(){
  //     gsap.to(".viewport", {
  //         duration: .5,
  //         height: "100%",
  //         ease: "Expo.easeInOut"
  //     })
      gsap.to(".page-load", {
          duration: 1.5,
          // delay: 2.5,
          y: -1500,
          ease: "Power4.easeInOut"
      })
      gsap.to(".blank-white",{
          duration: 1.5,
          delay: 0.05,
          y: -1500,
          ease: "Power4.easeInOut"
      })
      setTimeout(function() {
          document.querySelector(".page-load").style.display = "none";
      }, 5000)
      var navbarAnimate = gsap.timeline({delay: 1});
      navbarAnimate.from(".animate-navbar", {
          stagger: 0.3,
          duration: 0.5,
          opacity: 0,
          // delay: 2.8,
          ease: "Power4.easeOut",
          y: 10
      })
  
      gsap.from(".recommended-view", {
          delay: 1.5,
          duration: 1,
          y: 300,
          ease: "power4.inOut"
      })
  
      gsap.from(".animate-profile", {
          duration: 1,
          delay: 1,
          opacity: 0,
          x: 20,
          ease: "Power4.easeOut"
      })
      document.querySelector(".recommended-view").style.display = "flex";
      document.querySelector(".blank-white").style.backgroundColor = "crimson";
      gsap.from(".appear-text", {
          duration: 1,
          delay: .9,
          y: 100,
          stagger: 0.1,
          ease: "Power3.easeInOut"
      })
  })
  
const animationRubber = document.querySelectorAll(".animating-rubberBand");

animationRubber.forEach(function(animasiRubber){
  animasiRubber.addEventListener("mouseout", function () {
    setTimeout(function () {
      animasiRubber.classList.remove(
        "animate__animated",
        "animate__rubberBand"
      );
    }, 1200);
  });
  animasiRubber.addEventListener("mouseover", function () {
    animasiRubber.classList.add("animate__animated", "animate__rubberBand");
  });
});

