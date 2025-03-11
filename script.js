let numbers = [17, 31, 77, 20, 63];
let userInputEle = document.getElementById('userInput');
let findBtnEle = document.getElementById('findBtn');
let indexOfNumberEle = document.getElementById('indexOfNumber');

findBtnEle.onclick = function(){
    let userInputValue = parseInt(userInputEle.value);
    
    if(userInputValue === ''){
        alert("Please Enter Valid Number");
        return;
    }
    
    let indexOfNumber = numbers.findIndex(function(eachItem){
        if(eachItem === userInputValue){
            return true;
        }else{
            return false;
        }
    });
    indexOfNumberEle.textContent = indexOfNumber ;
}