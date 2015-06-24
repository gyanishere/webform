// Grabs data from inputs, creates dictionary, and submits via AJAX post
// No validation yet
// ---> (?) for notes on implementation

$('.container__form').on('submit',function() {
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

	// individual checkboxes
	var infantToddler = $('label[for="checkboxG4"]').hasClass('chk')
	var child = $('label[for="checkboxG5"]').hasClass('chk')
	var teen = $('label[for="checkboxG6"]').hasClass('chk')
	var youngAdult = $('label[for="checkboxG1"]').hasClass('chk')
	var adult = $('label[for="checkboxG2"]').hasClass('chk')
	var olderAdult = $('label[for="checkboxG3"]').hasClass('chk')
	// (?) seems repetitive, but I couldn't think of a more scalable solution (maybe a For loop)

	// create dictionary with data
	formObject = {
		firstName: firstName,
		lastName: lastName,
		city: city,
		state: state,
		zip: zip,
		timeZone: timezone,
		mobileNumber: mobileNumber,
		birthDate: birthdate,
		infantToddler: infantToddler,
		child: child,
		teen: teen,
		youngAdult: youngAdult,
		adult: adult,
		olderAdult: olderAdult,
	}

	// call ajax function
	post();

	return false;
	// (?) return false works as event.stopPropagation() and event.preventDefault() within jQuery event handler

});

function post() {
/*  $.post(formObject, function(data) {
		console.log(data);
	});
*/
console.log(formObject)
// debug
}
