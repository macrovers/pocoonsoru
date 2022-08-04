import { BrowserRouter, Switch, Route } from "react-router-dom";

// page components
import Home from "./pages/home/Home";
import Add from "./pages/add/Add";

// general components
import Navbar from "./components/Navbar";

// styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          {/* dynamic path with route parameter, need to extract it later*/}
          <Route path="/add">
            <Add />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
