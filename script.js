// task 1
const mas = [1, 55, 24];
mas[1] = 10;
console.log(mas);

// task 2
const text = ['apple', 'beef', 'mango'];
text[3] = 'banana';
console.log(text);

// task 3

let numbers = [10, 20, 30, 40, 50];
let sum = numbers.reduce((total, number) => total + number, 0);

console.log("Сума всіх чисел:", sum);

// task 4

const zi = [14, 52, 25, 37, 37];

for(const i of zi) {
    console.log(i);
}

// task 5

const zifra = ['odin', 'dwa', 'tri', 'chotiri', 'pat'];
for (const mist of zifra) {
    if (mist.length < 5) {
        continue;
    }
    console.log(mist);
}

// task 6

let numbers1 = [12, 45, 7, 89, 23, 56, 92, 34, 10, 67];
let max = Math.max(...numbers1);

console.log("Максимальне значення:", max);

// task 7

let numbers2 = [12, 45, 7, 89, 23, 56, 92, 34, 10, 67];

for(const dil of numbers2) {
    if (dil % 2 !== 0) {
        continue;
    }
    console.log(dil);
}