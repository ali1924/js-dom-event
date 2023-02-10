console.log('Onclick event Button');
function onClickBtn()
{
    document.getElementById('onclick-btn').innerText='Change On Click Event Button';
}
console.log('addEvent listener');
document.getElementById('add-listener-btn').addEventListener('click',function(){
    const inputText=document.getElementById('add-listener-input');
    console.log(inputText.value);
    // document.getElementById("add-listener-heading").innerText=document.getElementById('add-listener-input');
    document.getElementById('add-listener-heading').innerText=inputText;
})