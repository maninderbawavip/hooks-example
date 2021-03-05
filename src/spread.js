let state = {
    firstName: "Maninder",
    lastName: "bawa"
}
// console.log(state)
// console.log(myNewObj)

let myArr = [1,2,3]

let newArray = [...myArr, 4,5,6]

console.log(newArray)

let myNewObj = { ...state, firstName: "Rahul", newArray: [...newArray] }

console.log(myNewObj)