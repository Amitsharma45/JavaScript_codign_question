// this in JavaScript is a reference to the object that "owns" the executing code.
// what is THIS in js ?
// this is a reference to the object that "owns" the executing code.    
// this has different values depending on where it is used:
// In this case, the object is the window object.

this.a=10;

function checkThis(){
    this.a=20;
    console.log('check',this.a)
}
checkThis();
const thisFunc = ()=>{
    console.log(this.a)
}
thisFunc(); 