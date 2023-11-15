// node packages
import { Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home/Home'
import Project from './pages/Project/Project'

import './App.css'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/project' element={<Project />} />
            </Routes>
        </>
    )
}

export default App
