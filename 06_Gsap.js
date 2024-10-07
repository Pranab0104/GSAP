function markanimation() {


    window.addEventListener("wheel", function (dets) {
        if (dets.deltaY > 0) {
            gsap.to(".mark", {
                transform: 'translateX(-200%)',
                // delay:1,
                duration: 2,
                repeat: -1,
                ease: "none",
            })

            gsap.to(".mark img", {
                rotate: 180,
            })
            // console.log("forward scrolling.")
        } else {
            gsap.to(".mark", {
                transform: 'translateX(0%)',
                // delay:1,
                duration: 2,
                repeat: -1,
                ease: "none",
            })

            gsap.to(".mark img", {
                rotate: 0,
            })
            // console.log("opposite svrolling.")
        }
    })

}

markanimation()
