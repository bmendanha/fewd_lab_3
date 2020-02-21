function greet() {
    return 'Haydo';
}
greet;
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

function doSomething(name2) {
console.log('Bruno');
}
doSomething();

function multiplyFive(value,fixed) {
    fixed=5;
    //product=value*fixed;
 return value*fixed;
}
console.log(multiplyFive(10));
