import Product from "./Product.jsx";

function ProductTab() {
    let options =["hi-tech","durable","fast"];

  return (
    <>
      <Product title="Phone" price={10000}/>
      <Product title="laptop" price={40000}/>
      <Product title="pen" price={120}/>
    </>
  );
}

export default ProductTab;
