import { makeStyles } from "@material-ui/core/styles";

const footerStyles = makeStyles((theme) => ({
  footerContainer: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(3),
  },
  footerImg: {
    width: "57%",
    height: "78%",
    backgroundColor: "#212121",
  },
  copyrightText: {
    fontSize: "15px",
  },
  footerContact: {
    marginTop: theme.spacing(4),
  },
  footerContactDetails: {
    marginBottom: theme.spacing(2),
  },
}));

export default footerStyles;
