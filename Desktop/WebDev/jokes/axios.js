// const cors = require('cors');
// app.use(cors());


const price = document.querySelector("#fact");
const btn = document.querySelector("#again");
const title = document.querySelector("#title");



// btn.addEventListener("click",()=>{
// fetch("https://catfact.ninja/fact").then((response) => {
//     response.json().then((data) => {

//         price.innerText=data.fact;
//         title.innerText="";
//         btn.innerText="AGAIN!";
//     });
// }).catch(
//     ()=>{price.innerText="Unabe to load a fact :("}
// )
// });


btn.addEventListener("click",()=>{
    fetch("https://computingapi.alexandersprin1.repl.co/joke").then((response) => {
        response.json().then((data) => {

            price.innerText=data;
            title.innerText="";
            btn.innerText="AGAIN!";
        });
    }).catch(
        (error)=>{price.innerText="Unabe to load a joke :(";
        console.log(error);}
    )
    }
    
    );

// console.log(JSON.parse(f).fact)

