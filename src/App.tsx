import "./App.css";
import Menu from "./Components/Menu";
import Presentation from "./Screens/Presentation";
import About from "./Screens/About";
import Work from "./Screens/Work";
import Proyects from "./Screens/Proyects";
import Contact from "./Screens/Contact";
import {useTheme} from "./hooks/Theme";
import {useEffect, useLayoutEffect} from "react";

function App() {
  const {theme, dispatchTheme} = useTheme();

  useLayoutEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      dispatchTheme({type: "changeThemeTo", themeName: "dark"});
    }
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
        screens={["Acerca de", "Experiencia", "Proyectos", "Contacto"]}
        state={theme === "dark" ? true : false}
        onChangeCheck={onChangeCheck}
      />
      <Presentation />
      <About />
      <Work />
      <Proyects />
      <Contact />
    </div>
  );
}

export default App;
