import { Route, Switch } from "react-router-dom";

import { useEffect } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
// import TestAPI from "./components/TestAPI";
// import GoogleTrendsAPI from "./components/GoogleTrendsAPI";

import "./App.css";

function App() {
  useEffect(() => {
    console.log("App use effect");
  }, []);

  return (
    <div className="App">
      {/* <TestAPI /> */}
      {/* <GoogleTrendsAPI /> */}
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
