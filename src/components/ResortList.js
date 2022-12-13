import Container from "react-bootstrap/esm/Container";
import ResortCard from "./ResortCard";
import classes from "./ResortList.module.css";

const ResortList = () => {
  const DUMMY_DATA = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 1,
    },
    {
      id: 4,
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
          <ResortCard key={idx} id={resort.id} />
        ))}
      </div>
    </Container>
  );
};

export default ResortList;
