import React from "react";
import Lottie from "react-lottie";
import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

import animationData from "../animations/landinganimation/data";
import ButtonArrow from "../components/ui/ButtonArrow";
import customSoftware from "../assets/Custom Software Icon.svg";

const useStyle = makeStyles(theme => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "10em",
  },
  learnButtonHero: {
    ...theme.typography.learnButtom,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButtom,
    fontSize: "0.9rem",
    height: 45,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
}));

const LandingPage = () => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        {/*-----Hero Block Start-------*/}
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          direction="row"
        >
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justifyContent="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button className={classes.estimateButton} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    height={15}
                    width={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      {/*-----Hero Block End-------*/}
      {/*-----Services Block Start-------*/}
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            itme
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                height={15}
                width={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="custom software icon"
              src={customSoftware}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*-----Services Block End-------*/}
    </Grid>
  );
};

export default LandingPage;
