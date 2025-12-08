
// It is simple as javascript but only the changes lies is..

/* define the type of every variable which needs to be assigned and also
   the return type of a function "(name: string)" instead of just "name" in the parameter
    and also (name:string) : "string" the type that the function will return
    the return statements is only return in backticks 
*/
function greet ( name: string): string {
    return `hello ${name}, welcome`;
}


// at declaration of the variable we also assign the type of variable 
const username: string = "Sarang TypeScript"
console.log(greet(username));
