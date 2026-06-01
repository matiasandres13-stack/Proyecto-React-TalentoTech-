import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "../../services/productsService";

// El Cerebro: es nuestro punto de partida. Como componente contenedor, 
// su responsabilidad es manejar los datos.  Se encarga de cargar los productos 
// desde un archivo JSON y mantener el estado de los productos y la carga. 
// Utiliza el hook useEffect para realizar la carga de datos al montar el componente 
// y el hook useState para almacenar los productos y el estado de carga. Si los 
// datos están cargando, muestra un mensaje de "Cargando...". Una vez que los datos 
// están cargados, renderiza el componente ItemList con los productos obtenidos.

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  }, []);

  console.log(products);

  if (loading) return <p>Cargando...</p>;

  return (
    <section>
      <ItemList products={products} />
    </section>
  );
};
