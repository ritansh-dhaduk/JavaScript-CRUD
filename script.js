var addRow = null;

function addStudentData() {
    if (addRow == null) {
        addData();
    }
}

function addData() {
    let rollNumber = document.getElementById("rollNo").value.trim();
    let stdName = document.getElementById("studentName").value.trim();
    let birthDate = document.getElementById("birthdate").value;
    let stdanderd = document.getElementById("stdanderd").value;
    
    if (validateAll()) {
    let data = `<tr><td> ${rollNumber} </td><td> ${stdName} </td><td> ${birthDate} </td><td> ${stdanderd} </td>
        <td><button type="button" id="Edit" onclick="editStudent(this)">Edit</button>
        <button type="button" id="Delete" onclick="deleteStudent(this)">Delete</button></td>
        </tr>`;
    document.getElementById('listbody').innerHTML += data;
    resetForm();
    }
}

function resetForm() {
    document.getElementById("rollNo").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("stdanderd").value = "";
    document.getElementById("namelocation1").innerHTML = "";
    document.getElementById("namelocation2").innerHTML = "";
    document.getElementById("namelocation3").innerHTML = "";
    document.getElementById("namelocation4").innerHTML = "";
    document.getElementById("add").innerHTML = 'Submit';
    document.getElementById("add").setAttribute("onclick", "addData()");
}

function editStudent(edt) {
    addRow = edt.parentElement.parentElement;
    document.getElementById("rollNo").value = addRow.cells[0].innerText.trim();
    document.getElementById("studentName").value = addRow.cells[1].innerHTML.trim();
    document.getElementById("birthdate").value = addRow.cells[2].innerText;
    document.getElementById("stdanderd").value = addRow.cells[3].innerText;
    document.getElementById("add").innerHTML = 'Update';
    document.getElementById("add").setAttribute("onclick", "updateStudent()");
    validateAll();
}

function updateStudent() {
    let rollNumber = document.getElementById("rollNo").value.trim();
    let stdName = document.getElementById("studentName").value.trim();
    let birthDate = document.getElementById("birthdate").value;
    let stdanderd = document.getElementById("stdanderd").value;

    if (rollNumber != "" && stdName != "" && birthDate != "" && stdanderd != "") {
        addRow.cells[0].innerText = document.getElementById("rollNo").value;
        addRow.cells[1].innerHTML = document.getElementById("studentName").value;
        addRow.cells[2].innerText = document.getElementById("birthdate").value;
        addRow.cells[3].innerText = document.getElementById("stdanderd").value;
        document.getElementById("add").innerHTML = 'Submit';
        resetForm();
    }
}

function deleteStudent(dlt) {
    let deleteStdRow = dlt.parentElement.parentElement;
    if (confirm('Are you sure to delete this record ?') == true) {
        deleteStdRow.remove();
        if (addRow == deleteStdRow) {
            resetForm();
        }
    }
}

function validateField(errorID, inputID) {
    let valid = document.getElementById(inputID).value.trim();
        if (valid == "") {
            document.getElementById(errorID).innerHTML = "* Please enter your " + inputID;
            valid = false;
        }
        else {
            document.getElementById(errorID).innerHTML = "";
            valid = true;
        }
        return valid;
}

function validateAll(){
    var rnumber = validateField('namelocation1', 'rollNo');
    var sname = validateField('namelocation2', 'studentName');
    var bdate = validateField('namelocation3', 'birthdate');
    var stnd = validateField('namelocation4', 'stdanderd');

    var validAll = rnumber && sname && bdate && stnd;
    return validAll;
}