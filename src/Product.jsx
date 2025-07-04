import "./Product.css";

function Product({title,price, features}) {
  let styles = {backgroundColor : price>30000 ? "pink" : ""};
  return (
    <div className="Product"  style={styles}>
      <h3>{title}</h3> 
      <h5>Price: {price}</h5>
      {price> 30000 && <p>Discpunt of 5%</p>}
    </div>
  );

}

export default Product;
