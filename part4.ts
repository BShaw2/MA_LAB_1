let message:string = "Hello this is a string";
let age:number = 20;
let righthanded:boolean = true;
let randomarray:number[] = [1,2,3,4]
let randomvar:any = 22;

console.log("String: "+message);
console.log("Age: "+age);
console.log("Righthanded: "+righthanded);
for(let i = 0; i < randomarray.length; i++){
    console.log("Random Array["+i+"] = "+randomarray[i]);
}

console.log("RandomVar: "+randomvar);
randomvar = "hello";
console.log("RandomVar: "+randomvar);
