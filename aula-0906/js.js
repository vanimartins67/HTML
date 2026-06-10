const inputs = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
function nameValidate(){
    if (inputs[0].value.length<3){
        setError(0);
    }
    else{
        removeError(0);
    }
function removeError(index){
    spans[index].style.display = 'none';
}
function setError(index){
    spans[index].style.display = 'block';
}
}