// immediate invoked function expression

function dis1(){
    document.write("<br/> Normal Function <br/>")
}dis1();

// call function from same script
// another script
// from html using events

// IIFE:
(function(){
    document.write("<br/> This is a type of IIFE function");
})();

(()=> document.write("<br/> This is type of IIFE function using arrow"))();