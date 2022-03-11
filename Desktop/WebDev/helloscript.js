/*const urlRequest = (url) => {
    return new Promise((resolve,reject) =>{
        if(true){
            return new Promise((resolve,reject) => {
                if (true){
                    reject("HAAAAAHAHAHAHAHAAA")
                 }
            }).then(
                () =>{
                    console.log("dsfghj");
                }
            ).catch(
                () => {
                    console.log("BRUUUUUUUUUHHHHHHHHH");
                }
            );
        }
        else
        {
            return reject("yay");
        }
    })
}
urlRequest('3');*/


const stupid = (url) => {
    return new Promise (
        (resolve,reject) =>{
            setTimeout(()=>{
                if (Math.random() < 0.5){
                    resolve("HHHHHHH");
                }
                else{
                    reject("NUDIBNFUJIBJF");
                }
            },2000);
        }
    )
}

stupid("bfhregu").then((data) => {
        console.log(`${data}\nOOOUUUIII OUUUII GINGA OOUUIII OOOUUUIII GINGA`);
    }).catch((err) => {
        console.log(err);
    });