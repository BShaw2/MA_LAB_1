function numChars(input:string):number {
    return input.length;
}

function numCharsExcludeSpace(input:string):number{
    return input.replace(/\s/g, '').length;
}

function countNumChars(input:string, countblank?:boolean):number{
    if(countblank == true){
        return numChars(input);
    }
    else{
        return numCharsExcludeSpace(input);
    }
}

let fname:string = "Brett Shaw";
//console.log("Length of string '"+fname+"' is "+numChars(fname));
//console.log("Length of string '"+fname+"' excluding spaces is "+numCharsExcludeSpace(fname));

console.log("Length of string '"+fname+"' is "+countNumChars(fname, true));
console.log("Length of string '"+fname+"' excluding spaces is "+countNumChars(fname, false));
console.log("Length of string '"+fname+"' excluding spaces is "+countNumChars(fname)); //optional parameter false by default

