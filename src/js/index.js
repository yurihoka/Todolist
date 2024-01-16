const validateInput = (string) => string.length > 0;
const input = $(".form input");
const form = $("form.form");

form.on("submit", (event) => {
  event.preventDefault();

  const value = input.val();
  const isValid = validateInput(value);

  if (isValid) {
    const itemList = `
    <div class="todo-list--wrapper">
    <li class="todo-list--item">
    <span>${value}</span>
    <div class="btn">
    <button class="delete-btn">-</button>
    </div>
    </li>
    </div>`;

    $(".todo-list").append(itemList);
    input.val("");
  } else {
    const message = "Hey, please enter your task more than 1 letter";
    const alert = `<p class="alert alert--danger">${message}</p>`;

    $(".alert-container").append(alert);
  }
});

input.on("input", () => {
  $(".alert").remove();
});

// form;
