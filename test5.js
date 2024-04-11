function numberReg(str) {
  let isNumberStr =
    /^[+-]{0,1}(([0-9]*([0-9]*|[\.][0-9]+))|([\.][0-9]+)|([0-9]*([0-9]*|[\/\][0-9]+)))[%]{0,1}$/.test(
      str
    )
  console.log(isNumberStr)
  return isNumberStr
}

numberReg('134')
numberReg('-1134')
numberReg('asdas134')
numberReg('13das4')
numberReg('13/4')
numberReg('-2.2')
numberReg('2.2%')
numberReg('6.1')
numberReg('-111112.2')
