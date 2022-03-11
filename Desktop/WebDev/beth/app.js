
const images = document.querySelectorAll("#gallery img");
const gallery = document.querySelector("#gallery");
const body = document.querySelector("body");

console.log(gallery)

for(let img of images){
    console.log(img)
    img.addEventListener("click",()=>{
        let newMod = document.createElement("button");
        newMod.innerText=img.src;
        body.appendChild(newMod)
        console.log(img.src);
    })
}