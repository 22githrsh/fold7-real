gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  multiplier:.99
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// var tl4 = gsap.timeline({
//   scrollTrigger:{
//     scroller:".main",
//   }
// })
// tl4
gsap.to(".loader",{
  y:"-100%",
  duration:1,
  delay:"3"
})


var tl = gsap.timeline({
  scrollTrigger:{
    scroller:".main",
    trigger:".page2",
    pin:true,
    scrub:2,
    // markers:true,
    start:"top top"  
  }
})
tl
.from(".fox",{
  marginTop:"25%"
})
.to(".blackdiv",{
  bottom:"0%",
  height:"1000px",
  width:"2000px"
},"elem")
.to(".page2 h1",{
  y:"-1000px"
},"elem")
var tl2 = gsap.timeline({
  scrollTrigger:{
    scroller:".main",
    trigger:".page5",
    // pin:true,
    scrub:2,
    
    start:"top 60%",
    end:"top -30%",
  }
})
tl2
.to(".notdisplay:nth-child(1)",{
  opacity:"1",
  duration:"3"
})
.to(".notdisplay:nth-child(1)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(2)",{
  opacity:"1",
  duration:"3"
})
.to(".notdisplay:nth-child(2)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(3)",{
  opacity:"1",
  duration:"3"
})
.to(".notdisplay:nth-child(3)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(4)",{
  opacity:"1",
  duration:"3"
})
.to(".notdisplay:nth-child(4)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(5)",{
  opacity:"1",
  duration:"3"
})
.to(".notdisplay:nth-child(5)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(6)",{
  opacity:"1",
  duration:"3"
})
.to(".notdisplay:nth-child(6)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(7)",{
  opacity:"1",
  duration:"3"
})
.to(".notdisplay:nth-child(7)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(8)",{
  opacity:"1",
  duration:"3"
})
.to(".notdisplay:nth-child(8)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(9)",{
  opacity:"1",
  duration:"3"
})
.to(".notdisplay:nth-child(9)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(10)",{
  opacity:"1",
  duration:"3"
})
.to(".notdisplay:nth-child(10)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(11)",{
  opacity:"1"
})
.to(".notdisplay:nth-child(11)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(12)",{
  opacity:"1"
})
.to(".notdisplay:nth-child(12)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(13)",{
  opacity:"1"
})
.to(".notdisplay:nth-child(13)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(14)",{
  opacity:"1"
})
.to(".notdisplay:nth-child(14)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(15)",{
  opacity:"1"
})
.to(".notdisplay:nth-child(15)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(16)",{
  opacity:"1"
})
.to(".notdisplay:nth-child(16)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(17)",{
  opacity:"1"
})
.to(".notdisplay:nth-child(17)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(18)",{
  opacity:"1"
})
.to(".notdisplay:nth-child(18)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(19)",{
  opacity:"1"
})
.to(".notdisplay:nth-child(19)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(20)",{
  opacity:"1"
})
.to(".notdisplay:nth-child(20)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(21)",{
  opacity:"1"
})
.to(".notdisplay:nth-child(21)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(22)",{
  opacity:"1"
})
.to(".notdisplay:nth-child(22)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(23)",{
  opacity:"1"
})
.to(".notdisplay:nth-child(23)",{
  opacity:"0"
})
.to(".notdisplay:nth-child(24)",{
  opacity:"1"
})
.to(".notdisplay:nth-child(24)",{
  opacity:"0"
})
var tl3 = gsap.timeline({
  scrollTrigger:{
    scroller:".main",
    trigger:".page8",
    // markers:true,
    pin:true,
    scrub:2,    
    start:"top top",

  }
})
tl3
.to("#dp1",{
  bottom:"15%"
})
.to("#dp2",{
  bottom:"8%"
})
.to("#dp3",{
  bottom:"0%"
})
var menu = document.querySelector(".menu")
var circle = document.querySelector(".circle")
var flag = 0
circle.addEventListener("click",function(){
  if(flag==0){
    menu.style.right="-50%"
        opacity="1"
    flag=1
  }
  else{
    menu.style.right="-100%"
    opacity="0"
    flag=0
  }
})


