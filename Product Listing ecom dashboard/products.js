productData = JSON.parse(localStorage.getItem("Products")) || [];

var totalPrice = 0;
var totalItems = 0;
totalPrice = productData.reduce(function (sum, ele) {
  return sum + Number(ele.selling_price);
}, 0);
var total = document.createElement("p");
total.textContent = `Total Price : Rs. ${totalPrice}`;

totalItems += productData.length;
var totalQuant = document.createElement("p");
totalQuant.textContent = `Total items : ${totalItems}`;

document.getElementById("total_price").append(total, totalQuant);

productData.map(function (element, index) {
  let box = document.createElement("div");
  box.setAttribute("class", "product");

  let imgBox = document.createElement("div");
  let img = document.createElement("img");
  img.src = element.img_url;
  imgBox.append(img);

  let contentBox = document.createElement("div");
  contentBox.setAttribute("id", "contentBox");

  let name = document.createElement("h4");
  name.textContent = element.productName;

  let gnder = document.createElement("p");
  gnder.textContent = `Gender : ${element.seller_gender}`;

  let wrap = document.createElement("div");
  let money = document.createElement("p");
  money.textContent = "Rs. " + element.selling_price;
  let category = document.createElement("p");
  category.textContent = element.categoryName;
  wrap.append(money, category);

  contentBox.append(name, gnder, wrap);

  let btnBox = document.createElement("div");
  btnBox.setAttribute("id", "btnBox");
  let remove = document.createElement("button");
  remove.textContent = "Remove";
  remove.setAttribute("id", "remove");

  let status = document.createElement("button");
  if (element.soldStatus == true) {
    status.textContent = "Sold";
    status.style.backgroundColor = "#ff4b44";
  } else {
    status.textContent = "Available";
    status.style.backgroundColor = "#00c700";
  }
  btnBox.append(remove, status);

  box.append(imgBox, contentBox, btnBox);
  document.querySelector(".left-side").append(box);

  remove.addEventListener("click", function () {
    removeIt(index);
  });

  status.addEventListener("click", function () {
    if (element.soldStatus == true) {
      status.textContent = "Available";
      status.style.backgroundColor = "#00c700";
      productData[index].soldStatus = false;
      localStorage.setItem("Products", JSON.stringify(productData));
    } else if (element.soldStatus == false) {
      status.textContent = "Sold";
      status.style.backgroundColor = "#ff4b44";
      productData[index].soldStatus = true;
      localStorage.setItem("Products", JSON.stringify(productData));
    }
  });
});

function removeIt(index) {
  productData.splice(index, 1);
  localStorage.setItem("Products", JSON.stringify(productData));
  window.location.reload();
}
