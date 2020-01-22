var message = "Hello this is a string";
var age = 20;
var righthanded = true;
var randomarray = [1, 2, 3, 4];
var randomvar = 22;
console.log("String: " + message);
console.log("Age: " + age);
console.log("Righthanded: " + righthanded);
for (var i = 0; i < randomarray.length; i++) {
    console.log("Random Array[" + i + "] = " + randomarray[i]);
}
console.log("RandomVar: " + randomvar);
randomvar = "hello";
console.log("RandomVar: " + randomvar);
