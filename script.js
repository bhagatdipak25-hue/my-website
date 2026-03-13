unction generate(){

let topic = document.getElementById("topic").value;

let titles = [
topic + " | Amazing Video",
topic + " | Must Watch",
topic + " | Viral Video",
topic + " | Best Moments"
];

let randomTitle = titles[Math.floor(Math.random()*titles.length)];

let desc = "Watch this amazing video about " + topic + ". Like, share and subscribe for more.";

let tags = topic + ", youtube video, trending video";

document.getElementById("title").innerText = randomTitle;
document.getElementById("desc").innerText = desc;
document.getElementById("tags").innerText = tags;

}

