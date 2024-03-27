var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButton = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	createDeleteButton(li);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

function toggleList(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
}

ul.addEventListener("click", toggleList);



function deleteListElement(event) {
	if (event.target.classList.contains("delete")) {
		event.target.parentNode.remove();
	}
}

for (var i = 0; i < deleteButton.length; i++) {
	deleteButton[i].addEventListener("click", deleteListElement);
}


function createDeleteButton(li) {
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	deleteButton.classList.add("delete");
	deleteButton.addEventListener("click", deleteListElement);
	li.appendChild(deleteButton);
}






















