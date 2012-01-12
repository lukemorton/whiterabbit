fs = require 'fs'
{exec} = require 'child_process'
{parser, uglify} = require 'uglify-js'

lib = './lib'
dist = './dist'

getVersion = -> JSON.parse(fs.readFileSync('./package.json')).version

header = """
  // WhiteRabbit
  // Written by Luke Morton, MIT licensed.
  // https://github.com/DrPheltRight/whiterabbit
"""

task 'build', 'Build WhiteRabbit', ->
  exec "rm -rf #{dist} && mkdir -p #{dist}", ->
    code = """#{fs.readFileSync "#{lib}/whiterabbit.js"}"""
    fs.writeFileSync "#{dist}/whiterabbit-#{getVersion()}.js", code
    code = uglify.gen_code uglify.ast_squeeze uglify.ast_mangle parser.parse code
    fs.writeFileSync "#{dist}/whiterabbit-#{getVersion()}.min.js", header + '\n' + code

task 'clean', 'Delete distribution folder', ->
  exec "rm -rf #{dist}"