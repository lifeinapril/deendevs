import React from 'react';
import HeadBar from '../components/Bars/HeadBar';
import Foot from '../components/Bars/Foot';
import demo from "../Config";
import Brief from '../components/Sections/Brief';
import Jumbo from '../components/Sections/Jumbo';
import Feature from '../components/Sections/Feature';
import Box from '../components/Items/Box';
import MoreButton from '../components/Buttons/MoreButton';
import Quote from '../components/Sections/Quote';
import Title from '../components/Sections/Title';
import Display from '../components/Sections/Display';
import Showcase from '../components/Sections/Showcase';
import Section from '../components/Sections/Section';
import { Container } from 'react-bootstrap';
import BookButton from '../components/Buttons/BookButton';
import Icon from '../components/Items/Icon';

class Home extends React.Component {
  render() {
        return (
            <>
            <HeadBar dark={false} name={demo.sub} icon={demo.icon}/>

            <Jumbo image={demo.jumbo.image} variant="light" title={demo.jumbo.title} body={demo.jumbo.body} button={<BookButton/>}/>
           
                      
                         <div className="bg-dark padding">
                         {/* <Container fluid="md" className="bg-grey"> */}
                            <Brief dark={true} full={false} button={<MoreButton path="/cloud" />} data={demo.content[0]} list={demo.products} set="first" image={demo.content[0].image}/>
                        {/* </Container> */}
                        </div>

                        <Feature
                            align="text-center"
                            title="What we do" 
                            body="Our extraordinary design skill coupled with a disciplined engineering process model distinguishes us from other design agencies" 
                            bg="bg-grey"
                            variant="dark"
                            button={<MoreButton path="/services" />}
                            items={
                                demo.services.map(function(item,index){
                                        return (
                                            <Box key={index} title={item.title} image={item.image} icon={item.icon} />
                                        )
                                })
                            } />

                        <Display image={demo.images[0]} variant="light" title="Our Approach" body={
                            <>
                            <div style={{maxWidth:500,margin:"auto"}}>It is important for us to know and achieve your app purposes to a successful launch in 3 main phases:</div>
                            <Showcase items={
                                demo.approach.map(function(item,index){
                                    return (
                                        <Title key={index} name={item.title} bg="bg-dark" button={<MoreButton path="/approach"/>} />
                                    )
                            })          
                            }/>
                            </>
                           }/>
                         <Title bg="bg-light" variant="dark" name="Our Partners"/>
            <Container>
                
                {
                demo.partners.map(function(partner,index){
                return (<>
                <Brief key={index} name={partner.name} id={partner.name} list={partner.capabilities} icon={<Icon name={partner.icon} size={150}/>} dark={(index % 2) ? true:false}  button={<MoreButton path="/" />} data={partner} set={(index % 2) ? "last":"first"} image={partner.image}/>
                <br/>
                <br/>
                </>)
                })
                }
            </Container>
            <br/>
            <Display image={demo.jumbo.image} variant="light" button={<BookButton/>} title="Let's Talk" body="We’re interested in taking your business to the cloud"/>
            
            <Foot contacts={demo.contacts} services={demo.services} bg="bg-dark" name={demo.name} icon={demo.icon}/>
            
             </>
        );
    }

}

export default Home;
