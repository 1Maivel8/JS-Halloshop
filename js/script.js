let links = document.getElementById("links")
let userData = document.getElementById("user-info")
let user = document.getElementById("user")

if(localStorage.getItem("username")){
 links.remove()
 userData.style.display ="flex"
 user.innerHTML = localStorage.getItem("username")
 user.style.textTransform = "capitalize";
}

let allProducts = document.querySelector(".products")
let products = [
    {
    id:1,
    title:"Scary Home Decor",
    paragraph:"Perfect spooky decor for a haunted home",
    imageUrl:"images/Hallo1.jpg"

    },
    {
    id:2,
    title:"Costumes that scare",
    paragraph:"Fright in every costume",
    imageUrl:"images/costumes.jpg"

    },
{
    id:3,
    title:"Halloween Candle",
    paragraph:"Creepy candles for Halloween nights",
    imageUrl:"images/candles.jpg"
},
{
    id:4,
    title:"Halloween Jack-o’-Lantern Pumpkin",
    paragraph:"The Halloween icon — glowing and grinning",
    imageUrl:"images/Jack.jpg"

},
{
    id:5,
    title:"Halloween Accessories",
    paragraph:"Scary, stylish, and ready for fright night",
    imageUrl:"images/jewelry.jpg"
},
{
    id:6,
    title:"Spooky Nail Designs",
    paragraph:"Nail art that screams spooky",
    imageUrl:"images/nail.jpg"
},
{
    id:7,
    title:"Halloween Party Toys",
    paragraph:"Fun and fright packed in every toy",
    imageUrl:"images/toys.jpg"
},
{
    id:8,
    title:"Spooky Skeleton Decor",
    paragraph:"Creepy bones for spooky homes",
    imageUrl:"images/Skeleton.jpg"
}

]
function drawproducts(){
    let y = products.map((item)=>{
        return`
    <div class="product-item">
    <img src="${item.imageUrl}" alt="">
    <div class="product-desc">
    <h2>${item.title}</h2>
    <p>${item.paragraph}</p>
                    
    </div>
    <div class="product-action">
    <button class="Add-to-cart" onclick ="Addtocart(${item.id})">Add To Cart</button>
    </div>
    </div>
        `
     })
        allProducts.innerHTML = y.join("")
}
drawproducts()



let viewproductsDiv = document.querySelector(".viewproduct div")
let badge = document.querySelector(".badge")
let addeditem =localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')):[];
if(addeditem){
    addeditem.map(item =>{
    viewproductsDiv.innerHTML +=`<p>${item.title}</p>`

    })
    badge.style.display ="block"
    badge.innerHTML =addeditem.length
}
function Addtocart(id){
 let chooseItem =products.find((item)=>item.id===id)
 viewproductsDiv.innerHTML +=`<p>${chooseItem.title}</p>`

 addeditem = [...addeditem, chooseItem]
 localStorage.setItem("products", JSON.stringify(addeditem))
 let viewproductsDivp = document.querySelectorAll(".viewproduct div p")
 badge.innerHTML =viewproductsDivp.length

     viewproduct.style.display ="block"
     badge.style.display ="block"
}

let cart =document.querySelector(".cart")
let viewproduct =document.querySelector(".viewproduct")

cart.addEventListener('click',()=>{
if(viewproduct.innerHTML !=""){
    if(viewproduct.style.display =="block"){
        viewproduct.style.display ="none"
    }else{
        viewproduct.style.display ="block"
    }
}
})
