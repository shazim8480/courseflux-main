import React from "react";
import { Container, Typography } from "@material-ui/core";
import courseDetailsStyles from "./CourseDetailsStyle";
import Header from "../../Header/Header";

const CourseDetails = () => {
  const classes = courseDetailsStyles();
  return (
    <>
      {/* header component start */}
      <Header></Header>
      {/* header component end */}
    </>
  );
};

export default CourseDetails;
