import React from 'react';
import HeadBar from '../components/Bars/HeadBar';
import Foot from '../components/Bars/Foot';
import demo from "../Config";
import Feature from '../components/Sections/Feature';
import AppButton from '../components/Buttons/AppButton';
import Box from '../components/Items/Box';
import Title from '../components/Sections/Title';


class Cloud extends React.Component {
  render() {
        return (
            <>
            <HeadBar dark={true} name="Cloud" icon={demo.icon_white}/>
            <Title name="Apps" variant="light" image={demo.cloud.image} />
             <Feature
                    align="text-center"
                    bg="bg-light"
                    variant="dark"
                    items={
                        demo.products.map(function(item,index){
                                return (
                                    <Box key={index} title={item.name} body={item.body} button={<AppButton path={"/"+item.path} title="Try it out" />} icon={item.icon} />
                                )
                        })
                    } />
            <Foot contacts={demo.contacts} services={demo.services} bg="bg-dark" name={demo.name} icon={demo.icon}/>
           </>
        );
    }

}

export default Cloud;
