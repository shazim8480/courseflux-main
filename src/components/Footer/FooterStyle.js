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
  socialPack: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: theme.spacing(3),
  },
  socialIcon: {
    marginRight: "18px",
  },
  subscribeButton: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "black",
    color: "#beae60",
    "&:hover": {
      backgroundColor: "#f5f5f5",
      color: "#beae60",
      border: "1px solid #beae60",
      transition: "all linear 0.2s",
    },
  },
  subscribeText: {
    marginTop: theme.spacing(3.5),
  },

  emailField: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default footerStyles;
