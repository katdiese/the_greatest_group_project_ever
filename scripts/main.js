$(document).ready (function () {
	$('#sameAsBilling').change(function () {
		$('#firstNameBilling').prop('disabled', $(this).is(':checked')).css('background-color', 'gray');
		$('#lastNameBilling').prop('disabled', $(this).is(':checked')).css('background-color', 'gray');;
		$('#emailBilling').prop('disabled', $(this).is(':checked')).css('background-color', 'gray');;
		$('#addressLineOneBilling').prop('disabled', $(this).is(':checked')).css('background-color', 'gray');;
		$('#addressLineTwoBilling').prop('disabled', $(this).is(':checked')).css('background-color', 'gray');;
		$('#stateBilling').prop('disabled', $(this).is(':checked')).css('background-color', 'gray');;
		$('#zipCodeBilling').prop('disabled', $(this).is(':checked')).css('background-color', 'gray');;
	})
})

$(document).ready(function() {
  $.ajax({
    url: 'data/inventory.json',
    method: 'GET'
<<<<<<< HEAD
	  }).then(function(data) {
	$('#item1').html('<img src=' + data.sloths[0].image + '>' + '<figcaption>' + data.sloths[0].name + "<br>$" + data.sloths[1].price + "</figcaption>");
    $('#item2').html('<img src=' + data.sloths[3].image + '>' + '<figcaption>' + data.sloths[3].name + "<br>$" + data.sloths[3].price + "</figcaption>");
    $('#item3').html('<img src=' + data.sloths[2].image + '>' + '<figcaption>' + data.sloths[2].name + "<br>$" + data.sloths[2].price + "</figcaption>");
   });
 
 });
=======
  }).then(function(data) {
    $('#item1').html('<img src=' + data.sloths[0].image + '>' + '<figcaption>' + data.sloths[0].name + "<br>$" + data.sloths[1].price + "</figcaption>");
    $('#item2').html('<img src=' + data.sloths[3].image + '>' + '<figcaption>' + data.sloths[3].name + "<br>$" + data.sloths[3].price + "</figcaption>");
    $('#item3').html('<img src=' + data.sloths[2].image + '>' + '<figcaption>' + data.sloths[2].name + "<br>$" + data.sloths[2].price + "</figcaption>");
  });

});
>>>>>>> master
