// Wave Top Animations
var waveFrontSVG = document.getElementById("waveFront");
var waveFrontStart = Snap.select("#waveFrontStart");
var waveFrontEnd = Snap.select("#waveFrontEnd");
var wfStartPoints = waveFrontStart.node.getAttribute("d");
var wfEndPoints = waveFrontEnd.node.getAttribute("d");

var waveBackSVG = document.getElementById("waveBack");
var snap = Snap(waveBackSVG);
var waveBackStart = Snap.select("#waveBackStart");
var waveBackEnd = Snap.select("#waveBackEnd");
var wbStartPoints = waveBackStart.node.getAttribute("d");
var wbEndPoints = waveBackEnd.node.getAttribute("d");

// Wave Footer Animation
var footerWaveFrontSVG = document.getElementById("waveFrontFooter");
var footerWaveFrontStart = Snap.select("#waveFrontStartFooter");
var footerWaveFrontEnd = Snap.select("#waveFrontEndFooter");
var wfFooterStartPoints = footerWaveFrontStart.node.getAttribute("d");
var wfFooterEndPoint = footerWaveFrontEnd.node.getAttribute("d");

var footerWaveBackSVG = document.getElementById("waveBackFooter");
var footerWaveBackStart = Snap.select("#waveBackStartFooter");
var footerWaveFrontEnd = Snap.select("#waveBackEndFooter");
var wbFooterStartPoints = footerWaveFrontStart.node.getAttribute("d");
var wbFooterEndPoint = footerWaveFrontEnd.node.getAttribute("d");

var toEnd = function() {
  // Top Wave
  waveBackStart.animate({ d: wbEndPoints }, 6000, mina.easeinout, toStart);
  waveFrontStart.animate({ d: wfEndPoints }, 6000, mina.easeinout, toStart);
  // Bottom Wave

  footerWaveBackStart.animate({d: wbFooterEndPoint}, 6000, mina.easeinout, toStart);
  footerWaveFrontStart.animate({d: wfFooterEndPoint}, 6000, mina.easeinout, toStart);
};

var toStart = function() {
  // Top Wave
  waveBackStart.animate({ d: wbStartPoints }, 6000, mina.easeinout, toEnd);
  waveFrontStart.animate({ d: wfStartPoints }, 6000, mina.easeinout, toEnd);
  // Bottom Wave
  footerWaveBackStart.animate({d: wbFooterStartPoints}, 6000, mina.easeinout, toEnd);
  footerWaveFrontStart.animate({d: wfFooterStartPoints}, 6000, mina.easeinout, toEnd);
};

$(document).ready(function() {
  toEnd();

//   TweenMax.from("#brandingPaper", 3, { opacity: 0, y: 200 });
});

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

// // Scroll Magic
const scrollController = new ScrollMagic.Controller();

// Header fade on scroll
var headerAnimationTimeline = new TimelineMax();
headerAnimationTimeline.to(".clientLogo", 2, {y: -200,width: "40%",opacity: 0}, "-=2");
headerAnimationTimeline.to(".heroContainer", 2, {opacity: 0}, "-=2");
// headerAnimationTimeline.to(".hamburgerArea", 2, {backgroundColor: "rgba(255, 255, 255, 0.1"}, "-=2");

const headerScene = new ScrollMagic.Scene({
  duration: "50%",
  triggerElement: ".overviewContainer",
  triggerHook: 0.5
})
//   .addIndicators()
  .setTween(headerAnimationTimeline)
  .addTo(scrollController);

// // --------------END---------------

// // Menu bar color change1
// const menuFadeBlack = new TimelineMax();
// menuFadeBlack.to("#bottomHam", 0.5, { background: "#282828" });
// menuFadeBlack.to("#midHam", 0.5, { background: "#282828" });
// menuFadeBlack.to("#topHam", 0.5, { background: "#282828" });
// // menuFadeBlack.to(".hamburgerArea", 2, {backgroundColor: "rgba(255, 255, 255, 1"}, "-=1");

// const menuBarColorScene = new ScrollMagic.Scene({
//   duration: "25%",
//   triggerElement: ".overviewContainer",
//   triggerHook: "onCenter"
// })
// //   .addIndicators()
//   .setTween(menuFadeBlack)
//   .addTo(scrollController);

// // --------------END---------------

// // Work Area 1 Animation
// const work1TextAnimation = new TimelineMax();
// work1TextAnimation.from("#sectionNumber1", 0.2, { x: -100, opacity: 0 });
// work1TextAnimation.from("#sectionNumber1Title", 0.5, { x: 100, opacity: 0 }, "-=0.1");
// work1TextAnimation.from("#sectionNumber1Lines", 0.5, { x: 50, opacity: 0 }, "-=0.6");
// work1TextAnimation.from("#workArea1Text", 0.3, { opacity: 0, y: 100 });

// const work1AreaTextScene = new ScrollMagic.Scene({
//   triggerElement: "#workArea1"
// })
//   // .addIndicators()
//   .setTween(work1TextAnimation)
//   .addTo(scrollController);

