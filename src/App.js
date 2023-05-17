import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Pages import
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Housing from "./pages/Housing/Housing";
//Components import
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/housing/:id" element={<Housing />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App

