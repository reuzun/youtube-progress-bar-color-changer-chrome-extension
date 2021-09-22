chrome.storage.sync.get("untillBall", function(data) {
	document.getElementById("untillBall").value = data.untillBall ?  data.untillBall : '#b86104';
});

chrome.storage.sync.get("ball", function(data) {
	document.getElementById("ball").value = data.ball ? data.ball : '#b86104';
});

chrome.storage.sync.get("loaded", function(data) {
	document.getElementById("loaded").value = data.loaded ? data.loaded : '#1d2424';
});

chrome.storage.sync.get("unloaded", function(data) {
	document.getElementById("unloaded").value = data.unloaded ? data.unloaded : '#485454';
});

let btn = document.getElementById("submitButton");

btn.onclick = async ()=>{
	let untillBall = document.getElementById("untillBall").value;
	let ball = document.getElementById("ball").value;
	let loaded = document.getElementById("loaded").value;
	let unloaded = document.getElementById("unloaded").value;
	
	chrome.storage.sync.set({ "untillBall": untillBall, "ball": ball, "loaded": loaded, "unloaded": unloaded }, function(){
	});
};
