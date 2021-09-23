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

setInterval(f, 1500);

