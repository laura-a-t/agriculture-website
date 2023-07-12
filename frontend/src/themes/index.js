import { createMuiTheme } from '@mui/material/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#46a832',
    },
    secondary: {
      main: '#1E4215',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});