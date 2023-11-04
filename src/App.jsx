import "./App.css";

import logoNetflix from "./assets/Logonetflix.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";

import data from "./assets/data.json";

function App() {
  return (
    <>
      <Header image={logoNetflix} />
      <Categories data={data} />
      <Footer text="Netflix homepage lookalike made with React @ Le Reacteur by Indra" />
    </>
  );
}

export default App;
