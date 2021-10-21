function Fahrenheit() {
    // alert("HI");
    var Fahrenheit = prompt("Enter the Fahrenheit Temperature");
    var Celsius = 5 * (Fahrenheit - 32) / 9;
    alert("The Celsius of " + Fahrenheit + " degree Fahrenheit is " + Celsius);
}

function Celsius() {
    var Celsius = prompt("Enter the Celsius Temperature");
    var Fahrenheit = (Celsius * 9 / 5) + 32;
    alert("The Fahrenheit of " + Celsius + " degree Celsius is " + Fahrenheit);
}