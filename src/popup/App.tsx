import HelloWorld from '@/components/HelloWorld'
import { ThemeProvider } from "@/components/theme/provider"
import { CoreProvider } from '@/components/provider'

import './App.css'

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CoreProvider>
        <HelloWorld />
      </CoreProvider>
    </ThemeProvider>
  )
}
