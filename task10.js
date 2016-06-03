var year = window.prompt("Input a Year : ");  
var x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);  
alert(x);