const fs = require('fs')
const path = require('path')

module.exports = source => {
  try {
    const newTemp = fs.readFileSync(
      path.resolve(__dirname, './DemoAndCodeFix.vue'),
      'utf-8'
    )
    source = newTemp
  } catch (e) {
    console.log('fix-demo-code-loader', e)
  }
  return source
}
