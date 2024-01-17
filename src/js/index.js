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

  if (isValid) {
    item.show();

    const itemList = `
    <li class="todo-list--item">
    ${value}
    <button class="delete-btn">-</button>
    </li>`;

    $("ul").append(itemList);
    input.val("");
  } else {
    const message = "Hey, please enter your task more than 1 letter";
    const alert = `<p class="alert alert--danger">${message}</p>`;

    $(".alert-container").append(alert);
  }
});

$("ul").on("click", ".todo-list--item", () => {
  // $("").parent(".delete-btn").remove();
  $(".delete-btn").remove();
  // target = $(this);
  // $(this).parent("li").hide();
  // console.log(ul);
  // item.hide();
});

// Hide alert
input.on("input", () => {
  $(".alert").remove();
});
