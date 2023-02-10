console.log('js-dom-event');
// diffrent ways to use add onclick event  
// Option-3 make-blue button using id
console.log('Make Blue button')
const makeBlueButton=document.getElementById('make-blue');
console.log(makeBlueButton);
makeBlueButton.onclick=makeBlue;
function makeBlue(){
    document.body.style.backgroundColor='blue';
}
// Option-4 make-purple button using id in makePurple function
console.log('Make Purple Button Event onclick')
const makePurpleButtonId=document.getElementById('make-purple');
console.log(makePurpleButtonId);
makePurpleButtonId.onclick=function makePurple(){
    document.body.style.backgroundColor='purple';
}
// diffrent ways to use add addeventListener  
// Option-1
console.log('Make pink-button addEvent Listener');
const makePinkButtonId=document.getElementById('make-pink');
console.log(makePinkButtonId);
makePinkButtonId.addEventListener('click',makePink);
function makePink(){
    document.body.style.backgroundColor='pink';
}
// Option-2 
console.log('Make cyan-button addEvent Listener');
const makeCyanButtonId=document.getElementById('make-cyan');
console.log(makeCyanButtonId);
makeCyanButtonId.addEventListener('click',function makeCyan(){
    document.body.style.backgroundColor='cyan';
})
// Option-3 final
console.log('addeventListener in make-green button final')
document.getElementById('make-green').addEventListener('click',function(){
    document.body.style.backgroundColor='green';
})
// Option-4 final
console.log('addeventListener in make-magenta button final')
document.getElementById('make-magenta').addEventListener('click',function makeMagenta(){
    document.body.style.backgroundColor='magenta';
})