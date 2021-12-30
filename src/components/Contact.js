import React, { useState } from "react";
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

import ButtonArrow from "../components/ui/ButtonArrow";
import background from "../assets/background.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";
import mobileBackground from "../assets/mobileBackground.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "60em",
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
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
}));

const Contact = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Grid container direction="row">
      <Grid item container direction="column" justifyContent="center" lg={4}>
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
        <Grid item container>
          <Grid item>
            <TextField
              label="Name"
              id="name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Email"
              id="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Phone"
              id="phone"
              value={phone}
              onChange={event => setPhone(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            value={message}
            multiline
            rows={10}
            id="message"
            onChange={event => setMessage(event.target.value)}
          />
        </Grid>
        <Grid item>
          <Button variant="contained">
            Send Message <img src={airplane} alt="paper airpalne" />
          </Button>
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.background}
        lg={8}
        alignItems="center"
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2">
                Simple Software.
                <br /> Revolutionary Results.
              </Typography>
              <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
                Take a advantage of the 21st Century.
              </Typography>
              <Grid
                container
                justifyContent={matchesSM ? "center" : undefined}
                item
              >
                <Button
                  variant="outlined"
                  className={classes.learnButton}
                  component={Link}
                  to="/revolution"
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    height={15}
                    width={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            component={Link}
            to="/estimate"
            onClick={() => props.setValue(5)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
