const ball = document.getElementsByClassName("ball")


document.addEventListener("click", e => {
    console.log("clicked")
    jump()
})


function jump () {
    let position = 0
    let timer = setInterval(function () {
        
        
        
        //jump up
        console.log("jump up")
        position += 30
        ball.style.bottom = position + 'px'
    },20)
}




