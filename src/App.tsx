import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar'
import { TodosPage } from './pages/TodosPage'
import { AboutPage } from './pages/AboutPage'
import { element } from './../../$RECYCLE.BIN/S-1-5-21-480827017-2928661891-3409707523-1001/$RPF5TZ8/@types/prop-types/index.d';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route element={<TodosPage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
