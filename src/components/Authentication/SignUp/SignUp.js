import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import signUpStyles from "./SignUpStyle";

// import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../../App";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/home">
        Course Flux
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const SignUp = () => {
  const classes = signUpStyles();
  // use context api from app.js////////////////////
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // validation using yup //
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  });
  // use form hook destructuring//
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // to redirect to inner pages after authentication//
  const history = useHistory();
  // const location = useLocation();
  // let { from } = location.state || { from: { pathname: "/" } };

  //////////////////////////////////////////////////////////////////

  // sign up button onclick directory. Will delete when firebase auth is complete//
  const handleBtnClick = () => {
    history.push("/courses");
  };
  ////////////////////////////////////////////////////////////////
  // firebase auth part start //
  //handle submit function //
  function onSubmit(user) {
    console.log(user);
    user.preventDefault();
  }
  // firebase auth part end //
  ////////////////////////////////////////////////////////////////
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>

        {/* sign up form part start */}
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <Controller
            render={({ props }) => (
              <TextField
                {...props}
                className={classes.formTextField}
                label="Full Name"
                variant="outlined"
                margin="normal"
                color="secondary"
                fullWidth
                autoFocus
                id="name"
                {...register("name")}
              />
            )}
            name="name"
            control={control}
            defaultValue={loggedInUser.name}
          />

          <Controller
            render={({ props }) => (
              <TextField
                {...props}
                className={classes.formTextField}
                label="Email Address"
                variant="outlined"
                margin="normal"
                color="secondary"
                fullWidth
                autoFocus
                id="email"
                {...register("email")}
              />
            )}
            name="email"
            control={control}
            defaultValue={loggedInUser.email}
          />
          {errors?.email && (
            <span className={classes.errorText}>{errors.email?.message}</span>
          )}

          <Controller
            render={({ props }) => (
              <TextField
                {...props}
                className={classes.formTextField}
                label="Password"
                variant="outlined"
                margin="normal"
                color="secondary"
                type="password"
                id="password"
                fullWidth
                {...register("password")}
              />
            )}
            name="password"
            control={control}
            defaultValue={loggedInUser.password}
          />
          {errors?.password && (
            <span className={classes.errorText}>
              {errors.password?.message}
            </span>
          )}

          <Controller
            render={({ props }) => (
              <TextField
                {...props}
                className={classes.formTextField}
                label="Confirm Password"
                variant="outlined"
                margin="normal"
                color="secondary"
                type="password"
                id="confirmPassword"
                fullWidth
                {...register("confirmPassword")}
              />
            )}
            name="password"
            control={control}
            defaultValue={loggedInUser.confirmPassword}
          />

          <span className={classes.errorText}>
            {errors.confirmPassword && "Passwords Should Match!"}
          </span>
          {/* sign up form part end */}

          {/* sign up button part */}
          <Button
            // type="submit" will re-activate when auth is complete//
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submitBtn}
            onClick={() => handleBtnClick()}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" color="textPrimary">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" color="textPrimary">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignUp;