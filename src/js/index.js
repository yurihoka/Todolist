const validateInput = (string) => string.length > 0;
const input = $("input");
const form = $(".form");
const item = $(".todo-list--wrapper");

item.hide();

// Display todo items and alert
form.on("submit", (event) => {
  event.preventDefault();

  const value = input.val();
  const isValid = validateInput(value);
  const liClass = "todo-list--item";
  const deleteBtn = "delete-btn";
  const itemList = `
  <li class=${liClass}>
    ${value}
    <button class=${deleteBtn}>-</button>
  </li>`;

  if (isValid) {
    item.show();

    $("ul").append(itemList);

    $(`.${liClass}`)
      .find("button")
      .on("click", (event) => {
        event.target.parentElement.remove();
      });
    input.val("");
  } else {
    const message = "Hey, please enter your task more than 1 letter";
    const alert = `<p class="alert alert--danger">${message}</p>`;

    $(".alert-container").append(alert);
  }
});

// Hide alert
input.on("input", () => {
  $(".alert").remove();
});
