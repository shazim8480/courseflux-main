import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const courseCardStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: theme.spacing(5),
    //
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
    color: "#f5f5f5",
  },
  enrollBtn: {
    backgroundColor: "#f5f5f5",
    fontWeight: 700,
    color: red[500],
    border: "1px solid red",
    margin: theme.spacing(1, 0, 1.5, "30%"),
    "&:hover": {
      backgroundColor: red[500],
      color: "#f5f5f5",
    },
  },
}));

export default courseCardStyles;
