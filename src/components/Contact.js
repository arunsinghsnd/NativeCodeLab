import React from "react";
import {
  Grid,
  makeStyles,
  useTheme,
  Typography,
  useMediaQuery,
  Hidden,
  Avatar,
  Button,
  TextField,
} from "@material-ui/core";
import background from "../assets/background.jpg";

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "60em",
  },
}));

const Contact = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container direction="row">
      <Grid item container direction="column" lg={3}>
        <Grid item>
          <Typography variant="h2" style={{ lineHeight: 1 }}>
            Contcat Us
          </Typography>
          <Typography
            variant="body2"
            style={{ color: theme.palette.common.blue }}
          >
            We're waiting.
          </Typography>
        </Grid>
      </Grid>

      <Grid item container className={classes.background} lg={9}></Grid>
    </Grid>
  );
};

export default Contact;
