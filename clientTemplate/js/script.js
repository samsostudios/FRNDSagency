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