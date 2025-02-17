import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';
// import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Contact from './pages/Contact';
import GetQuote from './pages/GetQuote';
import Specifications from './pages/Specifications';
import Login from './pages/login';
import AdminPage from './pages/adminpage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-primary-950 shadow-lg fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <span className="text-2xl font-bold text-primary-300">VTI</span>
                  
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-300 hover:text-primary-300 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link to="/what-we-do" className="text-gray-300 hover:text-primary-300 px-3 py-2 rounded-md text-sm font-medium">
                  What We Do
                </Link>
                <Link to="/services" className="text-gray-300 hover:text-primary-300 px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </Link>
                <Link to="/specifications" className="text-gray-300 hover:text-primary-300 px-3 py-2 rounded-md text-sm font-medium">
                  Specifications
                </Link>
                <Link to="/gallery" className="text-gray-300 hover:text-primary-300 px-3 py-2 rounded-md text-sm font-medium">
                  Gallery  
                </Link>
                {/* Commenting out the Products link */}
                {/* <Link to="/products" className="text-gray-300 hover:text-primary-300 px-3 py-2 rounded-md text-sm font-medium">
                  Products
                </Link> */}
                <Link to="/contact" className="text-gray-300 hover:text-primary-300 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
                <Link to="/get-quote" className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700">
                  Get Quote
                </Link>
                <Link to="/login" className="text-gray-300 hover:text-primary-300 px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-primary-300 focus:outline-none"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-primary-900">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary-300">
                  Home
                </Link>
                <Link to="/what-we-do" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary-300">
                  What We Do
                </Link>
                {/* Commenting out the Products link in mobile navigation */}
                {/* <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary-300">
                  Products
                </Link> */}
                <Link to="/specifications" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary-300">
                  Specifications
                </Link>
                <Link to="/gallery" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary-300">
                  Gallery
                </Link>
                <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary-300">
                  Services
                </Link>
                <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary-300">
                  Contact
                </Link>
                <Link to="/get-quote" className="block px-3 py-2 rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700">
                  Get Quote
                </Link>
                <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary-300">
                  Login
                </Link>
              </div>
            </div>
          )}
        </nav>

        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            {/* Commenting out the Products route */}
            {/* <Route path="/products" element={<Products />} /> */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-quote" element={<GetQuote />} />
            <Route path="/specifications" element={<Specifications />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adminpage" element={<AdminPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;