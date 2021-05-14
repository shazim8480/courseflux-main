import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

// styling //
const FAQStyles = makeStyles((theme) => ({
  FAQContainer: {
    marginTop: theme.spacing(5),
  },
  FAQHeader: {
    marginBottom: theme.spacing(3),
  },
}));

// this whole section will load dynamic data for course playlist//
const FAQ = () => {
  const classes = FAQStyles();
  return (
    <>
      <Container>
        <Grid className={classes.FAQContainer} container>
          <Grid item xs={12} lg={9}>
            <Typography className={classes.FAQHeader} variant="h5">
              Recent Questions
            </Typography>
            <Typography paragraph color="textSecondary">
              01. What does you simply dummy in do ?
              <br />
              02. What graphics dummy of free design ?
              <br />
              03. Why we are the best ?
              <br />
              04. What industries dummy covered ?
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FAQ;
