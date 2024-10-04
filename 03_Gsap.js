var main =  document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", function(dets){

    gsap.to(cursor,{

        x: dets.x,
        y: dets.y,
        duration:0.5,
        // ease: "none"
    })
})

imageDiv.addEventListener("mouseenter", function(){

    cursor.innerHTML= "View More"
    gsap.to(cursor,{
        scale:5,
        backgroundColor: "#f0f8ff57"
    })
    console.log("Hellooooo...")
})

imageDiv.addEventListener("mouseleave", function(){

    cursor.innerHTML= ""
    gsap.to(cursor,{
        scale:1,
        backgroundColor: "#fff"
    })
    console.log("Hellooooo...")
})