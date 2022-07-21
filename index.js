const email = document.querySelector("#email");
const submit = document.querySelector("#submit");

const pattern =
  /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u;

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (email.value.match(pattern)) {
    console.log("OK");
  } else {
    console.log("Kurwa nie OK");
  }
});
