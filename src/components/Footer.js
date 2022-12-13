import Container from "react-bootstrap/esm/Container";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <Container>
          <div>
            <h1 className={classes.footer_text}>
              Copyright{" "}
              <a className={classes.footer_link} href="http://joshlehman.ca">
                Josh Lehman
              </a>
            </h1>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
