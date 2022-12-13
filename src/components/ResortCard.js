import classes from "./ResortCard.module.css";

const ResortCard = ({ key, id, region, name, url, elevation, lat, lon }) => {
  return (
    <>
      <div className={classes.resort_card}>
        <h1 className={classes.resort_headertext}>
          <a href={url}>{name}</a>{" "}
        </h1>
        <h2 className={classes.resort_headertext}>{region}</h2>
        <p className={classes.resort_headertext}>Elevation {elevation}</p>
        <p className={classes.resort_headertext}>
          Location lat {lat} lon {lon}
        </p>
      </div>
      <div className={classes.spacer} />
    </>
  );
};
export default ResortCard;
