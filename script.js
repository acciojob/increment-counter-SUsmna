//your JS code here. If required.
let count = 0;
function increment(){
	alert("un-incremented value:"+ count)
	count++;
	document.getElementById('counter').innerText = count;
}