import "./App.css";
import { Routing } from "./router/Routing";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import MessageBar from "./components/MessageBar";

function App() {
  const [errorTitle, errorBody] = useSelector((state) => {
    return [state.error?.errorTitle, state.error?.errorBody];
  });

  return (
    <div className="App">
      {errorTitle && <MessageBar title={errorTitle} body={errorBody} />}
      <Header />
      <Routing />
    </div>
  );
}

export default App;
