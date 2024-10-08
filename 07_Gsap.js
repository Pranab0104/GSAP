function page1(){

    var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y: -30,
    opacity:0,
    delay:1,
    duration:1,
    stagger:0.1
})

tl.from(".center-part1 h1",{
    x:-400,
    opacity:0,
    duration:0.8,
    delay:0,
    // stagger:0
})

tl.from(".center-part1 p",{
    x:-200,
    opacity:0,
    duration:0.3,
    delay:0,
    // stagger:0
})

tl.from(".center-part1 button",{
    // x:-50,
    opacity:0,
    duration:0.8,
    delay:0,
    // stagger:0
})

tl.from(".center-part2 img",{
    x:400,
    opacity:0,
    duration:0.5,
    // delay:0,
    // stagger:0
},"-=0.5")

tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.1,
    dutration:11
})
}

function page2(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            start:"top 50%",
            scrub:2,
            // markers:true,
            end:"top 0"
        }
    })
    
    tl2.from(".services",{
        x:-400,
        // y:50,
        opacity:0
    })
    
    tl2.from(".elem.line1.left",{
        x:-200,
        opacity:0,
        duration:1
    },"pro")
    
    tl2.from(".elem.line2.right",{
        x:200,
        opacity:0,
        duration:1
    },"pro")
    
    tl2.from(".elem.line2.left",{
        x:-200,
        opacity:0,
        duration:1
    },"max")
    
    tl2.from(".elem.line1.right",{
        x:200,
        opacity:0,
        duration:1
    },"max")
}

function page3(){

    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".section3",
            scroller:"body",
            start:"top 50%",
            scrub:2,
            // markers:true,
            end:"top 0%"
        }
        
    })
    
    tl3.from(".section3 h2",{
        x:300,
        duration:2,
        opacity:0,
        delay:0,
        scrub:3
    })

    tl3.from(".section3 p",{
        x:-300,
        duration:1.5,
        delay:1,
        opacity:0,
        scrub:2
    })

    tl3.from(".section3 button",{
        x:300,
        duration:1,
        delay:1.5,
        opacity:0,
        scrub:2
    })

}

function page4(){

    var tl4 = gsap.timeline({
        scrollTrigger:{
            trigger:".section4",
            scroller:"body",
            start:"top 50%",
            scrub:2,
            // markers:true,
            end:"top 0%"
        }
        
    })

    tl4.from(".section4 h3",{
        x:400,
        opacity:0,
        duration:2,
        delay:1,
        scrub:2
    })

    tl4.from(".section4 p",{
        x:-400,
        opacity:0,
        duration:2,
        delay:1.5,
        scrub:2
    })
}

    
page1()
page2()
page3()
page4()