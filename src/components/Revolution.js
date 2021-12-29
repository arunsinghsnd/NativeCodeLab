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
import technologyAnimation from "../animations/technologyAnimation/data.json";

import CallToAction from "./ui/CallToAction";
import Lottie from "react-lottie";

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

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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

      <Grid
        item
        container
        direction="row"
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" paragraph>
              In 2013, Facebook invented a new way of building websites. This
              new System, React.js, completely Revolutionizes the process and
              practice of websites Development.
            </Typography>
            <Typography variant="body2" paragraph>
              Instead of chaining together long individual pages, like
              traditional websites, React websites are built with little chunks
              called components. These components are faster, easier to
              maintian, and are easily reused and customized, each serving a
              singular purpose.
            </Typography>
            <Typography variant="body2" paragraph>
              Two years later they shocked the world by realeasing a similar
              system, React Native, for producing iOS and Android apps. Instead
              of having to master two completely separted Development
              plateforms, you can leverage the knowledge you already possesed
              from building websites and reapply it direactly! This was a huge
              leap forward.
            </Typography>
            <Typography variant="body2" paragraph>
              This teachnolgy is now being used by companies like AirBnB,
              Microsoft, Netflix, Pinterestm Skype, Tesla, UserEats, and when
              FaceBook purchased Instagram large portions of it were even
              rebulid using React.
            </Typography>
            <Typography variant="body2" paragraph>
              Developer have since built on top of these systems by automating
              project setup and developement, allowing creators to focus as much
              as possible on their work itself.
            </Typography>
            <Typography variant="body2" paragraph>
              These techical advancements translate into saving by significantly
              reducing the workload and stramlining the workflow for developing
              new pieces of software, while also lowering the barrier to entry
              for mobile app developement.
            </Typography>
            <Typography variant="body2" paragraph>
              These puts personalization in your pocket- faster, better, and
              more affordable than ever bedore.
            </Typography>
          </Grid>
        </Grid>

        <Grid item container justifyContent="flex-end" lg>
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: "40em", margin: 0 }}
          />
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default Revolution;
