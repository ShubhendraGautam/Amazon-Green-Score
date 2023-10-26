let productName=document.getElementById("title");

var text = productName.innerText;
console.log(text);


chrome.runtime.sendMessage({ data: "Data from File1" });