$(document).ready(function() {
  $.ajax({
    url: 'http://127.0.0.1:8080/data/inventory.json',
    method: 'GET'
  }).then(function(data) {
    console.log(data);
  });

});