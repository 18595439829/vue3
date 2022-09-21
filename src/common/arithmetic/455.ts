const childArr:Array<number> = [1,2]
const cookieArr:Array<number> = [1,2,3]

const format = (child: number[], cookie: number[]) => {
  let result:Array<Array<number>> = []
  let num: number = 0
  let childS = child.sort((a: number, b: number) => {
   return a - b
  })
  let cookieS = cookie.sort((a: number, b: number) => {
    return a - b
   })
  childS.forEach((item: number) => {
    let cookIdx = cookieS.findIndex((cook: number) => cook >= item)
    if (cookIdx > -1) {
      num ++;
      result.push([item, cookieS[cookIdx]])
    }
  })
  return {
    num,
    result
  }
}

console.log(format(childArr, cookieArr))

export {
  format
}