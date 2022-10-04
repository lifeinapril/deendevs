import React from 'react';
import HeadBar from '../components/Bars/HeadBar';
import Foot from '../components/Bars/Foot';
import demo from "../Config";
import Brief from '../components/Sections/Brief';
import Jumbo from '../components/Sections/Jumbo';
import Feature from '../components/Sections/Feature';
import Box from '../components/Items/Box';
import MoreButton from '../components/Buttons/MoreButton';
import Title from '../components/Sections/Title';
import Display from '../components/Sections/Display';
import Showcase from '../components/Sections/Showcase';
import BookButton from '../components/Buttons/BookButton';

class Devs extends React.Component {
  render() {
        return (
            <>
            <HeadBar dark={false} name={demo.sub} icon={demo.icon}/>

                <Jumbo image={demo.jumbo.image} variant="light" title={demo.jumbo.title} body={demo.jumbo.body} button={<BookButton/>}/>
                            
                <Brief dark={true} full={true} button={<MoreButton path="/cloud" />} data={demo.content[0]} list={demo.products} set="last" image={demo.content[0].image}/>
                        
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

                <Display image={demo.jumbo.image} variant="light" button={<BookButton/>} title="Let's Talk" body="We’re interested in taking your business to the cloud"/>
            
            <Foot contacts={demo.contacts} services={demo.services} bg="bg-dark" name={demo.name} icon={demo.icon}/>
            
             </>
        );
    }

}

export default Devs;
