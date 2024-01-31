// local reviews data
const reviews = [
    {
        id: 1,
        name: "Emily J.",
        membership: "Membership: Premium Style Maven",
        img: "https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_1280.jpg",
        text:
            "Absolutely thrilled with my recent TrendZen purchase! The quality of the fabric is superb, and the fit is just perfect. The website was easy to navigate, and the delivery was faster than expected. Will be coming back for more!",
        rating: "⭐️⭐️⭐️⭐️⭐️"
    },
    {
        id: 2,
        name: "anna johnson",
        membership: "Membership: Basic Trendsetter",
        img: "https://cdn.pixabay.com/photo/2017/01/03/09/18/woman-1948939_1280.jpg",
        text:
            "TrendZen has a fantastic collection of trendy and unique clothing. I found a stylish jacket that I couldn't resist. The ordering process was smooth, and the jacket arrived on time. Slight sizing issue, but their customer support was quick to assist",
            rating: "⭐️⭐️⭐️⭐️"
    },
    {
        id: 3,
        name: "peter jones",
        membership: "Membership: Premium Style Maven",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Impressed with the diversity in TrendZen's collections. From casual wear to elegant dresses, they have it all. The dress I ordered exceeded my expectations – the design, the fabric, everything. Will be recommending to my friends!",
            rating: "⭐️⭐️⭐️⭐️⭐️"
    },
    {
        id: 4,
        name: "Sophia Larrison",
        membership: "Membership: Premium Style Maven",
        img:
            "https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg",
        text:
            "Great experience shopping with TrendZen. The website layout is user-friendly, and I easily found what I was looking for. The prices are reasonable for the quality. Quick delivery and no hassle with returns. A reliable online store for fashion enthusiasts.",
            rating: "⭐️⭐️⭐️⭐️"
    },
    {
        id: 5,
        name: "Chris Beck",
        membership: "Membership: Basic Trendsetter",
        img:
            "https://cdn.pixabay.com/photo/2022/02/28/23/35/man-7040262_960_720.jpg",
        text:
            "TrendZen has an impressive range for men as well. I ordered a shirt, and it's now one of my favorites. The material is comfortable, and the fit is spot on. Appreciate the attention to detail in their clothing.",
            rating: "⭐️⭐️⭐️⭐️⭐️"
    },
    {
        id: 6,
        name: "Daniel Homes",
        membership: "Membership: Premium Style Maven",
        img:
            "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg",
        text:
            "TrendZen is my go-to for unique fashion finds. The blouse I purchased is both elegant and comfortable. The only reason for not giving five stars is the shipping took a bit longer than expected, but the quality of the item makes up for it.",
            rating: "⭐️⭐️⭐️⭐️"
    },
    {
        id: 7,
        name: "Michael Henry",
        membership: "Membership: Basic Trendsetter",
        img:
            "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg",
        text:
            "Good value for money. TrendZen offers trendy clothing without breaking the bank. I got a pair of jeans that are stylish and durable. Will explore more from their collection in the future.",
            rating: "⭐️⭐️⭐️⭐️⭐️"
    },
    {
        id: 8,
        name: " Daniela",
        membership: "Membership: Premium Style Maven",
        img:
            "https://cdn.pixabay.com/photo/2016/12/19/21/36/woman-1919143_1280.jpg",
        text:
            "I'm a repeat customer at TrendZen, and for good reason. The clothes are not only fashionable but also comfortable. The attention to detail in the designs makes me confident in my style choices. TrendZen has earned my loyalty.",
            rating: "⭐️⭐️⭐️⭐️"
    },
    {
        id: 9,
        name: "Jason Casper",
        membership: "Membership: Elite Fashionista VIP",
        img:
            "https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_1280.jpg",
        text:
            "The quality-to-price ratio at TrendZen is unmatched. I've bought clothes from various price ranges, and the durability and style have consistently exceeded my expectations. TrendZen is my fashion sanctuary!",
            rating: "⭐️⭐️⭐️⭐️⭐️"
    },
    {
        id: 10,
        name: "Sophia Larri",
        membership: "Membership: Premium Style Maven",
        img:
            "https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_1280.jpg",
        text:
            "TrendZen's customer-centric approach is what sets them apart. I had a small issue with one of my orders, and their support team resolved it swiftly and professionally. It's refreshing to see a brand that truly cares about its customers.",
            rating: "⭐️⭐️⭐️⭐️"
    },
    {
        id: 11,
        name: "bill anderson",
        membership: "Membership: Basic Trendsetter",
        img:
            "https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_1280.jpg",
        text:
            "TrendZen's commitment to staying ahead of the fashion curve is impressive. I love that I can find both classic pieces and the latest trends in one place. The website is user-friendly, making the shopping experience enjoyable.",
            rating: "⭐️⭐️⭐️⭐️⭐️"
    },
    {
        id: 12,
        name: "Michael",
        membership: "Membership: Elite Fashionista VIP",
        img:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        text:
            "As a guy who's into fashion, TrendZen is my secret weapon. The men's collection is trendy, modern, and fits my style perfectly. The buying process is smooth, and I appreciate the attention to detail in the clothing.",
            rating: "⭐️⭐️⭐️⭐️⭐️"
    },
    {
        id: 13,
        name: "Emily anderson",
        membership: "Membership: Premium Style Maven",
        img:
            "https://cdn.pixabay.com/photo/2017/03/17/04/07/woman-2150881_1280.jpg",
        text:
            "I absolutely love TrendZen! The quality of their clothing is exceptional, and their unique styles make me stand out in the crowd. The website is easy to navigate, and the shipping is quick. Definitely my go-to for trendy fashion!",
            rating: "⭐️⭐️⭐️⭐️"
    },
    {
        id: 14,
        name: "Alex k.",
        membership: "Membership: Elite Fashionista VIP",
        img:
            "https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_1280.jpg",
        text:
            "Shopping at TrendZen is like stepping into a fashion wonderland. The curated collections are so diverse, ensuring there's something for every occasion. The fit of the clothes is perfect, and I always receive compliments when wearing them. ",
            rating: "⭐️⭐️⭐️⭐️⭐️"
    },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const membership = document.getElementById("membership");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const membershipBtn = document.querySelector(".membership-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    membership.textContent = item.membership;
    info.textContent = item.text;
    stars.textContent = item.rating;
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    membership.textContent = item.membership;
    info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
// show random person
membershipBtn.addEventListener("click", function () {   

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});

