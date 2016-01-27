var options = {};
$(document).ready(function() {
    getData();
});
function getData() {
  $.ajax({
    url: 'data/inventory.json',
    method: 'GET'
  }).then(function(data) {
    populateProducts(data);
  });
}
function updateOptions(option, data) {
  if (arguments.length === 0) {
    var keys = Object.keys(options);
    keys.forEach(function(key) {
      delete options[key];
    });
    console.log(options);
    getData();
  } else {
    options[option] = data;
    getData();
  }
}
function populateProducts(data) {
  $('#products').empty();
  // Find each animal type in the date using Object.keys
  var obj = Object.keys(data);
  // Loop through each animal type
  for(i = 0; i < obj.length; i++) {
    var species = obj[i];
    if (options['species']) {
      if (options['species'] !== species) {
        continue;
      }
    }
    // Isolate the array of data for each animal type
    var speciesArray = data[species];
    // Loop through each specific animal and append their data to the DOM
    for(j = 0; j < speciesArray.length; j++) {
      var eachAnimal = speciesArray[j];
      var animalName = eachAnimal.name;
      var animalAge = eachAnimal.age;
      var animalGender = eachAnimal.gender;
      if(options['gender']) {
        if(options['gender'] !== animalGender) {
          continue;
        }
      }
      var animalOrigin = eachAnimal.origin;
      var animalPrice = eachAnimal.price;
      if(options['price']) {;
        var optionPrice = options['price'].split('-');
        if (optionPrice[1]) {
          if (animalPrice <= optionPrice[0] || animalPrice > optionPrice[1]) {
            continue;
          }
        } else {
          if (animalPrice < optionPrice[0]) {
            continue;
          }
        }
      }
      animalPrice = '$' + animalPrice;
      var animalDescription = "This " +animalGender + " " + animalOrigin + " animal is " + animalAge + " years old" ;
      var animalImage = eachAnimal.image;
      var animalID = eachAnimal.id;

      var animalBlock = '<div class="row"><image class="col-md-4"src="'+ animalImage +'"></image><div class="col-md-8"><h2>'+ animalName +'</h2><p>'+ animalPrice +'</p><p>'+ animalDescription +'</p></div><button onclick="updateCart(\''+ animalID +'\')">Add to Cart</button></div><div class="form-group">&nbsp;</div>';

      var createAnimalBlock = function() {
        $('#products').append(animalBlock);
      };

      createAnimalBlock();
    }
  }
}
