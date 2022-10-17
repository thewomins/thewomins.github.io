import "./App.css";
import Menu from "./Components/Menu";
import Presentation from "./Screens/Presentation";
import About from "./Screens/About";
import Work from "./Screens/Work";
import Proyects from "./Screens/Proyects";
import Contact from "./Screens/Contact";
import {useTheme} from "./hooks/Theme";
import {useLayoutEffect, useRef} from "react";

function App() {
  const {theme, dispatchTheme} = useTheme();

  useLayoutEffect(() => {
    //dispatchTheme({type:"changeThemeTo", themeName: "dark"});
    const modeMe = (e: any) => {
      dispatchTheme({
        type: "changeThemeTo",
        themeName: e.matches ? "dark" : "light",
      });
    };
    modeMe(window.matchMedia("(prefers-color-scheme: dark)"));
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", modeMe);
    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", modeMe);
  }, []);

  const onChangeCheck = (event: any) => {
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
