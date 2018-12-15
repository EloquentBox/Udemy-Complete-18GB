const kelvin = 0; //293 kelvins degrees

let Celsius = kelvin - 273; //Celcius is kelvin - 273.

let fahrenheit = (Math.floor((Celsius * (9/5) + 32))); //algorithm for fahrenheit degree
//fahrenheit is often decimal number

console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit');

let newton = Math.floor(Celsius * (33/100));
console.log('The temperatire is ' + newton + ' Newtons');
