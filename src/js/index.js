const validateInput = (string) => string.length > 0;
const input = $("input");
const form = $(".form");
const item = $(".todo-list--wrapper");

// item.hide();

// Display todo items and alert
form.on("submit", (event) => {
  event.preventDefault();

  const value = input.val();
  const isValid = validateInput(value);
  const liClass = "todo-list--item";
  const deleteBtn = "delete-btn";
  const itemList = `
  <li class=${liClass}>
    <p>${value}</p>
    <button class=${deleteBtn}>-</button>
  </li>`;

  if (isValid) {
    item.show();

    $("ul").append(itemList);

    // Delete todo item
    $(`.${liClass}`)
      .find("button")
      .on("click", (event) => {
        event.target.parentElement.remove();
      });

    input.val("");
  } else {
    // Display alert
    const message = "Hey, please enter your task more than 1 letter";
    const alert = `<p class="alert alert--danger">${message}</p>`;

    $(".alert-container").append(alert);
  }
});

// Hide alert
input.on("input", () => {
  $(".alert").remove();
});

// Cursor
$(function () {
  const mouse = $(".js-mouse");
  $(document).on("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    mouse.css({
      opacity: "1",
      transform: "translate(" + x + "px," + y + "px)",
    });
    $("button").on({
      mouseenter: function () {
        mouse.addClass("js-hover");
      },
      mouseleave: function () {
        mouse.removeClass("js-hover");
      },
    });
  });
});
