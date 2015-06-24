// Grabs data from inputs, creates dictionary, and submits via AJAX post
// No validation yet
// ---> (?) for notes on implementation

$('.container__form').on('submit', function(event) {
	var formValues = {};
	// grab data from all inputs
	var firstName = $('#first_name').val();
	var lastName = $('#last_name').val();
	var city = $('#city').val();
	var state = $('#state').val();
	// TODO: remove line below if not necessary
	if (!state) {state = false;} // otherwise would return Null, this prevents inconsistencies in data output (since all the other inputs return False)
	var zip = $('#zip').val();
	var timezone = $('#timezone').val();
	var mobileNumber = $('#mobile_number').val();
	var birthdate = $('#birthdate').val();

	// create dictionary with data
	formValues = {
		firstName: firstName,
		lastName: lastName,
		city: city,
		state: state,
		zip: zip,
		timeZone: timezone,
		mobileNumber: mobileNumber,
		birthDate: birthdate
	}

	var checkboxes = $('input[type="checkbox"]');
	for (var i = 0; i < checkboxes.length; i++) {
		var checkboxName = $(checkboxes[i]).attr('name');
		formValues[checkboxName] = $(checkboxes[i]).prop('checked');
	}

	// call ajax function
	// post(formValues);
	console.log(formValues)

	return false;
	// (?) return false works as event.stopPropagation() and event.preventDefault() within jQuery event handler

});

function post() {
/*  $.post(formValues, function(data) {
		console.log(data);
	});
*/
// console.log(formValues)
// debug
}
