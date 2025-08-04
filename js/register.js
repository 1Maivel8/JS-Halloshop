let username =document.getElementById('username')
let email =document.getElementById('email')
let password =document.getElementById('password')
let RegisterBtn =document.getElementById('submit')

RegisterBtn.addEventListener('click',(e) =>{
    e.preventDefault()
    if(username.value=="" || email.value =="" || password.value ==""){
 Swal.fire({
  title: "Please Enter your Data",
  icon: "warning",
  draggable: true

});
    }else{
    localStorage.setItem("username", username.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("password", password.value)

     setTimeout(() =>{
    window.location ="login.html"
        } , 1500)
 }
})

let Show = document.getElementById('Show')
Show.addEventListener('click' ,()=>{
 password.type =Show.checked ? "text" : "password"
})