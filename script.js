const inputs = document.querySelectorAll("input[type=number]");

window.addEventListener("load", () => {
  let typedValue = "";

  Array.prototype.slice.call(inputs).map((input) => {
    input.type = "text";
    input.size = "10";
    input.value = "";

    input.onkeydown = (e) => {
      if (e.key === "Backspace") {
        typedValue = typedValue.slice(0, typedValue.length - 1);
        input.value = typedValue;
        return;
      }

      if (
        e.key !== "0" &&
        e.key !== "1" &&
        e.key !== "2" &&
        e.key !== "3" &&
        e.key !== "4" &&
        e.key !== "5" &&
        e.key !== "6" &&
        e.key !== "7" &&
        e.key !== "8" &&
        e.key !== "9"
      ) {
        return;
      }

      typedValue += e.key;

      input.value = typedValue;
    };
  });
});
