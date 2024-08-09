import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Description from "./components/Description";
import "../src/App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="margin-top container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path={`/product/:id`} element={<Description />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
