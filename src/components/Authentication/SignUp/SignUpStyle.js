import { makeStyles } from "@material-ui/core/styles";

const signUpStyles = makeStyles((theme) => ({
  // setting the border color of each text field///
  formTextField: {
    // - The TextField-root
    // border: "solid 3px #0ff", // - For demonstration: set the TextField-root border
    // padding: "3px", // - Make the border more distinguishable

    // (Note: space or no space after & matters. See SASS "parent selector".)
    "& .MuiOutlinedInput-root": {
      // - The Input-root, inside the TextField-root
      "& fieldset": {
        // - The <fieldset> inside the Input-root
        borderColor: "#fff", // - Set the Input border
      },
      "&:hover fieldset": {
        borderColor: "#beae60", // - Set the Input border when parent has :hover
      },
      "&.Mui-focused fieldset": {
        // - Set the Input border when parent is focused
        borderColor: "#beae60",
      },
    },
  },
  // ////////////////////////////////// ////////////////////////////////////
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submitBtn: {
    margin: theme.spacing(3, 0, 2),
    "&:hover": {
      backgroundColor: "black",
      color: "#beae60",
      border: "1px solid #beae60",
      transition: "all linear 0.2s",
    },
  },
  errorText: {
    color: "#ff5252",
  },
}));

export default signUpStyles;
