import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { saveAs } from "file-saver";

// @material-ui/icons

// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "/pages-sections/LandingPage-Sections/ProductSection.js";
import ProjectSection from "/pages-sections/LandingPage-Sections/ProjectSection.js";
import TeamSection from "/pages-sections/LandingPage-Sections/TeamSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
const saveFile = () => {
  saveAs(
    "https://drive.google.com/file/d/1WjeMPSzagrurcLGRWrCLfcfa6hqqUasx/view?usp=drive_link",
    "JOSHUA-VICENTE-CV.pdf"
  );
};
export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Joshua Vicente"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter responsive image="img/banner.png">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Joshua Vicente</h1>
              <h3 className={classes.block}><i>Web Developer / Graphic Designer</i></h3>
              <br />
              <h4>
              Proficient in Graphics and Web Design, integrating front-end development skills with creative expertise 
              to deliver captivating digital experiences. With a solid foundation from internships and academic pursuits, 
              I bring ideas into life.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                onClick={saveFile}
              >
                <i className="fas fa-download" />
                 Download CV
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProjectSection />
          <ProductSection />
          <TeamSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
