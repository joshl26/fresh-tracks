import Container from "react-bootstrap/esm/Container";
import classes from "./ResortCard.module.css";

const ResortCard = () => {
  return (
    <>
      <Container className={classes.resort_card}>
        <h1 className={classes.resort_headertext}>Resort Card</h1>
      </Container>
      <div className={classes.spacer} />
    </>
  );
};
export default ResortCard;
