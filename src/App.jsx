import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import SoftwarePage from './pages/SoftwarePage'

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
            </>
          }
        />
        <Route path="/software" element={<SoftwarePage />} />
      </Routes>
    </>
  )
}
