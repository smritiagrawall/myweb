import React from 'react';
import ReactDOM from 'react-dom';
import wave1 from './images/wave3.png';
import Aboutus from './pages/aboutus';
import Nav from './components/Nav';
import MyProjects from './pages/MyProjects';
import ContactMe from './pages/ContactMe';
import { Switch,Route} from "react-router-dom";
import ResumeBar from './pages/ResumeBar';

function App() {
 
  return (

    <div className="App" >
   
      <Nav />
      
      <Switch>
      <Route path="/" exact>
      <Aboutus />
      </Route>
      <Route path="/project">
        <MyProjects/>
      </Route>
      <Route path="/contact">
      <ContactMe/>
      </Route>
      <Route path="/resume">
      <ResumeBar/>
      </Route>
      </Switch>
      
    </div>
  );
}
// import { Form } from 'react-router-dom';

export default App;
