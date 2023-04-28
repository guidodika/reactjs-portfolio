import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
  }, []);

  return (
    <div className="app">
      <div className="warning-message">
        Website ini masih belum optimal dengan tampilan mobile
      </div>
      <div className="container-nav">
        <p className="brand">Guido Dika</p>
        <div>
          <div>
            <button onClick={() => setShow(!show)} className="navbar-toggle">
              Menu
            </button>
          </div>
          <div>
            {show ? (
              <nav className="nav">
                <Link to="/" className="nav-item">
                  Beranda
                </Link>
                <Link to="/about" className="nav-item">
                  Tentang
                </Link>
                <Link to="/work" className="nav-item">
                  Portfolio
                </Link>
                <Link to="/contact" className="nav-item">
                  Kontak
                </Link>
              </nav>
            ) : null}
          </div>
        </div>

        <nav className="nav">
          <Link to="/" className="nav-item">
            Beranda
          </Link>
          <Link to="/about" className="nav-item">
            Tentang
          </Link>
          <Link to="/work" className="nav-item">
            Portfolio
          </Link>
          <Link to="/contact" className="nav-item">
            Kontak
          </Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="work" element={<Work />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
