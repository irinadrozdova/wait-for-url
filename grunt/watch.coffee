options =
  spawn: false
  livereload: true
  debounceDelay: 150

module.exports =
  script:
    options: options
    files: [
      './source/app/**/*.coffee'
      './source/app/**/**/*.coffee'
      './source/app/**/**/**/*.coffee'
      './source/app/**/**/**/**/*.coffee'
      './source/app/**/**/**/**/**/*.coffee'
      './source/app/**/**/**/**/**/**/*.coffee'
    ]
    tasks: ['script']
