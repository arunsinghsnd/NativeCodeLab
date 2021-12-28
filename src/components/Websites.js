import React from "react";
import {
  Grid,
  makeStyles,
  useTheme,
  Typography,
  useMediaQuery,
  IconButton,
  Hidden,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";
import Lottie from "react-lottie";

import integrationAnimation from "../animations/integrationAnimation/data.json";
import CallToAction from "./ui/CallToAction";

import analytics from "../assets/analytics.svg";
import seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg";
import ecommerce from "../assets/ecommerce.svg";

const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  paragraphContainer: {
    maxWidth: "30em",
  },
}));

const Websites = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justifyContent={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/mobileapps"
              onClick={() => {
                props.setSelectedIndex(2);
              }}
            >
              <img
                src={backArrow}
                alt="Back to Aandroid and IOS Developemnt page "
              />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              Website Developemnt
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Having a website is a necessity in today's business world. They
              give you one central, public location to let pepole know who you
              are, what you do, and why yo're the best at it.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              paragraph
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/services"
              onClick={() => {
                props.setSelectedIndex(0);
              }}
            >
              <img src={forwardArrow} alt="Forwared to Services page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                style={{ marginLeft: "-2.75em" }}
                alt="grap with mangnifying glass revealing 1's and 0's"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            gutterBottom
            className={classes.paragraphContainer}
          >
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and treads in your business,
            empowering you to make smarter descision with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default Websites;
