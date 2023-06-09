if(localStorage.getItem("language") =="en"){
    change_language_english();
}

function change_language_english()
{
    localStorage.setItem("language","en");
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
    if(localStorage.getItem("log-status") == "logged"){
        document.getElementsByClassName("welcome")[0].innerHTML = "Welcome Back<br><font>" + localStorage.getItem("logged-user") + "</font>";
        document.getElementsByClassName("welcome")[1].innerHTML = "Welcome Back<br><font>" + localStorage.getItem("logged-user") + "</font>";
        let avt = document.getElementsByClassName("avatar_content_item");
        avt[0].innerHTML = "<i class='fa-solid fa-user'></i>Account Information";
        avt[1].innerHTML = "<i class='fa-solid fa-power-off'></i>Log Out";
    }
    else{
        document.getElementById("register_text").innerHTML = "Register";
        document.getElementById("login_text").innerHTML = "Login";
        document.getElementById("register_text_mobile").innerHTML = "Register";
        document.getElementById("login_text_mobile").innerHTML = "Login";
    }
    document.getElementById("cart").innerHTML = "SHOPPING CART";
    document.getElementById("item_cart_title_1").innerHTML = "Invigorating Kitty Meal";
    document.getElementById("item_cart_title_2").innerHTML = "Tonkotsu Ramen";
    document.getElementById("item_cart_title_3").innerHTML = "Udon Fuukichi";
    document.getElementById("total_cart").innerHTML = "Total : <font>&nbsp;211,997đ</font>";
    document.getElementById("view_bag").innerHTML = "View Bag";
    document.getElementById("purchase").innerHTML = "Payment";
    document.getElementById("title_banner_1").innerHTML="EXPLORER TEYVAT";
    document.getElementById("title_banner_2").innerHTML="40+ NEW REPICES";
    document.getElementById("title_banner_3").innerHTML="TASTY & NUTRITIOUS MEALS";
    document.getElementById("description_banner_1").innerHTML="5000+ NEWS EVERYDAY";
    document.getElementById("description_banner_2").innerHTML="ALL REPICES OF TEYVAT";
    document.getElementById("description_banner_3").innerHTML="YET AFFORDABLE";
    document.getElementById("more_button_1").innerHTML="See More";
    document.getElementById("more_button_2").innerHTML="See Now";
    document.getElementById("more_button_3").innerHTML="Order Now";
    document.getElementById("About_us_des").innerHTML="&nbsp;On the adventure of traveler food has become a isdispensable and important  friend, <b>TEYVAT</b> <font style='color: rgb(44, 117, 44);font-weight: bold;'>FOOD</font>  here helps travelers get the newest information of Most useful about foods <i>(Recipes, BUFF of foods...and many thing else).</i> <br><br>  &nbsp;Besides that <b>TEYVAT</b> <font style='color: rgb(44, 117, 44);font-weight: bold;'>FOOD</font> not only supports you mentally but also mentally  physical side. We provide fresh, naturally and nutritious meals inspired by  original inspiration in <b>Genshin Impact</b> to give you the best experience.";
    document.getElementById("Hot_Repices_Title").innerHTML="FEATURED REPICES";
    document.getElementById("name_repices_1").innerHTML="Adeptus' Temptation";
    document.getElementById("name_repices_2").innerHTML="Bountiful Year";
    document.getElementById("name_repices_3").innerHTML="A Buoyant Breeze";
    document.getElementById("name_repices_4").innerHTML="Ghostly March";
    document.getElementById("Hot_Food_Title").innerHTML="FEATURED FOOD";
    document.getElementById("Food_Item_Name_1").innerHTML = "INVIGORATING KITTY MEAL";
    document.getElementById("Food_Item_Type_1").innerHTML = "Type : <font style='color:gray'>Combo</font>";
    document.getElementById("Food_Item_des_1").innerHTML = "Describe : <font style='color:gray'>The simple methodology make it flavor retention in its ingredients. Even cats humdrum humanity...</font>";
    document.getElementById("Food_Item_Name_2").innerHTML = "TONKOTSU RAMEN";
    document.getElementById("Food_Item_Type_2").innerHTML = "Type : <font style='color:gray'>Combo</font>";
    document.getElementById("Food_Item_des_2").innerHTML = "Describe : <font style='color:gray'>The noodles have absorbed the soup, the accoutrements have manner of variation to the mouthfeel...</font>";
    document.getElementById("Food_Item_Name_3").innerHTML = "A TIME IN MONDSTADT";
    document.getElementById("Food_Item_Type_3").innerHTML = "Type : <font style='color:gray'>Hamberger</font>";
    document.getElementById("Food_Item_des_3").innerHTML = "Describe : <font style='color:gray'>Feast your eyes and then your stomach upon this delicacy as the soft ribs melt in your mouth...</font>";
    document.getElementById("Food_Item_Name_4").innerHTML = "FUKUUCHI UDON";
    document.getElementById("Food_Item_Type_4").innerHTML = "Type : <font style='color:gray'>Noodle</font>";
    document.getElementById("Food_Item_des_4").innerHTML = "Describe : <font style='color:gray'>Tofu is made by the solemn Lady Kitsune. It is said that if you eat it all at one go with sincerity in your heart..</font>";
    document.getElementById("partner").innerHTML="PARTNERS";
    document.getElementById("customer").innerHTML="CLIENTS";
    document.getElementById("footer_des_1").innerHTML="<font style='font-weight: bold;color: rgb(172, 222, 223);font-size: 1.2vw;'>TEYVATFOOD COMPANY LIMITED</font>";
    document.getElementById("footer_des_2").innerHTML="<font style='font-weight: bold;'>Address</font> 33 Đường X, KDC Bình Hưng A, Ấp 2, Huyện Bình Chánh A, TP.X";
    document.getElementById("footer_des_3").innerHTML="<font style='font-weight: bold;'>Phone</font> (+84) 932 788 120 [hotline]";
    document.getElementById("footer_des_5").innerHTML="<font style='font-weight: bold;'>Tax Code</font> 0313272749 do Sở kế hoạch và đầu tư TPHCM cấp ngày dd/mm/yyyy";
    document.getElementById("footer_des_7").innerHTML="<font style='font-weight: bold;color: rgb(172, 222, 223);font-size: 1.2vw;'>TERMS AND CONDITIONS</font>";
    document.getElementById("footer_des_8").innerHTML="<a href='#'>General Regulations Policy</a>";
    document.getElementById("footer_des_9").innerHTML="<a href='#'>Regulations on Payment Methods</a>";
    document.getElementById("footer_des_10").innerHTML="<a href='#'>Shipping Policy</a>";
    document.getElementById("footer_des_11").innerHTML="<a href='#'>Information Privacy Policy</a>";
}   
function change_language_vietnamese()
{
    localStorage.setItem("language","vn");
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
    if(localStorage.getItem("log-status") == "logged"){
        document.getElementsByClassName("welcome")[0].innerHTML = "Chào Mừng Trở Lại<br><font>" + localStorage.getItem("logged-user") + "</font>";
        document.getElementsByClassName("welcome")[1].innerHTML = "Chào Mừng Trở Lại<br><font>" + localStorage.getItem("logged-user") + "</font>";
        let avt = document.getElementsByClassName("avatar_content_item");
        avt[0].innerHTML = "<i class='fa-solid fa-user'></i>Hồ Sơ Tài Khoản";
        avt[1].innerHTML = "<i class='fa-solid fa-power-off'></i>Thoát Đăng Nhập";
    }
    else{
        document.getElementById("register_text").innerHTML = "Đăng Ký";
        document.getElementById("login_text").innerHTML = "Đăng Nhập";
        document.getElementById("register_text_mobile").innerHTML = "Đăng Ký";
        document.getElementById("login_text_mobile").innerHTML = "Đăng Nhập";
    }
    document.getElementById("cart").innerHTML = "GIỎ HÀNG";
    document.getElementById("item_cart_title_1").innerHTML = "Cơm Mèo Năng Động";
    document.getElementById("item_cart_title_2").innerHTML = "Ramen Xương Hầm";
    document.getElementById("item_cart_title_3").innerHTML = "Mì Udon Fuukichi";
    document.getElementById("total_cart").innerHTML = "Tổng tiền : <font>&nbsp;211,997đ</font>";
    document.getElementById("view_bag").innerHTML = "Xem Giỏ Hàng";
    document.getElementById("purchase").innerHTML = "Thanh Toán";
    document.getElementById("title_banner_1").innerHTML="KHÁM PHÁ TEYVAT";
    document.getElementById("title_banner_2").innerHTML="40+ CÔNG THỨC MỚI";
    document.getElementById("title_banner_3").innerHTML="TRẢI NGHIỆM BỮA ĂN SẠCH";
    document.getElementById("description_banner_1").innerHTML="5000+ TIN TỨC MỚI MỖI NGÀY";
    document.getElementById("description_banner_2").innerHTML="TRỌN BỘ CÔNG THỨC NẤU ĂN LỤC ĐỊA TEYVAT";
    document.getElementById("description_banner_3").innerHTML="BỮA ĂN TƯƠI NGON GIÀU DINH DƯỠNG";
    document.getElementById("more_button_1").innerHTML="Xem Thêm";
    document.getElementById("more_button_2").innerHTML="Xem Ngay";
    document.getElementById("more_button_3").innerHTML="Đặt Ngay";
    document.getElementById("About_us_des").innerHTML="&nbsp;Trên con đường phiêu lưu của nhà lữ hành thực phẩm đã trở thành một người bạn không thể thiếu, <b>TEYVAT</b> <font style='color: rgb(44, 117, 44);font-weight: bold;'>FOOD</font>  ở đây giúp nhà lữ hành có được những thông tin   hữu ích nhất về các loại thực phẩm <i>(Công thức nấu ăn, BUFF của thực phẩm ...).</i> <br><br>  &nbsp;Bên cạnh đó <b>TEYVAT</b> <font style='color: rgb(44, 117, 44);font-weight: bold;'>FOOD</font> không chỉ hỗ trợ bạn về mặt tinh thần mà còn cả về  mặt thể chất. Chúng tôi cung cấp những bữa ăn tươi ngon bổ dưỡng được lấy cảm  hứng từ nguyên gốc trong <b>Genshin Impact</b> nhằm cho bạn những trải nghiệm tốt nhất.";
    document.getElementById("Hot_Repices_Title").innerHTML="CÔNG THỨC TIÊU BIỂU";
    document.getElementById("name_repices_1").innerHTML="Tiên Nhảy Tường";
    document.getElementById("name_repices_2").innerHTML="Phúc Lộc Tràn Đầy";
    document.getElementById("name_repices_3").innerHTML="Thập Cẩm Phong Thần";
    document.getElementById("name_repices_4").innerHTML="Đại Hành Quân U";
    document.getElementById("Hot_Food_Title").innerHTML="THỰC PHẨM TIÊU BIỂU";
    document.getElementById("Food_Item_Name_1").innerHTML = "CƠM MÈO NĂNG ĐỘNG";
    document.getElementById("Food_Item_Type_1").innerHTML = "Phân Loại : <font style='color:gray'>Combo</font>";
    document.getElementById("Food_Item_des_1").innerHTML = "Mô tả : <font style='color:gray'>Chế biến giữ lại tối đa độ tươi ngon. Dù là một con mèo khó tính cũng sẽ chịu không nổi mùi thơm này...</font>";
    document.getElementById("Food_Item_Name_2").innerHTML = "RAMEN XƯƠNG HẦM";
    document.getElementById("Food_Item_Type_2").innerHTML = "Phân Loại : <font style='color:gray'>Combo</font>";
    document.getElementById("Food_Item_des_2").innerHTML = "Mô tả : <font style='color:gray'>Mì nóng hổi. Sợi mì dai dai mềm mềm hấp thụ tinh túy của nước súp, món ăn kèm phong phú giúp khẩu vị đa dạng...</font></font>";
    document.getElementById("Food_Item_Name_3").innerHTML = "TRUYỆN KỂ MONDSTADT";
    document.getElementById("Food_Item_Type_3").innerHTML = "Phân Loại : <font style='color:gray'>Hamberger</font>";
    document.getElementById("Food_Item_des_3").innerHTML = "Mô tả : <font style='color:gray'>Đầu tiên phải no mắt trước rồi mới để miếng thịt sườn tan chảy trong miệng...</font>";
    document.getElementById("Food_Item_Name_4").innerHTML = "FUKUUCHI UDON";
    document.getElementById("Food_Item_Type_4").innerHTML = "Phân Loại : <font style='color:gray'>Mì</font>";
    document.getElementById("Food_Item_des_4").innerHTML = "Mô tả : <font style='color:gray'>Đậu phụ là món đặc biệt do 'tiểu thư hồ ly' làm, tương truyền nếu bạn thành tâm, sẽ được 'tiên hồ' phù hộ...</font>";
    document.getElementById("partner").innerHTML="ĐỐI TÁC";
    document.getElementById("customer").innerHTML="KHÁCH HÀNG";
    document.getElementById("footer_des_1").innerHTML="<font style='font-weight: bold;color: rgb(172, 222, 223);font-size: 1.2vw;'>CÔNG TY TNHH TEYVATFOOD</font>";
    document.getElementById("footer_des_2").innerHTML="<font style='font-weight: bold;'>Địa chỉ</font> 33 Đường X, KDC Bình Hưng A, Ấp 2, Huyện Bình Chánh A, TP.X";
    document.getElementById("footer_des_3").innerHTML="<font style='font-weight: bold;'>Điện thoại</font> (+84) 932 788 120 [hotline]";
    document.getElementById("footer_des_5").innerHTML="<font style='font-weight: bold;'>MST</font> 0313272749 do Sở kế hoạch và đầu tư TPHCM cấp ngày dd/mm/yyyy";
    document.getElementById("footer_des_7").innerHTML="<font style='font-weight: bold;color: rgb(172, 222, 223);font-size: 1.2vw;'>ĐIỀU KHOẢN CHUNG</font>";
    document.getElementById("footer_des_8").innerHTML="<a href='#'>Chính Sách Quy Định Chung</a>";
    document.getElementById("footer_des_9").innerHTML="<a href='#'>Quy Định Hình Thức Thanh Toán</a>";
    document.getElementById("footer_des_10").innerHTML="<a href='#'>Chính Sách Vận Chuyển Giao Hàng</a>";
    document.getElementById("footer_des_11").innerHTML="<a href='#'>Chính Sách Bảo Mật Thông Tin</a>";
}