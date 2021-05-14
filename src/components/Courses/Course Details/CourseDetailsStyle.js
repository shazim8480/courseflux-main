import { makeStyles } from "@material-ui/core/styles";

const courseDetailsStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  courseDetailsContainer: {
    marginTop: theme.spacing(8),
  },
  courseImgContainer: {
    marginTop: theme.spacing(5),
  },
  tabsContainer: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  // pricing container starts //
  pricingContainer: {
    marginBottom: theme.spacing(10),
  },
  courseCard: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardHeader: {
    backgroundColor: "#beae60",
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    paddingTop: "20px",
  },
  cardActions: {
    backgroundColor: "#e0e0e0",
  },
  spanText: {
    fontWeight: 300,
    marginLeft: "8px",
  },
  spanPrice: {
    fontWeight: 700,
    marginLeft: "5px",
  },
  detailsList: {
    paddingBottom: "20px",
    paddingTop: "20px",
  },
}));

export default courseDetailsStyles;
