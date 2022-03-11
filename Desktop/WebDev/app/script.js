

const body = document.querySelector("body");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () =>{
    let color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
    body.style.backgroundColor= color;
    console.log(color);

})