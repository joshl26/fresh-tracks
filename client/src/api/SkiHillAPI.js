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

      //Replace YOUR OWN KEY and YOUR OWN HOST with your own key and host from an API.
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "YOUR OWN KEY",
          "X-RapidAPI-Host": "YOUR OWN HOST",
        },
      };

      //Replace YOUR OWN REQUEST URL with your own request url.
      fetch(
        "YOUR OWN REQUEST URL",
        options
      )
        .then((response) => response.json())
        .then((response) => dispatch(setTrendingResortData(response)))
        .catch((err) => console.error(err));
    }
  }, [googleTrendsState, dispatch]);
};

export default SkiHillAPI;
