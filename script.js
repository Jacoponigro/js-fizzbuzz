// genera numeri da 1 a 100
for (var i = 1; i <= 100; i++) {
// dichiaro variabile
var numeri = i;
// multipli di 3 e 5
if (numeri % 5 == 0 && numeri % 3 == 0) {
  numeri = "FizzBuzz"
}
// multipli di 3
else if (numeri % 3 == 0) {
  numeri = "Fizz";
}
// multipli di 5
else if (numeri % 5 == 0) {
  numeri = "Buzz";
}
// stampo in html
var lista = document.getElementById('lista');
lista.innerHTML += "<li>" + numeri + "</li>";
}
