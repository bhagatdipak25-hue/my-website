function generate(){

let topic = document.getElementById("prompt").value;

let title = topic + " | Amazing AI Video";

let desc = "Watch this amazing video about " + topic;

let tags = topic + ", youtube video, trending";

document.getElementById("title").innerText = title;
document.getElementById("desc").innerText = desc;
document.getElementById("tags").innerText = tags;

}
