console.log('Onclick button')
function makeOnclick()
{
    document.getElementById('add-onclick-h1').innerText='Heading Change';
    document.getElementById('add-onclick-h1').style.color='red';
    document.getElementById('add-onclick-h1').style.color='blue';
}
// Update Button Id
document.getElementById('update-btd-id').addEventListener('click',function(){
    const inputText=document.getElementById('input-text-id');
    console.log(inputText.value);
    document.getElementById('empty-heading-id').innerText=inputText.value;
})