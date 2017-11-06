function initApp() {
  var nameInput = document.getElementById('name-input');
  var addNameBtn = document.getElementById('add-name');
  var nameList = document.getElementById('name-list');
  var cheatButton = document.getElementById('cheat-button');
  var nameArray = [];

  addNameBtn.onclick = function(e) {
    if (nameInput.value !== "") {
      pushName(nameInput.value);
      nameInput.value = "";
    } else {
      return;
    }
  }

  cheatButton.onclick = function(e) {
    localStorage.setItem("names", JSON.stringify(nameArray));
    console.log(JSON.parse(localStorage.getItem("names")));
  }

  function pushName(inputValue) {
    nameArray.push(inputValue);
    updateNameList();
  }

  function updateNameList() {
    nameList.innerHTML = "";
    nameArray.map(function(name, index) {
      var li = document.createElement('li');
      li.innerHTML = name;
      return nameList.appendChild(li);
    });
  }

  function addNamesToLocal(names) {
    names.map(function(name, index) {
      localStorage.setItem("name"+index, name);
    });
  }
}
