

function test(value) {
    let reg=new RegExp(/^(([1-9]{1}\d*)|(0{1}))((.\d{0,2})?)$/)
    return reg.test(value)
}
console.log(test(111))
console.log(test('😄1.11'))