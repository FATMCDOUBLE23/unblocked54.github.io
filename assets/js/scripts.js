	function hideWindow() {
	
	
	var frame = document.createElement("iframe")
	frame.src = 'https://' + location.hostname + '/main';
	frame.style.width = '100vw';
	frame.style.height = '100vh';
	frame.style.border = 'none';
	frame.style.margin = '0px';
	frame.id = 'ijctfrm';
	
	var script = document.createElement("script")
	script.src = 'https://' + location.hostname + '/assets/js/blank-scripts.js';
	
	var hiddenWindow = window.open("", "")
	hiddenWindow.document.body.style.margin = '0px';
	hiddenWindow.document.body.style.padding = '0px'; 
	
	hiddenWindow.document.body.appendChild(frame)
	hiddenWindow.document.head.appendChild(script)
	
	}

	
	function hideGame() { 
	
	var gameFrame = document.getElementById("gmefo")
	var gameClickToShow = document.getElementById("ctsg")
	
	gameClickToShow.removeAttribute("style")
	gameFrame.classList.add("sg-game-holder-pp-hidden")
	
	}
	
	function unHideGame() {
	 
	var gameClickToShow = document.getElementById("ctsg")
	var gameContainer = document.getElementById("gmefo")
	
	gameContainer.classList.remove("sg-game-holder-pp-hidden")
	gameClickToShow.style.visibility = 'hidden';
		
	}
	
	function closeGame() { 
	
	var gameClickToShow = document.getElementById("ctsg")
	var gameContainer = document.getElementById("gmefo")
	
	gameClickToShow.style.visibility = 'hidden';
	gameContainer.classList.add("sg-game-holder-pp-hidden")
	
	}
	
	
	function hideInfo() { 
	
	var unHideButton = document.getElementById("udwih")
	unHideButton.removeAttribute("style")
	
	var websiteInfo = document.getElementById("wi")
	wi.classList.add("sg-website-info-hidden")
	
	}
	
	function unHideInfo() { 
	
	var unHideButton = document.getElementById("udwih")
	unHideButton.style.visibility = 'hidden';
	
	var websiteInfo = document.getElementById("wi")
	wi.classList.remove("sg-website-info-hidden")
	
	}
	
	function openWindow(btn) { 
	
	var windowContent = btn.getAttribute("data-content")
	var windowContentN = btn.getAttribute("data-content-name")
	
	document.getElementById("dwcin").innerHTML = windowContentN;
	
	var wc = document.getElementById("dcwip-" + windowContent)
	wc.style.display = 'unset';
	
	document.getElementById("otwdowhlder").classList.remove("sg-game-holder-pp-hidden")
	
	}
	function tabName() { 

	var n = document.getElementById("gdtn").value
	var t = document.getElementById("tninsh")
	
	t.innerHTML = n;
	
	document.getElementById("tnas").innerHTML = '<i class="fa-solid fa-check"></i>&nbsp;TAB NAME CHANGED TO ' + n;
	document.getElementById("tnas").style.display = 'flex';
	console.log("tab name changed")
	

	}
	
	function closeWindow() { 
	
	var uw = document.getElementById("otwdowhlder")
	
	uw.classList.add("sg-game-holder-pp-hidden")
	
	document.querySelectorAll(".sg-win-addon").style.display = 'none';
	
	}
	
	function hideAllNotifications() { 
	
	document.getElementById("nfhlder").classList.add("sg-hidden")
	
	}
	
	window.addEventListener("message", (event) => readMessage(event.data))
	
	function readMessage(m) { 
	
	if(m === "jc<3mb") { 
	
  	document.getElementById("hmwbtn").classList.add("sg-btn-window-hidden")
  	document.getElementById("hmwbtn").innerHTML = '<i class="fa-solid fa-circle-check"></i>&nbsp;WINDOW HIDDEN FROM GOGUARDIAN';
  	document.getElementById("hmwbtn").removeAttribute("onclick")
	document.getElementById("ighsts").style.color = 'lime';
	document.getElementById("ighsts").innerHTML = '<i class="fa-solid fa-circle-check"></i>&nbsp;THIS WINDOW IS HIDDEN FROM GOGUARDIAN';
	document.getElementById("hmwnthh").style.display = 'none';
		
	} else { 
	
	console.log("not vaild message")
	
		} 
	}
	
	function openGame(gameTile) { 
	
	var gameToLaunch = gameTile.getAttribute("data")
	var gameToLaunchN = gameTile.getAttribute("data-game-normal")
	console.log("game is " + gameToLaunch)
	
	document.getElementById("gfgdpl").src = 'https://' + location.hostname + '/games' + '/holders/' + gameToLaunch;
	document.getElementById("gnihtm").innerHTML = 'CLICK TO RESUME ' + gameToLaunchN;
	document.getElementById("ignhr").innerHTML = gameToLaunchN;
	
	var gameContainer = document.getElementById("gmefo")
	
	gameContainer.classList.remove("sg-game-holder-pp-hidden")
	gameContainer.style.visibility = 'visible';

	}
