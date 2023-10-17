var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var delBtn = document.getElementsByName("button");

function inputLength() {
	return input.value.length;
}

// Inside CreateListElement the function to 
// remove and cross-out element is 
function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("DELETE"));
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(btn);
	ul.appendChild(li);
	li.addEventListener("click", function()
	{
		this.classList.toggle("done");
		console.log("CLICKED!");
	})

	btn.addEventListener("click",function()
	{
		this.parentElement.remove();
	})
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