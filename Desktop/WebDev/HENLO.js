// fetch("https://catfact.ninja/breeds")
//     .then(res=>{
//         // console.log("Response", red);
//         return res.json();
//     }).then(
//         data=>{
//             console.log(data.data[0].breed)
//         }
//     ).catch(err=>{
//         console.log(err)
//     })
const getFact = async () => {
    try{
        const h = await axios.get("https://catfact.ninja/fact");
        console.log(h.data.fact);
    }
    catch{
        console.log("Imbissile");
    }
}
const m = async () =>{
    await getFact()
}
m()
console.log("FIN")