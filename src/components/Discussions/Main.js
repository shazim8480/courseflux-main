import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  postDetails: {
    marginTop: theme.spacing(3),
  },
}));

const blogPost = {
  title: "Sample blog post",
  subtitle: "April 1, 2020 by Olivier",
  description:
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Donec id elit non mi porta gravida at eget metus.Nulla vitae elit libero, a pharetra augue.Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.Vestibulum id ligula porta felis euismod semper.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Maecenas sed diam eget risus varius blandit sit amet non magna.Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.",
};

export default function Main(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Divider style={{ backgroundColor: "#beae60" }} />

      <div className={classes.postDetails}>
        <Typography
          component="h1"
          gutterBottom
          color="textPrimary"
          variant="h5"
        >
          {blogPost.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom color="textSecondary">
          {blogPost.subtitle}
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          color="textPrimary"
          paragraph
        >
          {blogPost.description}
        </Typography>
      </div>
    </Grid>
  );
}

Main.propTypes = {
  title: PropTypes.string,
};
