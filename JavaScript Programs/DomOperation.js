
var empObj = [];
function storeInSession(){
    sessionStorage.setItem("empInfo", empObj)
}
function retrieveFromSession(){
    var obj = sessionStorage.getItem("empInfo");
    console.log(obj);
}

function onFormSubmit(){
    //alert("Event generated ... ")
    var data = readFormData();
    insertNewRecords(data);
    resetData();
    empObj.push(data); //in empObj
}
function readFormData(){
    var obj = {} //empty object
    obj.name = document.getElementById("name").value;
    obj.age = document.getElementById("age").value;
    console.log(obj);
    return obj;
}
function insertNewRecords(data){
    var table = document.getElementById("employeeList");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length); //row created
    
    var cell1 = newRow.insertCell(0); //cell created
    cell1.innerHTML = data.name; //place valuee
    
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.age;
}

// to clear the text boxes after clicking submit
function resetData(){
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}