import React from "react";
import {
  Grid,
  makeStyles,
  useTheme,
  Typography,
  useMediaQuery,
  IconButton,
  Hidden,
  Avatar,
} from "@material-ui/core";
import history from "../assets/history.svg";
import profile from "../assets/FounderPic.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";

const useStyles = makeStyles(theme => ({
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5em",
    lineHeight: 1.4,
    maxWidth: "50em",
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
  avatar: {
    height: "25em",
    width: "25em",
  },
}));

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="colummn">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography variant="h2">About us</Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        className={classes.rowContainer}
      >
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, nexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        justifyContent="space-around"
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography variant="h4" gutterBottom>
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We're the new kid on the block
              </Typography>
              <Typography variant="body2" paragraph>
                Founded in 2019, we're ready to get our hands on the world's
                business problems.
              </Typography>
              <Typography variant="body2" paragraph>
                It all started with one question: Why aren't all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers,
              </Typography>
              <Typography variant="body2" paragraph>
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography variant="body2" paragraph>
                All this change can be a lot to keep up with, and that's where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justifyContent="center" lg>
            <img
              src={history}
              alt="quill pen sitting on top of book"
              style={{ maxHeight: "22em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom align="center">
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" paragraph align="center">
            Arun Kumar Singh, Founder
          </Typography>
          <Typography variant="body2" paragraph align="center">
            I started Coding when I was 17 years old.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="founder" src={profile} className={classes.avatar} />
        </Grid>
        <Grid item container>
          <Grid item container direction="column" lg>
            <Grid item>
              <img src={yearbook} alt="year book page about founder" />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                a page from my Shopomore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
            <Typography variant="body2" align="center" paragraph>
              I taught myself basic coding from my university in B.Tech, and
              ever since then my passion has solely been set on learning -
              learning about computers, learning mathematics and philosophy,
              studying desgin, always just learning.
            </Typography>
            <Typography variant="body2" align="center" paragraph>
              Now I'm ready to apply everythings I've learned, and to help
              others with the intuition I have developed.
            </Typography>
          </Grid>
          <Grid item container direction="column" lg alignItems="flex-end">
            <Grid item>
              <img src={puppy} alt="grey spotted puppy" />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                my miniature dapple dachshund, Sterling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
