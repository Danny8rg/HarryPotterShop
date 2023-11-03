import './App.css'
import { Route, Routes } from 'react-router-dom'
import BooksSample from '../Views/BooksSample'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<BooksSample /> } />

    </Routes>
    </>
  )
}

export default App
