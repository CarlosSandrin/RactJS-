import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Nabvar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Nabvar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:categoryName" element={<ItemListContainer />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<h1> error 404: Not found </h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
