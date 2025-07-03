import Product from "./Product.jsx";

function ProductTab() {
    let options =["hi-tech", "durable", "fast"];
   // let options2 ={a: "hi-tech", b:"durable", c:"fast"}
  return (
    <>
      <Product title="phone" price={10000} features={{a:"hi-tech"}}/>
      {/* <Product title="laptop" price={20000} /> */}
      {/* <Product title="pen" price={120}/> */}
      {/* <Product title="Copy" price={200} /> */}
    </>
  );
}

export default ProductTab;
