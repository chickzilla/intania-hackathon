import {
  createTheme,
  DEFAULT_THEME,
  mergeMantineTheme,
  rem,
} from "@mantine/core";

const themeOverride = createTheme({
  primaryColor: "red",

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },

  headings: {
    fontFamily: "Roboto, sans-serif",
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },

  defaultRadius: "md",
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
