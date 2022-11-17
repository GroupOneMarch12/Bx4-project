import "./App.css";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Industries from "./Component/Industries";
import Services from "./Component/Services";
import Footer from "./Component/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Services />

              <Industries />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Industries" element={<Industries />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
