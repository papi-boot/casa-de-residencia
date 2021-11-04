const houseImages = document.querySelectorAll(".house-image");
const viewHouseLink = document.querySelectorAll(".view-house-link");
houseImages.forEach((item, index) => {
  item.setAttribute("width", "100%");
  item.src = `../assets/house/house-${index + 1}.jpg`;
});
viewHouseLink.forEach((item, index) => {
  item.setAttribute("href", `/house/house-${index + 1}.html`);
})
