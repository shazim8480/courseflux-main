import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

// styling //
const curriculumStyles = makeStyles((theme) => ({
  curriculumContainer: {
    marginTop: theme.spacing(5),
  },
  curriculumHeader: {
    marginBottom: theme.spacing(3),
  },
}));

// this whole section will load dynamic data for course playlist//
const Curriculum = () => {
  const classes = curriculumStyles();
  return (
    <>
      <Container>
        <Grid className={classes.curriculumContainer} container>
          <Grid item xs={12} lg={9}>
            <Typography className={classes.curriculumHeader} variant="h5">
              Overview
            </Typography>
            <Typography paragraph color="textSecondary">
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV
              ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
              quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox
              nymphs grab
            </Typography>
            <br />
            <Typography className={classes.curriculumHeader} variant="h5">
              Course Playlist
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

export default Curriculum;
