chrome.action.onClicked.addListener((tab) => {
	if (!tab.id || !tab.url) return;

	openCurrentPageInNewTab(tab.url);
});

const openCurrentPageInNewTab = (url: string) => {
	chrome.tabs.create({ url: url });
};
