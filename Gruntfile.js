'use strict';

module.exports = function(grunt) {

    // https://github.com/sindresorhus/load-grunt-tasks
    require('load-grunt-tasks')(grunt);

    // http://gruntjs.com/configuring-tasks#grunt-configuration
    grunt.initConfig({

        // https://www.npmjs.com/package/grunt-responsive-images
        responsive_images: {
            dev: {
                options: {
                /* by default uses GraphicMagick, but if you want to use ImageMagick uncomment line below */
                // engine: 'im',
                    quality: 70,
                    createNoScaledImage: true,
                    upscale: false,
                    sizes: [{
                        // name: 'small',
                        width:300
                    },{
                        // name: 'medium',
                        width: 600
                    },{
                        // name: 'large',
                        width: 1200
                    }]
                },

                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    // placed it outside app since these will be processed and are not part of your app/website
                    cwd: 'images_src/',
                    dest: 'app/img'
                }]
            },

            small: {
                options: {
                /* by default uses GraphicMagick, but if you want to use ImageMagick uncomment line below */
                // engine: 'im',
                    quality: 70,
                    createNoScaledImage: true,
                    upscale: false,
                    sizes: [{
                        name: 'small',
                        width:300
                    },{
                        name: 'medium',
                        width: 600
                    }]
                },

                files: [{
                    expand: true,
                    src: ['project*.{gif,jpg,png}'],
                    cwd: 'images_src/',
                    dest: 'app/img/'
                }]
            }
        },

        /* https://www.npmjs.com/package/grunt-contrib-jshint */
        /* http://jshint.com/docs/options/ */
        jshint: {
            // options: {
            //     curly: true,
            //     eqeqeq: true,
            //     eqnull: true,
            //     browser: true,
            //     globals: {
            //         jQuery: true
            //     },
            // },

            user: ['app/js/**/*.js', '!app/js/jQuery.js'],

            gruntfile: {
                options: {
                    node: true
                },
                files: {
                    src: ['Gruntfile.js']
                }
            }
        },

        /* https://www.npmjs.com/package/grunt-contrib-imagemin */
        imagemin: {
            options: {
                optimizationLevel: 5
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'app/',
                    src: ['**/*.{jpg,png}'],
                    dest: 'dist/'
                }]
            }
        },

        // https://www.npmjs.com/package/grunt-contrib-clean
        clean: {
            dist: {
                src: ['dist/']
            },
        },

        // https://www.npmjs.com/package/grunt-contrib-copy
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd:'app/',
                    src: ['js/**/*.js',
                          'css/**/*.css',
                          '.htaccess'
                    ],
                    dest: 'dist/'
                }]
            }
        },

        // https://www.npmjs.com/package/grunt-contrib-htmlmin
        htmlmin: {                                     // Task 
            dist: {                                      // Target 
                options: {                                 // Target options 
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,                                   // Dictionary of files 
                    cwd: 'app/',
                    src: ['**/*.html'],
                    dest: 'dist/'
                }]
            }
        },

        // https://www.npmjs.com/package/grunt-contrib-watch
        watch: {
            livereload: {
                files: ['app/**/*.html',
                        'app/js/**/*.js',
                        'app/css/**/*.css',
                        'app/img/**/*.{jpg,gif,svg,jpeg,png}',
                        'app/views/images/**/*.{jpg,gif,svg,jpeg,png}'
                ],
                options: {
                    livereload: true
                }
            },

            responsive_images: {
                files: ['images_src/*.{gif,jpg,png}'],
                tasks: ['responsive-img']
            }
        },

        // https://www.npmjs.com/package/grunt-contrib-connect
        connect: {
            app: {
                options: {
                    port: 9000,
                    base: 'app',
                    open: true,
                    livereload: true,
                    // hostname: '127.0.0.1'
                    hostname: 'localhost'
                }
            },

            dist: {
                options: {
                    port: 9000,
                    base: 'dist',
                    open: true,
                    keepalive: true,
                    livereload: false,
                    hostname: '127.0.0.1'
                }
            }
        }

    });

// Tasks to run

    // default task   > grunt
    grunt.registerTask('default', [ 'connect:app', 'watch' ]);
    

    grunt.registerTask('img-min', [ 'imagemin' ]);

    // create different sized images    > grunt responsive-img
    grunt.registerTask('responsive-img', ['responsive_images']);

    // lint js    > grunt validate-js
    grunt.registerTask('validate-js', ['jshint']);

    //publish finished site to /dist directory  > grunt publish
    grunt.registerTask('publish', ['clean:dist', 'validate-js', 'copy:dist', 'imagemin', 'htmlmin:dist', 'connect:dist']);

};