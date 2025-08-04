let username =document.getElementById('username')
let password =document.getElementById('password')
let loginBtn =document.getElementById('submit')

let getusername = localStorage.getItem("username")
let getpassword = localStorage.getItem("password")

loginBtn.addEventListener('click' , (e)=>{
  e.preventDefault()
  if(username.value=="" || password.value ==""){
  alert("Enter Your Data")
  }else{
  if(getusername.trim()===username.value.trim() && getpassword === password.value){
      setTimeout(() =>{
        window.location ="index.html"
           }, 1000)
    }else{
      alert("Username or password is wrong")
}
}
})

Show.addEventListener('click' ,()=>{
    password.type =Show.checked ? "text" : "password"
})