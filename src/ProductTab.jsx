import Product from "./Product.jsx";

function ProductTab() {
  return (
    <>
      <Product title="phone" price={10000}/>
      <Product title="laptop" price={20000}/>
      <Product title="pen" price={120}/>
      <Product title="Copy" />
    </>
  );
}

export default ProductTab;
