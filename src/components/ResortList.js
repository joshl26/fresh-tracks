import Container from "react-bootstrap/esm/Container";
import ResortCard from "./ResortCard";
import classes from "./ResortList.module.css";

// DUMMY_DATA = [
//   {

//   }
// ]

const ResortList = () => {
  return (
    <Container>
      <div className={classes.resortlist_card}>
        <h1>Current Top 5 North American Resorts</h1>
        <p>
          (as currently ranked by google trends API - last updated DEC. XX/XXXX
          @ XX:XXPM)
        </p>
        <ResortCard />
        <ResortCard />
        <ResortCard />
        <ResortCard />
        <ResortCard />
      </div>
    </Container>
  );
};

export default ResortList;
