import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import React from "react";
import { useStateValue } from "./StateProvider";
import auth from "./lib/auth";
import "./App.css";

function App() {
  const [_, dispatch] = useStateValue();

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: "SET_USER", user: user });
      } else {
        dispatch({ type: "SET_USER", user: false });
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
