import { newUsers } from "./new-user.js";
import { oldUsers } from "./old-user.js";

const $button = document.querySelector("#shuffle");

function getNCardet(target, source, n) {
  for (let i = 0; i < n; ++i) {
    const random = Math.floor(Math.random() * source.length);
    const spliceArray = source.splice(random, 1);
    const value = spliceArray[0];
    target.push(value);
  }
}
const aTeamList = document.querySelector(".a-team-cardet-list");
const bTeamList = document.querySelector(".b-team-cardet-list");

$button.addEventListener("click", () => {
  const shuffleA = [];
  const shuffleB = [];
  aTeamList.innerHTML = "";
  bTeamList.innerHTML = "";

  const newCardet = newUsers.map((el) => el.name);
  const oldCardet = oldUsers.map((el) => el.name);

  const tmpA = oldCardet.slice(0, oldCardet.length);
  const tmpB = newCardet.slice(0, newCardet.length);
  console.log(tmpA, tmpB);
  const halfNumberOfOldCardet = Math.floor(tmpA.length / 2);
  const halfNumberOfNewCardet = Math.floor(tmpB.length / 2);
  getNCardet(shuffleA, tmpA, halfNumberOfOldCardet);
  getNCardet(shuffleA, tmpB, halfNumberOfNewCardet);
  getNCardet(shuffleB, tmpA, tmpA.length);
  getNCardet(shuffleB, tmpB, tmpB.length);

  for (let i = 0; i < shuffleA.length; ++i) {
    const newUser = document.createElement("li");
    newUser.classList.add(`cardet-list__item`);
    newUser.innerHTML = shuffleA[i];
    aTeamList.appendChild(newUser);
  }
  for (let i = 0; i < shuffleB.length; ++i) {
    const newUser = document.createElement("li");
    newUser.classList.add(`cardet-list__item`);
    newUser.innerHTML = shuffleB[i];
    bTeamList.appendChild(newUser);
  }
  console.log("a team : " + shuffleA);
  console.log("b team : " + shuffleB);
});
