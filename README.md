## Website Performance Optimization portfolio project

The object of this project was to optimized the critical rendering path for ```index.html``` and improve the frame rate to 60 fps or higher for ```views/pizza.html`` applying the techniques picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884) and [Building 60 FPS Web Apps](https://www.udacity.com/course/browser-rendering-optimization--ud860) courses.

In addition, [Grunt](http://gruntjs.com/) was used to automatically perform some optimization, such as image optimization, and concanication/minification of CSS and JS files where needed.



####Part 1: Optimize PageSpeed Insights score for index.html

Improvements:

1. Inline critical CSS styles.
2. Added ```media="print"``` attribute to print style file so it doesn't render block.
3. Optimized images.
4. Added responsive image files and markup (3 sizes).
5. Aysnc google fonts.
5. Async non-critical javascript and moved to bottom of page.
6. minified js,css, and html.
	* mobile score on github page:
		* http://imgur.com/JrVlmWR
		* (http://i.imgur.com/JrVlmWR.png)

 	* desktop score on github page:
		*http://imgur.com/wsZfGUQ

7. For apache server added .htaccess files per recommendation settings from [Apache Server Configs](https://github.com/h5bp/server-configs-apache). If not using apache can try generating one for other platforms [h5bp - geneartor-server-config](https://github.com/h5bp/generator-server-configs).

	* mobile score on apache server:
		* http://imgur.com/9YSuCji

	* desktop score on apache server:
		* http://imgur.com/0GSTomo

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

