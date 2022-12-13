import Container from "react-bootstrap/esm/Container";
import ResortCard from "./ResortCard";
import classes from "./ResortList.module.css";

const ResortList = () => {
  const DUMMY_DATA = [
    {
      id: 1,
      region: "USA - Wyoming",
      name: "Jackson Hole",
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
      name: "Mont Tremblant",
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
      name: "Banff Mt Norquay",
      url: "https://www.snow-forecast.com/resorts/Banff-Norquay/6day/top",
      topLiftElevation: "6700ft",
      midLiftElevation: "5873ft",
      botLiftElevation: "5049ft",
      lat: "-115.56",
      lon: "51.17",
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ];

  return (
    <Container>
      <div className={classes.resortlist_card}>
        <h1>Current Top 5 North American Resorts</h1>
        <p>
          (as currently ranked by google trends API - last updated DEC. XX/XXXX
          @ XX:XXPM)
        </p>
        {DUMMY_DATA.map((resort, idx) => (
          <>
            <ResortCard key={`${idx}_${resort.id}`} id={resort.id} />
          </>
        ))}
      </div>
    </Container>
  );
};

export default ResortList;
