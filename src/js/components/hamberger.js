import {HambergerMenu,PreviewImage} from '../components/animations';
import {HAMBERGER} from '../../constants'

export const menuToggle = (elem,navmenu,isToggled,navlinks,navigationLinksHover,scrollerTag)=> {
    // console.log(navigationLinksHover)
    const hambergerToggle =(item)=>{
        isToggled = !isToggled; 
           if(item.target.closest('.hamburger')){
            document.getElementsByTagName('body')[0].classList.toggle('body-hidden');
            item.target.closest('.hamburger').classList.toggle(HAMBERGER.hambergActive);  
           }
        isToggled = HambergerMenu(isToggled,navmenu,scrollerTag);  
    };
    
    const previewHoverImages=(items)=>{
        PreviewImage(items.type,items.target.getAttribute('data-preview'));
    }

    [navlinks,elem].map((link) => {
        link.forEach(item =>{
            item.onclick = hambergerToggle.bind(item);
        })
    })

    navigationLinksHover.forEach((items)=>{
        items.onmouseover = items.onmouseout = previewHoverImages.bind(this);
    })
    
};
