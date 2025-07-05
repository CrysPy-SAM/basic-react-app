function printHello(event) {
  console.log("Hello!");
  console.log("event");
}

function printBye() {
  console.log("bye!");
}

function handleDbClick(){
    console.log("you double clicked");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me!</button>
      <p onMouseOver={printBye}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eius fugit
        veritatis, ipsam ullam, accusantium voluptates hic sequi voluptas aut quo at
        dolore illo fuga magnam. Excepturi facere rerum perspiciatis?
      </p>
      <button onDoubleClick={handleDbClick()}>double click me!</button>
    </div>
  );
}
