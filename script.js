var modal = document.getElementById("myModal");
var closeBtn = document.querySelector(".close");
var modalImg = document.getElementById("imgInModal");
var captionText = document.getElementById("caption");

//getting all imgs with class

var images = document.querySelectorAll(".clickable-img");

//add click event to each image
images.forEach(function(img) {
    img.addEventListener("click",  function() {
        modal.style.display= "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

closeBtn.onclick = function() {
    modal.style.display = "none";
};
  
