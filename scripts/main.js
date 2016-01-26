$(document).ready (function () {
	$('#sameAsBilling').click(function () {
		//as soon as checked shipping values need to 
		//autopopulate billing values
	})
})

$(document).ready(function() {
  $.ajax({
    url: 'data/inventory.json',
    method: 'GET'
  }).then(function(data) {
    $('#item1').html('<img src=' + data.sloths[0].image + '>' + '<figcaption>' + data.sloths[0].name + "<br>$" + data.sloths[1].price + "</figcaption>");
    $('#item2').html('<img src=' + data.sloths[3].image + '>' + '<figcaption>' + data.sloths[3].name + "<br>$" + data.sloths[3].price + "</figcaption>");
    $('#item3').html('<img src=' + data.sloths[2].image + '>' + '<figcaption>' + data.sloths[2].name + "<br>$" + data.sloths[2].price + "</figcaption>");
  });

});
