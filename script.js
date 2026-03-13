function generate(){

var topic = document.getElementById("topic").value;

var title = "🔥 " + topic + " | Viral Video";

var desc = "Watch this amazing video about " + topic;

var tags = topic + ", youtube video, trending";

var idea = "Create an interesting video explaining " + topic;

var script = "Today we are talking about " + topic + ". This topic is very interesting and many people search for it on YouTube.";

document.getElementById("title").innerText = title;
document.getElementById("desc").innerText = desc;
document.getElementById("tags").innerText = tags;
document.getElementById("idea").innerText = idea;
document.getElementById("script").innerText = script;

}



