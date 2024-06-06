//your JS code here. If required.
// let count = 0;
// function increment(){
// 	alert("un-incremented value.");
// 	count++;
// 	document.getElementById('counter').innerHTML = count;
// }

document.getElementById('incrementBtn').addEventListener('click', function() {
    let counterValue = parseInt(document.getElementById('counter').innerHTML);
    alert("un-incremented value. " + counterValue);
    counterValue++;
    document.getElementById('counter').innerHTML = counterValue;
});