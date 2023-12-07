const validateInput = (string) => string.length > 0;
const input = $(".form input");
const form = $("form.form");

form.on("submit", (event) => {
  event.preventDefault();

  const value = input.val();
  const isValid = validateInput(value);

  if (isValid) {
    const itemList = `
    <li class="todo-list_item">
    <span>${value}</span>
    <button>edit</button>
    <button>delete</button>
    </li>`;

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
