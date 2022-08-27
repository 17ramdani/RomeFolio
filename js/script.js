//script.js
function SendMail(){
var params = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message :  document.getElementById("user_dtls").value
}
emailjs.send("service_tpp4jpx", "template_4smbqi3", params).then(function (res) {
    alert("Success!" + res.status);
})
}