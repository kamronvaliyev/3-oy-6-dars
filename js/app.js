//var dollor = 500 + 250;
//var kurs1 = 11065.56 * dollor;
//var kurs2 = 10731.16 * 120;
//var kurs3 = kurs1 + kurs2;
var elHeading = document.querySelector(".heading");
var money = 1000 + 500 + 300;
alert("Xush kelibsiz");
var yourMoney = Number(
  prompt("Sizning pulingiz qancha? Pulingizni dollorda kiriting.")
);
if (yourMoney >= money) {
  elHeading.textContent = "Barcha davlatlarga sahoyat qilish mumkin ";
} else if (yourMoney >= 1000) {
  elHeading.textContent = "Siz Dubaiga sahoyat qilish mumkin";
} else if (yourMoney >= 500) {
  elHeading.textContent = "Siz Rossiyaga sahoyat qilish mumkin";
} else if (yourMoney >= 300) {
  elHeading.textContent = "Siz Toshkentga sahoyat qilish mumkin";
} else {
  elHeading.textContent = "Uyda Dunyo Bo`ylab telekanali ko`rib yoting.";
}
