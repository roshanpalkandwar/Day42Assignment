function validateEmail(email)
{
    let pattern = RegExp ('\^([a-z]+)(\.[a-z0-9_\+\-]+)?@([a-z]+)\.([a-z]{2,4})(\.[a-z]{2})?$');
    if(pattern.test(email))
    {
        return true;
    }
    else
    {
        return false;
    }
}

let email1='abc.xyz@bridgelabz.co.in';
let email2='abc@yahoo.com';
let email3='abc-100@yahoo.com';
let email4='abc.100@yahoo.com';
let email5='abc111@abc.com';
let email6='abc-100@abc.net';
let email7='abc.100@abc.com.au';
let email8='abc+100@gmail.com';
let email9='abc@1.com';
let email10='abc@gmail.com.com';
let email11='abc123@gmail.a';
let email12='abc123@.com';
let email13='abc123@.com.com';
let email14='.abc@abc.com';
let email15='abc()*@gmail.com';
let email16='abc@%*.com';
let email17='abc..2002@gmail.com';
let email18='abc.@gmail.com';
let email19='abc@abc@gmail.com';
let email20='abc@gmail.com.1a';
console.log(email1+" is "+validateEmail(email1));
console.log(email2+" is "+validateEmail(email2));
console.log(email3+" is "+validateEmail(email3));
console.log(email4+" is "+validateEmail(email4));
console.log(email5+" is "+validateEmail(email5));
console.log(email6+" is "+validateEmail(email6));
console.log(email7+" is "+validateEmail(email7));
console.log(email8+" is "+validateEmail(email8));
console.log(email9+" is "+validateEmail(email9));
console.log(email10+" is "+validateEmail(email10));
console.log(email11+" is "+validateEmail(email11));
console.log(email12+" is "+validateEmail(email12));
console.log(email13+" is "+validateEmail(email13));
console.log(email14+" is "+validateEmail(email14));
console.log(email15+" is "+validateEmail(email15));
console.log(email16+" is "+validateEmail(email16));
console.log(email17+" is "+validateEmail(email17));
console.log(email18+" is "+validateEmail(email18));
console.log(email19+" is "+validateEmail(email19));
console.log(email20+" is "+validateEmail(email20));