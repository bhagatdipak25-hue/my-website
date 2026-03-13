async function generate(){

let topic=document.getElementById("topic").value;

if(topic==""){
alert("Enter topic");
return;
}

let res=await fetch("https://ai-server-gukc.onrender.com/ai?topic="+topic);

let data=await res.json();

let text=data.choices[0].message.content;

// response split
let parts=text.split("###");

document.getElementById("title").innerText=parts[1];
document.getElementById("desc").innerText=parts[2];
document.getElementById("tags").innerText=parts[3];
document.getElementById("idea").innerText=parts[4];
document.getElementById("script").innerText=parts[5];

}






