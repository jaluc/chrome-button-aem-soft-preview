chrome.runtime.onInstalled.addListener(function(){
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions:[new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'pl-aem6.upc.biz', pathPrefix: '/cf'}
			})],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});