import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Camera from "@material-ui/icons/ContactMailOutlined";
import ViewArrayOutlined from "@material-ui/icons/ViewArrayOutlined";
import ColorLensOutlined from "@material-ui/icons/ColorLensOutlined";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import NavPills from "/components/NavPills/NavPills.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import Button from "/components/CustomButtons/Button.js";
import Quote from "/components/Typography/Quote.js";

import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";
import imagesStyles from "/styles/jss/nextjs-material-kit/imagesStyles.js";

import { cardTitle } from "/styles/jss/nextjs-material-kit.js";

const card_styles = {
  ...imagesStyles,
  cardTitle,
};
const useStyles = makeStyles(styles);
const useCardStyles = makeStyles(card_styles);

export default function ProductSection(props) {
  const classes = useStyles();
  const cardclassed = useCardStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <div className={classes.profile}>
            <h2 className={classes.title}>When Ideas Meet Action</h2>
            <h5 className={classes.description}>
              These are my past works – a collection that embodies my creativity and showcasing the diverse range of projects I've done.
              Each piece is a testament to my dedication to the craft and my commitment to delivering impactful design solutions.
            </h5>
          </div>

        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
            <NavPills
              alignCenter
              color="info"
              tabs={[
                {
                  tabButton: "Contribution",
                  tabIcon: Camera,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={6}>

                        <Card style={{ width: "85%" }}>
                          <img
                            style={{ height: "20rem", width: "100%", display: "block" }}
                            className={cardclassed.imgCardTop}
                            src="img/examples/buscaolas.png"
                            alt="buscaolas_img"
                          />
                          <CardBody>
                            <h4 className={cardclassed.cardTitle}>Buscaolas</h4>
                            <p>I'm proud to be one of the primary contributors
                              to the front-end development of the Buscaolas
                              website, bringing expertise and experience in NuxtJS 3 and TailwindCSS.</p>
                            <br />
                            <Quote text="Please disable adblocker extension when visiting site." />
                            <Button
                              href="https://buscaolas.cl/"
                              target="_blank"
                              color="info">Visit Site</Button>
                          </CardBody>
                        </Card>

                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>

                        <Card style={{ width: "85%" }}>
                          <img
                            style={{ height: "22rem", width: "100%", display: "block" }}
                            className={cardclassed.imgCardTop}
                            src="img/examples/kokorofoods.png"
                            alt="kokoro_foods_img"
                          />
                          <CardBody>
                            <h4 className={cardclassed.cardTitle}>Kokoro Foods</h4>
                            <p>As a leading force in Kokoro Foods' website front-end development,
                              I've leveraged cutting-edge tools like TailwindCSS and spearheaded
                              the migration to NuxtJS 3, seamlessly blending innovative design
                              with optimal performance for an unparalleled user journey.</p>
                            <br />
                            <Button
                              href="https://kokorofoods.cl/"
                              target="_blank"
                              color="warning">Visit Site</Button>
                          </CardBody>
                        </Card>

                      </GridItem>
                    </GridContainer>
                  )
                },
                {
                  tabButton: "Web Designs",
                  tabIcon: ViewArrayOutlined,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={4}>
                        <Card style={{ width: "100%" }}>
                          <img
                            style={{ height: "12rem", width: "100%", display: "block" }}
                            className={cardclassed.imgCardTop}
                            src="img/examples/lunatronix.png"
                            alt="lunatronix_img"
                          />
                          <CardBody>
                            <h4 className={cardclassed.cardTitle}>Lunatronix</h4>
                            <p style={{ height: "8rem" }}>A static landing page for an start-up company based in Ontario, Canada. I was given the opportunity to present
                              a single-page project proposal and they liked the service I provided.</p>
                            <br />
                            <Button
                              href="https://www.figma.com/file/Q1PAobU6IkyD5aFIpT3O8q/Lunatronix?type=design&node-id=0-1&mode=design&t=GXkgKhVVcnqMqGKd-0"
                              target="_blank"
                              color="success">View in Figma</Button>
                          </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <Card style={{ width: "100%" }}>
                          <img
                            style={{ height: "12rem", width: "100%", display: "block" }}
                            className={cardclassed.imgCardTop}
                            src="img/examples/thecompass.png"
                            alt="kokoro_foods_img"
                          />
                          <CardBody>
                            <h4 className={cardclassed.cardTitle}>The Compass</h4>
                            <p style={{ height: "8rem" }}>A relatively new school that considered expanding into the online world.
                              This project is still in its initial stages as client is yet to send the necessary information for their website.</p>
                            <br />
                            <Button
                              href="https://www.figma.com/file/TOLb2EoACZ37XCIJCRLb7Y/The-Compass?type=design&mode=design&t=8cI50xYm9jgYykXK-0"
                              target="_blank"
                              color="success">View in Figma</Button>
                          </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <Card style={{ width: "100%" }}>
                          <img
                            style={{ height: "12rem", width: "100%", display: "block" }}
                            className={cardclassed.imgCardTop}
                            src="img/examples/techsavvy.png"
                            alt="kokoro_foods_img"
                          />
                          <CardBody>
                            <h4 className={cardclassed.cardTitle}>Tech Savvy Code Camp</h4>
                            <p style={{ height: "8rem" }}>While being one of the pioneering members of the uprising community,
                              I was given the chance to present a proposal design for the lending page of our new and young community.</p>
                            <br />
                            <Button
                              href="https://www.figma.com/file/drywoxwKCb4FoYbYkfdIrt/Tech-Savvy-CodeCamp?type=design&mode=design&t=8cI50xYm9jgYykXK-0"
                              target="_blank"
                              color="success">View in Figma</Button>
                          </CardBody>
                        </Card>
                      </GridItem>
                    </GridContainer>
                  )
                },
                {
                  tabButton: "Others",
                  tabIcon: ColorLensOutlined,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src="img/collection/2.jpg"
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src="img/collection/T-Savvy_Logo.png"
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src="img/collection/PSITS_Officer.png"
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src="img/collection/tatts.png"
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src="img/collection/CodeCampOrgShirt.png"
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src="img/collection/debut_letter.png"
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src="img/collection/Jersey_Commission.png"
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src="img/collection/tarp.png"
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src="img/collection/id_sample.jpg"
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src="img/collection/PSITS.png"
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src="img/collection/Sierra_Logo.png"
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src="img/collection/MULISS_Member.png"
                          className={navImageClasses}
                        />
                        
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src="img/collection/DartCCS2023.png"
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src="img/collection/luminaire.png"
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src="img/collection/Loujing.png"
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src="img/collection/Tarp1.png"
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src="img/collection/CCS_Banner.png"
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src="img/collection/ICT_Week.png"
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
