// console.log(document)
// var totalTag = document.getElementById("total")
// var total = Number(totalTag.innerHTML)
// console.log(totalTag)
// console.log(typeof(total))
// var totalTag = document.querySelector("#total")
// var total = Number(totalTag.innerHTML)
// console.log(totalTag)
// console.log(typeof(total))
// var btnsAddTag = document.getElementsByClassName("add")
// var btnsAddTag = document.querySelector(".add")
// console.log(btnsAddTag)
// var imgs = document.getElementsByTagName("img")
// console.log(imgs)
var btnsAddTag = document.getElementsByClassName("add");
var checkTags = document.querySelectorAll(".check");

for (var i = 0; i < btnsAddTag.length; i++) {
  btnsAddTag[i].addEventListener("click", addition);
}
for (var j = 0; j < checkTags.length; j++) {
  checkTags[j].onclick = totalPrice;
}

function addition(event) {
  var btnAdd = event.target;
  var tdElt = btnAdd.parentElement;
  var quantityTag = tdElt.querySelector(".quantity");
  var quantity = Number(quantityTag.value);
  quantity++;
  quantityTag.value = quantity;
  var trElt = btnAdd.parentElement.parentElement;
  var priceTag = trElt.querySelector(".price");
  var price = Number(priceTag.innerHTML);
  var unitPriceTag = trElt.querySelector(".unitPrice");
  var unitPrice = Number(unitPriceTag.innerHTML);
  price = unitPrice * quantity;
  priceTag.innerHTML = price;
}

function totalPrice(event) {
  console.log(event);
  var check = event.target;
  var totalTag = document.getElementById("total");
  var total = Number(totalTag.innerHTML);
  var trElt = check.parentElement.parentElement;
  var priceTag = trElt.querySelector(".price");
  var price = Number(priceTag.innerHTML);
  var btnAdd = trElt.querySelector(".add");
  var btnRemove = trElt.querySelector(".remove");
  if (check.checked) {
    total += price;
    btnAdd.setAttribute("disabled", true);
    btnRemove.setAttribute("disabled", true);
  } else {
    total -= price;
    btnAdd.removeAttribute("disabled");
    btnRemove.removeAttribute("disabled");
  }
  totalTag.innerHTML = total;
}
var btnSubtractTag = document.getElementsByClassName("remove");
for (var k = 0; k < btnSubtractTag.length; k++) {
  btnSubtractTag[k].addEventListener("click", subtract);
}
function subtract(event) {
  var btnsub = event.target;
  var tdelts = btnsub.parentElement;
  var td = tdelts.parentElement;
  var quantityTag = tdelts.querySelector(".quantity");
  var quantity = Number(quantityTag.value);
  var btnsibs = td.querySelector(".remove");
  if (quantity > 0) {
    quantity--;
  }
  quantityTag.value = quantity;
  var trElt = btnsub.parentElement.parentElement;
  var priceTag = trElt.querySelector(".price");
  var price = Number(priceTag.innerHTML);
  var unitPriceTag = trElt.querySelector(".unitPrice");
  var unitPrice = Number(unitPriceTag.innerHTML);
  price = unitPrice * quantity;
  priceTag.innerHTML = price;
  btnsibs.removeAttribute("disabled");
}

var Like = document.getElementsByClassName("fas fa-heartbeat");
for (var l = 0; l < Like.length; l++) {
  Like[l].addEventListener("click", ColorChange);
} 
function ColorChange(event) {
  var iconLike = event.target;
   if (iconLike.style.color !== "red") {
     console.log("fffff")
    iconLike.style.color = "red";
  } else {
    iconLike.style.color = "black";
  }
}
var Like = document.getElementsByClassName("delete");
for (var j= 0;  j< Like.length; j++) {
  Like[j].addEventListener("click", removeCol);
} 
function removeCol(event){
  var del=event.target;
  console.log(del);
  var tddel=del.parentElement.parentElement;
  var partddel=tddel.parentElement;
  partddel.removeChild(tddel);
  var totalTag = document.getElementById("total");
  var total = Number(totalTag.innerHTML);
  var priceTag = tddel.querySelector(".price");
  var price = Number(priceTag.innerHTML);
  total -= price;
  totalTag.innerHTML = total;


  

}

