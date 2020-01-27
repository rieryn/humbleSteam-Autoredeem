function injectHumbleRevealScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "humbleReveal.js"});
    });
}
function injectHumbleActivationScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "humbleActivate.js"});
    });
}

chrome.contextMenus.create({
  title: "Reveal all Keys",
  "documentUrlPatterns":["*://www.humblebundle.com/*"],
  onclick: injectHumbleRevealScript
});

chrome.contextMenus.create({
    title: "Activate all Keys",
    "documentUrlPatterns":["*://www.humblebundle.com/*"],
    onclick: injectHumbleActivationScript
});
