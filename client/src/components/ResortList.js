import Container from "react-bootstrap/esm/Container";
import ResortCard from "./ResortCard";
import classes from "./ResortList.module.css";

import { useSelector } from "react-redux";
import { useEffect } from "react";

const ResortList = () => {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const seconds = newDate.getSeconds();

  const fullTime = `${hours}:${minutes}:${seconds}`;
  const fullDate = `${month}/${date}/${year}`;

  const googleTrendsState = useSelector((state) => state.settings.googleTrends);
  const trendingResortDataState = useSelector(
    (state) => state.settings.trendingResortData
  );

  useEffect(() => {
    console.log(googleTrendsState);
    console.log(trendingResortDataState);
  }, [googleTrendsState]);

  const DUMMY_DATA = [
    {
      id: 1,
      region: "USA - Wyoming",
      name: "Jackson Hole (DUMMY DATA)",
      url: "https://www.snow-forecast.com/resorts/Jackson-Hole/6day/top",
      topLiftElevation: "10447ft",
      midLiftElevation: "8380ft",
      botLiftElevation: "6309ft",
      lat: "-110.85",
      lon: "43.60",
    },
    {
      id: 2,
      region: "Canada - Quebec",
      name: "Mont Tremblant (DUMMY DATA)",
      url: "https://www.snow-forecast.com/resorts/Tremblant/6day/top",
      topLiftElevation: "2871ft",
      midLiftElevation: "1811ft",
      botLiftElevation: "755ft",
      lat: "-74.58",
      lon: "46.21",
    },
    {
      id: 3,
      region: "Canada - Alberta",
      name: "Banff Mt Norquay (DUMMY DATA)",
      url: "https://www.snow-forecast.com/resorts/Banff-Norquay/6day/top",
      topLiftElevation: "6700ft",
      midLiftElevation: "5873ft",
      botLiftElevation: "5049ft",
      lat: "-115.56",
      lon: "51.17",
    },
    {
      id: 4,
      region: "USA - Idaho",
      name: "Kelly Canyon Ski Area (DUMMY DATA)",
      url: "https://www.snow-forecast.com/resorts/Kelly-Canyon-Ski-Area/6day/top",
      topLiftElevation: "6601ft",
      midLiftElevation: "6103ft",
      botLiftElevation: "5601ft",
      lat: "-111.63",
      lon: "43.65",
    },
    {
      id: 5,
      region: "Canada - BC",
      name: "Whistler Blackcomb (DUMMY DATA)",
      url: "https://www.snow-forecast.com/resorts/Whistler-Blackcomb/6day/top",
      topLiftElevation: "7494ft",
      midLiftElevation: "4856ft",
      botLiftElevation: "2215ft",
      lat: "-122.95",
      lon: "50.11",
    },
  ];

  return (
    <Container>
      <div className={classes.resortlist_card}>
        <div className={classes.spacer} />
        <h1>Current Top 5 North American Resorts</h1>
        <p>
          as currently ranked by google trends API - last updated {fullDate} @{" "}
          {fullTime}
        </p>
        <div className={classes.spacer} />

        {googleTrendsState
          ? googleTrendsState.map((resort, idx) => (
              <ResortCard
                key={`${idx}_${resort.topic}`}
                region={resort.topic.type}
                name={resort.topic.title}
                // url={trendingResortDataState.basicInfo.url}
                // elevation={trendingResortDataState.basicInfo.topLiftElevation}
                // lat={trendingResortDataState.basicInfo.lat}
                // lon={trendingResortDataState.basicInfo.lon}
              />
            ))
          : DUMMY_DATA.map((resort, idx) => (
              <ResortCard
                key={`${idx}_${resort.topic}`}
                region={resort.region}
                name={resort.name}
                // url={trendingResortDataState.basicInfo.url}
                // elevation={trendingResortDataState.basicInfo.topLiftElevation}
                // lat={trendingResortDataState.basicInfo.lat}
                // lon={trendingResortDataState.basicInfo.lon}
              />
            ))}
      </div>
    </Container>
  );
};

export default ResortList;
