console.log('js-dom-event');
// Option-3 make-blue button using id
console.log('Make Blue button')
const makeBlueButton=document.getElementById('make-blue');
console.log(makeBlueButton);
makeBlueButton.onclick=makeBlue;
function makeBlue(){
    document.body.style.backgroundColor='blue';
}