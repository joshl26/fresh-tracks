import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setGoogleTrends } from "../store/settingsSlice";

const GoogleTrendsAPI = () => {
  const googleTrendsState = useSelector((state) => state.settings.googleTrends);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:8000/api2")
      .then((response) => response.json())
      .then((data) => {
        console.log("Google Trend State: ");
        console.log(googleTrendsState);
        if (data.length > 0) {
          dispatch(setGoogleTrends(data));

          console.log("Google Trends State: ");

          console.log(googleTrendsState);
        }
      })
      .catch((e) => {
        console.log();
      });
  }, []);

  return (
    <div className="App">
      {googleTrendsState.map((resort, idx) => {
        return (
          <div className="post-card" key={idx}>
            {resort.topic.title}
          </div>
        );
      })}
    </div>
  );
};

export default GoogleTrendsAPI;
