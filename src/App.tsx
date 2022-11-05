import "./App.css";
import Menu from "./Components/Menu";
import Presentation from "./Screens/Presentation";
import About from "./Screens/About";
//import Work from "./Screens/Work";
import Proyects from "./Screens/Proyects";
import Contact from "./Screens/Contact";
import {useTheme} from "./hooks/Theme";
import {useEffect, useLayoutEffect} from "react";
import {useLanguage} from "./hooks/Language";
import {Languages, TScreens} from "./types/types";
import {dictLanguage} from "./utils/dict";

function App() {
  const {theme, dispatchTheme} = useTheme();
  const {
    Language: {text},
    dispatchLanguage,
  } = useLanguage();

  const getLanguageBrowser = (): Languages => {
    let userLang = navigator.language;
    userLang = userLang.split("-")[0];
    if (userLang === "es" || userLang === "en") {
      return dictLanguage[userLang];
    }
    return dictLanguage.en;
  };

  useLayoutEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      dispatchTheme({type: "changeThemeTo", themeName: "dark"});
    }
  }, []);

  useEffect(() => {
    dispatchLanguage({type: "setLanguage", Language: getLanguageBrowser()});
  }, []);

  useEffect(() => {
    const changeTheme = (nightMode: boolean) => {
      dispatchTheme({
        type: "changeThemeTo",
        themeName: nightMode ? "dark" : "light",
      });
    };
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
    darkMode.addEventListener("change", (e) => changeTheme(e.matches));
    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", (e) => changeTheme(e.matches));
  }, []);

  const onChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchTheme({
      type: "changeThemeTo",
      themeName: event.target.checked ? "dark" : "light",
    });
  };
  return (
    <div>
      <Menu
        screens={[
          text.acercaDe as TScreens,
          text.proyectos as TScreens,
          text.contacto as TScreens,
        ]}
        state={theme === "dark" ? true : false}
        onChangeCheck={onChangeCheck}
      />
      <Presentation />
      <About />
      {/*<Work />*/}
      <Proyects />
      <Contact />
    </div>
  );
}

export default App;
