
const p1Button = document.querySelector("#p1Plus");
const p2Button = document.querySelector("#p2Plus");

const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const resetButton = document.querySelector("#reset");

let p1 = 0;
let p2 = 0;

console.log("Start")

function checkScore(){
    if(p1 >= document.querySelector("#playTo").value){
       p1Button.disabled = true; 
       p2Button.disabled = true; 
       p1Score.style.color = "green";
       p2Score.style.color = "red";
       
       console.log("p1 WINS");
    }
    else if(p2 >= document.querySelector("#playTo").value){
       p1Button.disabled = true; 
       p2Button.disabled = true; 
       p1Score.style.color = "red";
       p2Score.style.color = "green";

       console.log("P2 WINS")
    }
    p1Score.innerText = String(p1);
    p2Score.innerText = String(p2);
    console.log(`p1 ${p1}\np2 ${p2}`);
}

p1Button.addEventListener("click",()=>{
    console.log("p1");
    p1++;
    document.querySelector("#playTo").disabled = true;
    checkScore();

}
)
p2Button.addEventListener("click",()=>{
    p2++;
    document.querySelector("#playTo").disabled = true;
    checkScore();
}
)
resetButton.addEventListener("click",()=>{
    p1 = 0;
    p2 = 0;
    document.querySelector("#playTo").disabled = false;
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1Score.style.color = "black";
    p2Score.style.color = "black";
    checkScore();
}
)


