const buyButton = document.getElementById("buy_button");

buyButton.addEventListener("click", () => {
  console.log("sdsd");
});

const title = document.getElementById("title");

title.addEventListener("click", () => {
  title.style.backgroundColor = "blue";
  title.style.color = "white";
});

const item = document.getElementById("item");

item.addEventListener("click", () => {
  setTimeout(() => {
    item.style.backgroundColor = "yellow";
    item.style.fontSize = "30px";

    setTimeout(() => {
      item.style.backgroundColor = "";
      item.style.fontSize = "";
    }, 3000);
  }, 30);
});
