

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
  const [user , setUser ] = useState(null);
  const [isLoading,setLoader] = useState(true);
    useEffect(()=>{
        ReactGA.pageview(window.location.pathname + window.location.search);
      setTimeout(() =>{
        setLoader(false);
      },4000);

    const account = localStorage.getItem('account');
    if(account){
      fetch(demo.api+'user/info',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': account,
            'appid': demo.token
          },
          body: JSON.stringify({ token: account })
        }).then(response => response.json())
        .then((Data) => {
          console.log("user:");
          console.log(Data);
            if(Data.success){
              setUser(Data.data);
            }else{
              setUser(null);
            }
        })
        .catch((err) => {
        console.log(err.message);
        });
      }
    }, []);

return (
  <>
  {isLoading ?
  <Splash/>
   :
  <Router>
      <Routes>
      <Route path='/auth' element={<Auth name={demo.name} icon={demo.icon}/>}/>
      <Route path='/auth/:callback' element={<Auth name={demo.name} icon={demo.icon}/>}/>
      <Route path='/' element={<Home user={user} icon={demo.icon}/>}/>
      <Route path='/:token' element={<Home user={user} icon={demo.icon}/>}/>
      <Route path='/team' element={<Team user={user} name={demo.name} icon={demo.icon}/>}/>
      <Route path='/apps' element={<Apps user={user} name={demo.name} icon={demo.icon}/>}/>
      </Routes>
  </Router>
}
</>
)

}
export default App;
