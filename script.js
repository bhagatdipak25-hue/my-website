function generate(){

var topic = document.getElementById("topic").value;

var title = "🔥 " + topic + " | Viral Video";

var desc = "Watch this amazing video about " + topic;

var tags = topic + ", youtube video, trending";

document.getElementById("title").innerText = title;
document.getElementById("desc").innerText = desc;
document.getElementById("tags").innerText = tags;

}


