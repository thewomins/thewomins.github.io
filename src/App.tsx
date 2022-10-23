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
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
    darkMode.addEventListener("change", (e) => {
      if (e.matches) {
        dispatchTheme({type: "changeThemeTo", themeName: "dark"});
      } else {
        dispatchTheme({type: "changeThemeTo", themeName: "light"});
      }
    });
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
        state={theme === "dark" ? false : true}
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
