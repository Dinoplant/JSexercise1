function cal() {

    let num1 = prompt(`Input number 1`);
    let sign = prompt(`Input a arithmetic sign`);
    let num2 = prompt(`Input number 2`);
    // Number Checker and converter
    if (num1 == 0 || isNaN(num1)) {
        alert(`Number 1 is Not a Compatible Number`)
    }

    if (num2 == 0 || isNaN(num2)) {
        alert(`Number 2 is Not a Compatible Number`)
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    // Sign Checker
    if (sign === `+`) {
        sum = num1 + num2;
        alert(sum);
        console.log(sum);
    }
    else if (sign === `-`) {
        sum = num1 - num2;
        alert(sum);
        console.log(sum);
    }
    else if (sign === `*` || sign === `x` || sign === `X`) {
        sum = num1 * num2;
        alert(sum);
        console.log(sum);
    }
    else if (sign === `/`) {
        sum = num1 / num2;
        alert(sum);
        console.log(sum);
    }
    else {
        alert(`The Sign is not a Compatible Sign`)
    }
    // Displays answer
    document.getElementById(`answer`).innerHTML = sum
}