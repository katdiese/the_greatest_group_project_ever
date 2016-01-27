$(document).ready(function() {
  $.ajax({
    url: 'data/inventory.json',
    method: 'GET'
  }).then(function(data) {
    // Find each animal type in the date using Object.keys
    var obj = Object.keys(data);
    // Loop through each animal type
    for(i = 0; i < obj.length; i++) {
      var species = obj[i];
      // Isolate the array of data for each animal type
      var speciesArray = data[species];
      // Loop through each specific animal and append their data to the DOM
      for(j = 0; j < speciesArray.length; j++) {
        var eachAnimal = speciesArray[j];
        var animalName = eachAnimal.name;
        var animalAge = eachAnimal.age;
        var animalGender = eachAnimal.gender;
        var animalOrigin = eachAnimal.origin;
        var animalPrice = "$"+eachAnimal.price;
        var animalDescription = "This " +animalGender + " " + animalOrigin + " animal is " + animalAge + " years old" ;
        var animalImage = eachAnimal.image;
        var animalID = eachAnimal.id;

        var animalBlock = '<div class="row"><image class="col-md-4"src="'+ animalImage +'"></image><div class="col-md-8"><h2>'+ animalName +'</h2><p>'+ animalPrice +'</p><p>'+ animalDescription +'</p></div><button onclick="updateCart("'+ animalID +'")">Add to Cart</button></div><div class="form-group">&nbsp;</div>';

        var createAnimalBlock =function () {
          $('#products').append(animalBlock)
        }

        createAnimalBlock();
      }
    }
  });
});


// var binaryFilter = function (category){
//   //If the class has the category display: initial
//   //else add display: none
//   if ($('.category')) {$('category').css(display: iniital)}
//     else
// }