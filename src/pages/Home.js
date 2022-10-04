import React from 'react';
import HeadBar from '../components/Bars/HeadBar';
import Foot from '../components/Bars/Foot';
import demo from "../Config";
import Brief from '../components/Sections/Brief';
import LoginButton from '../components/Buttons/LoginButton';

class Home extends React.Component {
  render() {
        return (
            <>
            <HeadBar dark={true} icon={demo.icon}/>
            <Brief dark={true} full={true} button={<LoginButton/>} data={demo.content[1]} image={demo.cloud.image}/>  
            <Foot contacts={demo.contacts} services={demo.services} bg="bg-dark" name={demo.name} icon={demo.icon}/>      
            </>
        );
    }
}

export default Home;
