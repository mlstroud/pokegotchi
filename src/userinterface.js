import { Tamagotchi } from './../src/tamagotchi.js';
import $ from "jquery";

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

  $("#age").text(tamagotchi.age);
  $("#sick").text(tamagotchi.sick ? "Yes" : "No");

  if (fullnessAmount <= 3) {
    fullnessColor = "bg-danger";
  } else if (fullnessAmount <= 6) {
    fullnessColor = "bg-warning";
  } else {
    fullnessColor = "bg-success";
  }

  $("#fullness-bar").removeClass();
  $("#fullness-bar").addClass(`progress-bar ${fullnessColor}`);
  $("#fullness-bar").css("width", `${fullnessAmount}%`);

  if (tirednessAmount <= 3) {
    tirednessColor = "bg-danger";
  } else if (tirednessAmount <= 6) {
    tirednessColor = "bg-warning";
  } else {
    tirednessColor = "bg-success";
  }

  $("#tiredness-bar").removeClass();
  $("#tiredness-bar").addClass(`progress-bar ${tirednessColor}`);
  $("#tiredness-bar").css("width", `${tirednessAmount}%`);

  if (happinessAmount <= 3) {
    happinessColor = "bg-danger";
  } else if (happinessAmount <= 6) {
    happinessColor = "bg-warning";
  } else {
    happinessColor = "bg-success";
  }

  $("#happiness-bar").removeClass();
  $("#happiness-bar").addClass(`progress-bar ${happinessColor}`);
  $("#happiness-bar").css("width", `${happinessAmount}%`);

  if (healthAmount <= 3) {
    healthColor = "bg-danger";
  } else if (healthAmount <= 6) {
    healthColor = "bg-warning";
  } else {
    healthColor = "bg-success";
  }

  $("#health-bar").removeClass();
  $("#health-bar").addClass(`progress-bar ${healthColor}`);
  $("#health-bar").css("width", `${healthAmount}%`);

  if (isPoop === true) {
    $("#poop-image").removeClass('hidden');
  } else {
    $("#poop-image").addClass('hidden');
  }

  // var amnt = tamagotchi.fullness * 10;
  // let color = "";

  // if (amnt <= 3) {
  //   color = "bg-danger";
  // } else if (amnt <= 6) {
  //   color = "bg-warning";
  // } else {
  //   color = "bg-success";
  // }
  // $("#fullness-bar").removeClass();
  // $("#fullness-bar").addClass(`progress-bar ${color}`);
  // $("#fullness-bar").css("width", `${amnt}%`);
}