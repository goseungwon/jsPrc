const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.querySelector("#bgImg");

bgImage.style=`background-image: url(img/${chosenImage})`




// const bgImage = `img/${chosenImage}`;
// const bodyTag = document.querySelector("body");
// bodyTag.style.backgroundImage=`url(${bgImage})`
