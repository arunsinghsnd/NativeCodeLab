import React from "react";
import {
  Button,
  Grid,
  makeStyles,
  useTheme,
  Typography,
  useMediaQuery,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import Lottie from "react-lottie";

import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data.json";

const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em",
  },
  itemContainer: {
    maxWidth: "34em",
  },
}));

const CustomSoftware = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const documentsOptions = {
    loop: true,
    autoplay: false,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: false,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item container direction="row">
        <Grid
          item
          className={classes.arrowContainer}
          style={{ marginRight: "1em", marginLeft: "-3.5em" }}
        >
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/services"
            onClick={() => {
              props.setSelectedIndex(1);
            }}
          >
            <img src={backArrow} alt="Back to Services Page" />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2">Custom Software Developemnt</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" paragraph>
              Wheather we're replacing old software or inventing new solutions.
              Arc Developemnt is here to help your business tackle technology
            </Typography>
            <Typography variant="body2" paragraph>
              Using regular commercial software leaves you with alot of stuff
              you don't need, without some of the you do need, and ultimately
              controls the way you work. Without using any software at all risk
              falling behind competitors and missing out on huge saving from
              increase efficiency.
            </Typography>
            <Typography variant="body2" paragraph>
              Our custom solutions are desgined from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options
            </Typography>
            <Typography variant="body2" paragraph>
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/mobileapps"
            onClick={() => {
              props.setSelectedIndex(2);
            }}
          >
            <img
              src={forwardArrow}
              alt="Forwared to android and iOS App developemnt  page"
            />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img alt="LightBuld" src={lightbulb} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img alt="StopWacth" src={stopwatch} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img alt="Cash" src={cash} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row" justifyContent="space-around">
        <Grid item container className={classes.itemContainer} md>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Digital Documents & Data</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" paragraph>
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography variant="body2" paragraph>
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well
              </Typography>
              <Typography variant="body2" paragraph>
                By utilizing digital forms and documents you can remove these
                obsolte expenses, accelerate your communication, and help the
                Earth
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 325, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>

        <Grid item container className={classes.itemContainer} md>
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align="right">
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" align="right" paragraph>
                Wheather you're a large brand, just getting started, or taking
                off right mow, our application architecture ensure pain-free
                growth and reliability
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
