// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));


// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
    
    let i = 0;
    let counter = {
        increment: () => ++i,
        decrement:() => --i,
        // i: 0,
        // increment: () => ++counter.i,
        // decrement:() => --counter.i,
    }
    return counter;
}

const a = createCounter();
console.log(a.increment());
console.log(a.increment());
console.log(a.decrement());
console.log(a.decrement());
console.log(a.decrement());


