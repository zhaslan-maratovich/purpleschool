function dice(max) {
    const min = 1;
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(dice(4));
console.log(dice(6));
console.log(dice(8));
console.log(dice(10));
console.log(dice(12));
console.log(dice(16));
console.log(dice(20));