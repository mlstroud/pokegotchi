import { Tamagotchi } from './../src/tamagotchi.js';
import $ from "jquery";

function loadImages(r) {
  let images = {};

  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = loadImages(require.context('./../assets/images', false, /\.(png|jpe?g|svg)$/));

export function showEgg(color) {
  let image = images[`${color}egg.png`];
  $(".tama-image").html(`<img src=${image}>`);
}

export function createTamagotchi(tamagotchi) {
  $("#game-select").slideUp();
  $("#game-start").slideDown();
  showEgg(tamagotchi.color);
  tamagotchi.setLife();
  $("#name").text(tamagotchi.name);
  $("#age").text(tamagotchi.age);
  $("#sick").text(tamagotchi.sick ? "Yes" : "No");
}

export function update(tamagotchi) {

  let isPoop = tamagotchi.poop;
  let fullnessAmount = tamagotchi.fullness * 10;
  let tirednessAmount = tamagotchi.tiredness * 10;
  let happinessAmount = tamagotchi.happiness * 10;
  let healthAmount = tamagotchi.health * 10;
  let fullnessColor;
  let tirednessColor;
  let happinessColor;
  let healthColor;

  if (tamagotchi.didYouDie()) {
    $("#name").prepend("Dead ");
    $("#result-name").text(tamagotchi.name);
    $("#result-age").text(tamagotchi.age);
    $("#results").slideDown();
  }

  let tamaColor = tamagotchi.color;
  let image = images[`${tamaColor + tamagotchi.lifeStage.toString() + tamagotchi.sick.toString()}.png`];

  $(".tama-image").html(`<img src = '${image}'>`);
  if (isPoop === true) {
    $("#poop-image").removeClass('hidden');
    $("#poop-button").removeClass('hidden');
  } else {
    $("#poop-image").addClass('hidden');
    $("#poop-button").addClass('hidden');
  }


  if (tamagotchi.sick && !tamagotchi.medsOffered) {
    $("#medicine-button").prop("disabled", false);
    setTimeout(() => {
      $("#medicine-button").prop("disabled", true);
    }, 10000);
  }

  $("#age").text(tamagotchi.age);
  $("#sick").text(tamagotchi.sick ? "Yes" : "No");

  if (fullnessAmount <= 30) {
    fullnessColor = "bg-danger";
  } else if (fullnessAmount <= 60) {
    fullnessColor = "bg-warning";
  } else {
    fullnessColor = "bg-success";
  }

  $("#fullness-bar").removeClass();
  $("#fullness-bar").addClass(`progress - bar ${fullnessColor} `);
  $("#fullness-bar").css("width", `${fullnessAmount}% `);

  if (tirednessAmount <= 30) {
    tirednessColor = "bg-danger";
  } else if (tirednessAmount <= 60) {
    tirednessColor = "bg-warning";
  } else {
    tirednessColor = "bg-success";
  }

  $("#tiredness-bar").removeClass();
  $("#tiredness-bar").addClass(`progress - bar ${tirednessColor} `);
  $("#tiredness-bar").css("width", `${tirednessAmount}% `);

  if (happinessAmount <= 30) {
    happinessColor = "bg-danger";
  } else if (happinessAmount <= 60) {
    happinessColor = "bg-warning";
  } else {
    happinessColor = "bg-success";
  }

  $("#happiness-bar").removeClass();
  $("#happiness-bar").addClass(`progress - bar ${happinessColor} `);
  $("#happiness-bar").css("width", `${happinessAmount}% `);

  if (healthAmount <= 30) {
    healthColor = "bg-danger";
  } else if (healthAmount <= 60) {
    healthColor = "bg-warning";
  } else {
    healthColor = "bg-success";
  }

  $("#health-bar").removeClass();
  $("#health-bar").addClass(`progress - bar ${healthColor} `);
  $("#health-bar").css("width", `${healthAmount}% `);
}