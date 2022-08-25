import { createContext, ElementType, useContext } from "react";
import { Stack, StackProps } from "../..";

export type Spacing = "xs" | "s" | "m" | "l" | "xl";

export type ThemeType = {
  accentColor: string;
  backgroundColor: string;
  border: string;
  borderColor: string;
  borderRadius: string;
  fontAccentColor: string;
  fontColor: string;
  fontFamily: string;
  lineHeight: string;
  spacings: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };
};

export const defaultTheme: ThemeType = {
  accentColor: "#333",
  backgroundColor: "#fff",
  border: "1px solid",
  borderColor: "#333",
  borderRadius: "4px",
  fontAccentColor: "#fff",
  fontColor: "#333",
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  lineHeight: "1.6",
  spacings: {
    xs: "4px",
    s: "8px",
    m: "16px",
    l: "32px",
    xl: "64px",
  },
};

export const ThemeContext = createContext<ThemeType>(defaultTheme);

export type ThemeProps<C extends ElementType> = StackProps<C> &
  Partial<ThemeType>;

export const Theme = <C extends ElementType>({
  accentColor = defaultTheme.accentColor,
  backgroundColor = defaultTheme.backgroundColor,
  border = defaultTheme.border,
  borderColor = defaultTheme.borderColor,
  borderRadius = defaultTheme.borderRadius,
  children,
  fontAccentColor = defaultTheme.fontAccentColor,
  fontColor = defaultTheme.fontColor,
  fontFamily = defaultTheme.fontFamily,
  lineHeight = defaultTheme.lineHeight,
  spacings = defaultTheme.spacings,
  ...props
}: ThemeProps<C>) => (
  <Stack backgroundColor={backgroundColor} color={fontColor} {...props}>
    <ThemeContext.Provider
      value={{
        accentColor,
        backgroundColor,
        border,
        borderColor,
        borderRadius,
        fontAccentColor,
        fontColor,
        fontFamily,
        lineHeight,
        spacings,
      }}
    >
      {children}
    </ThemeContext.Provider>
  </Stack>
);

export const useTheme = () => useContext(ThemeContext);
