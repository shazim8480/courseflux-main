import { Typography } from "@material-ui/core";
import React from "react";
import profileStyles from "./ProfileStyle";

const Profile = () => {
  const classes = profileStyles();
  return (
    <>
      <div className={classes.profileContainer}>
        <Typography align="center" variant="h4">
          Under Development...Coming Soon!!
        </Typography>
      </div>
    </>
  );
};

export default Profile;
