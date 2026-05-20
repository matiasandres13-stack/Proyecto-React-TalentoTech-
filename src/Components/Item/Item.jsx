import "./Item.css";

// El exhibidor: Este es nuestro componente presentacional o "dumb". No sabe de listas ni de lógica. Solo recibe las props 
// de un producto y se encarga de mostrarlo de la forma más linda posible, usando sus propios estilos de CSS

export const Item = ({ name, description, price, image, children }) => {
  return (
    <article className="card">
      <img src={image} alt={`foto de ${name}`} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">${price}</p>
      {children}
    </article>
  );
};
