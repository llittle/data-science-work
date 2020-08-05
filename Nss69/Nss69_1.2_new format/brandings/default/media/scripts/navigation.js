/*
 * JavaScript function to open and close children of node.
 *
 * File: toggle.js
 * Include with: <SCRIPT language="JavaScript" SRC="scripts/toggle.js"></SCRIPT>
 *
 * Mark Diggory
 */

var currentEl;

function toggle(id,opened,closed,e) {
 
    var target = document.getElementById(id);
    var sourceImg = document.getElementById(id + "img");

    if (target.style.display == "none") {
        target.style.display = "";
    	sourceImg.src=opened;
    } else if (target.style.display == "") {
        target.style.display = "none";
    	sourceImg.src=closed;
    }      
    
  return true;
}

function openDiv(id,img,e) {
    
	highlight(e);
	
    var target = document.getElementById(id);
    var sourceImg = document.getElementById(id + "img");

    target.style.display = "";
    sourceImg.src=img;
    
  	return true;
}

function highlight(e) {
    if(currentEl != null)
		currentEl.style.fontWeight = "";
 	
    if((document.all)&&(document.getElementById)){
    	currentEl = event.srcElement;
    }else{
    	currentEl = e.target;
    }
    currentEl.style.fontWeight = "bold";
    
    return true;
}