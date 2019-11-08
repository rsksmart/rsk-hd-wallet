const Jsdoc2md = require('rskjs-jsdoc2md')
const path = require('path')
const fs = require('fs')

const files = path.resolve(__dirname, '../src') + '/*.js'
const parser = Jsdoc2md()

mkReadme(files)


async function mkReadme (files) {
  try {
    const intro = fs.readFileSync(path.resolve(__dirname, './INTRO.md'), 'utf-8')
    const content = await parser.render(files)
    console.log(intro + content)
  } catch (err) {
    console.error(err)
  }
}