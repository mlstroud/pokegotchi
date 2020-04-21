import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Tamagotchi } from './../src/tamagotchi.js';
import { showEgg } from './../src/userinterface.js';
import { createTamagotchi } from './../src/userinterface.js';

$(document).ready(function () {
  let tamagotchi;
  $("#medicine-button").prop("disabled", true);

  $("#blue-button").click(function () {
    let name = $("#pet-name").val();
    if (name === "") {
      name = "Jeff";
    }
    tamagotchi = new Tamagotchi(name, "blue");
    createTamagotchi(tamagotchi);
  });

  $("#green-button").click(function () {
    let name = $("#pet-name").val();
    if (name === "") {
      name = "Jeff";
    }
    tamagotchi = new Tamagotchi(name, "green");
    createTamagotchi(tamagotchi);
  });

  $("#red-button").click(function () {
    let name = $("#pet-name").val();
    if (name === "") {
      name = "Jeff";
    }
    tamagotchi = new Tamagotchi(name, "red");
    createTamagotchi(tamagotchi);
  });

  $("#feed-button").click(function () {
    tamagotchi.feed();
    $("#feed-button").prop('disabled', true);
    setTimeout(() => {
      $("#feed-button").prop('disabled', false);
    }, 15000);
  });
  $("#play-button").click(function () {
    tamagotchi.play();
    $("#play-button").prop('disabled', true);
    setTimeout(() => {
      $("#play-button").prop('disabled', false);
    }, 15000);
  });
  $("#sleep-button").click(function () {
    tamagotchi.tuckIn();
    $("#sleep-button").prop('disabled', true);
    setTimeout(() => {
      $("#sleep-button").prop('disabled', false);
    }, 15000);
  });
  $("#poop-button").click(function () {
    tamagotchi.cleanPoop();
    console.log("cleaned");
  });
  $("#medicine-button").click(function () {
    tamagotchi.medicine();
    $("#medicine-button").prop("disabled", true);
  });
  $("#beat-button").click(function () {
    tamagotchi.beat();
  });
});