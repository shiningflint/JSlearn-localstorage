function initApp() {
  var nameInput = document.getElementById('name-input');
  var addNameBtn = document.getElementById('add-name');
  var nameList = document.getElementById('name-list');
  var nameArray = constructNameArray();

  updateNameList();

  addNameBtn.onclick = function(e) {
    if (nameInput.value !== "") {
      pushName(nameInput.value);
      nameInput.value = "";
    } else {
      return;
    }
  }

  function constructNameArray() {
    if (localStorage.getItem("names") != null) {
      return JSON.parse(localStorage.getItem("names"));
    } else {
      return [];
    }
  }

  function pushName(inputValue) {
    nameArray.push(inputValue);
    localStorage.setItem("names", JSON.stringify(nameArray));
    updateNameList();
  }

  function updateNameList() {
    var names = JSON.parse(localStorage.getItem("names"));
    nameList.innerHTML = "";
    names.map(function(name, index) {
      var li = document.createElement('li');
      li.innerHTML = name;
      li.dataset.index = index;
      li.onclick = deleteName;
      return nameList.appendChild(li);
    });
  }

  function deleteName(e) {
    nameArray.splice(e.currentTarget.dataset.index, 1);
    localStorage.setItem("names", JSON.stringify(nameArray));
    updateNameList();
  }
}
