var arr = [
    {dp:"https://images.unsplash.com/photo-1543935637-469e1ed2f8e7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMHdvbWVufGVufDB8fDB8fHww", story:"https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXRhbHklMjBmb29kJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1610630536483-a56b494c3f7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYXV0aWZ1bCUyMHdvbWVufGVufDB8fDB8fHww", story:"https://images.unsplash.com/photo-1469047616593-20bed1f1217a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9uJTIwaW4lMjB3aW50ZXJzfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmxzfGVufDB8fDB8fHww", story:"https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhbmFkYSUyMHRvdXJpc3QlMjBzcG90c3xlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1503520853796-1636f7b9990e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjBpbiUyMGJpa2luaXxlbnwwfHwwfHx8MA%3D%3D", story:"https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWlhbWl8ZW58MHx8MHx8fDA%3D"},  
    {dp:"https://images.unsplash.com/photo-1568739253582-afa48fbcea47?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1dGUlMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D", story:"https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uY2VydHxlbnwwfDF8MHx8fDA%3D"}
]

var clutter = ""
var instaSTORY =  document.querySelector("#storyFeature")
var fullScreen = document.querySelector("#full-screen")

arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
    </div>`
})

instaSTORY.innerHTML = clutter
instaSTORY.addEventListener("click", function(dets){
    fullScreen.style.display = "block"
    fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`
    
    // setTimeout(function() {
        //     document.querySelector("#full-screen").style.display = "none"
        // },3000)

})

fullScreen.addEventListener("click", function(){
    fullScreen.style.display = "none"
})


