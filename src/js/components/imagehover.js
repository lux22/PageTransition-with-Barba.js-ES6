import hoverEffect from 'hover-effect';
import * as THREE from 'three';
// import {DISTORION} from '../../constants';

export const imageHover =(elemnt)=>{
    // let {distortion} = DISTORION;
    const matchMedia = window.matchMedia("(min-width:1199px)");
    const start = () => {
        if(matchMedia.matches){
            Array.from(elemnt).map((el,i)=>{
                var animations = new hoverEffect({
                    parent: el,
                    intensity1: 0.2,
                    intensity2: 0.05,
                    image1: el.dataset.image1,
                    image2: el.dataset.image2,
                    speedIn:3,
                    speedOut:3,
                    displacementImage: 'images/4.png',  
                    imagesRatio: el.dataset.width && el.dataset.height ? el.dataset.width / el.dataset.height : 1
                });
             })
            }

        }

        start();
        return start;
};