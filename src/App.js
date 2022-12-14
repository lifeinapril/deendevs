

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import demo from "./Config";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './css/Splash.css';
import Team from './pages/Team';
import Approach from './pages/Approach';
import Services from './pages/Services';
import Cloud from './pages/Cloud';
import Auth from './pages/Auth';
import Devs from './pages/Devs'

const App = function(props){
 
return (
  <>
  <Router>
      <Routes>
      <Route path='/' element={<Home icon={demo.icon}/>}/>
      <Route path='/auth' element={<Auth name={demo.name} icon={demo.icon}/>}/>
      <Route path='/team' element={<Team name={demo.name} icon={demo.icon}/>}/>
      <Route path='/approach' element={<Approach name={demo.name} icon={demo.icon}/>}/>
      <Route path='/services' element={<Services name={demo.name} icon={demo.icon}/>}/>
      <Route path='/cloud' element={<Cloud name={demo.name} icon={demo.icon}/>}/>
      <Route path='/develop' element={<Devs name={demo.name} icon={demo.icon}/>}/>
      </Routes>
  </Router>
</>
)

}
export default App;
