let slideIndex = 0;
banner_Slideshow_auto();    
function banner_Slideshow_auto() {
    let i = 0;
    let slides = document.getElementsByClassName("slide_show_img_item");
    let title = document.getElementsByClassName("title_banner");
    let description = document.getElementsByClassName("description_banner");
    let Page_button = document.getElementsByClassName("Page_button_container");

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for(i = 0; i < slides.length; i++) {
        title[i].style.display = 'none';
    }

    for(i = 0; i < slides.length; i++) {
        description[i].style.display = 'none';
    }

    for(i = 0; i < slides.length; i++) {
        Page_button[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) 
    {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = 'block';
    title[slideIndex-1].style.display = 'block';
    description[slideIndex-1].style.display = 'block';
    Page_button[slideIndex-1].style.display = 'flex';

    setTimeout(banner_Slideshow_auto, 10000);//thời gian tự động chuyển là 10s
}