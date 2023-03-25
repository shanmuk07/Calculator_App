let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');
let operator = document.querySelectorAll('.operator');
let numbers = document.querySelectorAll('.number');

console.log(numbers)

let input = document.getElementById('input');
let result = document.getElementById('input').value;

numbers.forEach((ele) => {
    ele.addEventListener('click', ()=>{
        
        result += ele.innerHTML;
        input.value = result;
    })
})

operator.forEach((ele) => {
    ele.addEventListener('click', () => {
        result += ele.innerHTML;
        input.value = result;
    })
})

equal.addEventListener('click', () => {
    result = eval(result);
    input.value = result;
    
})

clear.addEventListener('click', () => {
    result = '';
    input.value = result;
})