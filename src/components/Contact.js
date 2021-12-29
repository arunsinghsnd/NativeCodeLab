import React from "react";
import {
  Grid,
  makeStyles,
  useTheme,
  Typography,
  useMediaQuery,
  Hidden,
  Avatar,
} from "@material-ui/core";

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
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));

const Contact = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container direction="row">
      <Grid>This is Conect us page</Grid>
    </Grid>
  );
};

export default Contact;
