function sendMail(){
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    };


const serviceID = "service_m7z6nyl";
const templateID = "template_k0jt5xg";

emailjs.send(serviceID, templateID, params)
.then((res) => {
    alert("Your Email Sent successfully !")
})
.catch((err) => console.log(err));

}