
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";

function App() {
  return (
    <main>
      {/* Uses props 'title', 'src' and 'alt' from Banner.jsx */}
      <Banner title="Chez vous, partout et ailleurs" src="/assets/home-banner.png" alt="Paysages cotier sous le brouillard"/>
      <Cards />
    </main>
  );
  
}

export default App;
