document.onload = windowHiddenAlert();

function windowHiddenAlert() { 

var frame = document.getElementById("ijctfrm").contentWindow;

frame.postMessage("jc<3mb", "*")
  
} 

