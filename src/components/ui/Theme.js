import { createTheme } from "@material-ui/core/styles";
const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

export default createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      textTransform: "none",
      fontSize: "1rem",
      color: "white",
    },
    h2: {
      fontFamily: "Ralewaye",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: `${arcBlue}`,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5em",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Ralewaye",
      fontWeight: 700,
      fontSize: "1.75rem",
      color: `${arcBlue}`,
    },
    subtitle1: {
      fontWeight: 300,
      fontSize: "1.25rem",
      color: `${arcGrey}`,
    },
    subtitle2: {
      fontWeight: 300,
      fontSize: "1.25rem",
      color: "white",
    },
    body2: {
      fontWeight: 300,
      fontSize: "1.25rem",
      color: `${arcGrey}`,
    },
    learnButtom: {
      borderColor: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      color: arcBlue,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "blod",
    },
  },
});
