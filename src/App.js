

import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import demo from "./Config";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './css/Splash.css';
import Team from './pages/Team';
import Apps from './pages/Apps';
import Auth from './pages/Auth';
import Splash from './components/Sections/Splash';
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-198127599-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


const App = function(props){
  const [isLoading,setLoader] = useState(true);
    useEffect(()=>{
        ReactGA.pageview(window.location.pathname + window.location.search);
      setTimeout(() =>{
        setLoader(false);
      },4000);
    }, []);

return (
  <>
  {isLoading ?
  <Splash/>
   :
  <Router>
      <Routes>
      <Route path='/' element={<Home icon={demo.icon}/>}/>
      <Route path='/:token' element={<Home icon={demo.icon}/>}/>
      <Route path='/auth' element={<Auth name={demo.name} icon={demo.icon}/>}/>
      <Route path='/auth/:callback' element={<Auth name={demo.name} icon={demo.icon}/>}/>
      <Route path='/team' element={<Team name={demo.name} icon={demo.icon}/>}/>
      <Route path='/apps' element={<Apps name={demo.name} icon={demo.icon}/>}/>
      </Routes>
  </Router>
}
</>
)

}
export default App;
