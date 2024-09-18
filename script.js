let numValue = document.querySelectorAll('.mybtn');
let resultField = document.getElementById('result');

numValue.forEach(element => {

    element.addEventListener('click',() =>{
        console.log(element.value);
        resultField.value += element.value 
        
    });
});