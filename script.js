function generate(){

var topic = document.getElementById("topic").value;

if(topic==""){
alert("Please enter topic");
return;
}

/* Titles */
var titles = [
"🔥 " + topic + " | Viral Video",
topic + " | Must Watch Video",
"Top Facts About " + topic,
topic + " | Amazing Story",
"Secrets of " + topic,
topic + " | You Won’t Believe This",
topic + " Explained in 5 Minutes",
topic + " | Trending Video",
"Truth About " + topic,
topic + " | Mind Blowing Video"
];

var title = titles[Math.floor(Math.random()*titles.length)];

/* Descriptions */
var desc = "In this video we explore " + topic +
". This topic is trending on the internet and many people want to know about it. Watch till the end for amazing information.";

/* Tags */
var tags = topic + ", " +
topic + " video, " +
topic + " youtube, " +
"viral video, trending video, youtube growth";

/* Video Idea */
var idea = "Create an engaging video explaining interesting facts about " + topic;

/* Hook */
var hook = "You will not believe what we discovered about " + topic + "!";

/* Thumbnail Text */
var thumbnail = topic + " SHOCKING FACTS";

/* Script */
var script = "Hello everyone! Today we are talking about " + topic +
". This topic has become very popular recently and there are many interesting things you should know.";

/* Output */
document.getElementById("title").innerText = title;
document.getElementById("desc").innerText = desc;
document.getElementById("tags").innerText = tags;
document.getElementById("idea").innerText = idea;
document.getElementById("hook").innerText = hook;
document.getElementById("thumbnail").innerText = thumbnail;
document.getElementById("script").innerText = script;

}




