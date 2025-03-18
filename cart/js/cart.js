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
const third_item = document.getElementById("third_item_title");
third_item.addEventListener("click", () => {
  console.log("세번째 버튼 클릭");
});

const five_item = document.getElementById("five_item_title");
five_item.addEventListener("click", () => {
  console.log("다섯번째 버튼 클릭");
});
