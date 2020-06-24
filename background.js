console.log("Welcome to the Westlaw Enhancer");
chrome.browserAction.onClicked.addListener(IconClicked);
function IconClicked(tab)
{
	let msg = {
		txt : 'Begin text parse'
	}
	chrome.tabs.sendMessage(tab.id,msg);
}