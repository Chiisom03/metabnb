import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Places from "./pages/Places";
import Modal from "./components/Modal";

function App() {
  const showModal = () => {
    return false;
  };

  return (
    <div className="font-rose">
      <Header showModal={showModal()} />
      <Modal showModal={showModal()} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
