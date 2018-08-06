
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);
document.addEventListener("DOMContentLoaded",
	function (event) {
		 function sayHello(event) {
		 	this.textContent = "Said it!";
		 	var name = document.getElementById("name").value;
		 	var message = "<h2>Hello " + name + "!</h2>";
		 	// document.getElementById("content").textContent = message;
		 	document.getElementById("content").innerHTML = message;

		 	if (name === "student") {
		 		var title = document.querySelector("h1").textContent;
		 		title += " & Lovin' it!";
		 		document.querySelector("#title").textContent = title;
		 	}
		 }

		 document.querySelector("button").addEventListener("click", sayHello);
	}


);




// document.querySelector("button").onclick = sayHello;