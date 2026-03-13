async function generate(){

let topic=document.getElementById("topic").value;

if(topic==""){
alert("Enter topic");
return;
}

let res=await fetch("https://ai-server-gukc.onrender.com/ai?topic="+topic);

let data=await res.json();

document.getElementById("title").innerText=data.choices[0].message.content;

}

}






