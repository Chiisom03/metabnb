import Banner from "./components/Banner";
import Brands from "./components/Brands";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Inspirations from "./components/Inspirations";

function App() {
  return (
    <div className="font-rose">
      <Header />
      <Hero />
      <Brands />
      <Inspirations />
      <Banner />
    </div>
  );
}

export default App;
