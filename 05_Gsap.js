function breakText() {
    var h1 = document.querySelector("h1")
    var h1text = h1.textContent
    // console.log(h1text)

    var splitedtext = h1text.split("")
    console.log(splitedtext)

    var clutter = ""

    var half = Math.floor(splitedtext.length/2)
    console.log(half)

    splitedtext.forEach(function (eemm, dx) {
        if(dx<half){
            // console.log(eemm)
            clutter += `<span class="a">${eemm}</span>`
        }
        else{
            // console.log("lol", eemm)
            clutter += `<span class="b">${eemm}</span>`

        }
        // console.log(eemm, dx)
        // console.log("hiii")
    })

    // console.log(clutter)

    h1.innerHTML = clutter
}

breakText()

gsap.from("h1 .a",{
    y:70,
    duration:0.4,
    delay:0.4,
    opacity:0,
    stagger:0.1
})

gsap.from("h1 .b",{
    y:70,
    duration:0.4,
    delay:0.4,
    opacity:0,
    stagger:-0.1
})