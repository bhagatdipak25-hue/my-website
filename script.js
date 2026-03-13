async function generate(){

let topic = document.getElementById("topic").value;

let response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=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",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[{parts:[{text:"Give YouTube title and description about "+topic}]}]
})
});

let data = await response.json();

document.getElementById("title").innerText =
data.candidates[0].content.parts[0].text;

}


