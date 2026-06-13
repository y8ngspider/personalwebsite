import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import BlogPostPage from './pages/BlogPostPage'
import ChessPage from './pages/ChessPage'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/interests/chess" element={<ChessPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
