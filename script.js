
let num1 = prompt(`Input number 1`);
let sign = prompt(`Input a arithmetic sign`);
let num2 = prompt(`Input number 2`);

if (num1 = 0 || isNaN(num1)){
    alert(`Number 1 is Not a Compatible Number`)
}

if (num2 = 0 || isNaN(num2)){
    alert(`Number 2 is Not a Compatible Number`)
}

if (sign == `+` ){
    let sum = (num1 + num2);
    alert(sum);
    console.log (sum);
}
else if (sign == `-` ){
    alert(num1 + num2)
}
else if (sign == `*` ){
    alert(num1 + num2)
}
else if (sign == `/` ){
    alert(num1 + num2)
}
else if (sign == `x` || sign == `X` ){
    let sum = (num1 * num2);
    alert(sum);
    console.log (sum);
}
else {
    alert(`The Sign is not a Compatible Sign`)
}

console.log(num1);
console.log(num2);
console.log(sign);
console.log(sum);