function greet() {
    return 'Haydo';
}
var salutation=greet();
console.log(salutation);

function echo(){
return 'sound';
}
console.log(echo());

function greet2(name){
console.log ('Hello '+name+'!');
 }
greet2('Erika');

var whereIs = function(name){
return 'Where is '+name+'?';
};
var x = whereIs('Jacky');
console.log(x);

var hi=function(name){
    return 'Hi '+name+'!';
}
var h1 = hi('Selva');
var h2 = hi('Pola');
var x = h1+' '+h2;
console.log(x);

function shout(){
    return 'Fire';
}
console.log(shout()+shout());

var double=function(name){
    return name + ' and '+ name;
}
var x=double('Roy');
console.log(x);

function doSomething(name) {
return('Bruno');
}
console.log(doSomething());

function multiplyFive(value,fixed) {
    fixed=5;
    return value*fixed;
}
console.log(multiplyFive(15));

function myFunction(){
   var text='Hello World!!!';
    alert(text);
}
//myFunction(); 

//The commando above It is hidden because the gitpod doesn't read the alert() method

var isAnswerRight=true;
var answer = (isAnswerRight=true) ? 'The answer is right!':'The answer is wrong'
console.log(answer);

function tellFortune(jobTitle,geographicLocation,partnerName,numberOfChildren) {
    var future = 'You will be a ' + jobTitle + ' in ' + geographicLocation + ' and married to ' + partnerName + ' with ' + numberOfChildren + ' kids.';
    console.log(future);
}
tellFortune('Programmer', 'Ireland', 'Fernanda', 1);
tellFortune('IT manager', 'Portugal', 'Fernanda', 2);
tellFortune('Business analyst', 'Spain', 'Fernanda', 3);