console.log('Submit button');
// Option-2 makeBlue buttong event using makeBlue function
console.log('Make Blue');
function makeBlue(){
    document.body.style.backgroundColor='blue';
}
// Option-3 makeYellow buttong using id in makeYellow function
console.log('Make Yellow');
const makeYellowButtonId=document.getElementById('make-yellow');
console.log(makeYellowButtonId);
makeYellowButtonId.onclick=makeYellow;
function makeYellow(){
    document.body.style.backgroundColor='yellow';
}
// Option-4 makeYellow buttong using id in makePurple function
console.log('Make Purple');
const makePurpleButtonId=document.getElementById('make-purple');
console.log(makePurpleButtonId);
makePurpleButtonId.onclick=function makePurple(){
    document.body.style.backgroundColor='purple';
}