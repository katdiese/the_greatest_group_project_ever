//clicking checkbox on checkout.html disables billing text fields - CP
// $(document).ready (function () {
// 	$('#sameAsBilling').change(function () {
// 		$('#firstNameBilling').prop('disabled', $(this).is(':checked'));
// 		$('#lastNameBilling').prop('disabled', $(this).is(':checked'));
// 		$('#emailBilling').prop('disabled', $(this).is(':checked'));
// 		$('#addressLineOneBilling').prop('disabled', $(this).is(':checked'));
// 		$('#addressLineTwoBilling').prop('disabled', $(this).is(':checked'));
// 		$('#stateBilling').prop('disabled', $(this).is(':checked'));
// 		$('#zipCodeBilling').prop('disabled', $(this).is(':checked'));
// 	});
// });
// 
// //Customer Object - CP
// var Customer = function () {
// 	this.firstNameShipping = firstNameShipping;
// 	this.lastNameShipping = lastNameShipping;
// 	this.emailShipping = emailShipping;
// 	this.addressLineOneShipping = addressLineOneShipping;
// 	this.addressLineTwoShipping = addressLineTwoShipping;
// 	this.stateShipping = stateShipping;
// 	this.zipCodeShipping = zipCodeShipping;
// 	this.firstNameBilling = firstNameBilling;
// 	this.emailBilling = emailBilling;
// 	this.addressLineOneBilling = addressLineOneBilling;
// 	this.addressLineTwoBilling = addressLineTwoBilling;
// 	this.stateBilling = stateBilling;
// 	this.zipCodeBilling = zipCodeBilling;
// 	this.creditCardNumber = creditCardNumber;
// 	this.expirationDate = expirationDate;
// 	this.ccvNumber = ccvNumber;
// };


//appends images of featured animals to index.html - KD
$(document).ready(function() {
  $.ajax({
    url: 'data/inventory.json',
    method: 'GET'

	  }).then(function(data) {
	$('#item1').html('<img class="img-responsive center-block" src=' + data.sloths[0].image + '>' + '<figcaption>' + data.sloths[0].name + "<br>$" + data.sloths[1].price + "</figcaption>");
    $('#item2').html('<img class="img-responsive center-block" src=' + data.sloths[3].image + '>' + '<figcaption>' + data.sloths[3].name + "<br>$" + data.sloths[3].price + "</figcaption>");
    $('#item3').html('<img class="img-responsive center-block" src=' + data.sloths[2].image + '>' + '<figcaption>' + data.sloths[2].name + "<br>$" + data.sloths[2].price + "</figcaption>");
   });
   
  // Carousel
  $(function(){
      $('#myCarousel').carousel({
        interval: 2000
      });
  });

  // Hover actions
  
  $(document).on('mouseenter', '.hover', function() {
    $(this).css('opacity', .5);
  })
  
  $(document).on('mouseleave', '.hover', function() {
    $(this).css('opacity', 1);
  })   
  
});

// var images = [
//   'https://images.unsplash.com/photo-1452942000102-9c4c7aaeac81?crop=entropy&dpr=2&fit=crop&fm=jpg&h=700&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1300',
//   'https://images.unsplash.com/photo-1428672824825-ac9b4adc2cd6?crop=entropy&dpr=2&fit=crop&fm=jpg&h=700&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1300',
//   'https://images.unsplash.com/photo-1428973085873-61a784626aad?crop=entropy&dpr=2&fit=crop&fm=jpg&h=700&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1300',
//   'https://images.unsplash.com/photo-1421882100557-2daba9680b08?crop=entropy&dpr=2&fit=crop&fm=jpg&h=700&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1300'
// ];


// $(function () {
//    images.forEach(function (imageEnding, index){
//      var $imgDiv = $("<div></div>");
// //     $imgDiv.addClass("image");
//      $imgDiv.css("background", "url('" + images[index] + "')");
//      $("#carousel").append($imgDiv);
//    })
// });

//$("#carousel").append('<img class= "img-responsive center-block" src="'+ images[0]+'" style="position: absolute;">')
//$("#carousel").append('<img class= "img-responsive center-block" src="'+ images[1]+'" style="position: absolute;">')






