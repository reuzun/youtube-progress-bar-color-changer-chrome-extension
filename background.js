

let f = () => {
chrome.tabs.query(
  {currentWindow: true, active : true},
  async function(tabArray){
	try{
		chrome.tabs.executeScript(tabArray[0].id,{
			"allFrames" : true,
			file: 'script.js'
	}, _=>{
			let e = chrome.runtime.lastError;
			if(e !== undefined){
				//console.log(tabId, _, e);
			}
		});
	}catch(err){console.log('error passed!')}
  }
)
};

//f();


setInterval(f, 1500);

/*
chrome.browserAction.onClicked.addListener(function(tab) {
	console.log('clicked!');
	console.log(tab);
	
	chrome.tabs.executeScript(tab.id,{
    "allFrames" : true,
    file: 'script.js'
},function(results){
    //Handle any results
	console.log(results);
});*/
	
	/*try{
	chrome.webNavigation.getAllFrames({tabId:tab.id},function(frames){
			//Do what you want with the array of frame descriptor Objects
			console.log(frames);
	});
	}catch(err){console.log('error passed!')}*/
	
	
//});


/*chrome.tabs.executeScript(4,{
    frameId: 4,
    file: 'script.js'
},function(results){
    //Handle any results
	console.log(results);
});*/
