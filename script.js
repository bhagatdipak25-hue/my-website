function generate(){

var topic = document.getElementById("topic").value;

if(topic == ""){
alert("Please enter topic");
return;
}

var titles = [
topic + " | Amazing Video",
topic + " | Must Watch",
topic + " | Viral Video",
topic + " | Best Moments"
];

var randomTitle = titles[Math.floor(Math.random()*titles.length)];

var desc = "Watch this amazing video about " + topic + ". Like and subscribe.";

var tags = topic + ", youtube video, trending video";

document.getElementById("title").innerText = randomTitle;
document.getElementById("desc").innerText = desc;
document.getElementById("tags").innerText = tags;



