options =
  verbose: true
  target: "es3" # es5 | es3
  noImplicitAny: true
  module: "amd" # commonjs | amd
  failOnTypeErrors: true
  declaration: false
  comments: true
  fast: 'never' # watch | always | never
  sourceMap: false
  sourceRoot: '<%=STAGING_PATH%>/ts'
  mapRoot: '<%=STAGING_PATH%>/ts'

unless options.sourceMap
  options.sourceRoot = null
  options.mapRoot = null

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
