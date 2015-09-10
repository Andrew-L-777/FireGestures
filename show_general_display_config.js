var wiW = window.innerWidth; 
var wiH = window.innerHeight;
var woW = window.outerWidth;
var woH = window.outerHeight;
var avW = screen.availWidth;
var avH = screen.availHeight;
var scW = screen.width;
var scH = screen.height;

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
  "W=" + avW + " " + "H=" + avH
);
