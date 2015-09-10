var wiW = window.innerWidth; 
var wiH = window.innerHeight;
var woW = window.outerWidth;
var woH = window.outerHeight;
var avW = screen.availWidth;
var avH = screen.availHeight;
var scW = screen.width;
var scH = screen.height;
var clD = screen.colorDepth;
var clR = screen.pixelDepth;

alert(
  "Window (inner):\t\t" +
  "W=" + wiW + " " + "H=" + wiH + "\n"
+
  "Window (outer):\t\t" +
  "W=" + woW + " " + "H=" + woH + "\n"
+
  "Screen resolution:\t\t" +
  "W=" + scW + " " + "H=" + scH + "\n"
+
  "Screen (available):\t\t" +
  "W=" + avW + " " + "H=" + avH + "\n"
+
  "Colors (depth, resol.):\t\t" +
  clD + "bits, " + clR + "bits"
);
