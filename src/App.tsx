import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './route/routes'
import { Theme } from './theme'

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
