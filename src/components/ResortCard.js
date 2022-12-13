import Container from "react-bootstrap/esm/Container";
import classes from "./ResortCard.module.css";

const ResortCard = ({ key, id, region, name, url, elevation, lat, lon }) => {
  return (
    <>
      <Container className={classes.resort_card}>
        <h1 className={classes.resort_headertext}>
          <a href={url}>{name}</a>{" "}
        </h1>
        <h2 className={classes.resort_headertext}>{region}</h2>
      </Container>
      <div className={classes.spacer} />
    </>
  );
};
export default ResortCard;
