import { createTheme } from "@mui/material/styles";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
// Тема с другого проекта
const theme = createTheme({
  palette: {
    primary: {
      light: "#F2F8FA",
      main: "#395776",
      dark: "#E1EBF2",
    },
    error: createColor("#FF6B6B"),
    white: "#FFFFFF",
    success: {
      main: "#75B726",
      contrastText: "#FFFFFF",
    },
    lightSuccess: {
      main: "#eaf4de",
      contrastText: "#75B726",
    },
    greenContrast: {
      main: "#ffffff",
      contrastText: "#75B726",
    },
    table: {
      main: "#F4F7FA",
      text: "#55595D",
      paginationButton: "#75B726",
    },
    border: {
      main: "#CFD3D8",
    },
    search: {
      main: "#F2F2F2",
    },
    chip: {
      enabled: {
        main: "#4B7E0E",
        bg: "#E3F1D4",
      },
      training: {
        main: "#004889",
        bg: "#F0F8FF",
      },
      disabled: {
        main: "#707479",
        bg: "#F4F7FA",
      },
      cleaned: {
        main: "#38A0EB",
        bg: "#d6ebf8",
      },
      "not cleaned": {
        main: "#889aad",
        bg: "#e2eaee",
      },
    },
    secondary: createColor("#0A1931"),
    textColor: {
      dark: "#0C0308",
      main: "#0C0308",
      light: "#F2F8FA",
      contrastText: "#F0F2F5",
    },
    darkButton: {
      main: "#F0F2F5",
      contrastText: "#395776",
    },
    social: {
      main: "#7C7C7D",
      dark: "#0C0308",
      light: "#FFFFFF",
    },
    footer: {
      main: "#002D5C",
    },

    button: {
      primary: {},
    },

    tooltip: {
      main: "rgba(77, 108, 141, 0.8)",
      textColor: "#F4F7FA",
    },

    logo: {
      dark: "#000000",
      colored: "#C53DD8",
    },

    action: {
      disabledBackground: "#C1CEF1",
      disabled: "#6574A7",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1400,
      xl: 1600,
    },
  },
  borderRadius: {
    xs: "4px",
    sm: "12px",
    md: "24px",
    lg: "40px",
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),

    secondaryFont: ["Inter", "sans-serif"].join(","),

    allVariants: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      color: "#393C3F",
    },
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    xlHeader: {
      fontWeight: 500,
      fontSize: "40px",
      lineHeight: "49px",
    },
    h1: {
      fontWeight: 500,
      fontSize: "28px",
      lineHeight: "34px",
    },
    h2: {
      fontWeight: 500,
      fontSize: "22px",
      lineHeight: "27px",
    },
    h3: {
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "27px",
    },
    body1: {
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "22px",
    },
    body2: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "20px",
    },
    body3: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "17px",
    },
    subtitle: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "14px",
    },
  },
});

export default theme;
