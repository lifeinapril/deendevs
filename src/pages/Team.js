import React from 'react';
import HeadBar from '../components/Bars/HeadBar';
import { Col, Container, Row } from 'react-bootstrap';
import Foot from '../components/Bars/Foot';
import demo from "../Config";
import Brief from '../components/Sections/Brief';
import Title from '../components/Sections/Title';
import Feature from '../components/Sections/Feature';
import Box from '../components/Items/Box';


class Team extends React.Component {
  render() {
        return (
            <>
            <HeadBar dark={true} name={demo.sub} icon={demo.icon}/>
            <Title bg="bg-dark" variant="light" name="Our Team" body="Our executive leadership team averages 8 years of experience with cloud."/>
            <br/>
            <Container>
            <Brief dark={false} data={demo.about[0]} linklist={
                [
                    {title:"Our products",link:""},
                    {title:"What we do",link:""}
                ]
            } set="first" image={demo.about[0].image}/>
            <Feature
                            align="text-center"
                            body="We make it possible" 
                            bg="bg-light"
                            variant="dark"
                            items={
                                demo.team.map(function(member,index){
                                        return (
                                            <Box key={index} title={member.name} body={member.position} image={member.image} />
                                        )
                                })
                            } />

            </Container>

            <Foot contacts={demo.contacts} services={demo.services} bg="bg-dark" name={demo.name} icon={demo.icon}/>
           </>
        );
    }

}

export default Team;
