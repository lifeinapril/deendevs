

import content1 from "./images/busy.jpg";
import partner1 from "./images/jt.jpeg";
import partner2 from "./images/obic.jpeg";
import partner3 from "./images/ilightct.jpeg";
import {FcIdea,FcCircuit,FcBullish} from "react-icons/fc";
import product1 from "./images/mybg.png";
import product2 from "./images/qrletters.png";
import jumbo from "./images/jumbo2.jpg";
import cloud from "./images/jumbo3.jpg";
import m1 from "./images/middle.jpeg";
import appicon from "./images/icon.png";
import deen from "./App.json";
import Icon from "./components/Items/Icon";
import member0 from "./images/data.jpeg";
import member1 from "./images/members/1.jpeg";
import member2 from "./images/members/2.jpeg";
import member3 from "./images/members/3.jpeg";
import member4 from "./images/user.png";
import approach1 from "./images/approach1.png";


deen.icon=appicon;
deen.jumbo.image=jumbo;
deen.cloud.image=cloud;
deen.images=[m1];
deen.content[0].image=content1;
deen.services[0].icon=<FcIdea size={90}/>;
deen.services[1].icon=<FcCircuit size={90}/>;
deen.services[2].icon=<FcBullish size={90}/>;
deen.partners[0].image=partner1;
deen.partners[1].image=partner2;
deen.partners[2].image=partner3;
deen.products[0].icon=<Icon name="maya" size={90}/>;
deen.products[1].icon=<Icon name="qrletters" size={90}/>;
deen.products[0].image=product1;
deen.products[1].image=product2;
deen.about[0].image=member0;
deen.team[0].image=member1;
deen.team[1].image=member2;
deen.team[2].image=member3;
deen.team[0].image=member4;
deen.approach[0].image=approach1;



export default deen;
