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
        if (data.length > 0) {
          dispatch(setGoogleTrends(data));
        }
      })
      .catch((e) => {
        console.log();
      });
  }, [dispatch]);

  useEffect(() => {
    console.log("Google Trend State: ");
    console.log(googleTrendsState);
  }, []);

  return (
    <div className="App">
      {googleTrendsState.length > 0 ? (
        <>
          {googleTrendsState.map((resort, idx) => {
            return (
              <div className="post-card" key={idx}>
                <div>{resort.topic.title}</div>
                <div>{resort.topic.type}</div>
              </div>
            );
          })}
        </>
      ) : (
        <div>Loading top 5 resorts...</div>
      )}
    </div>
  );
};

export default GoogleTrendsAPI;
