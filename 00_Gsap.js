gsap.from("h1",{
    // color:"red",
    opacity:0,
    y:-20,
    duration:1,
    stagger:0.3,
    delay:2
})

gsap.to("#box1",{
    x: 1100,
    duration: 2,
    delay:1,
    rotate:360,
    backgroundColor:"aqua",
    borderRadius:"10%",
    // repeat:2,
    yoyo:true,
    // scale:0.5 
})

gsap.to("#box2",{
    x: 1100,
    y:30,
    backgroundColor:"purple",
    duration: 2,
    delay:1,
})

var tl = gsap.timeline()

tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.5
})

tl.from("h3",{
    y:-30,
    opacity:0,
    duration:0.5,
    scale:0.2
})