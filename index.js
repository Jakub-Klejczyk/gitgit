const email = document.querySelector("#email");
const submit = document.querySelector("#submit");
const form = document.querySelector("#form");
const username = document.querySelector("#name");
const password = document.querySelector("#password");

const pattern =
  /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (email.value.match(pattern)) {
    console.log("Jest OK");
  } else {
    console.log("Kurwa nie OK");
  }
});
