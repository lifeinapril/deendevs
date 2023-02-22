import React from 'react';
import HeadBar from '../components/Bars/HeadBar';
import Foot from '../components/Bars/Foot';
import demo from "../Config";
import Brief from '../components/Sections/Brief';
import MoreButton from '../components/Buttons/MoreButton';

class Home extends React.Component {
  render() {
        return (
            <>
            <HeadBar dark={true} icon={demo.icon_white}/>
            <Brief dark={true} full={true} button={<MoreButton path="/apps" title="Try our apps"/>} data={demo.content[1]} image={demo.jumbo.image}/>  
            <Foot contacts={demo.contacts} services={demo.services} bg="bg-dark" name={demo.name} icon={demo.icon}/>      
            </>
        );
    }
}

export default Home;
