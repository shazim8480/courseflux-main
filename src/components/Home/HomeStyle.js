import { makeStyles } from "@material-ui/core/styles";

const homeStyles = makeStyles((theme) => ({
  homeContainer: {
    paddingTop: theme.spacing(3),
    marginBottom: theme.spacing(8),
  },
  span: {
    fontWeight: "bold",
  },
  homeBody: {
    marginBottom: theme.spacing(3),
  },
  bodyTitle: {
    marginBottom: theme.spacing(3),
  },
  bodyText: {
    fontSize: "20px",
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    marginTop: theme.spacing(4),
  },
  bodyImg: {
    height: "100%",
    width: "100%",
  },
}));

export default homeStyles;
