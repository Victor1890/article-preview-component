const button = document.getElementById("btn_share");
const card_share = document.getElementById("card_share");

button.addEventListener("click", () => {
  if (card_share.style.display == "none") {
    card_share.style.display = "block";
    button.style.color = "white";
    button.style.backgroundColor = "#48556a";
  } else {
    card_share.style.display = "none";
    button.style.color = "#48556a";
    button.style.backgroundColor = "#ecf2f8";
  }
});
