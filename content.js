chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendresponse)
{
	console.log(message.txt);
	let links = document.getElementsByTagName('a');
	console.log(links.length + ' links identified');
	for (var i = 0; i < links.length; i++)
	{
		if (links[i].matches('.co_rFlagLg')) {
			links[i+1].style['background-color'] = '#FF726F';
			console.log('R');
		}	

		if (links[i].matches('.co_yFlagLg')) {
			links[i+1].style['background-color'] = '#FFFF00';
			console.log('Y');
		}
	console.log('skip');
	}
}