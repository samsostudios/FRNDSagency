// Mobile Menu Functionality
var isOpen = false;

$(".menuIcon").click(function() {
  console.log("CLICKED");
  if (isOpen == false) {
    isOpen = true;

    // Hamburger Icon Animation
    TweenMax.to("#topHam", 0.2, {
      rotation: "45",
      y: "7px",
      background: "#282828"
    });
    TweenMax.to("#midHam", 0.2, { opacity: "0" });
    TweenMax.to("#bottomHam", 0.2, {
      rotation: "-45",
      y: "-7px",
      background: "#282828"
    });

    // Menu Animation
    TweenMax.to(".offPageMenu", 1, { height: "100vh" });
    TweenMax.to("#menuList li:nth-child(1)", 0.3, {
      x: "0px",
      opacity: "1",
      delay: 0.5,
      ease: Power2.easeOut
    });
    TweenMax.to("#menuList li:nth-child(2)", 0.3, {
      x: "0px",
      opacity: "1",
      delay: 0.6,
      eease: Power2.easeOut
    });
    TweenMax.to("#menuList li:nth-child(3)", 0.3, {
      x: "0px",
      opacity: "1",
      delay: 0.7,
      ease: Power2.easeOut
    });
    TweenMax.to("#menuList li:nth-child(4)", 0.3, {
      x: "0px",
      opacity: "1",
      delay: 0.8,
      ease: Power2.easeOut
    });
    TweenMax.to("#menuList li:nth-child(5)", 0.3, {
      x: "0px",
      opacity: "1",
      delay: 0.9,
      ease: Power2.easeOut
    });
  } else {
    isOpen = false;

    // Hamburger Icon Animation
    TweenMax.to("#topHam", 0.2, {
      rotation: "0",
      y: "0px",
      background: "#ffffff"
    });
    TweenMax.to("#midHam", 0.2, { opacity: "1" });
    TweenMax.to("#bottomHam", 0.2, {
      rotation: "0",
      y: "0px",
      background: "#ffffff"
    });

    // Menu Animation
    TweenMax.to("#menuList li:nth-child(1)", 0.3, {
      x: "-100px",
      opacity: "0",
      delay: 0.4
    });
    TweenMax.to("#menuList li:nth-child(2)", 0.3, {
      x: "-100px",
      opacity: "0",
      delay: 0.3
    });
    TweenMax.to("#menuList li:nth-child(3)", 0.3, {
      x: "-100px",
      opacity: "0",
      delay: 0.2
    });
    TweenMax.to("#menuList li:nth-child(4)", 0.3, {
      x: "-100px",
      opacity: "0",
      delay: 0.1
    });
    TweenMax.to("#menuList li:nth-child(5)", 0.3, {
      x: "-100px",
      opacity: "0"
    });
    TweenMax.to(".offPageMenu", 1, { height: "0vh", delay: 0 });
  }
});

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

// SHOW REEL
$("#showReelButton").click(function(){
    console.log("show reel clicked");

    $("#reelOverlay").addClass("reelOverlay");
});

$("#closeReelButton").click(function(){
    $("#reelOverlay").removeClass("reelOverlay");
    $("#fullReel").trigger('pause');
});

// var pinkWhiteGrad = new Granim({
//     element: '#lineGrad',
//     direction: 'top-bottom',
//     isPausedWhenNotInView: true,
//     states : {
//         "default-state": {
//             gradients: [
//                 ['#FCB2AE', '#f4f4f4'],
//                 ['#f4f4f4', '#FCB2AE']
//             ],
//             transitionSpeed: 2000
//         }
//     }
// });

// Scrolling Animations
// var tl2 = new TimelineMax({onUpdate:updatePercentage});
// const controller = new ScrollMagic.Controller();

// tl2.to(".contentArea", 1, {backgroundColor: "transparent"});
// tl2.to(".circle", 1, {x: "-1000"});
// tl2.from(".demoWrapper", 5, {opacity: 0});
// tl2.to(".textArea", 1, {opacity: "0"});

// const scene2 = new ScrollMagic.Scene({
//     triggerElement: ".landing",
//         triggerHook: "onEnter",
//             duration: "200%",
//             offset: 0
//   })
//   .setPin(".contentArea")
//     .setTween(tl2)
//         .addIndicators() 
//           .addTo(controller);

// function updatePercentage() {
//     //percent.innerHTML = (tl.progress() *100 ).toFixed();
//     tl2.progress();
//     console.log(tl2.progress());
// }
