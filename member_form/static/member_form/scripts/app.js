// Grabs data from inputs, creates dictionary, and submits via AJAX post
// No validation yet
// ---> (?) for notes on implementation

$('.container__form').on('submit',function() {
	// grab data from all inputs
	var first_name = $('#first_name').val();
	var last_name = $('#last_name').val();
	var city = $('#city').val();
	var state = $('#state').val();
	if (!state) {state = false;} // otherwise would return Null, this prevents inconsistencies in data output (since all the other inputs return False)
	var zip = $('#zip').val();
	var timezone = $('#timezone').val();
	var mobile_number = $('#mobile_number').val();
	var birthdate = $('#birthdate').val();

	// individual checkboxes
	var infant_toddler = $('label[for="checkboxG4"]').hasClass('chk')
	var child = $('label[for="checkboxG5"]').hasClass('chk')
	var teen = $('label[for="checkboxG6"]').hasClass('chk')
	var young_adult = $('label[for="checkboxG1"]').hasClass('chk')
	var adult = $('label[for="checkboxG2"]').hasClass('chk')
	var older_adult = $('label[for="checkboxG3"]').hasClass('chk')
	// (?) seems repetitive, but I couldn't think of a more scalable solution (maybe a For loop)

	// create dictionary with data
	formObject = {
		firstName: first_name,
		lastName: last_name,
		city: city,
		state: state,
		zip: zip,
		timeZone: timezone,
		mobileNumber: mobile_number,
		birthDate: birthdate,
		infantToddler: infant_toddler,
		child: child,
		teen: teen,
		youngAdult: young_adult,
		adult: adult,
		olderAdult: older_adult,
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

  