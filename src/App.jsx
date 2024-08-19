import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "/components/Title";

const App = () => {
  const name = "Lorem-Ipsum";
  return (
    <>
      <div className="mainDiv"></div>
      <h1
        style={{
          color: "black",
          backgroundColor: "lightgray",
        }}
      >
        Lorem
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nihil earum
        corporis, minima libero voluptatum adipisci inventore maiores
        praesentium corrupti. Libero eos delectus sed atque minima molestiae
        voluptatibus nemo ratione.
      </p>

      <br />

      <h1
        style={{
          color: "black",
          backgroundColor: "lightgray",
        }}
      >
        Ipsum
      </h1>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sapiente
        natus sunt quae dignissimos dicta, ipsum voluptates maiores porro quas
        odit pariatur? Doloribus molestiae tempora consectetur adipisci.
        Pariatur, sit quos!
      </p>
    </>
  );
};

export default App;
