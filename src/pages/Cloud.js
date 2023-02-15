import React from 'react';
import HeadBar from '../components/Bars/HeadBar';
import Foot from '../components/Bars/Foot';
import demo from "../Config";
import Brief from '../components/Sections/Brief';
import Jumbo from '../components/Sections/Jumbo';
import CloudButton from '../components/Buttons/CloudButton';
import MoreButton from '../components/Buttons/MoreButton';


class Cloud extends React.Component {
  render() {
        return (
            <>
            <HeadBar dark={true} name="Cloud" icon={demo.icon}/>
            <Jumbo bg="bg-dark" image={demo.cloud.image} variant="light" title={demo.cloud.title} body={demo.cloud.body} button={<CloudButton variant="dark"/>}/>
               <div className='padding'> {
                demo.products.map(function(p,index){
                return (
                    <>
                        <Brief key={index} name={p.name} full={true}  button={<MoreButton path={"/"+p.path} />} id={p.name} dark={(index % 2) ? false:true} data={p} list={p.capabilities} set={(index % 2) ? "first":"last"} image={p.image}  icon={p.icon}/>
                        <br/>
                       </>
                    )
                })
                }
                </div>
            <Foot contacts={demo.contacts} services={demo.services} bg="bg-dark" name={demo.name} icon={demo.icon}/>
           </>
        );
    }

}

export default Cloud;
