// import googleTrends from "google-trends-api";
import axios from "axios";
import { useEffect, useState } from "react";

const StarWarsAPI = () => {
  const [people, setPeople] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get("https://swapi.dev/api/people/");
        setPeople(data.data?.results);
      } catch (e) {
        setError("Something went wrong!");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {error && <h3>{error}</h3>}
      {people.length ? (
        <>
          {people.map((person, idx) => (
            <div key={idx}>{person.name}</div>
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );

  // googleTrends
  //   .interestOverTime({ keyword: "Women's march" })
  //   .then(function (results) {
  //     console.log("These results are awesome", results);
  //   })
  //   .catch(function (err) {
  //     console.error("Oh no there was an error", err);
  //   });
};

export default StarWarsAPI;
