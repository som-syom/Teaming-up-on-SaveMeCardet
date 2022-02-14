const newUserList = document.querySelector(".new-user-list");
const newUserAddBtn = document.querySelector(".new-user-add-btn");
const newUserInput = document.querySelector(".new-user-input");

let newUserId = 0;
export let newUsers = [];

const newInitUser = (name) => {
  const newUser = {
    name: name,
    id: newUserId++,
  };
  newUsers.push(newUser);
};

const newDeleteUser = (e, id) => {
  e.preventDefault();
  newUsers = newUsers.filter((el) => el.id !== id);
  newUpdateUser();
};

const newUpdateUser = () => {
  newUserList.innerHTML = "";
  newUsers.map((el) => {
    const newUser = document.createElement("li");
    newUser.classList.add(`user-list__item`);
    newUser.innerHTML = el.name;
    newUserList.appendChild(newUser);

    const delBtn = document.createElement("button");
    delBtn.classList.add("user-list__item__del-btn");
    delBtn.textContent = "X";
    delBtn.addEventListener("click", (e) => newDeleteUser(e, el.id));
    newUser.appendChild(delBtn);
  });
};

const newAddUser = () => {
  if (newUserInput.value !== "") {
    newInitUser(newUserInput.value);
    newUpdateUser();
    newUserInput.value = "";
  }
};

newUserAddBtn.addEventListener("click", (event) => {
  event.preventDefault();
  newAddUser();
});

newUserInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    newAddUser();
  }
});
