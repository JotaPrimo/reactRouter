import "./App.css";

// config react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import About from "./pages/About";
import Home from "./pages/Home"

function App() { 

  return (
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/about" element={<About /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
