//clicking checkbox on checkout.html disables billing text fields - CP
$(document).ready (function () {
	$('#sameAsBilling').change(function () {
		$('#firstNameBilling').prop('disabled', $(this).is(':checked'));
		$('#lastNameBilling').prop('disabled', $(this).is(':checked'));
		$('#emailBilling').prop('disabled', $(this).is(':checked'));
		$('#addressLineOneBilling').prop('disabled', $(this).is(':checked'));
		$('#addressLineTwoBilling').prop('disabled', $(this).is(':checked'));
		$('#stateBilling').prop('disabled', $(this).is(':checked'));
		$('#zipCodeBilling').prop('disabled', $(this).is(':checked'));
	});
});


// $(document).ready(function() {
//   $.ajax({
//     url: 'data/inventory.json',
//     method: 'GET'

// 	  }).then(function(data) {
// 	$('#item1').html('<img src=' + data.sloths[0].image + '>' + '<figcaption>' + data.sloths[0].name + "<br>$" + data.sloths[1].price + "</figcaption>");
//     $('#item2').html('<img src=' + data.sloths[3].image + '>' + '<figcaption>' + data.sloths[3].name + "<br>$" + data.sloths[3].price + "</figcaption>");
//     $('#item3').html('<img src=' + data.sloths[2].image + '>' + '<figcaption>' + data.sloths[2].name + "<br>$" + data.sloths[2].price + "</figcaption>");
//    });
//  });
//   }).then(function(data) {
//     $('#item1').html('<img src=' + data.sloths[0].image + '>' + '<figcaption>' + data.sloths[0].name + "<br>$" + data.sloths[1].price + "</figcaption>");
//     $('#item2').html('<img src=' + data.sloths[3].image + '>' + '<figcaption>' + data.sloths[3].name + "<br>$" + data.sloths[3].price + "</figcaption>");
//     $('#item3').html('<img src=' + data.sloths[2].image + '>' + '<figcaption>' + data.sloths[2].name + "<br>$" + data.sloths[2].price + "</figcaption>");
//   });

// });

//Customer Object - CP

var Customer = function () {
	this.firstNameShipping = firstNameShipping;
	this.lastNameShipping = lastNameShipping;
	this.emailShipping = emailShipping;
	this.addressLineOneShipping = addressLineOneShipping;
	this.addressLineTwoShipping = addressLineTwoShipping;
	this.stateShipping = stateShipping;
	this.zipCodeShipping = zipCodeShipping;
	this.firstNameBilling = firstNameBilling;
	this.emailBilling = emailBilling;
	this.addressLineOneBilling = addressLineOneBilling;
	this.addressLineTwoBilling = addressLineTwoBilling;
	this.stateBilling = stateBilling;
	this.zipCodeBilling = zipCodeBilling;
	this.creditCardNumber = creditCardNumber;
	this.expirationDate = expirationDate;
	this.ccvNumber = ccvNumber;
};

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
