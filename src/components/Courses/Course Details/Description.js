import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// styling //
const descriptionStyles = makeStyles((theme) => ({
  descriptionContainer: {
    marginTop: theme.spacing(5),
  },
  descriptionText: {
    marginBottom: theme.spacing(3),
  },
}));

// this whole section will load dynamic data for course playlist//
const Description = () => {
  const classes = descriptionStyles();
  return (
    <>
      <Container>
        <Grid className={classes.descriptionContainer} container>
          <Grid item xs={12} lg={9}>
            <Typography
              className={classes.descriptionText}
              paragraph
              color="textSecondary"
            >
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV
              ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
              quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox
              nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox.
              Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex
              bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop
              blew my junk TV quiz. How quickly daft jumping zebras vex. Two
              driven jocks help fax my big quiz. Quick, Baz, get my woven flax
              jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking
              zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq.
              Cozy sphinx waves quart jug of bad milk. A very bad quack might
              jinx zippy fowls. Few quips galvanized the mock jury box. Quick
              brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and
              my wolves quack! Blowzy red vixens fight for a quick jump.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Description;
