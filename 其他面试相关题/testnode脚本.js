
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '')
const files = fs.readdirSync(filePath)
console.log(files)

const change = (filepath, sourceRegx, targetStr) => {
  fs.readFile(filepath, (err, res) => {
    if (err) {
      console.log(err)
    } else {
      let str = res.toString()
      source = str.match(sourceRegx)
      console.log(111, source, 222)
      source?.length &&
        source.forEach((item, i) => {
          targetStr = `change(${item})`
          str = str.replace(item, targetStr)
          console.log(str)
          fs.writeFile(filePath, str, () => {
            if (err) console.log(err)
          })
        })
    }
  })
}
const ignore = ['.DS_Store', '.git', '.vscode']
for (let i = 0; i < files.length; i++) {
  if (!ignore.includes(files[i])) {
    var re = new RegExp(
      '("[\u4E00-\u9FA5]+)|([\u4E00-\u9FA5]+")|([\u4E00-\u9FA5]+<)|(>[\u4E00-\u9FA5]+)',
      'g'
    )
    change(files[i], re)
  }
}
