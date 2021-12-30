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
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";

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
      <Grid item container direction="column" justifyContent="center" lg={3}>
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
        <Grid item container>
          <Grid item>
            <img
              src={phoneIcon}
              alt="phone icon"
              style={{ marginRight: "0.5em" }}
            />
          </Grid>
          <Grid item>
            {/* <img src={emailIcon} alt="phone icon" /> */}
            <Typography
              variant="body2"
              style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
            >
              (+91) 8427825355
            </Typography>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid item>
            <img
              src={emailIcon}
              alt="envalop"
              style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
            />
          </Grid>
          <Grid item>
            {/* <img src={emailIcon} alt="phone icon" /> */}
            <Typography
              variant="body2"
              style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
            >
              arunsinghsnd@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container className={classes.background} lg={9}></Grid>
    </Grid>
  );
};

export default Contact;
