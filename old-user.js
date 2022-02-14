const userList = document.querySelector(".old-user-list");
const userListItem = document.querySelector(".user-list__item");
const userAddBtn = document.querySelector(".old-user-add-btn");
const userInput = document.querySelector(".old-user-input");

let userId = 0;
export let oldUsers = [];

const initUser = (name) => {
  const newUser = {
    name: name,
    id: userId++,
  };
  oldUsers.push(newUser);
};

const deleteUser = (e, id) => {
  e.preventDefault();
  oldUsers = oldUsers.filter((el) => el.id !== id);
  updateUser();
};

const updateUser = () => {
  userList.innerHTML = "";
  oldUsers.map((el) => {
    const newUser = document.createElement("li");
    newUser.classList.add(`user-list__item`);
    newUser.innerHTML = el.name;
    userList.appendChild(newUser);

    const delBtn = document.createElement("button");
    delBtn.classList.add("user-list__item__del-btn");
    delBtn.textContent = "X";
    delBtn.addEventListener("click", (e) => deleteUser(e, el.id));
    newUser.appendChild(delBtn);
  });
};

const AddUser = () => {
  if (userInput.value !== "") {
    initUser(userInput.value);
    updateUser();
    userInput.value = "";
  }
};

userAddBtn.addEventListener("click", (event) => {
  event.preventDefault();
  AddUser();
});

userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    AddUser();
  }
});
