const checkboxes = document.querySelectorAll("input");
const checkedCheckboxes = [];

if (checkboxes === null){
    console.error("keine Checkboxes gefunden")
}

function onlyTwoCheckboxes (){
   if (this.checked) {
        if (checkedCheckboxes.length >= 2){
            const lastCheckbox = checkedCheckboxes.pop();
            lastCheckbox.checked = false; 
        }
       checkedCheckboxes.push(this);

   } else {
        const indexOfBox = checkedCheckboxes.indexOf(this);
        checkedCheckboxes.splice(indexOfBox, 1);
   }
}


for (let checkboxElement of checkboxes){
    checkboxElement.addEventListener ("change", 
        onlyTwoCheckboxes)
}

