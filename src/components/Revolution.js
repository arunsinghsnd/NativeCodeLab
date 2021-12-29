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

import vision from "../assets/vision.svg";

import CallToAction from "./ui/CallToAction";

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

const Revolution = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography variant="h2" style={{ fontFamily: "Pacifico" }}>
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item lg>
          <img
            src={vision}
            alt="mountain through binoculrs"
            style={{ maxWidth: "40em", marginRight: "5em" }}
          />
        </Grid>

        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography variant="h4" align="right" gutterBottom>
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" align="right" paragraph>
              The rise of compouters , and subsequently the Internet , has
              completely altered every aspect of humans life. This has increased
              our comfort, broadened our connections, and reshaped how we view
              the world.
            </Typography>
            <Typography variant="body2" align="right" paragraph>
              What once was confined to huge rooms and teams of engineers now
              reside in every single one of our hands. Harnessing this unlimited
              potenial by using it to solve problems and better lives is at the
              heart of everything we do.
            </Typography>
            <Typography variant="body2" align="right" paragraph>
              We want businesses capitalize on the latest and greatest
              technology. The best way to predict the future is to be the one
              building it, and we want to help guide the world into this next
              chapter of technological expansion, and innovation.
            </Typography>
            <Typography variant="body2" align="right" paragraph>
              By holding ourselves to rigorous standards and pristine quatlity,
              we can ensure you have the absolute best tools necessary to thrive
              in this new frontier.
            </Typography>
            <Typography variant="body2" align="right" paragraph>
              We see a future where every individual has personalized software
              custom tailored to their lifestyle, culture, and interests,
              helping them overcome life's obstacles. Each project is a step
              towards that goal.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default Revolution;
