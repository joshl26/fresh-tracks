import { Route, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import GoogleTrendsAPI from "./api/GoogleTrendsAPI";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <GoogleTrendsAPI />
      <Footer />
    </div>
  );
}

export default App;
