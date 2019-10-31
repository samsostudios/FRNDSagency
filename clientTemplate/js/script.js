$(document).ready(function(){
    console.log("test");
    var $waveTop = $('#waveTop');
    // TweenMax.to("#bhShape1", 5, {bezier:[{left:100, top:250}, {left:300, top:0}, {left:500, top:400}], ease:Power1.easeInOut});
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