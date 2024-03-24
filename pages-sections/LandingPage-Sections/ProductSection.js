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
          <h2 className={classes.title}>Let's talk <i>quality</i></h2>
          <h5 className={classes.description}>
            Despite graduating in Information Technology from Misamis University with a GPA of 1.4,
            my passion for design and art has thrived since 2012. Transitioning from an editorial
            cartoonist to a school paper editor and graphic artist, I showcase my ability to excel
            creatively, regardless of my academic background.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Collaboration"
              description=" Willingness to communicate effectively with clients, colleagues, and stakeholders, 
                actively seeking and incorporating feedback to refine designs and achieve optimal results."
              icon={ChatBubbles}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Adaptibility"
              description="Flexibility to embrace new trends, technologies, and client preferences, ensuring designs remain fresh and relevant."
              icon={DoneAllRounded}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Attention to Detail"
              description="Meticulousness in refining every aspect of design, from layout and typography to color scheme and imagery, ensuring a polished final product."
              icon={MyLocation}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Creativity"
              description="Ability to think outside the box, generating innovative solutions and unique concepts that captivate audiences and differentiate brands."
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
