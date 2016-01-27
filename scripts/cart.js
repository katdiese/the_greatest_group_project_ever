function updateCart(id) {
  if (sessionStorage.items) {
    var cartData = JSON.parse(sessionStorage.items);
    cartData[id] = 1;
    sessionStorage.items = JSON.stringify(cartData);
    getCartCount();
  } else {
    var tempObject = {};
    tempObject[id] = 1;
    sessionStorage.items = JSON.stringify(tempObject);
    $('#cartCount span').html(1);
  }
}
function checkIfBought(id) {
  if (!sessionStorage.items) {
    return false;
  } else {
    var cartData = JSON.parse(sessionStorage.items);
    var keys = Object.keys(cartData);
    return (keys.indexOf(id) !== -1);
  }
}
function getCartCount() {
  if (sessionStorage.items) {
    var cartData = JSON.parse(sessionStorage.items);
    var keys = Object.keys(cartData);
    $('#cartCount span').html(keys.length);
  } else {
    $('#cartCount span').html(0);
  }
}
function generateReceipt() {
  $.ajax({
    url: 'data/inventory.json',
    method: 'GET'
  }).then(function(data) {
    var container = $('#test');
    container.html('');
    var total = 0;
    var cartData = JSON.parse(sessionStorage.items);
    var keys = Object.keys(cartData);
    var innerHTML = "<table><tr><th>Name</th><th>Gender</th><th>Species</th>" +
      "<th>Origin</th><th>Price</th><th>Picture</th><th>Hrmm?</th></tr>";
    keys.forEach(function(key) {
      var animalType = '';
      switch (key.substring(0, 2)) {
        case 'sl':
          animalType = 'sloths';
          break;
        case 'sn':
          animalType = 'snails';
          break;
        case 'tu':
          animalType = 'turtles';
          break;
      }
      var animal = data[animalType].filter(function(specificAnimal) {
        return specificAnimal.id === key;
      })[0];
      innerHTML += "<tr><td>" + animal.name + '</td><td>' + animal.gender +
        '</td><td>' + animalType.substring(0, animalType.length - 1) +
        '</td><td>' + animal.origin +
        '</td><td>$' + animal.price +
        '</td><td class="image"><img src="' + animal.image + '">'
        '</td><td>' +
        '<button onclick="removeItem(\'' + animal.id + '\')">Remove Me!' +
        '</button></td></tr>';
        total += animal.price;
    });
    innerHTML += '<tr>' +
        '<td class="invisible"></td>' +
        '<td class="invisible"></td>' +
        '<td class="invisible"></td>' +
        '<td class="info">Total: </td>' +
        '<td class="price">$' + total + '</td>' +
        '<td class="invisible"></td>' +
        '<td class="invisible"></td>' + '</tr>'
    container.html(innerHTML);
  });
}
function removeItem(animalID) {
  var cartData = JSON.parse(sessionStorage.items);
  delete cartData[animalID];
  sessionStorage.items = JSON.stringify(cartData);
  generateReceipt();
}
getCartCount();
