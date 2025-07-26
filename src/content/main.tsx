import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './views/App.tsx'

const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

document.addEventListener('mouseup', () => {
  const selectedText = window.getSelection()?.toString().trim()

  if (selectedText) {
    // console.log('[CRXJS] Text selected:', selectedText)

    chrome.runtime.sendMessage({
      type: 'SELECTION_UPDATE',
      text: selectedText,
    })
  }
})

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