// const workAreaImageScrollAnimation = new TimelineMax();
// workAreaImageScrollAnimation.from("#brandingPaper", 5, { opacity: 0, y: 200 });
// workAreaImageScrollAnimation.from("#brandingPhone", 5, { opacity: 0, y: 200 });
// workAreaImageScrollAnimation.from("#businessCard2", 5, { opacity: 0, y: 200 });
// workAreaImageScrollAnimation.from("#businessCard1", 5, { opacity: 0, y: 200 });

// const work1AreaScrollingScene = new ScrollMagic.Scene({
//   duration: "100%",
//   triggerElement: "#workArea1",
//   triggerHook: "onLeave"
// })
//   // .addIndicators()
//   .setPin("#workArea1") 
//   .setTween(workAreaImageScrollAnimation)
//   .addTo(scrollController);

// // --------------END---------------

// // Work Area 2 Animation
// const work2TextAnimation = new TimelineMax();
// work2TextAnimation.from("#sectionNumber2", 0.2, { x: 100, opacity: 0 });
// work2TextAnimation.from("#sectionNumber2Title", 0.5, { x: -100, opacity: 0 }, "-=0.1");
// work2TextAnimation.from("#sectionNumber2Lines", 0.5, { x: -50, opacity: 0 }, "-=0.6");
// work2TextAnimation.from("#workArea2Text", 0.3, { opacity: 0, y: 100 });

// const work2AreaTextScene = new ScrollMagic.Scene({
//   triggerElement: "#workArea2"
// })
//   // .addIndicators()
//   .setTween(work2TextAnimation)
//   .addTo(scrollController);

// const work2AreaScrollAnimation = new TimelineMax();
// work2AreaScrollAnimation.from("#webDesignIMac", 2, {opacity: 0, y: 200});
// work2AreaScrollAnimation.from("#webDesignMacbook", 2, {opacity: 0, y: 200});

// const work2AreaScrollingScene = new ScrollMagic.Scene({
//   duration: "100%",
//   triggerElement: "#workArea2",
//   triggerHook: "onLeave"
// })
//   // .addIndicators()
//   .setPin("#workArea2")
//   .setTween(work2AreaScrollAnimation)
//   .addTo(scrollController);

// // --------------END---------------

// // Work Area 3 Animations

// // DraftKings
// const workArea3DKanimation = new TimelineMax();
// workArea3DKanimation.to("#dkMid", 5, {y: 50});
// workArea3DKanimation.to("#dkDashes", 5, {x: 100}, "-=5");
// workArea3DKanimation.to("#dkTop", 5, {y: -40}, "-=5");
// workArea3DKanimation.from("#dkBottom", 5, {y: 400}, "-=5");
// // workArea3DKanimation.to("#dkTitle h1", 5, {fontSize: "1.9em"}, "-=5");

// const workArea3DKscene = new ScrollMagic.Scene({
//     duration: "75%",
//     triggerElement: "#wSection2",
//     triggerHook: 0.5
// })
// // .addIndicators()
// // .setPin("#workArea3")
// .setTween(workArea3DKanimation)
// .addTo(scrollController);

// // American Eagle
// const workArea3AEanimation = new TimelineMax();
// workArea3AEanimation.to("#aeMid", 5, {y: 50});
// workArea3AEanimation.to("#aeDashes", 5, {x: -100}, "-=5");
// workArea3AEanimation.to("#aeTop", 5, {y: -40}, "-=5");
// workArea3AEanimation.from("#aeBottom", 5, {y: 400}, "-=5");
// workArea3AEanimation.to("#aeTitle", 5, {height: "30%"}, "-=5");

// const workArea3AEscene = new ScrollMagic.Scene({
//   duration: "75%",
//   triggerElement: "#wSection3",
//   triggerHook: 0.5
// })
// // .addIndicators()
// // .setPin("#workArea3")
// .setTween(workArea3AEanimation)
// .addTo(scrollController);

// // Adidas X Parlay
// const workArea3AdidasAnimation = new TimelineMax();
// workArea3AdidasAnimation.to("#adidasMid", 5, {y: 50});
// workArea3AdidasAnimation.to("#adidasDashes", 5, {x: 100}, "-=5");
// workArea3AdidasAnimation.to("#adidasTop", 5, {y: -40}, "-=5");
// workArea3AdidasAnimation.from("#adidasBottom", 5, {y: 400}, "-=5");
// workArea3AdidasAnimation.to("#adidasTitle", 5, {height: "30%"}, "-=5");

// const workArea3AdidasScene = new ScrollMagic.Scene({
//   duration: "75%",
//   triggerElement: "#wSection4",
//   triggerHook: 0.5
// })
// // .addIndicators()
// // .setPin("#workArea3")
// .setTween(workArea3AdidasAnimation)
// .addTo(scrollController);

// // --------------END---------------
