
let num1 = prompt(`Input number 1`);
let sign = prompt(`Input a arithmetic sign`);
let num2 = prompt(`Input number 2`);


if (num1 == 0 || isNaN(num1)){
    alert(`Number 1 is Not a Compatible Number`)
}

if (num2 == 0 || isNaN(num2)){
    alert(`Number 2 is Not a Compatible Number`)
}

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (sign == `+` ){
     sum = num1 + num2;
    alert(sum);
    console.log (sum);
}
else if (sign == `-` ){
    sum = num1 - num2;
    alert(sum);
    console.log (sum);
}
else if (sign == `*` || sign == `x` || sign == `X` ){
    sum = num1 * num2;
    alert(sum);
    console.log (sum);
}
else if (sign == `/` ){
    sum = num1 / num2;
    alert(sum);
    console.log (sum);
    document.getElementById(`answer`).innerHTML = sum;
}
else {
    alert(`The Sign is not a Compatible Sign`)
}

console.log(num1);
console.log(num2);
console.log(sign);

document.getElementById(`answer`).innerHTML = sum;