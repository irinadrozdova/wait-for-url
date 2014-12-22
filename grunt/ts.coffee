options =
  verbose: true
  target: "es3" # es5 | es3
  noImplicitAny: true
  module: "amd" # commonjs | amd
  failOnTypeErrors: true
  declaration: false
  comments: true
  fast: 'never' # watch | always | never
  sourceMap: true
  sourceRoot: '<%=STAGING_PATH%>/ts'
  mapRoot: '<%=STAGING_PATH%>/ts'

source = [
  '<%=SOURCE_PATH%>/**/*.ts'
  '<%=SOURCE_PATH%>/**/**/*.ts'
  '<%=SOURCE_PATH%>/**/**/**/*.ts'
  '<%=SOURCE_PATH%>/**/**/**/**/*.ts'
  '<%=SOURCE_PATH%>/**/**/**/**/**/*.ts'
  '<%=SOURCE_PATH%>/**/**/**/**/**/**/*.ts'
]

module.exports =
  script:
    options: options
    outDir: '<%=PRODUCTION_PATH%>'
    src: source
