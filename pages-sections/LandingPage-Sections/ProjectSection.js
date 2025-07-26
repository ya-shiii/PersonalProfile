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
            <h2 className={classes.title}>About Me</h2>
            <h5 className={classes.description}>
              I’m a web and UI/UX designer with a background in Information Technology
              (BSIT, Misamis University). My journey began as an editorial artist and
              evolved into web design, where I now merge graphics, layout, and code to
              bring concepts to life. With hands-on experience from internships, freelance
              projects, and community initiatives, I aim to deliver designs that are both
              user-focused and aesthetically impactful.
            </h5>
            <br />
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <div className={classes.profile}>
            <div className={classes.profile}>
              <h2 className={classes.title}>Tools I Work With:</h2>
              <h5 className={classes.description}>
                <b>Figma</b> – Prototyping & collaborative design<br/>
                <b>Adobe Photoshop & Illustrator</b> – Visual assets & branding<br/>
                <b>CorelDRAW & InDesign</b> – Print and layout design<br/>
                <b>Front-end Development</b> (HTML, CSS, JavaScript) – Bringing designs to life<br/>
              </h5>
              <br />
            </div>

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
                  tabButton: "Web Designs",
                  tabIcon: ViewArrayOutlined,
                  tabContent: (
                    <GridContainer justify="center">
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
                            <p style={{ height: "8rem" }}>Designed the landing page for an emerging tech community, 
                              focusing on youth engagement and modern, approachable visuals.</p>
                            <br />
                            <Button
                              href="https://www.figma.com/design/drywoxwKCb4FoYbYkfdIrt/Tech-Savvy-CodeCamp?node-id=0-1&t=YwSEDvoL0PIU0eNI-1"
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
                            <p style={{ height: "8rem" }}>Initial concept for a school expanding into digital presence. 
                              Currently in early stages, awaiting client content for full deployment.</p>
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
                            src="img/examples/lunatronix.png"
                            alt="lunatronix_img"
                          />
                          <CardBody>
                            <h4 className={cardclassed.cardTitle}>Lunatronix</h4>
                            <p style={{ height: "8rem" }}>A static landing page for a startup based in Ontario, Canada.
                              I created a single-page proposal that met the client’s expectations and secured their approval.</p>
                            <br />
                            <Button
                              href="https://www.figma.com/file/Q1PAobU6IkyD5aFIpT3O8q/Lunatronix?type=design&node-id=0-1&mode=design&t=GXkgKhVVcnqMqGKd-0"
                              target="_blank"
                              color="success">View in Figma</Button>
                          </CardBody>
                        </Card>
                      </GridItem>


                    </GridContainer>
                  )
                },
                {
                  tabButton: "Web Development",
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
                  tabButton: "Graphic Designs",
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
                          src="img/collection/Tatts.png"
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
                          src="img/collection/Tarp.png"
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
                          src="img/collection/tarp1.png"
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
