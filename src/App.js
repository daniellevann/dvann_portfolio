import './App.css';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./component/nav";
import home from "./component/home";
import about from "./component/about";
import projects from "./component/projects";

function App() {
  return (
      <Router>
          <Nav/>
        <div className="App">

     <Switch>
       <Route exact path={"/"} component={home}/>
       <Route exact path={"/about"} component={about}/>
       <Route exact path={"/projects"} component={projects}/>
     </Switch>


        </div>

      </Router>

  );
}

export default App;
