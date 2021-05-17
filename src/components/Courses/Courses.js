import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React from "react";
import coursesStyles from "./CoursesStyle";
import Grid from "@material-ui/core/Grid";
import Header from "../Header/Header";
import CourseCard from "./Single Course Card/CourseCard";
import Footer from "../Footer/Footer";

const Courses = () => {
  const classes = coursesStyles();
  return (
    <>
      <CssBaseline />
      {/* header component */}
      <Header />
      {/* header component */}
      <Box borderTop={3} className={classes.borderContainer}></Box>
      <Container>
        {/* initial grid container for search, category & description  */}
        <Grid container className={classes.coursesContainer} spacing={2}>
          {/* for search & categories */}
          <Grid className={classes.searchContainer} item xs={12} lg={4}>
            {/* for search */}
            <Grid item xs={12} lg={12}>
              <Typography variant="h5" color="textSecondary">
                Search Here
              </Typography>
              <TextField
                className={classes.searchField}
                placeholder="Search Courses..."
                margin="normal"
                variant="outlined"
                required
                fullWidth
                autoFocus
              />
              <Button
                // type="submit" will re-activate when auth is complete//
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.searchBtn}
                // onClick={() => handleBtnClick()}
              >
                Search
              </Button>
            </Grid>

            {/* for categories & others */}
            <Grid className={classes.categoryContainer} item xs={12} lg={12}>
              <Typography
                className={classes.deptText}
                variant="h5"
                color="textSecondary"
              >
                Departments
              </Typography>
              {/* this button section will be dynamic according to courses */}
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                className={classes.courseCategory}
                // onClick={() => handleBtnClick()}
              >
                Language Studies
              </Button>
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                className={classes.courseCategory}
                // onClick={() => handleBtnClick()}
              >
                Biological Science
              </Button>
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                className={classes.courseCategory}
                // onClick={() => handleBtnClick()}
              >
                Physical Science
              </Button>
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                className={classes.courseCategory}
                // onClick={() => handleBtnClick()}
              >
                Special Education
              </Button>
            </Grid>
          </Grid>
          {/* ////////////////////////////////////////////////////////////////// */}

          {/* for courses list */}
          {/* course cards will be added as dynamic data */}
          <Grid container justify="space-evenly" item xs={12} lg={8}>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />

            {/* for pagination */}
            <div className={classes.pagination}>
              <Pagination
                count={5}
                size="large"
                variant="outlined"
                shape="rounded"
              />
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* footer component */}
      <Footer />
      {/* footer component */}
    </>
  );
};

export default Courses;
