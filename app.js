function focused() {
    document.querySelectorAll(`input`).forEach(element => {
        element.addEventListener(`focus`, onFocus)
        element.addEventListener(`blur`, onBlur);
    });

function onFocus(ev){
    ev.target.parentNode.className = `focus`;

}
function onBlur(ev){
ev.target.parentNode.className = ``;
 //console.log(`blured`)   
}
}