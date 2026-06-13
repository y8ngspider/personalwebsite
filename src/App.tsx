import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import ChessPage from './pages/ChessPage'

export default function App() {
  return (
    <div className="min-h-screen text-stone-600">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/interests/chess" element={<ChessPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
