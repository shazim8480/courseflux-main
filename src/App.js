import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { createContext, useState } from "react";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Discussions from "./components/Discussions/Discussions";
import Home from "./components/Home/Home";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Profile from "./components/Profile/Profile";
import SignUp from "./components/Authentication/SignUp/SignUp";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import CourseDetails from "./components/Courses/Course Details/CourseDetails";

export const UserContext = createContext();

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
      paper: "#beae60",
    },
    text: {
      primary: "#f5f5f5",
      secondary: "#e0e0e0",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 800,

    body1: {
      fontFamily: "Roboto",
    },

    body2: {
      fontFamily: "Roboto",
    },

    h6: {
      fontFamily: "Roboto",
      fontSize: "17px",
      fontWeight: 500,
    },

    button: {
      fontFamily: "Quicksand",
      fontWeight: 700,
      fontSize: "18px",
    },
  },
});

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/courses">
              <Courses />
            </Route>
            {/* course details route will be removed when passing dynamic params */}
            <Route path="/courseDetails">
              <CourseDetails />
            </Route>
            {/* ////////////////////////////////// */}
            <Route path="/discussions">
              <Discussions />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route exact path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
