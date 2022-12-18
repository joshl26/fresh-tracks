// import googleTrends from "google-trends-api";
import axios from "axios";
import { useEffect, useState } from "react";

const GoogleTrendsAPI = () => {
  const [resorts, setResorts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get("http://localhost:8000/api2");
        // setResorts(data.data?.results);
        setResorts(data);
        console.log(resorts);
      } catch (e) {
        setError("Something went wrong!" + e);
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return;
  // <div className="App">
  //   {error && <h3>{error}</h3>}
  //   {people.length ? (
  //     <>
  //       {people.map((person, idx) => (
  //         <div key={idx}>{person.name}</div>
  //       ))}
  //     </>
  //   ) : (
  //     <div>Loading...</div>
  //   )}
  // </div>

  // googleTrends
  //   .interestOverTime({ keyword: "Women's march" })
  //   .then(function (results) {
  //     console.log("These results are awesome", results);
  //   })
  //   .catch(function (err) {
  //     console.error("Oh no there was an error", err);
  //   });
};

export default GoogleTrendsAPI;
