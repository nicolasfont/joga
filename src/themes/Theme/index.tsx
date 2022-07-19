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
  borderColor: "#999",
  borderRadius: "4px",
  fontAccentColor: "#fff",
  fontColor: "#333",
  lineHeight: "1.6",
  spacings: {
    xs: "2px",
    s: "4px",
    m: "8px",
    l: "16px",
    xl: "32px",
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
        lineHeight,
        spacings,
      }}
    >
      {children}
    </ThemeContext.Provider>
  </Stack>
);

export const useTheme = () => useContext(ThemeContext);
