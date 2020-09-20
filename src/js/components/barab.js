import barba from "@barba/core";
import barbaPrefetch from '@barba/prefetch';
import Scrollbar from "smooth-scrollbar";
import { HAMBERGER, DISTORION,CONTACT_CONST,DROPDOWNS } from "../../constants";
import { imageHover } from "./imagehover";
import { PageAnimations, ContentAniations, NavAnimations, TabimageAnimations, TextAnimations } from "./animations";
import { menuToggle } from "./hamberger";
import { TabsView } from './tabs';
import {ModalTrigger} from './modalbox';
import {Dropdowns} from './dropdown';
import datepicker from 'js-datepicker';
import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.css';
let isToggled = false;
let bodyScroll;
// console.log(document.getElementById('datepicker'));
//  document.getElementById('datepicker').length > 0 ? datepicker(document.getElementById('datepicker'), {}):null



const matchMedia = window.matchMedia("(min-width:1199px)");


const scrollingEnable=(data)=>{
    
    if (matchMedia.matches) {
      let innerScroller = data.next.container.querySelectorAll('#inner-scroller')[0];
      
      bodyScroll = data.next.container.closest('main');
      
        if(bodyScroll){
          Scrollbar.init(bodyScroll, {
            damping: 0.04,
            thumbMinSize: 7,
            continuousScrolling:false,
          });
          bodyScroll.scrollTo(0, 0, 0);
        }
        if(innerScroller){
            Scrollbar.init(innerScroller, {
                damping: 0.03,
                thumbMinSize: 7,
                continuousScrolling:false
            });
        }
 
      }
      
}

const AnimeDelay = (delay) => {
  delay = delay || 1000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, delay);
  });
};


//  $("#lightgallery").lightGallery(); 

const getLightGallery =(data)=>{
  if(data.next.container.querySelector('.glight-box')){
    GLightbox({
      selector:'.glight-box'
    })
  }
}


const getdatepicker=(data)=>{
  //  console.log(data.next.container.querySelector('#datepicker'));
   if(data.next.container.querySelector('#datepicker')){
     datepicker(data.next.container.querySelector('#datepicker'), {})
   }
}

// Enable dropdowns
const dropDowns=(data)=>{
   if(data.next.container.querySelectorAll('.'+DROPDOWNS.dropdown).length > 0 )
   {
     let droptitle = data.next.container.querySelectorAll('.'+DROPDOWNS.dropdownTitle),
     dropoptions = data.next.container.querySelectorAll('.'+DROPDOWNS.dropdownOptions)
     Dropdowns(droptitle,dropoptions);
   }
}

// Getmodal
const modalbox=(data)=>{
   if(data.next.container.querySelectorAll('.'+CONTACT_CONST.radioBtns).length > 0){
     let radiobtns = data.next.container.querySelectorAll('.'+CONTACT_CONST.radioBtns);
     let btns = data.next.container.querySelectorAll('.'+CONTACT_CONST.btns);
     let modalContainer = data.next.container.querySelectorAll('.'+CONTACT_CONST.modal);
     let modalClose = data.next.container.querySelectorAll('.'+CONTACT_CONST.close);
       ModalTrigger(radiobtns,btns,modalContainer,modalClose);
   }
}


// Get tablinks
const tabLinks =(data)=>{
    if(data.next.container.querySelectorAll('.tab-links').length > 0 && data.next.container.querySelectorAll('.tabcontent').length > 0){
        let tabLinks = data.next.container.querySelectorAll('.tab-links');
        let tabcontent =  data.next.container.querySelectorAll('.tabcontent');
        TabsView(tabLinks,tabcontent);
    }
    // return false;
}   

// Navigations effect after barbaanimations enters
const getNavigation = (data) => {
  if (
    data.next.container.querySelectorAll("." + HAMBERGER.hamberger).length > 0
  ) {
    let navigationLinksHover = data.next.container.querySelectorAll('.home-navigations ul li a');
    let hambergerIcon = data.next.container.querySelectorAll(
      "." + HAMBERGER.hamberger
    );
    let navmenu = data.next.container.querySelectorAll(
      "." + HAMBERGER.navmenu
    )[0] || data.next.container.querySelectorAll(
      "." + HAMBERGER.innernav
    )[0];
    let navlinks = data.next.container.querySelectorAll(".menulink") || data.next.container.querySelectorAll(".navanimate");
    
    menuToggle(hambergerIcon, navmenu, isToggled, navlinks,navigationLinksHover);
  }
};

// Image Distorsion effect after barbaanimations enters
const getDistorsionImage = (data) => {
  if (
    data.next.container.querySelectorAll("." + DISTORION.distortion).length > 0
  ) {
    let distort = data.next.container.querySelectorAll(
      "." + DISTORION.distortion
    );
    imageHover(distort);
  }
};


barba.use(barbaPrefetch);
barba.init({
  sync: true,
  // preventRunning: true,
  transitions: [
    {
      async leave() {
        const done = this.async();
        PageAnimations();
        await AnimeDelay(1000);
        done();
      },
      async enter(data) {
        getDistorsionImage(data);
        getNavigation(data);
        tabLinks(data);
        TabimageAnimations()
        TextAnimations();
        ContentAniations();
        NavAnimations();
        modalbox(data);
        dropDowns(data);
        getdatepicker(data);
        scrollingEnable(data);
        document.getElementsByTagName('body')[0].classList.remove('body-hidden')
        getLightGallery(data);
      },
      async once(data) {
        getDistorsionImage(data);
        getNavigation(data);
        tabLinks(data);
        TabimageAnimations()
        TextAnimations();
        ContentAniations();
        NavAnimations();
        modalbox(data);
        dropDowns(data);
        getdatepicker(data);
        scrollingEnable(data);
        getLightGallery(data);
      },
    },
  ],
});
