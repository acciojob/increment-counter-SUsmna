//your JS code here. If required.
let count = 0;
function incrementBtn(){
	alert("un-incremented value."+ count)
	count++;
	document.getElementById('counter').innerText = count;
}