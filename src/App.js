import { Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav.js";
import Header from "./Header.js";
import workWithMe from "./workWithMe.js";
import Projects from "./Projects.js";
import About from "./About.js";

function App() {
  return (
    <div>
      <Nav />
      <Header />

      <Switch>
        <Route exact path="/" />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/work-with-me" component={workWithMe} />
      </Switch>
    </div>
  );
}

export default App;
