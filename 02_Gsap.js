var initialPath = `M 20 100 Q 500 100 1990 100`

var finalPath = `M 20 100 Q 500 100 1990 100`

var string = document.querySelector("#string")


string.addEventListener("mousemove", function (dets) {
    // console.log(dets.y)
    initialPath = `M 20 100 Q ${dets.x} ${dets.y} 1990 100`

    gsap.to("svg path", {
        attr: { d: initialPath },
        duration:0.3,
        ease:"power3.out",
    })
})

string.addEventListener("mouseleave", function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1,
        ease: "elastic.out(1,0.2)",
    })
})

// string.addEventListener("mouseenter",function(dets){
//     // console.log(dets)
//     console.log("Enter")
// })

// string.addEventListener("mouseleave",function(){
//     console.log("Leave")
// })