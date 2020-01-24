function injectHumbleScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "humble.js"});
    });
}

chrome.contextMenus.create({
  title: "Activate all Keys",
  "documentUrlPatterns":["*://www.humblebundle.com/*"],
  onclick: injectHumbleScript
});