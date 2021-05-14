var ray1 = ["Hi", 7, 33.33, false, null];
var o = 3;
var p = 9;
var k = p%o;

console.log(k);

var Str1 = "Harshil";
var Str2 = "Up";
var output = ray1[0] + " " + Str1;
var divi = o+5 + Str2;

console.log(output);
console.log(divi);
console.log(3 === 9);
k = 1;
switch(k){
    case 1 : console.log(8*0);
    break;

    case 2 : console.log(9+5);
    break;

    default:
    break;
}

ray1.pop();
ray1.pop();

ray1.push("Harshil");

console.log("Length = "+ ray1.length);
for(var i in ray1){
    console.log(ray1[i]);

}