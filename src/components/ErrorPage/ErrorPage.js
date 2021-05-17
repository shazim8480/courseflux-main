import { Typography } from "@material-ui/core";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const errorStyles = makeStyles((theme) => ({
  errorContainer: {
    paddingTop: "20%",
  },
}));

const ErrorPage = () => {
  const classes = errorStyles();
  return (
    <div className={classes.errorContainer}>
      <Typography align="center" variant="h4">
        Error 404..PAGE NOT FOUND!
      </Typography>
    </div>
  );
};

export default ErrorPage;
