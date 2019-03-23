const doxdox = require('doxdox')
const fs = require('fs')
const path = require('path')
const intro = fs.readFileSync(path.resolve(__dirname, './INTRO.md'), 'utf-8')

doxdox.parseInputs(['src/**/*.js'], {
  'parser': 'dox',
  'layout': 'markdown'
}).then(doc => {
  doc = doc.replace(new RegExp('/\*Document.*/\*'), '').replace(/###*. .*.js/,'')
  process.stdout.write(`${intro}${doc}`)
})

