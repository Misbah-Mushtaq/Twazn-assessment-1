import logo from "./logo.svg";
import "./App.css";
import { Routing } from "./router/Routing";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
    </div>
  );
}

export default App;
