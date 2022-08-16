import "./app.scss";
import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro";

import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import { useContext, useState } from "react";
import Menu from "./components/menu/Menu";
import Portfolio from "./components/portfolio/Portfolio";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const[menuOpen, setMenuOpen] = useState(false)
  
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return <div className="app" style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
  }}>
  <Toggle />  
  <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
  <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
  <div className="sections" style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
  }}>  
  <Intro />  
  <Portfolio />
  <Works />
  <Testimonials />
  <Contact />
  </div>
  </div>;
};

export default App;