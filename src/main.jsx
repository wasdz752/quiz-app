import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from '../contexts/ThemeProvider.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import QuizHtml from '../components/QuizHtml.jsx'
import QuizCss from "../components/QuizCss.jsx"
import QuizJs from "../components/QuizJs.jsx"
import QuizAcc from "../components/QuizAcc.jsx"
import CorrectProvider from '../contexts/ReducerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CorrectProvider>
          <Routes>
            <Route path="/HTML" element={<QuizHtml />}/>
            <Route path='/CSS' element={<QuizCss />} />
            <Route path='/JS' element={<QuizJs />}/>
            <Route path='/Accessibility' element={<QuizAcc />}/>
            <Route path="/" element={<App />} />
          </Routes>
        </CorrectProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
