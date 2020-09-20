import {CONTACT_CONST} from '../../constants'


const mediaDevice = window.matchMedia("(max-width:1024px)");
export const ModalTrigger =(radioele,btns,modalContainer,modalClose)=>{
 
    const btnHidden=()=>{
        [...btns].forEach((items)=>{
            items.classList.remove('appoint-active');
        })
    }

    const closeModal=()=>{
        modalContainer[0].style.display='none';
        document.getElementsByTagName('main')[0].setAttribute('id','scroller');
    }

    const checkRadiobtn=(data)=>{
        btnHidden();
        data.target.closest('li').querySelectorAll('.btn')[0].classList.add('appoint-active');
    }

    const modalOpen=()=>{
        modalContainer[0].style.display='block';
        document.getElementsByTagName('main')[0].removeAttribute('id');
    }
    if(mediaDevice.matches){
        [...radioele].map((item)=>{
            item.onclick = checkRadiobtn.bind(item)
        });
    }

    [...btns].map((items)=>{
        items.onclick = modalOpen.bind(items);
    })

    modalClose[0].onclick = closeModal;
    
}