import { Route, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import GoogleTrendsAPI from "./api/GoogleTrendsAPI";
import SkiHillAPI from "./api/SkiHillAPI";

import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <SkiHillAPI />
      <GoogleTrendsAPI />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
