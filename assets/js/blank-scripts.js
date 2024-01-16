var frame = document.getElementById("ijctfrm").contentWindow;
frame.addEventListener("load", (event) => msgWindow())

function msgWindow() { 
frame.postMessage("jc<3mb", "*")
}
