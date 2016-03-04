TODO: FIX IT!

## Part 3: Grunt workflow

For the purpose of uploading project to github all project related files are located in the ```_src``` folder and the final project files are output to the root directory so they can be viewed online as github page. The actual project files are placed in the ```_src/app``` directory.

### Getting Ready

1. Clone repo.
2. Verify you have Node and Grunt installed.
3. cd into ```_src``` directory.
4. to installed all required Grunt plugins for project we don't have to manually install each since we have a package.json file.  Run ```npm install``` to install plugins.
5. You are now ready to use Grunt.

### Using Grunt

1. ```_src/Grunfile.js``` contains configuration for all tasks used in this project.
2. The default task for grunt is to start a web server and watch for file changes to automatically refresh browser on file changes, lint js files on js file changes, and process responsive images. 
3. To generate different size images for responsive images:
	* place original image in ```_src/images_src``` directory
	* from _src folder run ```grunt responsive_images```.  According to config 3 images will be generated and placed in the app/img folder.
4. To manually lint your js run ```grunt jshint:src```. There are two seperate options files used for linting, one for your javascript and the other for the Grunfile.js
5. to publish project run ```grunt publish```.  This task will output optimized files for project and start server with optimized project files to review.



### To View Project

* [Github](http://javsalazar.github.io/frontend-nanodegree-mobile-portfolio/)
* [Other](http://p4.xjav.com)
























