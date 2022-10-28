import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
