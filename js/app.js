var elHeading = document.querySelector(".heading");
var dollor = 500 + 250;
var kurs1 = 11065.56 * dollor;
var kurs2 = 10731.16 * 120;
var kurs3 = kurs1 + kurs2;
alert("Xush kelibsiz");
var yourMoney = Number(prompt("Sizning pulingiz qancha?"));
if (yourMoney >= kurs3) {
  elHeading.textContent = "Oq yo’l, Jonibek!";
} else {
  elHeading.textContent =
    "Jonibek, Shahzoddan so`ra, balki berar! U ham bermasa bolalardan so`ra! Ular ham bermasa uyda telefonda kino ko`r.";
}
