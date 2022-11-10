const fuse = document.querySelector("#fuse")
fuse.addEventListener('click',function(){
    fuse.classList.add("vol")
    setTimeout( function(){
        fuse.classList.remove("vol") 
    },3000)
})