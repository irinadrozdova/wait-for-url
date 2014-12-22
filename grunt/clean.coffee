
module.exports =
  dist:
    src: ['<%=PRODUCTION_PATH%>']

  staging:
    src: ['<%=STAGING_PATH%>']

  build:
    src: [
      'dist/app/components'
      'dist/app/config'
      'dist/app/css'
      'dist/app/modules'
      'dist/app/index.html'
    ]

  script:
    src: [
      '.tmp/coffee'
      'dist/*.js'
      'dist/*.js.map'
      'dist/*.ts'
    ]

  template:
    src: [
      'dist/partial'
    ]
