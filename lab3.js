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

//Call myFunction on the next line.

  
function myFunction(){
   var text='Hello World!!!';
    alert(text);
}
//myFunction();

/*Define a variable called isAnswerRight and give it a true value. Use the ternary operator to console.log
 the ‘The answer is right!’ if the value is true and ‘The answer is wrong!’ if the value is false.*/
var isAnswerRight=true;
var answer = (isAnswerRight=true) ? 'The answer is right!':'The answer is wrong'
console.log(answer);

/** Write a function named tellFortune that: takes 4 arguments: number of children, partner's name, geographic location, job title. 
 * Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids." 
 * Call that function 3 times with 3 different values for the arguments. */

function tellFortune(jobTitle,geographicLocation,partnerName,numberOfChildren) {
    var future = 'You will be a ' + jobTitle + ' in ' + geographicLocation + ' and married to ' + partnerName + ' with ' + numberOfChildren + ' kids.';
    console.log(future);
}
tellFortune('Programmer', 'Ireland', 'Fernanda', 1);
tellFortune('IT manager', 'Portugal', 'Fernanda', 2);
tellFortune('Business analyst', 'Spain', 'Fernanda', 3);



 /** function tellFortune(numberOfChildren, partnerName, geographicLocation, jobTitle){
numberOfChildren='3'
partnerName='Fernanda'
geographicLocation='Dublin'
jobTitle='Teacher'
}
console.log('You will be '+jobTitle+' in '+geographicLocation+' and married to '+partnerName+' with '+numberOfChildren+' kids');*/