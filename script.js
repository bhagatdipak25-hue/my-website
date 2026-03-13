function generate(){

var topic = document.getElementById("topic").value;

var titles = [
"🔥 " + topic + " | You Won’t Believe This",
topic + " | Viral Video Idea",
topic + " | Amazing Facts",
topic + " | Must Watch Video"
];

var randomTitle = titles[Math.floor(Math.random()*titles.length)];

var desc = "In this video we explore " + topic + ". Watch till the end for amazing insights.";

var tags = topic + ", viral video, trending video, youtube growth";

var idea = "Create a video showing interesting facts about " + topic;

var script = "Today we are talking about " + topic + ". This topic is very interesting and many people want to know about it.";

document.getElementById("title").innerText = randomTitle;
document.getElementById("desc").innerText = desc;
document.getElementById("tags").innerText = tags;
document.getElementById("idea").innerText = idea;
document.getElementById("script").innerText = script;

}

