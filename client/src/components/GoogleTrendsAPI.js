// import googleTrends from "google-trends-api";
import axios from "axios";
import { useEffect, useState } from "react";
const googleTrends = require("google-trends-api");
var cors = require("cors");
// axios.use(cors());

const GoogleTrendsAPI = () => {
  // const [people, setResorts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData(req, res) {
      try {
        var result = [];

        await googleTrends
          .relatedTopics({ keyword: "/m/018jqx", geo: "CA" })
          .then(function (results) {
            // console.log(results2);

            var spec = JSON.parse(results).default.rankedList[0];

            for (var i = 0; i < 20; i++) {
              //   console.log(spec.rankedKeyword[i]);

              var testString = spec.rankedKeyword[i].topic.type;

              if (testString.includes("Ski resort") && result.length < 5) {
                result.push(spec.rankedKeyword[i].topic.title);
              }
            }

            console.log(result);

            //         var arr1 = JSON.parse(results2).default.topics[1].title
            //         for (var i = 0; i < 5; i++) {
            //             result2.push(arr1[i].title)
            //         }
            res.json(result);
          });

        // const data = await axios.get("https://swapi.dev/api/people/");
        // setResorts(data.data?.results);
      } catch (e) {
        setError("Something went wrong!");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      GoogleTrendsAPI
      {error && <h3>{error}</h3>}
      {/* {error && <h3>{error}</h3>}
      {people.length ? (
        <>
          {people.map((person, idx) => (
            <div key={idx}>{person.name}</div>
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )} */}
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

export default GoogleTrendsAPI;
