import { Typography } from "@material-ui/core";
import React from "react";
import aboutStyles from "./AboutStyle";

const About = () => {
  const classes = aboutStyles();
  return (
    <>
      <div className={classes.aboutContainer}>
        <Typography align="center" variant="h4">
          Under Development...Coming Soon!!
        </Typography>
      </div>
    </>
  );
};

export default About;
