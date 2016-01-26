function updateCart(id) {
  console.log("test");
  if (sessionStorage.items) {
    var cartData = JSON.parse(sessionStorage.items);
    var keys = Object.keys(cartData);
    cartData[keys.length] = id;
    $('#cartCount span').html(keys.length + 1);
    sessionStorage.items = JSON.stringify(cartData);
  } else {
    var tempObject = {};
    tempObject[0] = id;
    sessionStorage.items = JSON.stringify(tempObject);
    $('#cartCount span').html(1);
  }
};
function getCartCount() {
  if (sessionStorage.items) {
    var cartData = JSON.parse(sessionStorage.items);
    var keys = Object.keys(cartData)
    $('#cartCount span').html(keys.length);
  } else {
    $('#cartCount span').html(0);
  }
}
getCartCount();
