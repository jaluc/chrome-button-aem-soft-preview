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
			// And show the extension's page action
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});