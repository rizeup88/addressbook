$(document).ready(function() {
  $('a#contact1').click(function() {
  	$('#info').toggle();
  });

  $('button#open').click(function() {
  	$('#entries').toggle();
  });

  $('form#addcontact').submit(function(event) {
  	var firstnameInput = $('input#firstname').val();
  	var lastnameInput = $('input#lastname').val();
  	var addressInput = $('input#address').val();
  	var cityInput = $('input#city').val();
  	var stateInput = $('select#state').val();
  	var zipInput = $('input#zip').val();
  	var phoneInput = $('input#phone').val();
  	var emailInput = $('input#email').val();
  	var twitterInput = $('input#twitter').val();
  	var instagramInput = $('input#instagram').val();

  	$('.firstname').text(firstnameInput);
	$('.lastname').text(lastnameInput);
	$('.address').text(addressInput);
	$('.city').text(cityInput);
	$('.state').text(stateSelect);
	$('.zip').text(zipInput);
	$('.phone').text(phoneInput);
	$('.email').text(emailInput);
	$('.twitter').text(twitterInput);
	$('.instagram').text(instagramInput);

  	alert('Contact Added')

  	event.preventDefault();

  });
});