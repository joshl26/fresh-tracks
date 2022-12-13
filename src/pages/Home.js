import Container from "react-bootstrap/esm/Container";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <Container>
        <div className={classes.spacer} />
        <div className={classes.header_card}>
          <h1 className={classes.header_text}>
            Welcome to FreshTracks! Your personal App designed specifically for
            Ski and Snowboard lifestyle enthusiasts.
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default Home;
