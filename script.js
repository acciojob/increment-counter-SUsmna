//your JS code here. If required.
// let count = 0;
// function increment(){
// 	alert("un-incremented value.");
// 	count++;
// 	document.getElementById('counter').innerText = count;
// }

document.getElementById('incrementBtn').addEventListener('click', function() {
    // Get the current counter value from the paragraph element
    let counterValue = parseInt(document.getElementById('counter').innerText);
    
    // Display an alert with the current counter value
    alert("Current counter value: " + counterValue);
    
    // Increment the counter value
    counterValue++;
    
    // Update the counter paragraph with the new value
    document.getElementById('counter').innerText = counterValue;
});