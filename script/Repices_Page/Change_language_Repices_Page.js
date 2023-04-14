function change_language_english()
{
    // header
    var en = document.getElementById("english");
    var vn = document.getElementById("vietnamese");
    en.classList.add("choose_language");
    en.classList.remove("unchoose_language");
    vn.classList.remove("choose_language");
    vn.classList.add("unchoose_language");
    var enm = document.getElementById("english_mobile");
    var vnm = document.getElementById("vietnamese_mobile");
    enm.classList.add("choose_language");
    enm.classList.remove("unchoose_language");
    vnm.classList.remove("choose_language");
    vnm.classList.add("unchoose_language");
    document.getElementById("home_page").innerHTML = "HOME";
    document.getElementById("repices_page").innerHTML = "REPICES";
    document.getElementById("order_page").innerHTML = "ORDER";
    document.getElementById("news_page").innerHTML = "NEWS";
    document.getElementById("home_page_mobile").innerHTML = "HOME";
    document.getElementById("repices_page_mobile").innerHTML = "REPICES";
    document.getElementById("order_page_mobile").innerHTML = "ORDER";
    document.getElementById("news_page_mobile").innerHTML = "NEWS";
    document.getElementById("register_text").innerHTML = "Register";
    document.getElementById("login_text").innerHTML = "Login";
    document.getElementById("register_text_mobile").innerHTML = "Register";
    document.getElementById("login_text_mobile").innerHTML = "Login";
    document.getElementById("cart").innerHTML = "SHOPPING CART";
    document.getElementById("item_cart_title_1").innerHTML = "Invigorating Kitty Meal";
    document.getElementById("item_cart_title_2").innerHTML = "Tonkotsu Ramen";
    document.getElementById("item_cart_title_3").innerHTML = "Udon Fuukichi";
    document.getElementById("total_cart").innerHTML = "Total : <font>&nbsp;211,997đ</font>";
    document.getElementById("view_bag").innerHTML = "View Bag";
    document.getElementById("purchase").innerHTML = "Payment";
    // footer
    document.getElementById("footer_des_1").innerHTML="<font style='font-weight: bold;color: rgb(172, 222, 223);font-size: 1.2vw;'>TEYVATFOOD COMPANY LIMITED</font>";
    document.getElementById("footer_des_2").innerHTML="<font style='font-weight: bold;'>Address</font> 33 Đường X, KDC Bình Hưng A, Ấp 2, Huyện Bình Chánh A, TP.X";
    document.getElementById("footer_des_3").innerHTML="<font style='font-weight: bold;'>Phone</font> (+84) 932 788 120 [hotline]";
    document.getElementById("footer_des_5").innerHTML="<font style='font-weight: bold;'>Tax Code</font> 0313272749 do Sở kế hoạch và đầu tư TPHCM cấp ngày dd/mm/yyyy";
    document.getElementById("footer_des_7").innerHTML="<font style='font-weight: bold;color: rgb(172, 222, 223);font-size: 1.2vw;'>TERMS AND CONDITIONS</font>";
    // content
    document.getElementById("Repices_Banner_Title_item").innerHTML="Food/Drink Repices<br> & Potion Repices Version <br>3.5 Genshin Impact";
    document.getElementById("Repices_Food_Title").innerHTML="<i class='fa-solid fa-burger'></i>&ensp;FOOD/DRINK REPICES";
    document.getElementById("healing_food_title").innerHTML="<a href='#Food_healing_buff'><img class='other_type_items' src='rsc/image/foods/Food_buff_type/Icon_Regeneration.webp' alt='' width='25vw'></a> &ensp;RECOVERY DISHES";
    document.getElementById("repices_name_1").innerHTML="APPLE CIDER";
    Quality = document.getElementsByClassName("Quality");
    for(i=0;i<Quality.length;i++){
        Quality[i].innerHTML = "<font style='font-weight: bold;'>Quality : </font>";
    }
    Effect = document.getElementsByClassName("Effect");
    for(i=0;i<Effect.length;i++){
        Effect[i].innerHTML = "Item Effect : ";
    }
    Region = document.getElementsByClassName("Region");
    for(i=0;i<Region.length;i++){
        Region[i].innerHTML = "Region : ";
    }
    Obtain = document.getElementsByClassName("Obtain");
    for(i=0;i<Obtain.length;i++){
        Obtain[i].innerHTML = "Obtain : ";
    }
    Heal_for_char = document.getElementsByClassName("heal_for_character");
    for(i=0;i<Heal_for_char.length;i++){
        Heal_for_char[i].innerHTML = "Recovery for selected character in team";
    }
    regenerates = document.getElementsByClassName("regenerates");
    for(i=0;i<regenerates.length;i++){
        regenerates[i].innerHTML = " of Max HP and regenerates";
    }
    per_second = document.getElementsByClassName("per-second");
    for(i=0;i<per_second.length;i++){
        per_second[i].innerHTML = " HP every 5s";
    }
}
function change_language_vietnamese()
{
    var en = document.getElementById("english");
    var vn = document.getElementById("vietnamese");
    en.classList.remove("choose_language");
    en.classList.add("unchoose_language");
    vn.classList.add("choose_language");
    vn.classList.remove("unchoose_language");
    var enm = document.getElementById("english_mobile");
    var vnm = document.getElementById("vietnamese_mobile");
    enm.classList.remove("choose_language");
    enm.classList.add("unchoose_language");
    vnm.classList.add("choose_language");
    vnm.classList.remove("unchoose_language");
    document.getElementById("home_page").innerHTML = "TRANG CHỦ";
    document.getElementById("repices_page").innerHTML = "CÔNG THỨC";
    document.getElementById("order_page").innerHTML = "ĐẶT HÀNG";
    document.getElementById("news_page").innerHTML = "TIN TỨC";
    document.getElementById("home_page_mobile").innerHTML = "TRANG CHỦ";
    document.getElementById("repices_page_mobile").innerHTML = "CÔNG THỨC";
    document.getElementById("order_page_mobile").innerHTML = "ĐẶT HÀNG";
    document.getElementById("news_page_mobile").innerHTML = "TIN TỨC";
    document.getElementById("register_text_mobile").innerHTML = "Đăng Ký";
    document.getElementById("login_text_mobile").innerHTML = "Đăng Nhập";
    document.getElementById("register_text").innerHTML = "Đăng Ký";
    document.getElementById("login_text").innerHTML = "Đăng Nhập";
    document.getElementById("cart").innerHTML = "GIỎ HÀNG";
    document.getElementById("item_cart_title_1").innerHTML = "Cơm Mèo Năng Động";
    document.getElementById("item_cart_title_2").innerHTML = "Ramen Xương Hầm";
    document.getElementById("item_cart_title_3").innerHTML = "Mì Udon Fuukichi";
    document.getElementById("total_cart").innerHTML = "Tổng tiền : <font>&nbsp;211,997đ</font>";
    document.getElementById("view_bag").innerHTML = "Xem Giỏ Hàng";
    document.getElementById("purchase").innerHTML = "Thanh Toán";
    document.getElementById("footer_des_1").innerHTML="<font style='font-weight: bold;color: rgb(172, 222, 223);font-size: 1.2vw;'>CÔNG TY TNHH TEYVATFOOD</font>";
    document.getElementById("footer_des_2").innerHTML="<font style='font-weight: bold;'>Địa chỉ</font> 33 Đường X, KDC Bình Hưng A, Ấp 2, Huyện Bình Chánh A, TP.X";
    document.getElementById("footer_des_3").innerHTML="<font style='font-weight: bold;'>Điện thoại</font> (+84) 932 788 120 [hotline]";
    document.getElementById("footer_des_5").innerHTML="<font style='font-weight: bold;'>MST</font> 0313272749 do Sở kế hoạch và đầu tư TPHCM cấp ngày dd/mm/yyyy";
    document.getElementById("footer_des_7").innerHTML="<font style='font-weight: bold;color: rgb(172, 222, 223);font-size: 1.2vw;'>ĐIỀU KHOẢN CHUNG</font>";
    // content
    document.getElementById("Repices_Banner_Title_item").innerHTML="Công Thức Thực Phẩm<br> & Dược Phẩm Phiên Bản <br>3.5 Genshin Impact";
    document.getElementById("Repices_Food_Title").innerHTML="<i class='fa-solid fa-burger'></i>&ensp;FOOD/DRINK REPICES";
    document.getElementById("healing_food_title").innerHTML="<a href='#Food_healing_buff'><img class='other_type_items' src='rsc/image/foods/Food_buff_type/Icon_Regeneration.webp' alt='' width='25vw'></a> &ensp;RECOVERY DISHES";
    document.getElementById("repices_name_1").innerHTML="APPLE CIDER";
    Quality = document.getElementsByClassName("Quality");
    for(i=0;i<Quality.length;i++){
        Quality[i].innerHTML = "<font style='font-weight: bold;'>Phẩm Chất : </font>";
    }
    Effect = document.getElementsByClassName("Effect");
    for(i=0;i<Effect.length;i++){
        Effect[i].innerHTML = "Công Dụng : ";
    }
    Region = document.getElementsByClassName("Region");
    for(i=0;i<Region.length;i++){
        Region[i].innerHTML = "Xuất Xứ : ";
    }
    Obtain = document.getElementsByClassName("Obtain");
    for(i=0;i<Obtain.length;i++){
        Obtain[i].innerHTML = "Cách Lấy : ";
    }
    Heal_for_char = document.getElementsByClassName("heal_for_character");
    for(i=0;i<Heal_for_char.length;i++){
        Heal_for_char[i].innerHTML = "Hồi phục cho nhân vật được chọn trong đội";
    }
    regenerates = document.getElementsByClassName("regenerates");
    for(i=0;i<regenerates.length;i++){
        regenerates[i].innerHTML = " máu tối đa và hồi phục thêm";
    }
    per_second = document.getElementsByClassName("per-second");
    for(i=0;i<per_second.length;i++){
        per_second[i].innerHTML = " máu mỗi 5s";
    }
    
}