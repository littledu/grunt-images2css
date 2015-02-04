/*
 * grunt-images2css
 * http://github.com/littledu/grunt-images2css
 *
 * Copyright (c) 2015 littledu
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    images2css: {
      default_options: {
        options: {
            folderPath: './',
            imageRelativePath: '',
            backgrounSize: true
        },
        dest: 'css/style.css'
      }
    },

    // Unit tests.
      nodeunit: {
          tests: ['test/*_test.js']
      }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['images2css']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
