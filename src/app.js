/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  console.log("hello");

  let whoRandom = who[Math.floor(Math.random() * who.length - 1) + 1];
  let actionRandom = action[Math.floor(Math.random() * action.length - 1) + 1];
  let whatRandom = what[Math.floor(Math.random() * what.length - 1) + 1];
  let whenRandom = when[Math.floor(Math.random() * when.length - 1) + 1];

  console.log(whoRandom);
  console.log(actionRandom);
  console.log(whatRandom);
  console.log(whenRandom);

  let result =
    whoRandom + " " + actionRandom + " " + whatRandom + " " + whenRandom;
  console.log(result);

  return (document.getElementById("text").innerHTML = result);
};
