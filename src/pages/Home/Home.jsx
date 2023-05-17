
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import "./Home.css";

function App() {
  return (
    <main>
      <Banner title="Chez vous, partout et ailleurs" src="/assets/home-banner.png" alt="Paysages cotier sous le brouillard"/>
      <Cards />
    </main>
  );
  
}

export default App;
