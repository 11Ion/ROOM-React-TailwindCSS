import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Page404 from "./pages/404";
function App() {
  return (
    <div className="App flex flex-col">
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </div>
  );
}

export default App;
