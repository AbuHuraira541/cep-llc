import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AdminLogin from './pages/AdminLogin';
import CRMDashboard from './pages/CRMDashboard';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Industries from './pages/Industries.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import Portfolio from './pages/Portfolio.jsx'
import FAQPage from './pages/FAQPage.jsx'
import Contact from './pages/Contact.jsx'
import Quote from './pages/Quote.jsx'
import Legal from './pages/Legal.jsx'
import Blog from './pages/Blog.jsx'
import BlogArticle from './pages/BlogArticle.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
          <Route path="/insights" element={<Blog />} />
          <Route path="/insights/:slug" element={<BlogArticle />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/privacy-policy" element={<Legal title="Privacy Policy" />} />
          <Route path="/terms" element={<Legal title="Terms & Conditions" />} />
          <Route path="*" element={<Home />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/crm" element={<CRMDashboard />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
