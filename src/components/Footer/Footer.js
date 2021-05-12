import {
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { Icon } from "@material-ui/core";
import React from "react";
import footerStyles from "./FooterStyle";
import footerLogo from "../../images/CourseFluxlogo.png";
import PhoneAndroidRoundedIcon from "@material-ui/icons/PhoneAndroidRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";

const Footer = () => {
  const classes = footerStyles();
  return (
    <>
      <CssBaseline />
      <Paper className={classes.footerContainer}>
        <Container>
          {/* footer logo part start */}
          <Grid justify="space-evenly" container spacing={4}>
            <Grid item xs={12} lg={4}>
              <img
                className={classes.footerImg}
                src={footerLogo}
                alt="footerLogo"
              />
            </Grid>
            {/* footer logo part end */}

            {/* footer contact part start */}
            <Grid item xs={12} lg={4}>
              <Typography variant="h5" color="primary">
                Contact Us
              </Typography>

              <div className={classes.footerContact}>
                <Grid
                  className={classes.footerContactDetails}
                  container
                  spacing={2}
                >
                  <Grid item>
                    <PhoneAndroidRoundedIcon
                      color="primary"
                      fontSize="large"
                    ></PhoneAndroidRoundedIcon>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="primary">
                      +880 1845 741414
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  className={classes.footerContactDetails}
                  container
                  spacing={2}
                >
                  <Grid item>
                    <EmailRoundedIcon
                      color="primary"
                      fontSize="large"
                    ></EmailRoundedIcon>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="primary">
                      courseflux@gmail.com
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  className={classes.footerContactDetails}
                  container
                  spacing={2}
                >
                  <Grid item>
                    <LocationOnRoundedIcon
                      color="primary"
                      fontSize="large"
                    ></LocationOnRoundedIcon>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="primary">
                      Dhaka,Bangladesh
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            {/* footer contact part end */}

            {/*  footer social section start */}
            <Grid item xs={12} lg={4}>
              <Typography variant="h5" color="primary">
                Get in Touch
              </Typography>
            </Grid>
            {/* social footer section end */}
            <Typography
              className={classes.copyrightText}
              variant="subtitle1"
              color="primary"
            >
              © Copyright 2021. All rights reserved by Course Flux
            </Typography>
          </Grid>
        </Container>
      </Paper>
    </>
  );
};

export default Footer;
