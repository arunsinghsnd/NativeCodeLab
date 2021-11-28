import React from "react";
import Lottie from "react-lottie";
import { Button, Grid, makeStyles } from "@material-ui/core";

import animationData from "../animations/landinganimation/data";
import ButtonArrow from "../components/ui/ButtonArrow";

const useStyle = makeStyles(theme => ({}));

const LandingPage = () => {
  const classes = useStyle();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container direction="row">
          <Grid item>
            <div>
              Bringing West Coast Technology
              <br />
              to the Midwest
            </div>
            <Grid container>
              <Grid item>
                <Button variant="contained">Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant="outline">
                  Learn More
                  <ButtonArrow height={15} width={15} fill="red" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
