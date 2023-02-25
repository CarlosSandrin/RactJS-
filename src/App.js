import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Nabvar from "./Components/Navbar/Navbar";



function App() {
  return (
    <div>
      <Nabvar />
      <ItemListContainer saludar={"Bienvenido!!"} />
      <Footer />
    </div>
  );
}

export default App;
