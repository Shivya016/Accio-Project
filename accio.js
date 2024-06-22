document.addEventListener('DOMContentLoaded', (event) => {

let count = 0;
// for (let i = 0; i < n; i++) {
//         if( count = 0  ){
// console.log("-----")
//         }
// }

const button = document.getElementById('inc');
const buttonDec = document.getElementById('dec');
const div = document.getElementById('current');
    
// Define the function that will change the content of the div
// Define the function that will be called when the button is clicked
function handleClick() {
    count+=1;
    div.innerHTML = 'Your current count is : ' + count;
}


function handleClickDec() {
    if(count-1 < 0) return true;
    count-=1;
    div.innerHTML = 'Your current count is : ' + count;
}

// Attach the function to the button's onclick event
button.onclick = handleClick;
buttonDec.onclick = handleClickDec;
});