// Synchronous Comm: executed in sequence
document.write("<br/> First");
document.write("<br/> Second");
document.write("<br/> Third");
/* 
    fun1() 
    fun2()
    fun3()
*/
/* 
    1st request to server
    2nd request ...
    3rd request ...
*/
// Asynchrounous comm: executed independently
//setTimeout(): predefined func which is used to achieved aysnch communication
document.write("<br/> First");
setTimeout(function()
{
    document.getElementById("msg").innerHTML ="<br/> Second";
}, 3000);

var i =0;
setInterval(function()
{
    document.getElementById("info").innerHTML = i++;
}, 1000);
document.write("<br/> Third");