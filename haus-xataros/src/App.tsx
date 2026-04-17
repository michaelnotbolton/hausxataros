import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import DragQueensGuide from './pages/DragQueensGuide'
import StudioNotes from './pages/StudioNotes'
import ArticleDetailPage from './pages/ArticleDetailPage'
import HireUs from './pages/HireUs'
import Wiki from './pages/Wiki'
import WikiEntryPage from './pages/WikiEntryPage'
import Support from './pages/Support'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/drag-queens-guide" element={<DragQueensGuide />} />
          <Route path="/drag-queens-guide/article/:slug" element={<ArticleDetailPage />} />
          <Route path="/studio-notes" element={<StudioNotes />} />
          <Route path="/studio-notes/article/:slug" element={<ArticleDetailPage />} />
          <Route path="/article/:slug" element={<ArticleDetailPage />} />
          <Route path="/hire-us" element={<HireUs />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/wiki/:slug" element={<WikiEntryPage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
