gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    durattion:1,
    rotate:360,
}) 

gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
}) 

gsap.from("#page2 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
}) 

gsap.from("#page2 #box",{
    scale:0,
    // delay:1,
    opacity:0,
    durattion:1,
    rotate:180,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 50%",
        //for the smoothing animation in forward or backward we can set 0 to 5 number and  true or false.
        scrub:3,
        pin:true
    }
}) 

gsap.to("#page3 h1",{
    transform:"translateX(-40%)",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:3,
        //pin is used to hold an element at a fix position.
        pin:true
    }
})