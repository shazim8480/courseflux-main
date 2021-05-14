import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import courseDetailsStyles from "./CourseDetailsStyle";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Curriculum from "./Curriculum";
import Description from "./Description";
import Notes from "./Notes";
import FAQ from "./FAQ";

const CourseDetails = () => {
  const classes = courseDetailsStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      {/* header component start */}
      <Header></Header>
      {/* header component end */}
      <Container>
        {/* container to initially contain video player and details */}
        <Grid className={classes.courseDetailsContainer} container spacing={5}>
          {/* video player */}
          <Grid item className={classes.videoPlayerContainer} xs={12} lg={8}>
            {/* course title, will be dynamic */}
            <Typography variant="h4">
              PC : 101 - Introduction to Education
            </Typography>
            {/* video player here.. */}
            <Grid item xs={12} lg={12}>
              <img
                className={classes.courseImgContainer}
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=804&q=80"
                alt="course_img"
              />
            </Grid>

            {/* tabs section */}
            <div className={classes.tabsContainer}>
              <Tabs value={selectedTab} onChange={handleChange}>
                <Tab label="Description" />
                <Tab label="Curriculum" />
                <Tab label="Notes & PDF" />
                <Tab label="FAQ" />
              </Tabs>
              {/* tab navigation starts with "0" */}
              {selectedTab === 0 && <Description />}
              {selectedTab === 1 && <Curriculum />}
              {selectedTab === 2 && <Notes />}
              {selectedTab === 3 && <FAQ />}
            </div>
          </Grid>

          {/* for details & pricing*/}
          <Grid item className={classes.pricingContainer} xs={12} lg={4}>
            <Grid>
              <Grid item>
                <Card className={classes.courseCard}>
                  <CardHeader
                    title="Course Features"
                    titleTypographyProps={{ align: "left" }}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <ul className={classes.detailsList}>
                      <Typography
                        component="li"
                        variant="h6"
                        align="left"
                        color="primary"
                      >
                        Enrolled Courses :{" "}
                        <span className={classes.spanText}>2000</span>
                      </Typography>

                      <Typography
                        component="li"
                        variant="h6"
                        align="left"
                        color="primary"
                      >
                        Duration :{" "}
                        <span className={classes.spanText}>4 Hours</span>
                      </Typography>

                      <Typography
                        component="li"
                        variant="h6"
                        align="left"
                        color="primary"
                      >
                        Lectures : <span className={classes.spanText}>5</span>{" "}
                      </Typography>

                      <Typography
                        component="li"
                        variant="h6"
                        align="left"
                        color="primary"
                      >
                        Notes & PDF :{" "}
                        <span className={classes.spanText}>20 +</span>
                      </Typography>

                      <Typography
                        component="li"
                        variant="h6"
                        align="left"
                        color="primary"
                      >
                        Category :{" "}
                        <span className={classes.spanText}>
                          Professional Core Course
                        </span>{" "}
                      </Typography>
                    </ul>
                  </CardContent>
                  <CardContent className={classes.cardPricing}>
                    <div>
                      <Typography variant="h5" component="h2" color="primary">
                        Price :{" "}
                        <span className={classes.spanPrice}>$10.00</span>
                      </Typography>
                    </div>
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    <Button fullWidth variant="contained" color="primary">
                      Enroll Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* footer component start */}
      <Footer></Footer>
      {/* footer component end */}
    </>
  );
};

export default CourseDetails;
