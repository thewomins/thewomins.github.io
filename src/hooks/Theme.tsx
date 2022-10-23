import React, {useContext, useEffect, useReducer} from "react";
import {reducerActionTheme, TTheme, TThemesAvailable} from "src/types/types";

const themes: {[Key in TThemesAvailable]: TTheme} = {
  light: {
    seed: "#AFA2E9",
    onSeed: "#1C1B1E",
    primary: "#615596",
    onPrimary: "#FFFFFF",
    primaryContainer: "#E6DEFF",
    onPrimaryContainer: "#1D0E4F",
    secundary: "#605C6D",
    onSecundary: "#FFFFFF",
    secundaryContainer: "#E6DFF4",
    onSecundaryContainer: "#1C1A28",
    tertiary: "#775562",
    onTertiaty: "#ffffff",
    tertiaryContainer: "#FFD8E5",
    onTertiaryContainer: "#2D131F",
    error: "#BA1A1A",
    onError: "#ffffff",
    errorContainer: "#FFDAD6",
    onErrorContainer: "#410002",
    background: "#FFFBFF",
    background2: "#f9eefd",
    onBackground: "#1C1B1E",
    surface: "#FFFBFF",
    onSurface: "#1C1B1E",
    outline: "#79767E",
    surfaceVariant: "#E6E1EA",
    onSurfaceVariant: "#48464D",
    shadow: "#000000",
    shadowTransparency: "rgba(0, 0, 0, 0.25)",
    opacityHover: "rgba(0, 0, 0, 0.08)",
  },
  dark: {
    seed: "#48464D",
    onSeed: "#C9C5CD",
    primary: "#CABEFF",
    onPrimary: "#322664",
    primaryContainer: "#493D7C",
    onPrimaryContainer: "#E6DEFF",
    secundary: "#CAC4D7",
    onSecundary: "#312E3E",
    secundaryContainer: "#484555",
    onSecundaryContainer: "#E6DFF4",
    tertiary: "#E7BBCA",
    onTertiaty: "#452834",
    tertiaryContainer: "#5D3D4A",
    onTertiaryContainer: "#FFD8E5",
    error: "#FFB4AB",
    onError: "#690005",
    errorContainer: "#93000a",
    onErrorContainer: "#ffdad6",
    background: "#1C1B1E",
    background2: "#201e22",
    onBackground: "#E6E1E5",
    surface: "#1C1B1E",
    onSurface: "#E6E1E5",
    outline: "#938F97",
    surfaceVariant: "#48464D",
    onSurfaceVariant: "#C9C5CD",
    shadow: "#000000",
    shadowTransparency: "rgba(255, 255, 255, 0.25)",
    opacityHover: "rgba(0, 0, 0, 0.08)",
  },
};

const initialState: TThemesAvailable = "light";

//por cada propiedad en theme setea la propiedad
function setTheme(Theme: TTheme) {
  Object.entries(Theme).forEach((element) => {
    //console.log(element[0], element[1]);
    document.documentElement.style.setProperty("--" + element[0], element[1]);
  });
}

const reducer = (state: TThemesAvailable, action: reducerActionTheme) => {
  switch (action.type) {
    case "changeThemeTo":
      return action.themeName;
    default:
      throw new Error();
  }
};

const ThemeContext = React.createContext<{
  theme: TThemesAvailable;
  dispatchTheme: React.Dispatch<reducerActionTheme>;
}>({
  theme: initialState,
  dispatchTheme: () => initialState,
});

const ThemeContextProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [theme, dispatchTheme] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{theme, dispatchTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const {theme = initialState, dispatchTheme} = useContext(ThemeContext);

  useEffect(() => {
    setTheme(themes[theme]);
  }, [theme]);

  return {theme, dispatchTheme};
};

export {ThemeContextProvider, useTheme};
