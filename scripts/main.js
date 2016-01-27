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

	  }).then(function(data) {
	$('#item1').html('<img class="img-responsive center-block" src=' + data.sloths[0].image + '>' + '<figcaption>' + data.sloths[0].name + "<br>$" + data.sloths[1].price + "</figcaption>");
    $('#item2').html('<img class="img-responsive center-block" src=' + data.sloths[3].image + '>' + '<figcaption>' + data.sloths[3].name + "<br>$" + data.sloths[3].price + "</figcaption>");
    $('#item3').html('<img class="img-responsive center-block" src=' + data.sloths[2].image + '>' + '<figcaption>' + data.sloths[2].name + "<br>$" + data.sloths[2].price + "</figcaption>");
   });

});

// Email validation
// function to validate email address
// Returns true or false
// function validateEmail($email) {
//   var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//   return emailReg.test($email);
// }
// 
// $( "#email-signup-submit" ).click(function() {
//     function validateEmail();
//     if( !validateEmail("#email-signup-input".val()) { 
//       alert( "Behold the power of jQuery! Swear fealty to the jQuery gods and try again with a real email address" );
//     }
// });

