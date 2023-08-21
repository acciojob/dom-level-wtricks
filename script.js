//your JS code here. If required.
document.getElementById("level").addEventListener('click', e => {
	let count = 1;
	let current = e.target;

	while(current.previousElementSibling) {
		count++;
		current = current.previousElementSibling;
	}
	
	alert("The level of the element is: "+count);
});