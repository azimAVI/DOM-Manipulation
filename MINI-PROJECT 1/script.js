var currentStatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var flag = 0

btn.addEventListener("click",function() {
    if(flag == 0){
        currentStatus.innerHTML = "Friends"
        currentStatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        flag = 1
    }else{
        currentStatus.innerHTML = "Stranger"
        currentStatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        flag = 0
    }
})