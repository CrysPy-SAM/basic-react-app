import "./Product.css";

function Product({ title, price, features }) {
  return (
    <div className="Product">
      <h3>{title}</h3> 
      <h5>Price: {price}</h5>
      <p>Features: {features ? Object.values(features).join(", ") : "No features"}</p>
    </div>
  );
}

export default Product;
