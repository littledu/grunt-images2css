/*
 * grunt-images2css
 * http://github.com/littledu/grunt-images2css
 *
 * Copyright (c) 2015 littledu
 * Licensed under the MIT license.
 */

var fs = require('fs'),
    path = require('path'),
    images2css = require('images2css');

'use strict';

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('images2css', 'images2css plugin', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      folderPath: '',
      imageRelativePath: '',
      backgrounSize: false
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {

        if(f.dest){

            var cssContent = images2css({
                folderPath: options.folderPath,
                imageRelativePath: options.imageRelativePath,
                backgrounSize: options.backgrounSize
            });

            //为啥你 images2css 没遇到异步的问题，我测试的时候能正常写文件，来到这里后一直正常却一直没内容，搞了半天才发现是异步的问题
            fs.writeFileSync(path.join(process.cwd(), f.dest), cssContent);
        }

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
