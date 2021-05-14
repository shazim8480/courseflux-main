import React from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// styling //
const notesStyles = makeStyles((theme) => ({
  notesContainer: {
    marginTop: theme.spacing(5),
  },
  notesText: {
    marginBottom: theme.spacing(3),
  },
  notesList: {
    marginBottom: theme.spacing(2),
  },
}));

// this whole section will load dynamic data for course playlist//
const Notes = () => {
  const classes = notesStyles();
  return (
    <>
      <Container>
        <Grid
          spacing={2}
          justify="flex-start"
          className={classes.notesContainer}
          container
        >
          <Grid item xs={12} lg={5}>
            {/* this button section will be dynamic according to courses */}
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              className={classes.notesList}
              // onClick={() => handleBtnClick()}
            >
              Intro-to-edu (1)
            </Button>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              className={classes.notesList}
              // onClick={() => handleBtnClick()}
            >
              Intro-to-edu (2)
            </Button>
          </Grid>

          {/* extra section...delete after dynamically loading data */}
          <Grid item xs={12} lg={5}>
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              className={classes.notesList}
              // onClick={() => handleBtnClick()}
            >
              Intro-to-edu (2)
            </Button>
          </Grid>

          <Grid item xs={12} lg={5}>
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              className={classes.notesList}
              // onClick={() => handleBtnClick()}
            >
              Intro-to-edu (2)
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Notes;
