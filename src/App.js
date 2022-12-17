import { Route, Switch } from "react-router-dom";

import { useEffect } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import GoogleTrendsAPI from "./components/GoogleTrendsAPI";
import StarWarsAPI from "./components/StarWarsAPI";

import "./App.css";

function App() {
  useEffect(() => {
    console.log("App use effect");
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <StarWarsAPI />
      <GoogleTrendsAPI />
      <Footer />
    </div>
  );
}

export default App;
