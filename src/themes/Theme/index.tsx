import { createContext, ElementType, useContext } from "react";
import { Stack, StackProps } from "../..";

export type Spacing = "xs" | "s" | "m" | "l" | "xl";

export type ThemeType = {
  colors: {
    accent: string;
    border: string;
    background: string;
    foreground: string;
    foregroundAccent: string;
  };
  spacings: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };
  lineHeight: string;
  border: string;
  borderRadius: string;
};

export const defaultTheme = {
  colors: {
    accent: "#333",
    border: "#999",
    background: "#fff",
    foreground: "#333",
    foregroundAccent: "#fff",
  },
  spacings: {
    xs: "2px",
    s: "4px",
    m: "8px",
    l: "16px",
    xl: "32px",
  },
  lineHeight: "1.6",
  border: "1px solid",
  borderRadius: "4px",
};

export const ThemeContext = createContext<ThemeType>(defaultTheme);

export type ThemeProps<C extends ElementType> = StackProps<C> &
  Partial<ThemeType>;

export const Theme = <C extends ElementType>({
  colors,
  spacings,
  lineHeight,
  border,
  borderRadius,
  children,
  ...props
}: ThemeProps<C>) => (
  <Stack
    backgroundColor={colors?.background || defaultTheme.colors.background}
    color={colors?.foreground || defaultTheme.colors.foreground}
    {...props}
  >
    <ThemeContext.Provider
      value={{
        ...defaultTheme,
        colors: {
          ...defaultTheme.colors,
          ...colors,
        },
        spacings: {
          ...defaultTheme.spacings,
          ...spacings,
        },
        lineHeight: lineHeight || defaultTheme.lineHeight,
        border: border || defaultTheme.border,
        borderRadius: borderRadius || defaultTheme.borderRadius,
      }}
    >
      {children}
    </ThemeContext.Provider>
  </Stack>
);

export const useTheme = () => useContext(ThemeContext);
