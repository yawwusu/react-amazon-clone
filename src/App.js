import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          <Route path="/">
            <Header />
            <Banner />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
