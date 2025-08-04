let allProducts = document.querySelector(".products")
let getcart =localStorage.getItem("products")
if(getcart){
  let item = JSON.parse(getcart)
  drawproducts(item)
}
function drawproducts(products){
   let y = products.map((item)=>{
   return`
     <div class="product-item">
     <img src="${item.imageUrl}" alt="">
     <div class="product-desc">
     <h2>${item.title}</h2>
                    
     </div>
     <div class="product-action">
     <button class="Add-to-cart" onclick ="Remove(${item.id})">Remove</button>
     </div>
     </div>
        `
     })
   allProducts.innerHTML = y.join("")
}

