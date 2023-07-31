
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Place from "./components/Place";
import Product from "./components/Product";
import Special from "./components/Special";

function App() {
  return (
   <>
     <Header />
     <main className="main">
      <Hero />
      <Special />
      <Product />
      <Place />
      <Blog  />
     </main>
     <Footer />
    
    </>
  );
}

export default App;
