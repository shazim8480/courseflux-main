import { makeStyles } from "@material-ui/core/styles";
const headerStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#beae60",
  },
  responsiveNav: {
    color: "#212121",
  },
  navBtn: {
    marginLeft: theme.spacing(5),
    fontSize: "18px",
    "&:hover": {
      backgroundColor: "#beae60",
      color: "#212121",
      transition: "all linear 0.2s",
    },
  },
  menuList: {
    display: "flex",
    // flex: 1,
  },
  title: {
    // [theme.breakpoints.down("xs")]: {},
    flexGrow: 1,
    fontWeight: 800,
    // marginRight: theme.spacing(4),
  },
  headerImg: {
    height: "120px",
    width: "130px",
  },
}));
export default headerStyles;
