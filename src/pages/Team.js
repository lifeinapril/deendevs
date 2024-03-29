import React from 'react';
import HeadBar from '../components/Bars/HeadBar';
import Foot from '../components/Bars/Foot';
import demo from "../Config";
import Feature from '../components/Sections/Feature';
import Box from '../components/Items/Box';
import Jumbo from '../components/Sections/Jumbo';

import MoreButton from '../components/Buttons/MoreButton';
import Display from '../components/Sections/Display';
import BookButton from '../components/Buttons/BookButton';


function Team(props) {
        return (
            <>
            <HeadBar dark={true} user={props.user} icon={demo.icon_white}/>
            <Jumbo image={demo.jumbo.image} variant="light" title={demo.jumbo.title} body={demo.jumbo.body}/>
               <Feature
                    align="text-center"
                    title="What we do" 
                    body="Our extraordinary design skill coupled with a disciplined engineering process model distinguishes us from other design agencies" 
                    bg="bg-light"
                    variant="dark"
                    button={<MoreButton path="/services" />}
                    items={
                        demo.services.map(function(item,index){
                                return (
                                    <Box key={index} title={item.title} image={item.image} icon={item.icon} />
                                )
                        })
                    } />
                <Display image={demo.jumbo.image} variant="light" button={<BookButton/>} title="Let's Talk" body="We’re interested in taking your business to the cloud"/>
            
             
            <Foot contacts={demo.contacts} services={demo.services} bg="bg-dark" name={demo.name} icon={demo.icon}/>
           </>
        );
}

export default Team;
