function validatePinCode(code)
{
    let pattern=RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
    if(pattern.test(code))
    {
        return true;
    }
    else
    {
        return false;
    }
}

//PIN code UC 1
let num1='400088';
console.log(num1+" is "+validatePinCode(num1));

//PIN Code UC 2
let num2='A400088';
console.log(num2+" is "+validatePinCode(num2));

//PIN Code UC 3
let num3='400088B';
console.log(num3+" is "+validatePinCode(num3));

//PIN Code UC 4
let num4='400 088';
console.log(num4+" is "+validatePinCode(num4));