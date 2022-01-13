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
import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import pepople from "../assets/people.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import users from "../assets/users.svg";
import iphone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";

import Lottie from "react-lottie";

import estimateAnimation from "../animations/estimateAnimation/data.json";

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
  itemContainer: {
    maxWidth: "34em",
  },
}));

const Estimate = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="row">
      <Grid item container direction="column">
        <Grid item>
          <Typography variant="h2"> Estimate </Typography>
        </Grid>
        <Grid item>
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </Grid>
      </Grid>
      <Grid item container direction="column">
        <Grid item>
          <Typography
            variant="h2"
            align="center"
            style={{ fontWeight: 300 }}
            gutterBottom
          >
            Which service are you interested in?{" "}
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item container direction="column">
            <Grid item style={{ maxWidth: "12em" }}>
              <Typography variant="h6" align="center">
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item>
              <img src={software} alt="three floating screens" />
            </Grid>
          </Grid>
          <Grid item container direction="column">
            <Grid item style={{ maxWidth: "12em" }}>
              <Typography variant="h6" align="center">
                Android/iOS Development
              </Typography>
            </Grid>
            <Grid item>
              <img src={mobile} alt="three floating screens" />
            </Grid>
          </Grid>
          <Grid item container direction="column">
            <Grid item style={{ maxWidth: "12em" }}>
              <Typography variant="h6" align="center">
                Website Software Development
              </Typography>
            </Grid>
            <Grid item>
              <img src={website} alt="three floating screens" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Estimate;
