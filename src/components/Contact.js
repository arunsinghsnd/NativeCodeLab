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
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  learnButton: {
    ...theme.typography.learnButtom,
    fontSize: "0.9rem",
    height: 45,
    padding: 5,
    [theme.breakpoints.down("md")]: {
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
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButtom: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
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
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const onChange = event => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invaild email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper("Invaild phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={4}
        xl={3}
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h2"
                align={matchesMD ? "center" : undefined}
                style={{ lineHeight: 1 }}
              >
                Contcat Us
              </Typography>
              <Typography
                variant="body2"
                align={matchesMD ? "center" : undefined}
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
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
                  +91-8427825355
                </Typography>
              </Grid>
            </Grid>

            <Grid item container style={{ marginBottom: "2em" }}>
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
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "20em" }}
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  id="phone"
                  fullWidth
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                value={message}
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                multiline
                rows={10}
                fullWidth
                id="message"
                onChange={event => setMessage(event.target.value)}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginTop: "2em" }}
            >
              <Button variant="contained" className={classes.sendButtom}>
                Send Message{" "}
                <img
                  src={airplane}
                  alt="paper airpalne"
                  style={{ marginLeft: "1em" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        lg={8}
        xl={9}
        justifyContent={matchesMD ? "center" : undefined}
        alignItems="center"
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? "center" : undefined} variant="h2">
                Simple Software.
                <br /> Revolutionary Results.
              </Typography>
              <Typography
                variant="subtitle2"
                align={matchesMD ? "center" : undefined}
                style={{ fontSize: "1.5rem" }}
              >
                Take a advantage of the 21st Century.
              </Typography>
              <Grid
                container
                justifyContent={matchesMD ? "center" : undefined}
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