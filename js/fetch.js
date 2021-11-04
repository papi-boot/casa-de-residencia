// product list
fetch("./component/product-list.html")
  .then((res) => res.text())
  .then((res) => {
    document.querySelector(".product-section").innerHTML = res;
  })
  .catch((err) => {
    console.log(err);
  });
