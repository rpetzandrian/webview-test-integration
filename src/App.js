import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Page/Homepage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/edit">
          <Homepage edit={true} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
