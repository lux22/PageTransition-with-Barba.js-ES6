import {TabimageAnimations,TextAnimations} from '../components/animations';

const matchMedia = window.matchMedia("(min-width:1199px)");

export const TabsView = (tablink,tabcontent) => {

tabcontent[0].classList.add('active');

const getTabname = (item) => {
    let tabName;
    tabName = item.target.getAttribute('data-trigger');
    tabcontent.forEach(items=>{
        items.classList.remove('active');
        items.id != tabName ? items.className.replace(' active','') : items.className += ' active';
    })
    matchMedia.matches ?  TabimageAnimations() : null;
   
}

tablink.forEach(item =>{
    item.onclick = getTabname.bind(item);
});

}
