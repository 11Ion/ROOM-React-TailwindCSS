import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Page404 from "./pages/404";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() =>{
      setLoading(false);
    },500)
  },[]);

  return (
    <div className="App flex flex-col overflow-hidden">
      {
        loading ? 
        <div className="w-full flex justify-center overflow-hidden items-center h-screen bg-slate-950">
        <ClipLoader
        loading={loading}
        size={100}
        color="#46856E"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
      :
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
      }
  </div>
  );
}

export default App;
