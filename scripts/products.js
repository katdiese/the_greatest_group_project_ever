$(document).ready(function() {
  $.ajax({
    url: 'data/inventory.json',
    method: 'GET'
  }).then(function(data) {
    var obj = Object.keys(data);
    // console.log(obj)
    for(i = 0; i < obj.length; i++) {
      var species = obj[i];
      console.log(obj[i]);
      var speciesArray = data[species];
      for(j = 0; j < speciesArray.length; j++) {
        var eachAnimal = speciesArray[j];
        console.log(speciesArray[j].name);
        $('body').append('<div><img class="img-responsive" src=' + eachAnimal.image + "></div>")
      }
    }
    // console.log(Object.keys(data));
  });
});

//id=products

var createBlock = function(data) {
  var species = Object.keys(data);
  console.log(species);
}