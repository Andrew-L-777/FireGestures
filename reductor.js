/*  reductor.js
 *
 *  Reduces and moves your browser's focused window to your favorites size and position
 *  The window will then stay "On top" (by default, can be set)
 *  Designed for FireGestures (http://xuldev.org/firegestures), tested on Windows 7. Should even work on your good ol' GameBoy's screen
 *
 *  Written with love by Andrew-L-777 @GitHub (still WIP)
 */

/*** HEADER ***/

	/* CONSTANTS/SETTINGS - Only change these to change script's behaviour */

		//Size the window will be reduced to
	
		var constant_tgts = {w: 600, h: 156}; //		With these settings (600, 156), you could use this script with simple RSS reader on a 1920x1080 screen, for example.

		//Fullscreen detection range
		
		var dfs = {w: 0, h: 0}; //		(0 to use standard specs => /!\ Window will not be reduced if not in fullscreen mode, or at least windowed with full size /!\)


	/* SCREEN/WINDOW SPECS */

		//Window's current specs
		
		var wo = {w: window.outerWidth, h: window.outerHeight};
		var wi = {w: window.innerWidth, h: window.innerHeight};

		//Screen - available window size, without taskbar
		
		var fs_avail = {w: screen.availWidth, h: screen.availHeight};

		//Screen resolution

		var scRes = {w: screen.width, h: screen.height};


	/* CALCULATED VARIABLES */

		/*//Window's current pos (used for full screen modes only; now pretty useless)
		var fspX = - ((woW - wiW) / 2);
		var fspY = - (woH - wiH);*/

		//Window's current border size - gives the window's border size set by the OS (the border is hidden in fullscreen)

		var winBorderSize = {w: (wo.w - wi.w) / 2, h: (wo.h - wi.h)};

		//Pos the focused window will be moved to

		var tgtPos = {x: scRes.w - constant_tgts.w + winBorderSize.w, y: 0};

	/* VARIABLES PROCESSING */

		//Sets standard fullscreen detection references if allowed to

		if ((dfs.w == 0)||(dfs.h == 0)) {
			dfs.w = fs_avail.w;
			dfs.h = fs_avail.h;
		}


/*** MAIN ***/

	if ((winBorderSize.w >= fs_avail.w - dfs.w)&&(winBorderSize.h >= fs_avail.h - dfs.h)) {
		window.resizeTo(constant_tgts.w, constant_tgts.h);
		window.moveTo(tgtPos.x, tgtPos.y);
	} 
	//else
		//TODO get back to fullscreen

	//Call "Always on top" browser event
	FireGestures.sendKeyEvent({ ctrl: true, alt: true, key: "T" });
	//TODO stop focus when reducing
