function adduser() {
    user_name=document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);
window.location="Lets_Chat_Web_App_room.html";
}