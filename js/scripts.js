var list = document.getElementById('list');  //wybieramy element ul
var add = document.getElementById('addElem');//wybieramy przycisk

add.addEventListener('click',function () {
	var liElements = document.getElementsByTagName('li');
	var element = document.createElement('li');
	element.innerHTML = "Item " + liElements.length;
	list.appendChild(element);
});
