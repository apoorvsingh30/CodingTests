var selectedRow= null

function onFormSubmit() {
    var formData= readFormData();
    if(selectedRow==null)
        insertNewRecord(formData);
    else
        updateRecord(formData);


    resetform();

}

function readFormData() {
    var formData={};
    formData["id"]= document.getElementById("id").value;
    formData["name"]= document.getElementById("name").value;
    formData["email"]= document.getElementById("email").value;
    formData["class"]= document.getElementById("class").value;
    formData["year"]= document.getElementById("year").value;
    formData["city"]= document.getElementById("city").value;
    formData["country"]= document.getElementById("country").value;
    return formData;

}

function insertNewRecord(data) {
    var table= document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow= table.insertRow(table.length);
    cell1= newRow.insertCell(0);
    cell1.innerHTML= data.id;
    cell2= newRow.insertCell(1);
    cell2.innerHTML= data.name;
    cell3= newRow.insertCell(2);
    cell3.innerHTML= data.email;
    cell4= newRow.insertCell(3);
    cell4.innerHTML= data.class;
    cell5= newRow.insertCell(4);
    cell5.innerHTML= data.year;
    cell6= newRow.insertCell(5);
    cell6.innerHTML= data.city;
    cell7= newRow.insertCell(6);
    cell7.innerHTML= data.country;
    cell8= newRow.insertCell(7);
    cell8.innerHTML='<a onclick="onEdit(this)">Edit</a><a onclick="onDelete(this)">Delete</a>';

}

function resetform() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("class").value = "";
    document.getElementById("year").value = "";
    document.getElementById("city").value = "";
    document.getElementById("country").value = "";

}

function onEdit(td) {
    selectedRow= td.parentElement.parentElement;
    document.getElementById("id").value= selectedRow.cells[0].innerHTML;
    document.getElementById("name").value= selectedRow.cells[1].innerHTML;
    document.getElementById("email").value= selectedRow.cells[2].innerHTML;
    document.getElementById("class").value= selectedRow.cells[3].innerHTML;
    document.getElementById("year").value= selectedRow.cells[4].innerHTML;
    document.getElementById("city").value= selectedRow.cells[5].innerHTML;
    document.getElementById("country").value= selectedRow.cells[6].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML=formData.id;
    selectedRow.cells[1].innerHTML=formData.name;
    selectedRow.cells[2].innerHTML=formData.email;
    selectedRow.cells[3].innerHTML=formData.class;
    selectedRow.cells[4].innerHTML=formData.year;
    selectedRow.cells[5].innerHTML=formData.city;
    selectedRow.cells[6].innerHTML=formData.country;

}

function onDelete(td) {
    if(confirm('Are you sure to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetform();
    }
}

