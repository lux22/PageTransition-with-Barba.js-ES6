import { DROPDOWNS } from "../../constants";

export const Dropdowns = (droptilte, dropoptions) => {

 const toggleClass=(elem,className)=>{
    if (elem.className.indexOf(className) !== -1){
        elem.className = elem.className.replace(className,'');
      }
      else{
        elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
      }
      return elem;
 }

 const toggleMenuDisplay=(e) => {
    const dropdown = e.currentTarget.parentNode;
    const menu = dropdown.querySelector('.'+DROPDOWNS.dropMenu);
    toggleClass(menu,'hide');
  };

 
  const handleOptionSelected = (e) => {
    toggleClass(e.target.parentNode, "hide");
    const newValue = e.target.textContent + " ";
    const titleElem = e.target
      .closest("." + DROPDOWNS.dropdown)
      .querySelector(".title");
    titleElem.textContent = newValue;
    //trigger custom event
    document
      .querySelector("." + DROPDOWNS.dropdown + " .title")
      .dispatchEvent(new Event("change"));
  };


  [...droptilte].map(item => {
    item.addEventListener('click',toggleMenuDisplay);
  });

  [...dropoptions].map((options) =>{
    options.addEventListener('click',handleOptionSelected);
  });

};
