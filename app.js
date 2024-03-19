const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTodo(this.value); // Call the addTodo function with the value of the input
    this.value = ""; // Reset the input value after adding todo
  }
});

const addTodo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
  ${item}
  <i class="fa-solid fa-xmark"></i>
  `;

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });
  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });
  toDoBox.appendChild(listItem);
};
