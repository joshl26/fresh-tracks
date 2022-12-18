import Container from "react-bootstrap/esm/Container";
import classes from "./Home.module.css";

import ResortList from "../components/ResortList";

const Home = () => {
  return (
    <div className={classes.home}>
      {" "}
      <div className={classes.spacer} />
      <Container className={classes.header_card}>
        <h1 className={classes.header_text}>
          Welcome to FreshTracks! Your personal App designed specifically for
          Ski and Snowboard lifestyle enthusiasts.
        </h1>
      </Container>{" "}
      <div className={classes.spacer} />
      <Container>
        <ResortList />
      </Container>
      <div className={classes.spacer} />
    </div>
  );
};

export default Home;
