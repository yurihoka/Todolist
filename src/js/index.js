const validateInput = (string) => string.length > 0;
const input = $("input");
const form = $(".form");
const item = $(".todo-list--wrapper");

// Display todo items and alert
form.on("submit", (event) => {
  event.preventDefault();

  const value = input.val();
  const msg = "msg";
  const isValid = validateInput(value);
  const liClass = "todo-list--item";
  const logoClass = "todo-list--logo";
  const checkbox = "checkbox";
  const deleteBtn = "delete-btn";
  const itemList = `
  <li class=${liClass}>
    <div class=${msg}>
      <p>${value}</p>
    </div>
    <div class=${logoClass}>
      <input type=${checkbox}>
      <i class="fa-solid fa-trash ${deleteBtn}"></i>
    </div>
  </li>`;

  if (isValid) {
    item.show();

    $("ul").append(itemList);

    // Delete todo item
    $(`.${logoClass}`)
      .find(`.${deleteBtn}`)
      .on("click", (event) => {
        event.target.closest(`.${liClass}`).remove();
      });

    // Strikethrough
    $(`.${logoClass}`)
      .find(`:${checkbox}`)
      .on("click", (event) => {
        const target = $(event.target);
        const strikethroughElem = target.parent().prev();

        if (target.closest(`input`).is(":checked")) {
          // strikethroughElem.style.textDecoration = "line-through white";
          strikethroughElem.css({ textDecoration: "line-through white" });
        } else {
          // strikethroughElem.style.textDecoration = "none";
          strikethroughElem.css({ textDecoration: "none" });
        }
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
$(() => {
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
