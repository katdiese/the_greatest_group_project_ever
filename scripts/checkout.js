$(document).ready (function () {
	console.log('sup bud');
});
 
//clicking checkbox on checkout.html disables billing text fields - CP

	$('#sameAsBilling').change(function () {
		$('#firstNameBilling').prop('disabled', $(this).is(':checked'));
		$('#lastNameBilling').prop('disabled', $(this).is(':checked'));
		$('#emailBilling').prop('disabled', $(this).is(':checked'));
		$('#addressBilling').prop('disabled', $(this).is(':checked'));
		$('#cityBilling').prop('disabled', $(this).is(':checked'));
		$('#stateBilling').prop('disabled', $(this).is(':checked'));
		$('#zipCodeBilling').prop('disabled', $(this).is(':checked'));
	});


$('#purchaseButton').on('click', function () {
	var shippingInfo = {
		nameShipping: $('#firstNameShipping').val() +' '+ $('#lastNameShipping').val(),
		addressShipping: $('#addressShipping').val() +' '+ $('#cityShipping').val() +', '+ $('#zipCodeShipping').val(),
		emailShipping: $('#emailShipping').val()
	};

	var billingInfo = {
		nameBilling: $('#firstNameBilling').val() +' '+ $('#lastNameBilling').val(),
		addressBilling: $('#addressBilling').val() +' '+ $('#cityBilling').val() +', '+ $('#zipCodeBilling').val(),
		emailBilling: $('#emailBilling').val()
	};
	
	//populates NameOnCard
	var nameCreditCard = function () {
		if (shippingInfo.nameShipping === billingInfo.nameBilling) {
			return shippingInfo.nameShipping;
		} else {
			return billingInfo.nameBilling;
		}
	};

	//populates zipCard
	var zipShip = $('#zipCodeShipping').val();
	var zipBill = $('#zipCodeBilling').val();
	var zipKing = function () {
		if (zipShip === zipBill) {
			return zipShip;
		} else {
			return zipBill;
		}
	};	
	
	var creditCardInfo = {
	 	nameOnCard: nameCreditCard(),
	 	ccNumber: $('#creditCardNumber').val(),
	 	expDate: $('#expirationDate').val(),
	 	ccv: $('#ccvNumber').val(),
	 	zipCard: zipKing 
	};

	console.log(shippingInfo, billingInfo, creditCardInfo);
});
