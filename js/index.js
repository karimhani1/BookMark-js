// Global

var bookmarkNameInput = document.getElementById("bookmarkName");
var bookmarkUrlInput = document.getElementById("bookmarkURL");

var list = [];

if (localStorage.getItem("productList") !== null) {
  list = JSON.parse(localStorage.getItem("productList"));

  displayData();
}

// local

function addName() {

  if (validationName() && validationUrl()) {

    var bookmark = {

      name: bookmarkNameInput.value,
      url: bookmarkUrlInput.value,
    };

    list.push(bookmark);

    localStorage.setItem("productList", JSON.stringify(list));

    displayData();

    clearForm();


  }
}


function clearForm() {
  bookmarkNameInput.value = null
  bookmarkUrlInput.value = null
}



function displayData() {

  var box = "";

  for (var i = 0; i < list.length; i++) {


    box += `

     <tr>
   <td>${i + 1}</td>
   <td>${list[i].name}</td>              
   <td>
     <a href="${list[i].url}" target="_blank" style="background-color: #8a9e23; color: #fff;"  class="btn btn-visit" index="${i}">
       <i class="fa-solid fa-eye pe-2"></i>Visit
     </a>
   </td>
   <td>
     <button onclick="deleteItem(${i})" style="background-color: #ba081d; color: #fff;" class="btn btn-delete pe-2" index="${i}">
       <i class="fa-solid fa-trash-can"></i>
       Delete
     </button>
   </td>
 </tr>
 `;

  }

  document.getElementById("tableContent").innerHTML = box

}


function deleteItem(index) {

  list.splice(index, 1);

  localStorage.setItem("productList", JSON.stringify(list));

  displayData()
}




function validationName() {

  var regex = /^\w{3,}(\s+\w+)*$/;
  var text = bookmarkNameInput.value;
  var msgName = document.getElementById("msgName");


  if (regex.test(text)) {
    bookmarkNameInput.classList.add("is-valid");
    bookmarkNameInput.classList.remove("is-invalid");

    msgName.classList.add("d-none")

    return true
  }

  else {
    bookmarkNameInput.classList.add("is-invalid");
    bookmarkNameInput.classList.remove("is-valid");

    msgName.classList.remove("d-none")

    return false

  }

}




function validationUrl() {

  var regex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
  var text = bookmarkUrlInput.value;
  var msgUrl = document.getElementById("msgUrl");


  if (regex.test(text)) {
    bookmarkUrlInput.classList.add("is-valid");
    bookmarkUrlInput.classList.remove("is-invalid");

    msgUrl.classList.add("d-none")

    return true
  }

  else {
    bookmarkUrlInput.classList.add("is-invalid");
    bookmarkUrlInput.classList.remove("is-valid");

    msgUrl.classList.remove("d-none")

    return false

  }

}
