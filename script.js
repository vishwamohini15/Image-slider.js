let nextel=document.querySelector(".next")
let imgcontainer=document.querySelector(".img-container")
let prevEl=document.querySelector(".prev")
let imgs=document.querySelectorAll(".img-container img")
console.log(imgs);

let currentImg=0;
let timeout;

nextel.addEventListener("click",()=>{
     currentImg++;
     clearTimeout(timeout)
     console.log(currentImg);

     updateimg();
})

prevEl.addEventListener("click",()=>{
     currentImg--;
     updateimg()
})

function updateimg(){
if (currentImg >= imgs.length) {
     currentImg= 0
}else if(currentImg < 0){
     currentImg=imgs.length
}

imgcontainer.style.transform =`translateX(-${currentImg  * 500}px)`

timeout=setTimeout(() => {
     currentImg++
     updateimg();
}, 2000);
}

updateimg()
