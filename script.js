//your JS code here. If required.
let ip = document.getElementByid("fname")


ip.addEventListener("blur",()=>{
	ip.value = ip.value.toUpperCase();
})