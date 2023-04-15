// DANG KY---------------------------------------------------
let new_user = document.getElementsByClassName('user');
let new_pass = document.getElementsByClassName('password');
// khoi tao user, password, email
if(localStorage.getItem('user')== null){
    localStorage.setItem('user',"[]");
}
if(localStorage.getItem('password')== null){
    localStorage.setItem('password',"[]");
}
if(localStorage.getItem('email')== null){
    localStorage.setItem('email',"[]");
}
// reset bien
// localStorage.removeItem('user');
// localStorage.removeItem('password');
// localStorage.removeItem('email');
function save(){
    let user_list = JSON.parse(localStorage.user);
    let email_list = JSON.parse(localStorage.email);   
    for(i=0;i<user_list.length;i++)
    {
        if(new_user[1].value == user_list[i]){
            return alert("TÀI KHOẢN ĐÃ TỒN TẠI");
        }
        if(new_pass[2].value == email_list[i]){
            return alert("EMAIL ĐÃ ĐƯỢC SỬ DỤNG");
        }
    }
    // them user
    var add_user = JSON.parse(localStorage.getItem('user'));
    add_user.push(new_user[1].value);
    localStorage.setItem('user',JSON.stringify(add_user));
    // them password
    var add_pass = JSON.parse(localStorage.getItem('password'));
    add_pass.push(new_pass[1].value);
    localStorage.setItem('password',JSON.stringify(add_pass));
    // them email
    var add_mail = JSON.parse(localStorage.getItem('email'));
    add_mail.push(new_pass[2].value);
    localStorage.setItem('email',JSON.stringify(add_mail));
    window.location.assign("Login_Register_Page.html");
    return alert("ĐĂNG KÝ THÀNH CÔNG. VUI LÒNG ĐĂNG NHẬP");
}
// DANG NHAP---------------------------------------------------
function login_account(){
    let user_list = JSON.parse(localStorage.user);
    let pass_list = JSON.parse(localStorage.password);
    let log_user = new_user[0].value;
    let log_pass = new_pass[0].value;
    for (i=0;i<user_list.length;i++){
        if(log_user == user_list[i])
        {
            if(log_pass == pass_list[i]){
                window.location.assign("../index_VN.html");
                localStorage.setItem('log-status',"logged");
                localStorage.setItem('logged-user',log_user);
                return alert("ĐĂNG NHẬP THÀNH CÔNG");
            }
            else{
                return alert("SAI MẬT KHẨU");
            }
        } 
    }
    return alert("KHÔNG TÌM THẤY TÀI KHOẢN");  
}
// change-to-user-----------------------------
let user_menu = document.getElementById("login_register");
let user_menu_mobile = document.getElementById("login_register_mobile");
if(localStorage.getItem("log-status") == "logged"){
    change_to_user_menu();   
}
function change_to_user_menu(){
    user_menu.innerHTML = "<div class='welcome'>Chào Mừng Trở Lại<br><font>" + localStorage.getItem("logged-user") + "</font></div><div class='avatar' onclick='show_user_menu()'><img src='rsc/image/character/diluc.webp' alt='' id='logo_img'><div class='dropdown_avatar_content'><a href='#' class='avatar_content_item'><i class='fa-solid fa-user'></i>Hồ Sơ Tài Khoản</a><div class='avatar_content_item' id='off' onclick='log_out()'><i class='fa-solid fa-power-off'></i>Thoát Đăng Nhập</div></div></div>";
    user_menu_mobile.style.flexDirection ="column";
    user_menu_mobile.style.alignItems = "center";
    user_menu_mobile.style.marginBottom = "5%";
    user_menu_mobile.innerHTML = "<div class='avatar'><img src='rsc/image/character/diluc.webp' alt='' id='logo_img'></div><div class='welcome'>Chào Mừng Trở Lại<br><font>" + localStorage.getItem("logged-user") + "</font></div>";
}
function show_user_menu(){
    let user_menu_content = document.getElementsByClassName("dropdown_avatar_content");
    user_menu_content[0].classList.toggle('show');
}
function log_out(){
    user_menu.innerHTML = "<div id='register'><a href='Login_Register_Page.html' id='register_text'>Đăng Ký</a></div><div id='login'><a href='Login_Register_Page.html' id='login_text'>Đăng Nhập</a></div>";
    user_menu_mobile.innerHTML = "<div id='register'><a href='Login_Register_Page.html' id='register_text_mobile'>Đăng Ký</a></div><div id='login'><a href='Login_Register_Page.html' id='login_text_mobile'>Đăng Nhập</a></div>";
    user_menu_mobile.style.flexDirection ="row";
    user_menu_mobile.style.alignItems = "center";
    user_menu_mobile.style.marginBottom = "15%";
    localStorage.removeItem("log-status");
    localStorage.removeItem("logged-user");
}