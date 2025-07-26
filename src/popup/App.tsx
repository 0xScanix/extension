import HelloWorld from '@/components/HelloWorld'
import { ThemeProvider } from "@/components/theme/provider"
import './App.css'
import { CoreProvider } from '@/components/provider'

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CoreProvider>
        <HelloWorld />
      </CoreProvider>
    </ThemeProvider>
  )
}
