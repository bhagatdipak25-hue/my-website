import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/ai", async (req,res)=>{

let topic=req.query.topic;

let prompt=`Create YouTube content about ${topic}

###Titles
Give 10 viral YouTube titles

###Description
Write SEO description

###Tags
Give 20 YouTube tags

###Idea
Give video idea

###Script
Write short video script
`;

let response=await fetch("https://api.openai.com/v1/chat/completions",{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer "+process.env.OPENAI_KEY
},
body:JSON.stringify({
model:"gpt-4.1-mini",
messages:[
{role:"user",content:prompt}
]
})
});

let data=await response.json();

res.json(data);

});

app.listen(3000);
