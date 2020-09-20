import { gsap, TimelineMax } from "gsap/all";
// import { splitColor } from "gsap/all";


const matchMediaanime =[
  window.matchMedia("(max-width:1023px)"),
   window.matchMedia("(min-width:1023px)"),
   
]

// Page lading animations
const PageAnimations = () => {
  let anime = gsap.timeline();
  anime.to(".animeload-screen", {
    duration: 1.2,
    height: "100vh",
    bottom: "0%",
    ease: "Expo.easeInOut",
  });

  anime.to(".animeload-screen", {
    duration: 1.2,
    height: "0%",
    bottom: "100vh",
    ease: "Expo.easeInOut",
    delay: 0.3,
  });

  anime.set(".animeload-screen", { bottom: "-100vh" });
};


// Preview image animations on home page.
const PreviewImage = (eventtype,bgimage) =>{
  let anime = gsap.timeline();
  if(eventtype === 'mouseover' && bgimage){
    anime.set('.home-links-preview',{
      display:'none',
      width:'0px',
      backgroundImage:'url('+bgimage+')'
    })
    anime.to(".home-links-preview",1,{
      css:{display:'block',width:'600px'},
      ease: "Expo.easeInOut",
    })
  }else{
    anime.to(".home-links-preview",0.5,{
      width:'0px',
      display:'none',
      ease: "Expo.easeInOut",
    })
  }  
}



// Text Splitting Animations
const TextAnimations = () => {
  let anime = gsap.timeline();
  let splittext = document.querySelectorAll(".text-split");
if(splittext.length > 0 ){
    for (let i = 0; i < splittext.length; i++) {
        splittext[i].innerHTML = splittext[i].innerHTML
          .replace(/./g, "<span>$&</span>")
          .replace(/\s/g, "&nbsp;");
      }
      anime.set(splittext[0],{perspective:700});
      anime.from(splittext[0].querySelectorAll("span"),{
        duration: 1,
        y: 20,
        rotate:180,
        opacity: 0,
        stagger: 0.2,
        delay: 0.8,
        ease: "Expo.easeOut",
      });
}
};

// Navigations links animations
const NavAnimations = (toggleState) => {
  let anime = gsap.timeline();
  if(matchMediaanime[1].matches){
    anime.from(".navanimate", {
      duration: 1,
      y: 30,
      opacity: 0,
      stagger: 0.1,
      delay: 0.2,
      ease: "Expo.easeOut",
    });
  } 
  
  if(matchMediaanime[0].matches){
    if(toggleState == true ){
      anime.staggerFromTo(
        ".navanimate",
        1.8,
        { autoAlpha: 0, rotationX: -90, transformOrigin: "50% 0%" },
        { autoAlpha: 1, rotationX: 0, ease: Elastic.easeOut.config(1, 0.3) },
        0.1,
        0.3
      );
     }else{
      anime.staggerFromTo(
        ".navanimate",
        0.6,
        {
          autoAlpha: 1,
          rotationX: 0,
          transformOrigin: "50% 0%",
          ease: Elastic.easeOut.config(1, 0.3),
        },
        { autoAlpha: 0, rotationX: -90, ease: Elastic.easeOut.config(1, 0.3) },
        0.1,
        0.3
      );
     }
  }

};


// Page content animations
const ContentAniations = () => {
  let anime = gsap.timeline();
  anime.from(".animate-this", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.4,
    delay: 0.2,
    ease: "Expo.easeOut",
  });
};


// Tabimage animations
const TabimageAnimations = () => {
  let anime = gsap.timeline();
  let tabactive = document.querySelectorAll(".tabcontent.active .imageAnime");
  if(tabactive.length > 0){
    anime.fromTo(
        tabactive,
        {
          duration: 1,
          y: 40,
          opacity: 0,
          stagger: 0.2,
          delay: 0.2,
        },
        { duration: 1, y: 0, opacity: 1, stagger: 0.4, delay: 0.2 }
      );
  }
};

// Hmaberger Animations
const HambergerMenu = (isToggled, navmenu) => {
  let menuAnimate = new TimelineMax({ paused: true }),
    toggle;
    NavAnimations(isToggled);
  if (isToggled == true) {
    menuAnimate.to(navmenu, {
      duration: 1.3,
      height: "100vh",
      ease: "Expo.easeInOut",
    });
    menuAnimate.staggerFromTo(
      ".menulink",
      1.8,
      { autoAlpha: 0, rotationX: -90, transformOrigin: "50% 0%" },
      { autoAlpha: 1, rotationX: 0, ease: Elastic.easeOut.config(1, 0.3) },
      0.1,
      0.3
    );
  } else {
    menuAnimate.to(navmenu, {
      duration: 1.3,  
      height: "0vh",
      ease: "Expo.easeInOut",
    });
    menuAnimate.staggerFromTo(
      ".menulink",
      0.6,
      {
        autoAlpha: 1,
        rotationX: 0,
        transformOrigin: "50% 0%",
        ease: Elastic.easeOut.config(1, 0.3),
      },
      { autoAlpha: 0, rotationX: -90, ease: Elastic.easeOut.config(1, 0.3) },
      0.1,
      0.3
    );
  }
  menuAnimate.play();
  toggle = !isToggled;
  return isToggled;
};

export {
  PageAnimations,
  ContentAniations,
  NavAnimations,
  HambergerMenu,
  TabimageAnimations,
  TextAnimations,
  PreviewImage,
};
