import "./App.css"
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

function App() {
  return (
    <>
      <MsgBox userName="Satyam" textColor="red" />
      <MsgBox userName="Omi" textColor="green" />
      <MsgBox userName="ram" textColor="orange" />
      <ProductTab />
    </>
  );
}


export default App;
