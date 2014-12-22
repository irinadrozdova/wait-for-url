require 'coffee-script/register'

module.exports = (grunt) ->
  require('time-grunt') grunt
  require('load-grunt-tasks') grunt,
    scope: 'devDependencies'

  require('grunt-autoload-config') grunt,
    path: './grunt/'
    ext: '.coffee'
    initConfig:
      pkg: grunt.file.readJSON 'package.json'
      MODULE_NAME: 'durandaljs-small'
      BASE_PATH: ''
      DEVELOPMENT_PATH: '.dev/'
      PRODUCTION_PATH: 'lib/'
      SOURCE_PATH: 'source/'
      STAGING_PATH: '.tmp/'
