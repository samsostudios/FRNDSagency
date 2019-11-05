// Wave Animations
var waveBackSVG = document.getElementById("waveBack");
var snap = Snap(waveBackSVG);
var waveBackStart = Snap.select("#waveBackStart");
var waveBackEnd = Snap.select("#waveBackEnd");
var wbStartPoints = waveBackStart.node.getAttribute("d");
var wbEndPoints = waveBackEnd.node.getAttribute("d");

var waveFrontSVG = document.getElementById('waveFront');
var waveFrontStart = Snap.select("#waveFrontStart");
var waveFrontEnd = Snap.select("#waveFrontEnd");
var wfStartPoints = waveFrontStart.node.getAttribute("d");
var wfEndPoints = waveFrontEnd.node.getAttribute("d");

console.log("start points", waveFrontStart);



var toEnd = function(){
    waveBackStart.animate({d: wbEndPoints}, 6000, mina.easeinout, toStart);
    waveFrontStart.animate({d: wfEndPoints}, 6000, mina.easeinout, toStart);
}

var toStart = function(){
    waveBackStart.animate({d: wbStartPoints}, 6000, mina.easeinout, toEnd);
    waveFrontStart.animate({d: wfStartPoints}, 6000, mina.easeinout, toEnd);
}

$(document).ready(function(){
    
    toEnd();

    TweenMax.from("#brandingPaper", 3,  {opacity: 0, y: 200});
});

// Mobile Menu Functionality
var isOpen = false

$(".menuIcon").click(function(){
    console.log("CLICKED");
    if(isOpen == false){
        isOpen = true;

        // Hamburger Icon Animation
        TweenMax.to("#topHam", 0.2, {rotation: "45", y: "7px", background: "#282828"});
        TweenMax.to("#midHam", 0.2, {opacity: "0"});
        TweenMax.to("#bottomHam", 0.2, {rotation: "-45", y: "-7px", background: "#282828"});

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
        TweenMax.to("#topHam", 0.2, {rotation: "0", y: "0px", background: "#ffffff"});
        TweenMax.to("#midHam", 0.2, {opacity: "1"});
        TweenMax.to("#bottomHam", 0.2, {rotation: "0", y: "0px", background: "#ffffff"});

        // Menu Animation
        TweenMax.to("#menuList li:nth-child(1)", 0.3, {x: "-100px", opacity: "0", delay: 0.4});
        TweenMax.to("#menuList li:nth-child(2)", 0.3, {x: "-100px", opacity: "0", delay: 0.3});
        TweenMax.to("#menuList li:nth-child(3)", 0.3, {x: "-100px", opacity: "0", delay: 0.2});
        TweenMax.to("#menuList li:nth-child(4)", 0.3, {x: "-100px", opacity: "0", delay: 0.1});
        TweenMax.to("#menuList li:nth-child(5)", 0.3, {x: "-100px", opacity: "0"});
        TweenMax.to(".offPageMenu", 1, {height: "0vh", delay: 0});
    }
});

// Scroll Magic
const scrollController = new ScrollMagic.Controller();

// Header fade on scroll
var headerAnimationTimeline = new TimelineMax();
headerAnimationTimeline.to(".clientLogo", 2, {y: -200, width: "40%", opacity: 0});
// headerAnimationTimeline.to(".heroContainer", 2, {opacity: 0});
// headerAnimationTimeline.to(".hamburgerArea", 2, {backgroundColor: "rgba(255, 255, 255, 0.1"}, "-=2");

const headerScene = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: ".overviewContainer",
    triggerHook: 0.5
})
    // .addIndicators()
    .setTween(headerAnimationTimeline)
    .addTo(scrollController);

// Menu bar color change1
const menuFadeBlack = new TimelineMax();
menuFadeBlack.to("#bottomHam", 0.5, {background: "#282828"});
menuFadeBlack.to("#midHam", 0.5, {background: "#282828"});
menuFadeBlack.to("#topHam", 0.5, {background: "#282828"});

const menuBarColorScene = new ScrollMagic.Scene({
    duration: 100,
    triggerElement: ".overviewContainer",
    triggerHook: 0
})
// .addIndicators()
.setTween(menuFadeBlack)
.addTo(scrollController);

// Work Area 1 Animation
const workArea1Animation = new TimelineMax();
workArea1Animation.from("#sectionNumber1", 10, {x: -100, opacity: 0}, "-=5");
workArea1Animation.from("#sectionNumber1Lines", 10, {x: 100, opacity: 0}, "-=2");
workArea1Animation.from("#sectionNumber1Title", 10, {x: 100, opacity: 0}, "-=1");
workArea1Animation.from(".wTextArea", 5, {opacity: 0, y: 200});


const wArea1HeaderScene = new ScrollMagic.Scene({
    duration: 400,
    triggerElement: ".workArea1",
    triggerHook: 0.5
})
    // .addIndicators()
    .setTween(workArea1Animation)
    .addTo(scrollController);

const workArea1ImageAnimation = new TimelineMax();


const wArea1ImageScene = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: "#brandingWorkArea",
    triggerHook: 1
})
    .addIndicators()
    .setPin("workArea1")
    .addTo(scrollController)
