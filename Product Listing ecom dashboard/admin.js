// Array to store all the objects
var arrayObjects = JSON.parse(localStorage.getItem("Products")) || [];

// Prventing the default nature of Form
function addProducts() {
  event.preventDefault();
  let form = document.getElementById("form");

  let productname = form.name.value;
  let categoryname = form.category.value;
  let img_url = form.image.value;
  let selling_price = form.price.value;
  let seller_gender = form.gender.value;
  let status = form.sold.checked;

  var product = new productListCreator(
    productname,
    categoryname,
    img_url,
    selling_price,
    seller_gender,
    status
  );

  //Pushing the objects inside an Array
  arrayObjects.push(product);

  // Storing entire array_of_objects inside the localStorage
  localStorage.setItem("Products", JSON.stringify(arrayObjects));

  //Reseting the input fields
  form.name.value = "";
  form.category.value = "";
  form.image.value = "";
  form.price.value = "";
  form.gender.value = "";
  form.sold.checked = false;
}

function productListCreator(pn, cn, img, sp, sg, st) {
  this.productName = pn;
  this.categoryName = cn;
  this.img_url = img;
  this.selling_price = sp;
  this.seller_gender = sg;
  this.soldStatus = st;
}
