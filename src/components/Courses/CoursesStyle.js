import { makeStyles } from "@material-ui/core/styles";

const coursesStyles = makeStyles((theme) => ({
  borderContainer: {
    borderColor: "#beae60",
  },
  coursesContainer: {
    margin: theme.spacing(3, 0, 2),
  },
  searchContainer: {
    height: "50%",
  },
  searchBtn: {
    margin: theme.spacing(3, 0, 2),
    "&:hover": {
      backgroundColor: "black",
      color: "#beae60",
      border: "1px solid #beae60",
      transition: "all linear 0.2s",
    },
  },
  categoryContainer: {
    height: "50%",
    margin: theme.spacing(4, 0, 2),
  },
  deptText: {
    marginBottom: theme.spacing(3),
  },
  courseCategory: {
    margin: theme.spacing(1, 0, 2),
  },

  searchField: {
    margin: theme.spacing(3, 0, 2),
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
  pagination: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default coursesStyles;
