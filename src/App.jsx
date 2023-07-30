
import Header from "./components/Header";
import Hero from "./components/Hero";
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
     </main>
    </>
  );
}

export default App;
