import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F2E8CF",
    },
    secondary: {
      main: "#7AA03D",
    },
  },
    typography: {
    fontFamily: 'EB Garamond'
  },
});

export default Theme;