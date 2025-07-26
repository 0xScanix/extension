import { EXTENSION_CONTEXT_MENU_ID, EXTENSION_NAME } from "./lib/constants"

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: EXTENSION_CONTEXT_MENU_ID,
        title: `Search with ${EXTENSION_NAME}`,
        contexts: ['selection', 'page']
    })
})

chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === EXTENSION_CONTEXT_MENU_ID) {
        if (info.selectionText) {
            chrome.storage.local.set({ selectedText: info.selectionText })
        }

        chrome.windows.create({
            url: chrome.runtime.getURL('src/popup/index.html'),
            type: 'popup',
            width: 420,
            height: 600,
        })
    }
})
