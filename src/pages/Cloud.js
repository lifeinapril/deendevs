import React from 'react';
import HeadBar from '../components/Bars/HeadBar';
import Foot from '../components/Bars/Foot';
import demo from "../Config";
import Brief from '../components/Sections/Brief';
import Jumbo from '../components/Sections/Jumbo';
import CloudButton from '../components/Buttons/CloudButton';


class Cloud extends React.Component {
  render() {
        return (
            <>
            <HeadBar dark={true} name="Cloud" icon={demo.icon}/>
            <Jumbo bg="bg-dark" image={demo.cloud.image} variant="light" title={demo.cloud.title} body={demo.cloud.body} button={<CloudButton variant="dark"/>}/>
                {
                demo.products.map(function(p,index){
                return (
                    <>
                        <Brief key={index} name={p.name} full={true} id={p.name} dark={true} data={p} list={p.capabilities} set={(index % 2) ? "last":"first"} image={p.image}  icon={p.icon}/>
                       </>
                    )
                })
                }
            <Foot contacts={demo.contacts} services={demo.services} bg="bg-dark" name={demo.name} icon={demo.icon}/>
           </>
        );
    }

}

export default Cloud;
