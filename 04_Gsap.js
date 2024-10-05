var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")

var tl = gsap.timeline()

tl.to("#full",{
    right:0,
    duration:0.4,
})

tl.from("#full h4",{
    x:140,
    duration:0.4,
    stagger:0.7,
    opacity:0
})

tl.from("#full i",{
    opacity:0
})

tl.pause()

menu.addEventListener("click",function(){
    tl.play()
    // console.log("hello...")
})

cross.addEventListener("click",function(){
    tl.reverse()
    // console.log("hello...")
})