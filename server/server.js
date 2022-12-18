const express = require("express");
const cors = require("cors");

const googleTrends = require("google-trends-api");

const app = express();

app.use(cors());
app.use(express.json());

var result = [];

app.get("/api2", async (req, res) => {
  try {
    await googleTrends
      .relatedTopics({ keyword: "/m/018jqx", geo: "CA" })
      .then(function (results) {
        // console.log(results2);

        var spec = JSON.parse(results).default.rankedList[0];

        for (var i = 0; i < 20; i++) {
          //   console.log(spec.rankedKeyword[i]);

          var testString = spec.rankedKeyword[i].topic.type;

          while (testString.includes("Ski resort") && result.length < 5) {
            result.push(spec.rankedKeyword[i]);
          }
        }

        console.log(result);

        //         var arr1 = JSON.parse(results2).default.topics[1].title
        //         for (var i = 0; i < 5; i++) {
        //             result2.push(arr1[i].title)
        //         }
      });
    res.json(result);
    // const data = await axios.get("https://swapi.dev/api/people/");
    // setResorts(data.data?.results);
  } catch (e) {
    // setError("Something went wrong!");
    console.log(e);
  }
});

app.get("/api", (req, res) => {
  async function fetchGoogleTrendsData(req, res) {
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
              result.push(spec.rankedKeyword[i]);
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
      // setError("Something went wrong!");
      console.log(e);
    }
  }
  fetchGoogleTrendsData();
});

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
