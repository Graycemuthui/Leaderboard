import "./styles.css";
import Api from "./modules/api.js";
import party from "party-js";

document.querySelector(".refresh-btn").addEventListener("click", Api.getScores);

// Create an event listener for the submit button that will call the addScore function.
document.querySelector(".add-input").addEventListener("submit", (e) => {
  e.preventDefault();
  party.confetti(document.querySelector(".add-input"), {
    count: party.variation.range(1000, 4000),
  });
  Api.addScore();
});
