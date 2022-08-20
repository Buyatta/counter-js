var count = 0;

var value = document.querySelector(".value");
var btns = document.querySelectorAll(".btn");

//functionality of the buttons
/*btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    var styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});*/

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    var styles = e.currentTarget.classList;
   // styles.contains("decrease" || "increase") ? count-- : count++;
    styles.contains = 'decrease'?count--:'increase'?count++:'reset'?count=0
    value.textContent = count;
  });
});
