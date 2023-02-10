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
// <!-- diffrent ways to use add addeventListener  --> 
// Option-1
const makeCyanButtonId=document.getElementById('make-cyan');
makeCyanButtonId.addEventListener('click', makeCyan);
function makeCyan(){
    document.body.style.backgroundColor='cyan';
}
// Option-2
const makeGreenButtonId=document.getElementById('make-green');
makeGreenButtonId.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor='green';
});
// Option-3
document.getElementById('make-black').addEventListener('click',function(){
    document.body.style.backgroundColor='black';
})
// Option-4
document.getElementById('make-gold').addEventListener('click',function makeGold(){
    document.body.style.backgroundColor='gold';
})

