let form = document.querySelector(".form");
let kol = document.querySelector(".all");
let dorost = document.querySelector(".coorect");
let ghalat = document.querySelector(".wrong");
let send = document.querySelector(".send");
let adad = document.querySelector(".adad");
form.addEventListener("click", (e) => {
  let input = e.target;
  input.classList.toggle("transition");
});
send.addEventListener("mouseover", () => {
  if (
    kol.value.length == 0 ||
    dorost.value.length == 0 ||
    ghalat.value.length == 0
  ) {
    window.alert("مقدار  های ورودی  پر نشده  است.");
  } else if (
    Number(dorost.value) + Number(ghalat.value) >
    Number(kol.value)
  ) {
    window.alert("مقدار کل با مقدار درست و غلط برابر نیست ");
  } else {
    let natije = ((Math.floor(3 * dorost.value) - ghalat.value) / (kol.value * 3)) * 100;
    let Doragham = natije.toFixed(2);
    adad.innerHTML = Doragham + "%";
    adad.classList.add("tran");
    send.preventDefault();
  }
});
