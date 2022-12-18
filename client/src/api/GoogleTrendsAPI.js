import axios from "axios";
import { useEffect, useState } from "react";

const GoogleTrendsAPI = () => {
  const [resorts, setResorts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api2")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResorts(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [error]);

  return (
    <div className="App">
      {error && <h3>{error}</h3>}
      {/* <div>${resorts}</div> */}
      {/* {[resorts]} */}
    </div>
  );
};

export default GoogleTrendsAPI;
