import Container from "react-bootstrap/esm/Container";
import classes from "./ResortCard.module.css";

const ResortCard = ({ key, id }) => {
  return (
    <>
      <Container className={classes.resort_card}>
        <h1 className={classes.resort_headertext}>Resort Card</h1>
        <h2 className={classes.resort_headertext}>
          {id}
          {key}
        </h2>
      </Container>
      <div className={classes.spacer} />
    </>
  );
};
export default ResortCard;
