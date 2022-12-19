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

          if (testString.includes("Ski resort") && result.length < 5) {
            result.push(spec.rankedKeyword[i]);
          }
        }

      });
    res.json(result);
  } catch (e) {
    // setError("Something went wrong!");
    console.log(e);
  }
});

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
