import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("/Data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  }, []);

  console.log(products);

  if (loading) return <p>Cargando...</p>;

  return (
    <section>
      {/* <h1>Componente ItemListContainer</h1>
      <p>Este componente a futuro tendra logica y conexion a API</p>

      <button onClick={getProducts}>Traer productos</button>
      <button onClick={clearProducts}>Vaciar productos</button> */}

      <ItemList products={products} />
    </section>
  );
};
