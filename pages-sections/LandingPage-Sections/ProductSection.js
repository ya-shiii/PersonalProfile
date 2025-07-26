import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import IdeaBulb from "@material-ui/icons/EmojiSymbols";
import DoneAllRounded from "@material-ui/icons/DoneAllRounded";
import MyLocation from "@material-ui/icons/MyLocationRounded";
import ChatBubbles from "@material-ui/icons/QuestionAnswer";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <div className={classes.profile}>
            <h2 className={classes.title}>Design Philosophy: Where Ideas Meet Action</h2>
            <h5 className={classes.description}>
              Every project I create is built on three principles: clarity, usability, and creativity.
              My goal is to ensure each interface not only looks good but feels intuitive and aligns
              with client objectives.
            </h5>
            <br />
          </div>
          <h2 className={classes.title}>Core Strengths</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>

            <InfoArea
              title="Collaboration"
              description="Open communication and feedback-driven design process with teams and clients."
              icon={ChatBubbles}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Adaptibility"
              description="Quick to embrace new trends and technologies to keep designs relevant."
              icon={DoneAllRounded}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Attention to Detail"
              description="Ensuring every element, from typography to layout, is cohesive and polished."
              icon={MyLocation}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Creativity"
              description="Delivering fresh, innovative solutions that captivate users and enhance brand identity."
              icon={IdeaBulb}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
