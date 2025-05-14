import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './components/theme-provider.js'
import App from './Pages/App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Redirect from './Pages/Redirect.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/Redirect" element={<Redirect/>}/>
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </body>
      </html>
    </>
</StrictMode>
)
