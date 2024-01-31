
// ............add to cart logic.... . .. . . . . 


const productmenu = [
  {
    id: 1,
    title: "Elegance in Black Dress",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 1500,
    img: "./images/products/1.jpg",
    desc: `Make a statement with this elegant black dress. Perfect for formal events or a night out on the town`,
  },
  {
    id: 2,
    title: "Casual Comfort Denim Jeans",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 1200,
    img: "./images/products/2.jpg",
    desc: `Embrace casual comfort with these stylish denim jeans. Versatile for any day-to-day activity. `,
  },
  {
    id: 3,
    title: "Chic Streetwear Sneakers",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 1900,
    img: "./images/products/3.jpg",
    desc: `Step into style with these chic streetwear sneakers. Comfortable and on-trend for a fashionable look.`,
  },
  {
    id: 4,
    title: "Boho Vibes Maxi Skirt",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 1850,
    img: "./images/products/4.jpg",
    desc: `Channel boho vibes with this flowy maxi skirt. A perfect addition to your summer wardrobe. `,
  },
  {
    id: 5,
    title: "Classic White Button-Up Shirt",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 1600,
    img: "./images/products/5.jpg",
    desc: ` Elevate your wardrobe with a classic white button-up shirt. Timeless and versatile for various occasions.`,
  },
  {
    id: 6,
    title: "Athleisure Tracksuit Set",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 1300,
    img: "./images/products/6.jpg",
    desc: `Embrace the athleisure trend with this comfortable tracksuit set. Ideal for both workouts and casual outings.`,
  },
  {
    id: 7,
    title: "Cozy Knit Sweater",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 1000,
    img: "./images/products/7.jpg",
    desc: `In this moving memoir, Andrew Leland recounts his journey from sight to blindness, tracing his ever-shifting relationship `,
  },
  {
    id: 8,
    title: "Printed Floral Summer Dress",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 1100,
    img: "./images/products/8.jpg",
    desc: `Embrace the summer vibes with this printed floral dress. Light and breezy for a day under the sun.`,
  },
  {
    id: 9,
    title: "Smart Casual Blazer",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 1700,
    img: "./images/products/9.jpg",
    desc: ` Elevate your smart-casual game with this sophisticated blazer. Versatile for both work and social events.`,
  },
  {
    id: 10,
    title: "Boho Bliss Maxi Skirt",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 1850,
    img: "./images/products/10.jpg",
    desc: `Embrace bohemian vibes with this flowy maxi skirt. The vibrant patterns and lightweight fabric make it ideal for summer days or music festivals. Stay stylish and comfortable.`,
  },
  {
    id: 11,
    title: "Trendy Graphic Tee",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 1850,
    img: "./images/products/11.jpg",
    desc: `Make a statement with this trendy graphic tee. The unique design adds a playful touch to your casual wardrobe.`,
  },
  {
    id: 12,
    title: "Sleek Leather Jacket",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 1250,
    img: "./images/products/12.jpg",
    desc: `Channel your inner rock star with this sleek leather jacket. Edgy and stylish, it's a timeless piece that adds attitude to any outfit.`,
  },
  {
    id: 13,
    title: "Smart-Casual Sneakers",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 1450,
    img: "./images/products/13.jpg",
    desc: `Step out in style with our smart-casual sneakers. Whether you're dressing up or down, these sneakers add a modern flair to your look.`,
  },
  {
    id: 14,
    title: "Printed Silk Scarf",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 850,
    img: "./images/products/14.jpg",
    desc: ` Add a touch of sophistication to any outfit with our printed silk scarf. Versatile and eye-catching, it's a great accessory for all seasons.`,
  },
  {
    id: 15,
    title: "Retro-Inspired Sunglasses",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 1550,
    img: "./images/products/15.jpg",
    desc: `Channel vintage vibes with our retro-inspired sunglasses. Protect your eyes in style and make a fashion statement wherever you go.`,
  },
  {
    id: 16,
    title: "Vibrant Tie-Dye Hoodie",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 1110,
    img: "./images/products/16.jpg",
    desc: `Embrace the tie-dye trend with our vibrant hoodie. Cozy and full of personality, it's an excellent addition to your streetwear collection.`,
  },
  {
    id: 17,
    title: "Printed Palazzo Pants",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 1220,
    img: "./images/products/17.jpg",
    desc: `Elevate your casual look with our printed palazzo pants. Comfortable and chic, they're perfect for a day of shopping or a weekend getaway.`,
  },
  {
    id: 18,
    title: "Vintage-Inspired Midi Skirt",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 2300,
    img: "./images/products/18.jpg",
    desc: `Channel retro vibes with our vintage-inspired midi skirt. The perfect blend of classic and contemporary, this skirt is a wardrobe essential.`,
  },
  {
    id: 19,
    title: "Modern Geometric Print Blouse",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 1850,
    img: "./images/products/19.jpg",
    desc: `Make a statement with our modern geometric print blouse. Versatile for work or casual outings, this blouse adds a touch of artistry to your style.`,
  },
  {
    id: 20,
    title: "Effortless Wrap Dress",
    reviews: "⭐️⭐️⭐️⭐️⭐️",
    price: 5050,
    img: "./images/products/20.jpg",
    desc: `Embrace elegance with our effortless wrap dress. The flattering silhouette and soft fabric make it a versatile choice for various occasions.`,
  },
];

const productList = document.querySelector("#product-list");
let i=0;
// loading content 
window.addEventListener("DOMContentLoaded", function () {
  displayProductMenu(productmenu);
});

function displayProductMenu(array) {
  let displayBoard = array.map(function (productDetails,index) {
    return `<article class="menu-item">
    <div class="menu-item-img-container">
      <img src=${productDetails.img} alt="menu-item" class="menu-item-img">       
    </div>
    <div class="product-info">
    <h4 class="product-info-text">${productDetails.title}</h4>
    <h4 class="product-info-text">Rs.${productDetails.price}</h4>
    <p class="product-info-text">${productDetails.reviews}</p>
</div>
    <div class="item-desc">    
        <p class="item-text">${productDetails.desc}</p>
    </div>
    <button class="btn buy-btn" onclick='addtocart(${index})'>Add to cart</button>
</article>`
  }).join("");
  productList.innerHTML = displayBoard;
}
// ********************************* 


var cart =[];

function addtocart(i){
   cart.push({...productmenu[i]});
   displaycart();
}
function delElement(i){
   cart.splice(i, 1);
   displaycart();
}

function displaycart(){
   let j = 0, total=0;
   document.getElementById("count1").innerHTML=cart.length;
   document.getElementById("count2").innerHTML=cart.length;
   if(cart.length==0){
       document.getElementById('cartItem').innerHTML = "Your cart is empty";
       document.getElementById('total').innerHTML = "₹ "+0+".00";
   }
   else{
       document.getElementById('cartItem').innerHTML = cart.map((items)=>       {
                  
           total=total+items.price;
           document.getElementById("total").innerHTML = "₹ "+total+".00";
           return(
               `<div class='cart-item'>
               <div class='row-img'>
                   <img class='rowimg' src=${items.img}>
               </div>
               <p class="cart-text" >${items.title}</p>
               <p class="cart-text" >₹${items.price}.00</p>`+
               `<i class='fa fa-solid fa-trash' onclick='delElement(${j})'></i></div>`
           );
       }).join('');
   }

   
}
