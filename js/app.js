var dollor = 500 + 250;
console.log(dollor);
var kurs1 = 11065.56 * dollor;
console.log(kurs1);
var kurs2 = 10731.16 * 120;
console.log(kurs2);
var kurs3 = kurs1 + kurs2;
console.log(kurs3);
alert("Xush kelibsiz");
var yourMoney = Number(prompt("Sizning pulingiz qancha?"));
console.log(yourMoney);
var elHeading = document.querySelector(".heading");
if (yourMoney >= kurs3) {
  elHeading.textContent = "Oq yo’l, Jonibek!";
} else {
  elHeading.textContent =
    "Jonibek, Shahzoddan so`ra, balki berar! U ham bermasa bolalardan so`ra! Ular ham bermasa uyda telefonda kino ko`r.";
}
