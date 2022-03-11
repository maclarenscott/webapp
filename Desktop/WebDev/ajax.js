const h1 = document.querySelector("h1");
const obj = JSON.parse('{"name":"mike","age":12}');
h1.innerText = obj.name;
