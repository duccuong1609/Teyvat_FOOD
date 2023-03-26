/*--------------------------------------------Healing_Food_Repices---------------------------------------*/
/*--------------------Slideshow_auto-------------------------------*/
let slideIndex = 0;
banner_Heal_Slideshow_auto();

function banner_Heal_Slideshow_auto() {
    let i = 0;
    let slides = document.getElementsByClassName("Healing_food_repices_items");
    let dots = document.getElementsByClassName("page_dot");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for(i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) 
    {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = 'flex';
    dots[slideIndex-1].className += " active";
    setTimeout(banner_Heal_Slideshow_auto, 60000);//thời gian tự động chuyển là 60s   
}
/*----------------------slide_show_click------------------------------*/
banner_Heal_Slideshow_click(slideIndex);

function plusSlides(n) {
    banner_Heal_Slideshow_click(slideIndex += n);
}
function banner_Heal_Slideshow_click(n) {
  let i;
  let slides = document.getElementsByClassName("Healing_food_repices_items");
  let dots = document.getElementsByClassName("page_dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for(i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}
/*----------------------------------------------choose dot-------------------------------------------*/
choosedot(slideIndex);
function dotnumber(n) {
  choosedot(n);
} 
function choosedot(n) {
  let i;
  let slides = document.getElementsByClassName("Healing_food_repices_items");
  let dots = document.getElementsByClassName("page_dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for(i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[n-1].style.display = "flex";
  dots[n-1].className += " active";
  slideIndex=n;
}
/*--------------------------------------------ATK_Food_Repices---------------------------------------*/
/*--------------------Slideshow_auto-------------------------------*/
let slideIndex2 = 0;
banner_ATK_Slideshow_auto();

function banner_ATK_Slideshow_auto() {
    let i = 0;
    let slides = document.getElementsByClassName("ATK_food_repices_items");
    let dots = document.getElementsByClassName("page_dot2");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for(i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) 
    {
        slideIndex2 = 1;
    }
    slides[slideIndex2-1].style.display = 'flex';
    dots[slideIndex2-1].className += " active";
    setTimeout(banner_ATK_Slideshow_auto, 60000);//thời gian tự động chuyển là 10s   
}
/*----------------------slide_show_click------------------------------*/
banner_ATK_Slideshow_click(slideIndex2);

function plusSlidesATK(n) {
    banner_ATK_Slideshow_click(slideIndex2 += n);
}
function banner_ATK_Slideshow_click(n) {
  let i;
  let slides = document.getElementsByClassName("ATK_food_repices_items");
  let dots = document.getElementsByClassName("page_dot2");
  if (n > slides.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for(i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex2-1].style.display = "flex";
  dots[slideIndex2-1].className += " active";
}
/*----------------------------------------------choose dot ATK-------------------------------------------*/
choosedot2(slideIndex);
function dotnumber2(n) {
  choosedot2(n);
} 
function choosedot2(n) {
  let i;
  let slides = document.getElementsByClassName("ATK_food_repices_items");
  let dots = document.getElementsByClassName("page_dot2");
  if (n > slides.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for(i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[n-1].style.display = "flex";
  dots[n-1].className += " active";
  slideIndex2=n;
}
/*--------------------------------------------DEF_Food_Repices-------------------------------------------*/
/*--------------------Slideshow_auto-------------------------------*/
let slideIndex3 = 0;
banner_DEF_Slideshow_auto();

function banner_DEF_Slideshow_auto() {
    let i = 0;
    let slides = document.getElementsByClassName("DEF_food_repices_items");
    let dots = document.getElementsByClassName("page_dot3");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for(i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex3++;
    if (slideIndex3 > slides.length) 
    {
        slideIndex3 = 1;
    }
    slides[slideIndex3-1].style.display = 'flex';
    dots[slideIndex3-1].className += " active";
    setTimeout(banner_DEF_Slideshow_auto, 60000);//thời gian tự động chuyển là 10s   
}
/*----------------------slide_show_click------------------------------*/
banner_DEF_Slideshow_click(slideIndex3);

function plusSlidesDEF(n) {
    banner_DEF_Slideshow_click(slideIndex3 += n);
}
function banner_DEF_Slideshow_click(n) {
  let i;
  let slides = document.getElementsByClassName("DEF_food_repices_items");
  let dots = document.getElementsByClassName("page_dot3");
  if (n > slides.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for(i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex3-1].style.display = "flex";
  dots[slideIndex3-1].className += " active";
}
/*----------------------------------------------choose dot DEF-------------------------------------------*/
choosedot3(slideIndex);
function dotnumber3(n) {
  choosedot3(n);
} 
function choosedot3(n) {
  let i;
  let slides = document.getElementsByClassName("DEF_food_repices_items");
  let dots = document.getElementsByClassName("page_dot3");
  if (n > slides.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for(i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[n-1].style.display = "flex";
  dots[n-1].className += " active";
  slideIndex3=n;
}
/*--------------------------------------------VIT_Food_Repices---------------------------------------*/
/*--------------------Slideshow_auto-------------------------------*/
let slideIndex4 = 0;
banner_VIT_Slideshow_auto();

function banner_VIT_Slideshow_auto() {
    let i = 0;
    let slides = document.getElementsByClassName("VIT_food_repices_items");
    let dots = document.getElementsByClassName("page_dot4");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for(i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex4++;
    if (slideIndex4 > slides.length) 
    {
        slideIndex4 = 1;
    }
    slides[slideIndex4-1].style.display = 'flex';
    dots[slideIndex4-1].className += " active";
    setTimeout(banner_DEF_Slideshow_auto, 60000);//thời gian tự động chuyển là 10s   
}
/*----------------------slide_show_click------------------------------*/
banner_VIT_Slideshow_click(slideIndex4);

function plusSlidesVIT(n) {
    banner_VIT_Slideshow_click(slideIndex4 += n);
}
function banner_VIT_Slideshow_click(n) {
  let i;
  let slides = document.getElementsByClassName("VIT_food_repices_items");
  let dots = document.getElementsByClassName("page_dot4");
  if (n > slides.length) {slideIndex4 = 1}    
  if (n < 1) {slideIndex4 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for(i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex4-1].style.display = "flex";
  dots[slideIndex4-1].className += " active";
}
/*----------------------------------------------choose dot VIT-------------------------------------------*/
choosedot4(slideIndex);
function dotnumber4(n) {
  choosedot4(n);
} 
function choosedot4(n) {
  let i;
  let slides = document.getElementsByClassName("VIT_food_repices_items");
  let dots = document.getElementsByClassName("page_dot4");
  if (n > slides.length) {slideIndex4 = 1}    
  if (n < 1) {slideIndex4 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for(i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[n-1].style.display = "flex";
  dots[n-1].className += " active";
  slideIndex4=n;
}
/*--------------------------------------------REV_Food_Repices---------------------------------------*/
/*--------------------Slideshow_auto-------------------------------*/
let slideIndex5 = 0;
banner_REV_Slideshow_auto();

function banner_REV_Slideshow_auto() {
    let i = 0;
    let slides = document.getElementsByClassName("REV_food_repices_items");
    let dots = document.getElementsByClassName("page_dot5");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for(i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex5++;
    if (slideIndex5 > slides.length) 
    {
        slideIndex5 = 1;
    }
    slides[slideIndex5-1].style.display = 'flex';
    dots[slideIndex5-1].className += " active";
    setTimeout(banner_DEF_Slideshow_auto, 60000);//thời gian tự động chuyển là 10s   
}
/*----------------------slide_show_click------------------------------*/
banner_REV_Slideshow_click(slideIndex5);

function plusSlidesREV(n) {
    banner_REV_Slideshow_click(slideIndex5 += n);
}
function banner_REV_Slideshow_click(n) {
  let i;
  let slides = document.getElementsByClassName("REV_food_repices_items");
  let dots = document.getElementsByClassName("page_dot5");
  if (n > slides.length) {slideIndex5 = 1}    
  if (n < 1) {slideIndex5 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for(i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex5-1].style.display = "flex";
  dots[slideIndex5-1].className += " active";
}
/*----------------------------------------------choose dot REV-------------------------------------------*/
choosedot5(slideIndex);
function dotnumber5(n) {
  choosedot5(n);
} 
function choosedot5(n) {
  let i;
  let slides = document.getElementsByClassName("REV_food_repices_items");
  let dots = document.getElementsByClassName("page_dot5");
  if (n > slides.length) {slideIndex5 = 1}    
  if (n < 1) {slideIndex5 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for(i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[n-1].style.display = "flex";
  dots[n-1].className += " active";
  slideIndex5=n;
}
/*--------------------------------------------Potion_Food_Repices---------------------------------------*/
/*--------------------Slideshow_auto-------------------------------*/
let slideIndex6 = 0;
banner_Potion_Slideshow_auto();

function banner_Potion_Slideshow_auto() {
    let i = 0;
    let slides = document.getElementsByClassName("Potion_repices_items");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex6++;
    if (slideIndex6 > slides.length) 
    {
        slideIndex6 = 1;
    }
    slides[slideIndex6-1].style.display = 'flex';
    setTimeout(banner_Potion_Slideshow_auto, 60000);//thời gian tự động chuyển là 10s   
}
/*----------------------slide_show_click------------------------------*/
banner_Potion_Slideshow_click(slideIndex6);

function plusSlidesPotion(n) {
    banner_Potion_Slideshow_click(slideIndex6 += n);
}
function banner_Potion_Slideshow_click(n) {
  let i;
  let slides = document.getElementsByClassName("Potion_repices_items");
  if (n > slides.length) {slideIndex6 = 1}    
  if (n < 1) {slideIndex6 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex6-1].style.display = "flex";
}
/*------------------------drop_menu_click------------------------------*/
function dropdown_menu() {
    menu = document.getElementById("dropdown-content");
    menu.classList.toggle("show");
    document.getElementById("icon_menu").classList.toggle("fa-bars");
    document.getElementById("icon_menu").classList.toggle("fa-times");
  }