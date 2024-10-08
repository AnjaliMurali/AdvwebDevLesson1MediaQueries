window.onresize = screen;
window.onload = screen;

// Function named 'screen' 

function screen() {
  Width = window.innerWidth;
  document.getElementById("size").innerHTML = "Width : " + Width + " px" 
}