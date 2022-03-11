const btn = document.querySelector("#btn-1");
const johnny = document.querySelector("#btn-johnny");


const newDiv = () => {
    console.log("YOU CLICKED JOHNNY LMAO");
    const div = document.createElement("div");
    div.setAttribute("class","container");
    const p = document.createElement("p");
    p.setAttribute("inner-text","lorem Ipsum Dolor bnfhirebvhjerwlbvhjewrlbvhjewl;bvhjew;lbvhjkew;lbvhj");
    for (let i =1;i<5;i++){
        div.appendChild(p);
    }
    document.querySelector(".row").appendChild(div);
}



btn.addEventListener("click", () => {
    document.querySelector("#btn-johnny").style.display="inline-block";
})

johnny.addEventListener("click", newDiv);
