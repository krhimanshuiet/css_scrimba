const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

function onClick(e) {
  console.log("event", e);
  alert(
    `target->${e.target.tagName}, current target -> ${e.currentTarget.tagName}, this -> ${this.tagName}`
  );
}

div.addEventListener("click", onClick, { capture: true });

form.addEventListener("click", onClick, { capture: false });

button.addEventListener("click", onClick, {
  capture: true,
});

button.addEventListener("click", onClick, { capture: false });

document.querySelector(".products").addEventListener("click", function (e) {
  alert(e.target.innerText);
  window.location.href += "/" + e.target.innerText;
});
