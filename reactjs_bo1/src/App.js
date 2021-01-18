import "./App.css";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Contnet from "./Components/Contnet";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Contnet />
      <Header />
    </div>
  );
}

export default App;
