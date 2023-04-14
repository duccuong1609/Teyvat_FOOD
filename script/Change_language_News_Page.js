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
    document.getElementById("footer_des_8").innerHTML="<a href='#'>General Regulations Policy</a>";
    document.getElementById("footer_des_9").innerHTML="<a href='#'>Regulations on Payment Methods</a>";
    document.getElementById("footer_des_10").innerHTML="<a href='#'>Shipping Policy</a>";
    document.getElementById("footer_des_11").innerHTML="<a href='#'>Information Privacy Policy</a>";
    // content
    document.getElementById("News").innerHTML = "NEWS";
    let Title = document.getElementsByClassName("title");
    Title[0].innerHTML = "<a href='#'>TEYVAT FOOD is now available on ZALO</a>"
    Title[1].innerHTML = "<a href='#'>TEYVATFOOD Loyalty Program</a>"
    Title[2].innerHTML = "<a href='#'>TEYVATFOOD Collaborates H&H Nutrition Launched 'In-depth Nutrition Counseling'</a>"
    Title[3].innerHTML = "<a href='#'>TEYVAT FOOD Cooperating with STAR COMBUCHA</a>"
    Title[4].innerHTML = "<a href='#'>5 Common Mistakes That Keep You From Losing Weight While Eating Clean Diet</a>"
    Title[5].innerHTML = "<a href='#'>What Is Cheat Day And Is It Good For Eat Clean Mode?</a>"
    Title[6].innerHTML = "<a href='#'>How To Control Appetite?</a>"
    Title[7].innerHTML = "<a href='#'>Is Eat Clean Really Effective For Fat Loss?</a>"
    Title[8].innerHTML = "<a href='#'>TEYVATFOOD 'Running With Rom', Official Collaboration With Anh Tu Wilson</a>"
    Title[9].innerHTML = "<a href='#'>Summer Is The Golden Time For Weight Loss</a>"
    Title[10].innerHTML = "<a href='#'>Nutrition Institute Calories Worksheet 2020</a>"
    Title[11].innerHTML = "<a href='#'>TEYVATFOOD Accompanying Frontline Doctors in the Fight Against Covid-19</a>"
    Title[12].innerHTML = "<a href='#'>All Questions About The Eat Clean Diet</a>"
    Title[13].innerHTML = "<a href='#'>5 Secrets to Weight Control on New Year's Day</a>"
    Title[14].innerHTML = "<a href='#'>TEYVATFOOD Accompanying Techcombank Ho Chi Minh City International Marathon 2019</a>"
    Title[15].innerHTML = "<a href='#'>TEYVATFOOD Love Story From Cozy Kitchen Corner</a>"
    Title[16].innerHTML = "<a href='#'>3 Things to Note When Preparing a Weight Loss Menu</a>"
    Title[17].innerHTML = "<a href='#'>7 PRINCIPLES WHEN CHOOSE MEAN FOR GYM PEOPLE</a>"
    Title[18].innerHTML = "<a href='#'>EAT CLEAN AND LIVING HEALTHY WITH TEYVATFOOD</a>"
    Title[19].innerHTML = "<a href='#'>EXPERIENCE THE DIFFERENT AND INTERESTING 'EAT CLEAN' MENU FROM TEYVATFOOD</a>"
    let des = document.getElementsByClassName("News_item_des");
    des[0].innerHTML = "In order to meet the needs of customer service, TeyvatFood officially launched the TeyvatFood Official channel on Zalo social network, in addition to other websites such as Facebook, Hotline or Email. Customers can contact Teyvatfood through this new platform.";
    des[1].innerHTML = "Starting from January 1, 2022, Teyvatfood officially applies the Loyalty Program policy to all customers using services at TeyvatFood.";
    des[2].innerHTML = "A healthy body is balance. In the process of living and living, we accidentally or intentionally lose that balance, the long-term imbalance will cause disorders and lead to disease. Providing proper and timely nutrition will promote our body to regain balance faster, which will help limit the use of therapeutic drugs. But to choose authentic nutritional products, science is not easy, it is necessary to consult nutritionists and choose the most prestigious brand.";
    des[3].innerHTML = "TEYVAT FOOD cooperates with Star Kombucha to launch combo 'Eat clean, live healthy'";
    des[4].innerHTML = "Some people who start eating the Eat Clean diet in particular and lose weight in general often completely cut down on sugar and starch. Instead, they replace meals with green vegetables. Is this true and really good for the body?";
    des[5].innerHTML = "An extreme diet can take ton on your mental health, leaving you feeling stressed, tired, and hungry. Therefore, sometimes, in the diet, you need to have a 'cheat day', maybe a weekend. However, you should know how to use cheat day to avoid affecting your weight loss regimen.";
    des[6].innerHTML = "To be able to achieve the desired weight, the girls have to go through countless difficult challenges. In particular, the appetite is the most serious 'rival'.";
    des[7].innerHTML = "Currently, the eat clean method is being applied diversely and begins to appear in many negative forms, making the healthy eating method meaningless, sometimes harmful to their own health. So why?";
    des[8].innerHTML = "In 2022, Teyvatfood is pleased to accompany actor Anh Tu Wilson (as Phuc in Rom).";
    des[9].innerHTML = "For those who find it difficult to control their appetite or 'afraid' of exercising, which leads to difficulty losing weight, summer is a favorable time to make the dream of owning a slim body soon come true.";
    des[10].innerHTML = "Calorie calculator from Vietnam Institute of Nutrition is an accurate calculation of the calorie index of each food that we usually eat every day. With this spreadsheet, you can better balance your meals.";
    des[11].innerHTML = "To support the frontline doctors at Ho Chi Minh City Hospital for Tropical Diseases, TeyvatFood and benefactors have provided more than 3,500 meals with the hope that they can overcome the epidemic together with the community.";
    des[12].innerHTML = "In recent years, the eat clean diet is no longer a strange concept for everyone, especially those with healthy living habits. However, not everyone understands eat clean well. Let's learn from A to Z this diet with TeyvatFood!";
    des[13].innerHTML = "To avoid having to diet due to weight gain as soon as the New Year's holidays are over, create a healthy eating habit right during these New Year's days.";
    des[14].innerHTML = "TeyvatFood is pleased to accompany Techcombank Ho Chi Minh City International Marathon 2019 to be held at Empire City, Zone 2B, Thu Thiem from December 6, 2019 to December 8, 2019.";
    des[15].innerHTML = "The habit of consuming dirty food, of unknown origin, ... along with an unbalanced diet is the leading cause of bad effects on our health. Understanding the chaos, worries and concerns in daily life almost takes up all of your time. TeyvatFood with the mission of becoming a companion to protect your health with healthy food meals every day.";
    des[16].innerHTML = "Preparing a thorough weight loss menu helps you to recognize the differences in the diets and thereby improve the quality of the weight loss menu to achieve your goals.";
    des[17].innerHTML = "For gym goers, diet is one of the most important things. Here are 7 principles when choosing a menu for gym people.";
    des[18].innerHTML = "Do you have questions about TeyvatFood's production process? Let's see the production process of meals delivered to you every day in TeyvatFood's professional kitchen with food safety standards.";
    des[19].innerHTML = "Nowadays, the issue of ensuring food safety and hygiene is concerned by the whole society every day. It is this that makes many people fear about the quality and hygiene of the food they are consuming. Therefore, organic food, healthy diets, eat clean gradually become new trends to help people feel more secure.";
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
    document.getElementById("footer_des_8").innerHTML="<a href='#'>Chính Sách Quy Định Chung</a>";
    document.getElementById("footer_des_9").innerHTML="<a href='#'>Quy Định Hình Thức Thanh Toán</a>";
    document.getElementById("footer_des_10").innerHTML="<a href='#'>Chính Sách Vận Chuyển Giao Hàng</a>";
    document.getElementById("footer_des_11").innerHTML="<a href='#'>Chính Sách Bảo Mật Thông Tin</a>";
    // content
    document.getElementById("News").innerHTML = "NEWS";
    let Title = document.getElementsByClassName("title");
    Title[0].innerHTML = "<a href='#'>TEYVAT FOOD Đã có mặt trên ZALO</a>"
    Title[1].innerHTML = "<a href='#'>Chương trình khách hàng thân thiết của TEYVATFOOD</a>"
    Title[2].innerHTML = "<a href='#'>TEYVATFOOD Hợp Tác Cùng H&H Nutrition Ra Mắt 'Tư Vấn Dinh Dưỡng Chuyên Sâu'</a>"
    Title[3].innerHTML = "<a href='#'>TEYVAT FOOD Hợp tác cùng STAR COMBUCHA</a>"
    Title[4].innerHTML = "<a href='#'>5 Sai Lầm Phổ Biến Khiến Bạn Không Thể Giảm Cân Khi Ăn Chế Độ Eat Clean</a>"
    Title[5].innerHTML = "<a href='#'>Cheat Day Là Gì Và Có Phù Hợp Với Chế Độ Eat Clean Không?</a>"
    Title[6].innerHTML = "<a href='#'>Làm Thế Nào Để Kiểm Soát Cảm Giác Thèm Ăn?</a>"
    Title[7].innerHTML = "<a href='#'>Eat Clean Có Thực Sự Hiệu Quả Trong Việc Giảm Mỡ?</a>"
    Title[8].innerHTML = "<a href='#'>TEYVATFOOD 'Chạy Cùng Ròm', Chính Thức Hợp Tác Với Anh Tú Wilson</a>"
    Title[9].innerHTML = "<a href='#'>Mùa Hè Là Thời Điểm Vàng Dành Cho Việc Giảm Cân</a>"
    Title[10].innerHTML = "<a href='#'>Bảng Tính Calo Của Viện Dinh Dưỡng Năm 2020</a>"
    Title[11].innerHTML = "<a href='#'>TEYVATFOOD Đồng Hành Cùng Bác Sĩ Tuyến Đầu Trong Công Tác Chống Dịch Covid-19</a>"
    Title[12].innerHTML = "<a href='#'>Tất Tần Tật Những Câu Hỏi Về Chế Độ Ăn Eat Clean</a>"
    Title[13].innerHTML = "<a href='#'>5 Bí Quyết Kiểm Soát Cân Nặng Ngày Tết</a>"
    Title[14].innerHTML = "<a href='#'>TEYVATFOOD Đồng Hành Cùng Techcombank HCM City International Marathon 2019</a>"
    Title[15].innerHTML = "<a href='#'>Câu Chuyện Tình Yêu TEYVATFOOD Từ Nơi Góc Bếp Nhỏ Ấm Cúng</a>"
    Title[16].innerHTML = "<a href='#'>3 Điều Lưu Ý Khi Chuẩn Bị Thực Đơn Giảm Cân</a>"
    Title[17].innerHTML = "<a href='#'>7 NGUYÊN TẮC KHI LỰA CHỌN THỰC ĐƠN CHO NGƯỜI TẬP GYM</a>"
    Title[18].innerHTML = "<a href='#'>ĂN SẠCH SỐNG KHỎE VỚI TEYVATFOOD</a>"
    Title[19].innerHTML = "<a href='#'>TRẢI NGHIỆM THỰC ĐƠN 'EAT CLEAN' ĐA DẠNG VÀ HẤP DẪN TỪ TEYVATFOOD</a>"
    let des = document.getElementsByClassName("News_item_des");
    des[0].innerHTML = "Nhằm đáp ứng nhu cầu phục vụ khách hàng, TeyvatFood chính thức ra mắt kênh TeyvatFood Official trên mạng xã hội Zalo, ngoài các trang mạng khác như Facebook, Hotline hay Email. Khách hàng có thể liên hệ với Teyvatfood thông qua nền tảng mới này.";
    des[1].innerHTML = "Bắt đầu từ 01/01/2022, Teyvatfood chính thức áp dụng chính sách Chương trình Khách Hàng Thân Thiết (Loyalty Program) cho tất cả khách hàng sử dụng dịch vụ tại TeyvatFood.";
    des[2].innerHTML = "Cơ thể mỗi người khỏe mạnh là sự cân bằng. Trong quá trình sống và sinh hoạt vô tình hay cố ý chúng ta đã làm mất sự cân bằng đó, sự mất cân bằng kéo dài sẽ gây ra các rối loạn và dẫn đến bệnh tật. Cung cấp dinh dưỡng hợp lý và kịp thời sẽ thúc đẩy cơ thể chúng ta lấy lại sự cân bằng nhanh hơn điều này sẽ giúp hạn chế phải sử dụng các loại thuốc điều trị. Nhưng để lựa chọn các sản phẩm dinh dưỡng chính thống, khoa học không phải là điều dễ dàng mà phải cần đến những chuyên gia dinh dưỡng tư vấn và lựa chọn nhãn hiệu uy tín nhất.";
    des[3].innerHTML = "TEYVAT FOOD hợp tác với Star Kombucha ra mắt combo 'Ăn sạch sống khỏe'";
    des[4].innerHTML = "Một số người bắt đầu ăn theo chế độ Eat Clean nói riêng và giảm cân nói chung thường cắt giảm hoàn toàn lượng đường, tinh bột. Thay vào đó, họ thay thế những bữa ăn bằng rau xanh. Điều này liệu có đúng và thực sự tốt cho cơ thể?";
    des[5].innerHTML = "Một chế độ ăn kiêng khắc nghiệt có thể gây ảnh hưởng xấu đến tinh thần, khiến bạn cảm thấy căng thẳng, mệt mỏi và rất thèm ăn. Chính vì thế, đôi lúc, trong chế độ ăn kiêng, bạn cần có một ngày ăn 'gian lận' (cheat day), có thể là cuối tuần. Tuy nhiên, bạn nên biết cách để sử dụng cheat day để tránh việc làm ảnh hưởng đến chế độ giảm cân của bạn.";
    des[6].innerHTML = "Để có thể đạt được cân nặng như ý, các nàng phải trải qua vô vàn những thử thách khó khăn. Trong đó, cảm giác thèm ăn chính là “đối thủ” nặng ký nhất.";
    des[7].innerHTML = "Hiện tại, phương pháp eat clean đang được áp dụng đa dạng và bắt đầu xuất hiện nhiều hình thái tiêu cực, khiến cho phương pháp ăn tốt cho sức khỏe trở nên vô nghĩa, đôi khi là gây hại cho sức khỏe của chính họ. Vậy vì sao?";
    des[8].innerHTML = "Trong năm 2022, Teyvatfood hân hạnh đồng hành cùng diễn viên Anh Tú Wilson (vai Phúc trong phim Ròm).";
    des[9].innerHTML = "Với những người khó chế ngự cơn thèm ăn hay 'ngại' thể dục thể thao dẫn tới khó giảm cân, mùa hè chính là thời điểm thuận lợi để biến ước mơ sở hữu vóc dáng thon thả sớm trở thành hiện thực.";
    des[10].innerHTML = "Bảng tính calo từ Viện dinh dưỡng Việt Nam là bảng tính chính xác về chỉ số calo của từng loại thực phẩm mà chúng ta thường ăn hằng ngày. Với bảng tính này, bạn có thể cân đối bữa ăn của mình tốt hơn.";
    des[11].innerHTML = "Để tiếp sức cho các bác sĩ tuyến đầu tại bệnh viện Nhiệt Đới TP.HCM, TeyvatFood cùng các nhà hảo tâm đã cung cấp hơn 3,500 suất ăn với mong muốn có thể cùng cộng đồng vượt qua dịch bệnh.";
    des[12].innerHTML = "Những năm gần đây, chế độ ăn eat clean không còn là khái niệm lạ lẫm đối với mọi người, nhất là những người có thói quen sống lành mạnh. Tuy nhiên, không phải ai cũng hiểu rõ về eat clean. Cùng TeyvatFood tìm hiểu từ A đến Z chế độ ăn này nhé!";
    des[13].innerHTML = "Để tránh phải ăn kiêng do tăng cân ngay khi những ngày Tết vừa qua đi, bạn hãy tạo cho mình thói quen ăn uống lành mạnh ngay trong những ngày Tết này.";
    des[14].innerHTML = "TeyvatFood hân hạnh đồng hành cùng Techcombank Ho Chi Minh City International Marathon 2019 được diễn ra tại Empire City, Khu 2B, Thủ Thiêm từ 6/12/2019 đến 8/12/2019.";
    des[15].innerHTML = "Thói quen tiêu thụ thực phẩm bẩn, không rõ nguồn gốc,...cùng với chế độ ăn uống không cân đối là nguyên nhân hàng đầu tác động xấu đến sức khỏe của chúng ta. Thấu hiểu được những bộn bề, lo toan, trăn trở trong cuộc sống hàng ngày gần như chiếm hết quỹ thời gian của bạn. TeyvatFood với sứ mệnh trở thành người bạn đồng hành bảo vệ sức khỏe của bạn bằng những bữa ăn healthy food mỗi ngày.";
    des[16].innerHTML = "Chuẩn bị thực đơn giảm cân kỹ lưỡng giúp bạn nhận biết được sự khác biệt trong các chế độ ăn và từ đó cải thiện chất lượng thực đơn giảm cân để đạt được mục tiêu của mình.";
    des[17].innerHTML = "Đối với người tập gym, chế độ ăn uống là một trong những điều cần được chú trọng nhất. Sau đây sẽ là 7 nguyên tắc khi lựa chọn thực đơn cho người tập gym.";
    des[18].innerHTML = "Bạn có thắc mắc về quy trình sản xuất của TeyvatFood? Cùng xem quá trình sản xuất các phần ăn giao đến cho bạn mỗi ngày trong căn bếp đạt chuẩn VSATTP đầy chuyên nghiệp của TeyvatFood nào.";
    des[19].innerHTML = "Ngày nay, vấn đề bảo đảm sức khỏe và an toàn vệ sinh thực phẩm được toàn xã hội quan tâm hàng ngày. Chính điều này khiến tâm lý của nhiều người lo sợ về chất lượng và vệ sinh của thực phẩm mà họ đang tiêu thụ. Do đó, thực phẩm organic, các chế độ ăn healthy, eat clean dần trở thành xu hướng mới giúp người dân yên tâm hơn.";
}