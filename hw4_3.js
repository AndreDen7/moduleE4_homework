// Задание 3
// Написать функцию, которая создает пустой объект, но без прототипа.

function newObj(){
    let newObj = Object.create(null)
    return newObj
}

const obj = newObj()
obj.name = 'Объект без прототипа'

console.log(obj)