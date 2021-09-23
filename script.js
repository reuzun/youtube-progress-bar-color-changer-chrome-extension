var color_ball;
var color_untillBall;
var color_loaded;
var color_unloaded;

try{
	chrome.storage.sync.get("ball", function(data) {
		color_ball = data.ball ? data.ball : '#b86104';
		document.querySelectorAll('.ytp-scrubber-button').forEach( (el) => el.style.backgroundColor = color_ball )
	});

	chrome.storage.sync.get("untillBall", function(data) {
		color_untillBall = data.untillBall ?  data.untillBall : '#b86104';
		document.querySelectorAll('.ytp-play-progress.ytp-swatch-background-color').forEach( (el) => el.style.backgroundColor = color_untillBall )
	});

	chrome.storage.sync.get("loaded", function(data) {
		color_loaded = data.loaded ? data.loaded : '#1d2424';
		document.querySelectorAll('.ytp-load-progress').forEach( (el) => el.style.backgroundColor = color_loaded )
	});

	chrome.storage.sync.get("unloaded", function(data) {
		color_unloaded = data.unloaded ? data.unloaded : '#485454';
		document.querySelectorAll('.ytp-progress-list').forEach( (el) => el.style.backgroundColor = color_unloaded )
	});
}catch(err){/* Pass the error!*/};
	