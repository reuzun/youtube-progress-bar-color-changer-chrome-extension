var color_ball;
var color_untillBall;
var color_loaded;
var color_unloaded;

try{
	chrome.storage.sync.get("ball", function(data) {
		color_ball = data.ball ? data.ball : '#b86104';
		document.getElementsByClassName('ytp-scrubber-button')[0].style.backgroundColor = color_ball // for button
	});

	chrome.storage.sync.get("untillBall", function(data) {
		color_untillBall = data.untillBall ?  data.untillBall : '#b86104';
		document.getElementsByClassName('ytp-play-progress ytp-swatch-background-color')[0].style.backgroundColor = color_untillBall // until button
	});

	chrome.storage.sync.get("loaded", function(data) {
		color_loaded = data.loaded ? data.loaded : '#1d2424';
		document.getElementsByClassName('ytp-load-progress')[0].style.backgroundColor = color_loaded // loaded place
	});

	chrome.storage.sync.get("unloaded", function(data) {
		color_unloaded = data.unloaded ? data.unloaded : '#485454';
		document.getElementsByClassName('ytp-progress-list')[0].style.backgroundColor = color_unloaded; //unloaded place
	});
}catch(err){/* Pass the error!*/};
	





/*
	try{
		document.getElementsByClassName('ytp-scrubber-button')[0].style.backgroundColor = "#b86104" // for button
		document.getElementsByClassName('ytp-play-progress ytp-swatch-background-color')[0].style.backgroundColor = "#b86104" // until button
		document.getElementsByClassName('ytp-progress-list')[0].style.backgroundColor = "#485454"; //unloaded place
		document.getElementsByClassName('ytp-load-progress')[0].style.backgroundColor = "#1d2424" // loaded place
	}catch(err){
		// Styling is done!
		console.log(err)
	}
	

*/

			



