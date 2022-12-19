import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTrendingResortData } from "../store/settingsSlice";

const SkiHillAPI = () => {
  const googleTrendsState = useSelector((state) => state.settings.googleTrends);

  const dispatch = useDispatch();

  useEffect(() => {
    if (googleTrendsState.length > 0) {
      console.log("Ski hill API");
      console.log(googleTrendsState[0].topic.title);

      // const test = googleTrendsState[0].topic.title;

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "0ddb5f6d07mshfdf76d31ce28704p143bacjsn648e4f6cad1c",
          "X-RapidAPI-Host": "ski-resort-forecast.p.rapidapi.com",
        },
      };

      fetch(
        "https://ski-resort-forecast.p.rapidapi.com/Blue%20Mountain%20Ski%20Resort%20Ski%20resort%20in%20Ontario,%20Canada/snowConditions?units=i",
        options
      )
        .then((response) => response.json())
        .then((response) => dispatch(setTrendingResortData(response)))
        .catch((err) => console.error(err));
    }
  }, [googleTrendsState]);
};

export default SkiHillAPI;
