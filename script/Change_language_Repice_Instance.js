if(localStorage.getItem("language") =="en"){
    change_language_english();
}

function change_language_english()
{
    // header
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
    // footer
    document.getElementById("footer_des_1").innerHTML="<font style='font-weight: bold;color: rgb(172, 222, 223);font-size: 1.2vw;'>TEYVATFOOD COMPANY LIMITED</font>";
    document.getElementById("footer_des_2").innerHTML="<font style='font-weight: bold;'>Address</font> 33 Đường X, KDC Bình Hưng A, Ấp 2, Huyện Bình Chánh A, TP.X";
    document.getElementById("footer_des_3").innerHTML="<font style='font-weight: bold;'>Phone</font> (+84) 932 788 120 [hotline]";
    document.getElementById("footer_des_5").innerHTML="<font style='font-weight: bold;'>Tax Code</font> 0313272749 do Sở kế hoạch và đầu tư TPHCM cấp ngày dd/mm/yyyy";
    document.getElementById("footer_des_7").innerHTML="<font style='font-weight: bold;color: rgb(172, 222, 223);font-size: 1.2vw;'>TERMS AND CONDITIONS</font>";
    document.getElementById("footer_des_8").innerHTML="<a href='#'>General Regulations Policy</a>";
    document.getElementById("footer_des_9").innerHTML="<a href='#'>Regulations on Payment Methods</a>";
    document.getElementById("footer_des_10").innerHTML="<a href='#'>Shipping Policy</a>";
    document.getElementById("footer_des_11").innerHTML="<a href='#'>Information Privacy Policy</a>";
    // content
    document.getElementsByClassName("item_name")[0].innerHTML = "Apple Cider";
    let title = document.getElementsByClassName("title");
    title[0].innerHTML = "Description";
    title[1].innerHTML = "Effect";
    title[2].innerHTML = "Type";
    title[3].innerHTML = "Quality";
    title[4].innerHTML = "Region";
    title[5].innerHTML = "How To Get";
    title[6].innerHTML = "Source 1";
    let info = document.getElementsByClassName("info");
    info[0].innerHTML = "A freshly squeezed, fashion, and fruity non-alcoholic beverage. Said to have a strong sobering effect, tavern patrons often order this as the last drink of the night.";
    info[1].innerHTML = "Restores 26% of Max HP to the selected character and regenerates 570 HP every 5s for 30s.";
    info[2].innerHTML = "<img class='info_img' src='rsc/image/foods/Food_buff_type/Icon_Regeneration.webp' alt=''><a  class='info_type' href='#'>Recovery Dishes</a>"
    let info_title = document.getElementsByClassName("info_title");
    info_title[0].innerHTML = "Categories";
    info_title[1].innerHTML = "How To Get";
    info_title[2].innerHTML = "Trivia";
    info_title[3].innerHTML = "Gallery";
    info_title[4].innerHTML = "Change History";
    info_title[5].innerHTML = "References";
    info_title[6].innerHTML = "Comment";
    info_title[7].innerHTML = "TOP Search";
    let tag = document.getElementsByClassName("tag_item");
    tag[0].innerHTML = "An Foods&nbsp;<font>&nbsp;189&nbsp;</font>";
    tag[1].innerHTML = "Food 2 Stars Qualified&nbsp;<font>&nbsp;92&nbsp;</font>";
    tag[2].innerHTML = "An Foods With Non-Repices&nbsp;<font>&nbsp;68&nbsp;</font>";
    tag[3].innerHTML = "Recovery Food&nbsp;<font>&nbsp;78&nbsp;</font>";
    tag[4].innerHTML = "Recovery/Healing&nbsp;<font>&nbsp;85&nbsp;</font>";
    tag[5].innerHTML = "Mondstadt Food&nbsp;<font>&nbsp;98&nbsp;</font>";
    tag[6].innerHTML = "Regenerative&nbsp;<font>&nbsp;85&nbsp;</font>";
    tag[7].innerHTML = "Shop Available&nbsp;<font>&nbsp;48&nbsp;</font>";
    tag[8].innerHTML = "Version released 1.0&nbsp;<font>&nbsp;99&nbsp;</font>";
    document.getElementsByClassName("info_name")[0].innerHTML = "APPLE CIDER"
    let info_des = document.getElementsByClassName("info_des");
    info_des[0].innerHTML = "<br><font>Apple Cider</font> is a food item that the player can purchase. It is obtainable from <a href='#'>Charles</a> at <a href='#'>'Angel's Share'</a> for price of <font>1.500 Mora</font>. However, players can only purchase up to <font>2</font> item daily.<br><br>Apple Cider restores <font>26% of Max HP </font>to the selected character and regenerates with <font>570 HP</font> every <font>5 seconds for 30 seconds</font>. Like most foods, this cannot target other players' characters in <a href='#'> Co-Op Mode</a>."
    info_des[1].innerHTML = "There are 2 <a href='#'>Shop</a> is available selling <font>Apple Cider</font> :"
    info_des[2].innerHTML = "There are 3 <a href='#'>Letter</a> have <font>Apple Cider</font> is a parcel :"
    info_des[3].innerHTML = "Released in <a href='#'>Version 1.0</a>";
    info_des[4].innerHTML = " <i>* Community content is available under <a href='#'>CC-BY-SA</a> unless otherwise noted.</i>";
    let info_title_1 = document.getElementsByClassName("info_title_1");
    info_title_1[0].innerHTML = "Shop Available";
    info_title_1[1].innerHTML = "Letter";
    info_title_1[2].innerHTML = "10 Comment";
    let li = document.getElementsByTagName('li');
    li[2].innerHTML = "<a href='#'>TCG..</a>&nbsp;x1 from <font>Keaya</font>"
    li[3].innerHTML = "<a href='#'>Have you been well?</a>&nbsp;x5 from <font>Diluc</font>"
    li[4].innerHTML = "<a href='#'>Speaking of Which...</a>&nbsp;x5 from <font>Keaya</font>"
    li[5].innerHTML = "<a href='#'>Apple cider vinegar </a> in real-life is used as a method of sobering up, typically in a diluted form, but is mostly used as a cooking ingredient.";
    li[6].innerHTML = "Apple cider was one of the non-alcoholic drinks developed by the Dawn Winery at <a href='#'>Diluc</a>'s behest. <a href='#'>[1]</a>";
    li[7].innerHTML = "<a href='#'>Apple Cider Vinegar</a> rename as <a href='#'>Apple Cider</a>"
    li[8].innerHTML = "<a href='#'>Apple Cider Vinegar</a> released</a>"
    li[9].innerHTML = "<a href='#gallery'><i class='fa-solid fa-arrow-up'></i></a>&nbsp;Diluc's Character Story: <a href='#'>Dawn Winery's Apple Cider</a>"
    document.getElementsByClassName("gallery_des")[0].innerHTML = "Paimon drinking Apple Cider";
    document.getElementsByClassName("gallery_des")[1].innerHTML = "<a href='#'>Teyvat Times Emoji Vol. 1-4</a>";
    document.getElementsByClassName("hot_item")[0].innerHTML = "TOP 10 SEARCH";
    let top = document.getElementsByClassName("top10_hot");
    top[0].innerHTML = "Invigorating Kitty Meal";
    top[1].innerHTML = "Prosperous Peace";
    top[2].innerHTML = "Adeptus' Temptation";
    top[3].innerHTML = "Universal Peace";
    top[4].innerHTML = "Ghostly March";
    top[5].innerHTML = "Tianshu Meat";
    top[6].innerHTML = "Black-Back Perch Stew";
    top[7].innerHTML = "Flaming Essential Oil";
    top[8].innerHTML = "Sweet Madame";
    top[9].innerHTML = "Bamboo Shoot Soup";
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
    document.getElementById("footer_des_1").innerHTML="<font style='font-weight: bold;color: rgb(172, 222, 223);font-size: 1.2vw;'>CÔNG TY TNHH TEYVATFOOD</font>";
    document.getElementById("footer_des_2").innerHTML="<font style='font-weight: bold;'>Địa chỉ</font> 33 Đường X, KDC Bình Hưng A, Ấp 2, Huyện Bình Chánh A, TP.X";
    document.getElementById("footer_des_3").innerHTML="<font style='font-weight: bold;'>Điện thoại</font> (+84) 932 788 120 [hotline]";
    document.getElementById("footer_des_5").innerHTML="<font style='font-weight: bold;'>MST</font> 0313272749 do Sở kế hoạch và đầu tư TPHCM cấp ngày dd/mm/yyyy";
    document.getElementById("footer_des_7").innerHTML="<font style='font-weight: bold;color: rgb(172, 222, 223);font-size: 1.2vw;'>ĐIỀU KHOẢN CHUNG</font>";
    document.getElementById("footer_des_8").innerHTML="<a href='#'>Chính Sách Quy Định Chung</a>";
    document.getElementById("footer_des_9").innerHTML="<a href='#'>Quy Định Hình Thức Thanh Toán</a>";
    document.getElementById("footer_des_10").innerHTML="<a href='#'>Chính Sách Vận Chuyển Giao Hàng</a>";
    document.getElementById("footer_des_11").innerHTML="<a href='#'>Chính Sách Bảo Mật Thông Tin</a>";
    // content
    document.getElementsByClassName("item_name")[0].innerHTML = "Apple Cider";
    let title = document.getElementsByClassName("title");
    title[0].innerHTML = "Mô Tả";
    title[1].innerHTML = "Hiệu Ứng";
    title[2].innerHTML = "Phân Loại";
    title[3].innerHTML = "Phẩm Chất";
    title[4].innerHTML = "Quốc Gia";
    title[5].innerHTML = "Cách Lấy";
    title[6].innerHTML = "Nguồn 1";
    let info = document.getElementsByClassName("info");
    info[0].innerHTML = "Đồ uống không cồn tươi ngon sành điệu. Nghe nói có công dụng giải rượu rất tốt, các khách uống rượu thường gọi một ly để kết thúc buổi tụ họp.";
    info[1].innerHTML = "Lập tức hồi 26% giới hạn HP cho nhân vật được chọn, trong 30s tiếp theo, mỗi 5s hồi 570 HP.";
    info[2].innerHTML = "<img class='info_img' src='rsc/image/foods/Food_buff_type/Icon_Regeneration.webp' alt=''><a  class='info_type' href='#'>Thực Phẩm Hồi Phục</a>"
    let info_title = document.getElementsByClassName("info_title");
    info_title[0].innerHTML = "Phân Loại";
    info_title[1].innerHTML = "Cách Lấy";
    info_title[2].innerHTML = "Chuyện Bên Lề";
    info_title[3].innerHTML = "Thư Viện Trưng Bày";
    info_title[4].innerHTML = "Lịch Sử Thay Đổi";
    info_title[5].innerHTML = "Cốt Truyện";
    info_title[6].innerHTML = "Bình Luận";
    info_title[7].innerHTML = "TOP Tìm Kiếm";
    let tag = document.getElementsByClassName("tag_item");
    tag[0].innerHTML = "Thực Phẩm&nbsp;<font>&nbsp;189&nbsp;</font>";
    tag[1].innerHTML = "Thực Phẩm 2 Sao&nbsp;<font>&nbsp;92&nbsp;</font>";
    tag[2].innerHTML = "Thực Phẩm Không Có Công Thức&nbsp;<font>&nbsp;68&nbsp;</font>";
    tag[3].innerHTML = "Thực Phẩm Hồi Phục&nbsp;<font>&nbsp;78&nbsp;</font>";
    tag[4].innerHTML = "Hồi Máu&nbsp;<font>&nbsp;85&nbsp;</font>";
    tag[5].innerHTML = "Thực Phẩm Mondstadt&nbsp;<font>&nbsp;98&nbsp;</font>";
    tag[6].innerHTML = "Tái Tạo&nbsp;<font>&nbsp;85&nbsp;</font>";
    tag[7].innerHTML = "Cửa Hàng Có Sẵn&nbsp;<font>&nbsp;48&nbsp;</font>";
    tag[8].innerHTML = "Phiên Bản 1.0&nbsp;<font>&nbsp;99&nbsp;</font>";
    document.getElementsByClassName("info_name")[0].innerHTML = "GIẤM TÁO"
    let info_des = document.getElementsByClassName("info_des");
    info_des[0].innerHTML = "<br><font>Giấm táo</font> là một loại thực phẩm mà người chơi có thể mua. Nó có thể lấy được từ <a href='#'>Charles</a> tại Quán <a href='#'>'Quà của thiên sứ'</a> với giá <font>1.500 Mora</font>. Tuy nhiên, người chơi chỉ có thể mua tối đa <font>2</font> món hàng ngày.<br><br>Giấm Táo phục hồi <font>26% HP</font> tối đa cho nhân vật đã chọn và phục hồi <font>570 HP</font> cứ sau <font>5 giây trong 30 giây</font>. Giống như hầu hết các loại thực phẩm, thứ này không thể nhắm mục tiêu vào nhân vật của người chơi khác trong Chế độ <a href='#'>Co-Op</a>."
    info_des[1].innerHTML = "Có 2 <a href='#'>Shop</a> hiện đang bán <font>Giấm Táo</font> :"
    info_des[2].innerHTML = "Có 3 <a href='#'>Thư</a> có <font>Giấm Táo</font> là vật đính kèm :"
    info_des[3].innerHTML = "Ra mắt vào <a href='#'>Phiên bản 1.0</a>";
    info_des[4].innerHTML = "<i>* Nội dung cộng đồng có sẵn theo <a href='#'>CC-BY-SA</a> trừ khi có ghi chú khác.</i>";
    let info_title_1 = document.getElementsByClassName("info_title_1");
    info_title_1[0].innerHTML = "Cửa Hàng Có Sẵn";
    info_title_1[1].innerHTML = "Thư";
    info_title_1[2].innerHTML = "10 Bình Luận";
    let li = document.getElementsByTagName('li');
    li[2].innerHTML = "<a href='#'>TCG..</a>&nbsp;x1 từ <font>Keaya</font>"
    li[3].innerHTML = "<a href='#'>Bạn Khỏe Chứ ?</a>&nbsp;x5 từ <font>Diluc</font>"
    li[4].innerHTML = "<a href='#'>Nói về nhiều điều..</a>&nbsp;x5 từ <font>Keaya</font>"
    li[5].innerHTML = "<a href='#'>Giấm táo </a> ngoài đời thực được sử dụng như một phương pháp giúp tỉnh táo, thường ở dạng pha loãng, nhưng chủ yếu được sử dụng làm nguyên liệu nấu ăn.";
    li[6].innerHTML = "ARượu táo là một trong những loại đồ uống không cồn được phát triển bởi Nhà máy rượu Dawn theo lệnh của <a href='#'>Diluc</a>. <a href='#'>[1]</a>";
    li[7].innerHTML = "<a href='#'>Rượu táo </a> đổi tên thành <a href='#'>Giấm Táo</a>"
    li[8].innerHTML = "<a href='#'>Rượu táo</a> được ra mắt</a>"
    li[9].innerHTML = "<a href='#gallery'><i class='fa-solid fa-arrow-up'></i></a>&nbsp;Cốt Truyện Nhân Vật Của Diluc: <a href='#'>Rượu Táo Của Tửu Trang Dawn</a>"
    document.getElementsByClassName("gallery_des")[0].innerHTML = "Paimon đang uống Giấm Táo";
    document.getElementsByClassName("gallery_des")[1].innerHTML = "<a href='#'>Thời Đại Teyvat Quyển 1-4</a>";
    document.getElementsByClassName("hot_item")[0].innerHTML = "TOP 10 TÌM KIẾM";
    let top = document.getElementsByClassName("top10_hot");
    top[0].innerHTML = "Cơm Mèo Năng Động";
    top[1].innerHTML = "Thái Bình Thịnh Thế";
    top[2].innerHTML = "Tiên Nhảy Tường";
    top[3].innerHTML = "Thế Giới Hòa Bình";
    top[4].innerHTML = "Đại Hành Quân U";
    top[5].innerHTML = "Thịt Thiên Khu";
    top[6].innerHTML = "Cá Chép Đen Hấp";
    top[7].innerHTML = "Tinh Dầu Liệt Hỏa";
    top[8].innerHTML = "Gà Nấu Hoa Ngọt";
    top[9].innerHTML = "Canh Măng Trúc";
}