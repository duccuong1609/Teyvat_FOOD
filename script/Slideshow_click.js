banner_Slideshow_click(slideIndex);

function plusSlides(n) {
    banner_Slideshow_click(slideIndex += n);
}
function banner_Slideshow_click(n) {
  let i;
  let slides = document.getElementsByClassName("slide_show_img_item");
  let title = document.getElementsByClassName("title_banner");
  let description = document.getElementsByClassName("description_banner");
  let Page_button = document.getElementsByClassName("Page_button_container");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < slides.length; i++) {
    title[i].style.display = "none";  
  }

  for (i = 0; i < slides.length; i++) {
    description[i].style.display = "none";  
  }

  for (i = 0; i < slides.length; i++) {
    Page_button[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";
  title[slideIndex-1].style.display = "block";   
  description[slideIndex-1].style.display = "block";
  Page_button[slideIndex-1].style.display = "flex";
}