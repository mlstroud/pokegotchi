import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Tamagotchi } from './../src/tamagotchi.js';

$(document).ready(function () {

  let tamagotchi = new Tamagotchi("Jeff");
  $("#name").text(tamagotchi.name);
  $("#age").text(tamagotchi.age);
  $("#sick").text(tamagotchi.sick ? "Yes" : "No");
  tamagotchi.setLife();
  $("#feed-button").click(function () {
    tamagotchi.feed();
    $("#feed-button").prop('disabled', true);
    setTimeout(() => {
      $("#feed-button").prop('disabled', false);
    }, 15000);
  });
  $("#play-button").click(function () {
    tamagotchi.play();
  });
  $("#sleep-button").click(function () {
    tamagotchi.tuckIn();
  });
  $("#poop-button").click(function () {
    tamagotchi.cleanPoop();
    console.log("cleaned");
  });
  $("#medicine-button").click(function () {
    tamagotchi.medicine();

  });
});