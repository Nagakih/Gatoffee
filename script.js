let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 7000)

function nextImage(){
    count++;
    if(count > 2){
        count = 1;
    }

    document.getElementById("radio"+ count).checked = true;
}

window.addEventListener("scroll", function() {
    const pawCatsContent = document.querySelector(".paw-cats-content");
    const scrollPosition = window.scrollY;
  
    
    const horizontalOffset = scrollPosition * 0.2;
  
    // Define o deslocamento horizontal
    pawCatsContent.style.left = `-${horizontalOffset}px`;
  });