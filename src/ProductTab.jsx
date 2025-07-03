import Product from "./Product.jsx";

function ProductTab() {
    let options =["hi-tech","durable","fast"];

  return (
    <>
      <Product title="phone" price={10000} features={options}/>
      {/* <Product title="laptop" price={20000} /> */}
      {/* <Product title="pen" price={120}/> */}
    </>
  );
}

export default ProductTab;
