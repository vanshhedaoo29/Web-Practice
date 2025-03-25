var arr = [
  {
    team: "CSK",
    primary: "yellow",
    secondary: "green",
  },
  {
    team: "RCB",
    primary: "red",
    secondary: "lightgreen",
  },
  {
    team: "KKR",
    primary: "purple",
    secondary: "gold",
  },
  {
    team: "MI",
    primary: "blue",
    secondary: "black",
  },
  {
    team: "SRH",
    primary: "orange",
    secondary: "blue",
  },
  {
    team: "LSG",
    primary: "darkblue",
    secondary: "red",
  },
  {
    team: "DC",
    primary: "lightblue",
    secondary: "purple",
  },
  {
    team: "RR",
    primary: "pink",
    secondary: "black",
  },
  {
    team: "PBKS",
    primary: "red",
    secondary: "white",
  },
  {
    team: "GT",
    primary: "blue",
    secondary: "yellow",
  },
];

var btn = document.querySelector("button");
var h1 = document.querySelector("h1");

btn.addEventListener("click", function () {
  let num = Math.floor(Math.random() * arr.length);
  let winner = arr[num];

  h1.innerHTML = winner.team
  h1.style.backgroundColor = winner.primary
  h1.style.color = winner.secondary
});
