var cont = document.querySelector("#container")
var iconL = document.querySelector("i")

cont.addEventListener("dblclick",function(){
    console.log("You liked this pic")
    iconL.style.transform = 'translate(-50%, -50%) scale(1)'
    iconL.style.opacity = 0.8

    setTimeout(function(){
        iconL.style.opacity = 0
    }, 1000)
    setTimeout(function(){
        iconL.style.transform = 'translate(-50%, -50%) scale(0)'
    }, 2000)
})
