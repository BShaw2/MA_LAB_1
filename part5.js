function numChars(input) {
    return input.length;
}
function numCharsExcludeSpace(input) {
    return input.replace(/\s/g, '').length;
}
function countNumChars(input, countblank) {
    if (countblank == true) {
        return numChars(input);
    }
    else {
        return numCharsExcludeSpace(input);
    }
}
var fname = "Brett Shaw";
//console.log("Length of string '"+fname+"' is "+numChars(fname));
//console.log("Length of string '"+fname+"' excluding spaces is "+numCharsExcludeSpace(fname));
console.log("Length of string '" + fname + "' is " + countNumChars(fname, true));
console.log("Length of string '" + fname + "' excluding spaces is " + countNumChars(fname, false));
console.log("Length of string '" + fname + "' excluding spaces is " + countNumChars(fname));
