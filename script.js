async function generateVideo(){

let prompt = document.getElementById("prompt").value

let response = await fetch("https://api.replicate.com/v1/predictions",{

method:"POST",

headers:{
"Authorization":"r8_Cay63oEFAFdChu9yDWNc6rpnJDAoKjT2rICZI",
"Content-Type":"application/json"
},

body:JSON.stringify({

version:"video-model",

input:{
prompt:prompt
}

}