import { Button, Container, CssBaseline, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Header from "../Header/Header";
import homeStyles from "./HomeStyle";
import bodyImg from "../../images/bgImg-highRes.png";
import Footer from "../Footer/Footer";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  const classes = homeStyles();
  return (
    <>
      <div>
        <CssBaseline />
        {/* Header Component start */}
        <Header></Header>
        {/* Header Component end */}
        <Container>
          <Grid
            className={classes.homeContainer}
            container
            spacing={2}
            maxWidth="lg"
          >
            <Grid className={classes.homeBody} item xs={12} lg={6}>
              <Typography
                variant="h2"
                component="h1"
                alignCenter
                color="secondary"
                className={classes.bodyTitle}
              >
                Course <span className={classes.span}>Flux</span>
              </Typography>
              <Typography
                className={classes.bodyText}
                variant="body1"
                color="textPrimary"
              >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </Typography>
              {/* for home body buttons */}
              <Grid container className={classes.buttonContainer} spacing={1}>
                <Grid item xs={4} lg={3}>
                  <Button
                    component={RouterLink}
                    to="/signUp"
                    variant="outlined"
                    color="secondary"
                  >
                    Sign Up
                  </Button>
                </Grid>
                <Grid item xs={4} lg={2}>
                  <Button
                    component={RouterLink}
                    to="/login"
                    variant="contained"
                    color="secondary"
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item className={classes.homeBody} xs={12} lg={6}>
              <img className={classes.bodyImg} src={bodyImg} alt="bodyImg" />
            </Grid>
          </Grid>
        </Container>
        {/* footer Component start */}
        <Footer></Footer>
        {/* footer Component end */}
      </div>
    </>
  );
};

export default Home;
