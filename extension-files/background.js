// When the extension is installed or updated …
chrome.runtime.onInstalled.addListener(function(){
	// Replace all rules …
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		// With a new rule …
		chrome.declarativeContent.onPageChanged.addRules([{
			// That fires when:
			conditions:[new chrome.declarativeContent.PageStateMatcher({
				// a Page's URL indicates PL Author in Classic Mode (AEM 6.1)
				pageUrl: {hostEquals: 'pl-aem6.upc.biz', pathPrefix: '/cf'}
			})],
			// And show the extension's page action (an icon in the main Chrome toolbar)
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});
function openPreview(){
	// Get the currently selected tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var current = tabs[0];
		// Extract url of the current tab from the tab object
		var newUrl = current.url;
		// define the proper wcm mode parameter
		var addParam ="?wcmmode=disabled";
		// use regexp to match cf#/
		var findCf = /cf#\//;
		// remove cf#/ part from the URL
		newUrl = newUrl.replace(findCf, "");
		// split the url to remove any part starting with ?
		newUrl = newUrl.split('?');
		// append the wcm mode param to the remaining URL string 
		newUrl = newUrl[0]+addParam;
		// Open a new incognito window containing current tab's URL
		chrome.windows.create({url: newUrl, incognito: true});
    });
}
// Set up a click handler to open a new window
chrome.pageAction.onClicked.addListener(openPreview);