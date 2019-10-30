$(document).ready(function(){

    var isMobile = isMobileDevice();
    console.log("isMobile", isMobile);
    if(isMobile == false){
        console.log("Dekstop");

        //Desktop Intro Animations
        TweenMax.to(".circle", 1, {clipPath: "circle(43% at 15% 50%)", backgroundColor: "white", ease: Expo.easeInOut});
        TweenMax.to("#tagLine1", 1, {opacity: "1.0", x: 40, delay: 1, ease: Expo.easeOut});
        TweenMax.to("#tagLine2", 1, {opacity: "1.0", x: 40, delay: 1.2, ease: Expo.easeOut});
        TweenMax.to("#logo", 1, {opacity: "1.0", height: "125%", delay: 1.4, ease: Power3.easeInOut})
        TweenMax.to(".menu", 1, {opacity: "1.0", ease: Expo.easeInOut})
        TweenMax.to(".line", 1.5, {opacity: 1.0, height: "80%", delay: 0.2});
    }else{
        console.log("Mobile");

        // Mobile Intro Animations
        TweenMax.to(".circle", 1, {clipPath: "circle(90% at 50% 100%)", ease: Expo.easeInOut});
        TweenMax.to("#logo", 1, {opacity: "1.0", delay: 0.2, ease: Power2.easeInOut, y: -20});
        TweenMax.to("#tagLine1", 1, {opacity: "1.0", delay: 0.2, ease: Power3.easeInOut, y: -20});
        TweenMax.to("#tagLine2", 1, {opacity: "1.0", delay: 0.2, ease: Power3.easeInOut, y: -20});
        TweenMax.to(".line", 1.5, {opacity: 0, height: "80%", delay: 0.2});
    }
});

// Mobile Menu Functionality
var isOpen = false

$(".menuIcon").click(function(){
    if(isOpen == false){
        isOpen = true;

        // Hamburger Icon Animation
        TweenMax.to("#topHam", 0.2, {rotation: "45", y: "7px"});
        TweenMax.to("#midHam", 0.2, {opacity: "0"});
        TweenMax.to("#bottomHam", 0.2, {rotation: "-45", y: "-7px"});

        // Menu Animation
        TweenMax.to(".offPageMenu", 1, {height: "100vh"});
        TweenMax.to("#menuList li:nth-child(1)", 0.3, {x: "0px", opacity: "1", delay: 0.5, ease: Power2.easeOut});
        TweenMax.to("#menuList li:nth-child(2)", 0.3, {x: "0px", opacity: "1", delay: 0.6, eease: Power2.easeOut});
        TweenMax.to("#menuList li:nth-child(3)", 0.3, {x: "0px", opacity: "1", delay: 0.7, ease: Power2.easeOut});
        TweenMax.to("#menuList li:nth-child(4)", 0.3, {x: "0px", opacity: "1", delay: 0.8, ease: Power2.easeOut});
        TweenMax.to("#menuList li:nth-child(5)", 0.3, {x: "0px", opacity: "1", delay: 0.9, ease: Power2.easeOut});
    }else{
        isOpen = false;

        // Hamburger Icon Animation
        TweenMax.to("#topHam", 0.2, {rotation: "0", y: "0px"});
        TweenMax.to("#midHam", 0.2, {opacity: "1"});
        TweenMax.to("#bottomHam", 0.2, {rotation: "0", y: "0px"});

        // Menu Animation
        TweenMax.to("#menuList li:nth-child(1)", 0.3, {x: "-100px", opacity: "0", delay: 0.4});
        TweenMax.to("#menuList li:nth-child(2)", 0.3, {x: "-100px", opacity: "0", delay: 0.3});
        TweenMax.to("#menuList li:nth-child(3)", 0.3, {x: "-100px", opacity: "0", delay: 0.2});
        TweenMax.to("#menuList li:nth-child(4)", 0.3, {x: "-100px", opacity: "0", delay: 0.1});
        TweenMax.to("#menuList li:nth-child(5)", 0.3, {x: "-100px", opacity: "0"});
        TweenMax.to(".offPageMenu", 1, {height: "0vh", delay: 0});
    }
});

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

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
var tl2 = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl2.to(".contentArea", 1, {backgroundColor: "transparent"});
tl2.to(".circle", 1, {x: "-1000"});
tl2.from(".demoWrapper", 5, {opacity: 0});
tl2.to(".textArea", 1, {opacity: "0"});

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".landing",
        triggerHook: "onEnter",
            duration: "200%",
            offset: 0
  })
  .setPin(".contentArea")
    .setTween(tl2)
        .addIndicators() 
          .addTo(controller);

function updatePercentage() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tl2.progress();
    console.log(tl2.progress());
}
