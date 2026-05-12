import "./App.css";
import { Footer } from "./assets/Components/Footer/Footer";
import { Header } from "./assets/Components/Header/Header";
import { ItemListContainer } from "./assets/Components/ItemListContainer/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./assets/Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<h1>Carrito</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;