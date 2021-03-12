/* 
object: any real word entity
examole: person, car, animal, bank, etc.
*/

// one way object creation using object literal style

var empObject={id:100, Name:"Xansd", salary:120000};
document.write("Employee object <br/>");
document.write(empObject);
document.write("<br/> id " + empObject.id)
document.write("<br/> Name " + empObject.Name)
document.write("<br/> salary "+ empObject.salary)
document.write("</br>");


//convert object into string format
var empString = JSON.stringify(empObject);
document.write("<br> EMP in string format <br/>" + empString)
document.write("<br/> id " + empString.id)
document.write("<br/> Name " + empString.Name)
document.write("<br/> salary "+ empString.salary)
document.write("</br>");


//convert string to json format
var empJson = JSON.parse(empString);
document.write("<br> EMP in JSON format <br>")
document.write(empJson);
document.write("<br/> id " + empJson.id)
document.write("<br/> Name " + empJson.Name)
document.write("<br/> salary "+ empJson.salary)
document.write("</br>");