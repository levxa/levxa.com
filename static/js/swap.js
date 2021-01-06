var modal = document.getElementById("myModal");
var bf = document.getElementById("BF");
var bt = document.getElementById("BT");
var span = document.getElementsByClassName("close")[0];

// Main function
bf.onclick = function() {
	modal.style.display = "block";
}
BT.onclick = function() {
	modal.style.display = "block";
}
span.onclick = function() {
	modal.style.display = "none";
}
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}