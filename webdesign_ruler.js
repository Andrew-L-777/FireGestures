/*  webdesign_ruler.js
 *
 *  A little script to "alert" useful measures (screen, window...)
 *
 *  Written with love by Andrew-L-777 @GitHub (still WIP)
 */
 
/* SETTINGS */
var isAlerting = true;
var isWindowOutputOn = true;

/* VARIABLES */
var winName = window.name;
var winURL  = window.location.href;
var winIn   = {w: window.innerWidth, h: window.innerHeight};
var winOut  = {w: window.outerWidth, h: window.outerHeight};
var winPos  = {x: window.screenX, y: window.screenY};
var avail   = {w: screen.availWidth, h: screen.availHeight};
var resol   = {w: screen.width, h: screen.height};
var colorDepth = screen.colorDepth;

var outputWindow;
var date_init = new Date();
var date_time = date_init.getDate() + "/" + date_init.getMonth() + "/" + date_init.getDate() + " " +
	date_init.getHours() + ":" + date_init.getMinutes() + ":" + date_init.getSeconds();
var window_att = {u: "", n: "Webdesign ruler output - " + date_time, s: "width=800, height=800", r: ""};

if (winName == "")
	winName = "[No name]";

if (isAlerting)
	alert(
	  "___WINDOW ATTRIBUTES____________" + "\n" +
	  "Focused:\t\t" + winName + "\n" +
	  "URL:\t" + winURL + "\n"
	+
	  "Window (inner):\t\t" +
	  "W=" + winIn.w + " " + "H=" + winIn.h + "\n"
	+
	  "Window (outer):\t\t" +
	  "W=" + winOut.w + " " + "H=" + winOut.h + "\n"
	+
	  "Window position:\t\t" +
	  "X=" + winPos.x + " " + "Y=" + winPos.y + "\n"
	+ "\n" +
		
	  "___SCREEN ATTRIBUTES______" + "\n"
	+
	  "Screen resolution:\t\t" +
	  "W=" + resol.w + " " + "H=" + resol.h + "\n"
	+
	  "Screen (available):\t\t" +
	  "W=" + avail.w + " " + "H=" + avail.h + "\n"
	+
	  "Color depth:\t\t\t" + colorDepth + "bits"
	);

// TODO
/*
if (isWindowOutputOn) {
	outputWindow = window.open(window_att.u, window_att.n, window_att.s, window_att.r);
	document.write("<!DOCTYPE html>" +
	"<html>" +
	"<head>" +
		"<title>Title of the document</title>" +
	"</head>" +
	"<body>" +
		"<p>Test</p>" +
	"</body>" +
	"</html>"
	);
}
*/
