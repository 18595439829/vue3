// let arr = [3,4,5,6,7,8,9];
// const result : [number, number][] = []
// arr.forEach((item, index) => {
//     if (index < arr.length - 1) {
//         result.push([item, arr[index + 1]])
//     }
// })
// console.log(result);

class Example {
    text: string = 'text';
}

let inst = new Example();
console.log(inst instanceof Example);

let obj = {};
let arr : any = [];
console.log(typeof obj, typeof arr);
console.log(obj instanceof Object, arr instanceof Array);
