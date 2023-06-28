import "./App.css";

// config react router
import { BrowserRouter, Routes, Route } from "react-router-dom";


// components
import Navbar from "./components/Navbar";

// pages
import About from "./pages/About";
import Home from "./pages/Home"

function App() { 

  return (
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
      {/** 2 - links com react router */}
      <Navbar />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/about" element={<About /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
