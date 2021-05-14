import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import courseCardStyles from "./CourseCardStyle";
import { Button, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#beae60",
    },
    background: {
      default: "#212121",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 800,
  },
});

const CourseCard = () => {
  const classes = courseCardStyles();
  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="courseName" className={classes.avatar}>
              PC
            </Avatar>
          }
          title="PC - 101 : Introduction to Education"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          // dynamic course image & title here
          image="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=746&q=80"
          title="Introduction to Education"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={RouterLink}
            to="/courseDetails"
            variant="outlined"
            className={classes.enrollBtn}
          >
            See Details
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default CourseCard;
