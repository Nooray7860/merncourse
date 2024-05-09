function pallindrome() {
  console.log("pallindrome");
}

pallindrome();

function cal(){

    console.log("cal");
  }
  
  cal();
  function calculate(num1,num2,operation){
    let result;
    switch(operation){
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;  
        case 'multiply':
            result = num1 * num2;
            break;
        case 'division':
           result = num1 / num2 ;
           break;
        default;
        result = "Invalid operation";

    }
    result;
  }
  console.log(calculate(10,20,'add'));