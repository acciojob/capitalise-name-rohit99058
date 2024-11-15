//your JS code here. If required.
//your JS code here. If required.
let fname = document.getElementById("fname")

fname.addEventListener("blur", () => {
	let temp = fname.value.toUpperCase();

	fname.value = temp
})