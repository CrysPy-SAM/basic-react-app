import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  let oldPrices = ["12,495", "11,980", "23,464", "599"];
  let newPrices = ["8,999", "7,999", "19,999", "399"];
  let Description = [
    ["8,000 DPI", "5 Programmable buttons"],
    ["intuitive surface", "designed for iPad Pro"],
    ["designed for iPad Pro", "intuitive surface"],
    ["Wireless", "optical orientation"]
  ];

  return (
    <div className="Product">
      <h4>{title}</h4>
      {/* Join multiple descriptions into one line */}
      <p>{Description[idx][0]}</p>
      <p>{Description [idx][0]}</p>
      <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]} />
    </div>
  );
}

export default Product;
