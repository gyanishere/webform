// Grabs data from inputs, creates dictionary, and submits via AJAX post
// No validation yet
// ---> (?) for notes on implementation

$('.container__form').on('submit', function(event) {
	var formValues = {};
	// grab data from all inputs
	var first_name = $('#first_name').val();
	var last_name = $('#last_name').val();
	var city = $('#city').val();
	var state = $('#state').val();
	// TODO: remove line below if not necessary
	if (!state) {state = false;} // otherwise would return Null, this prevents inconsistencies in data output (since all the other inputs return False)
	var zip = $('#zip').val();
	var timezone = $('#timezone').val();
	var mobile_number = $('#mobile_number').val();
	var birthdate = $('#birthdate').val();
	var csrfmiddlewaretoken = document.getElementsByName('csrfmiddlewaretoken')[0].value;

	// create dictionary with data
	formValues = {
		first_name: first_name,
		last_name: last_name,
		city: city,
		state: state,
		zip: zip,
		timezone: timezone,
		mobile_number: mobile_number,
		birthdate: birthdate,
		csrfmiddlewaretoken: csrfmiddlewaretoken
	}
	
	// VALIDATION
	for (var key in formValues) {
		var elem = $('#'+key)
		if(!elem.val() && key != 'csrfmiddlewaretoken' && elem.prop('required')) {
			if (key != 'state') {
				elem.parent().addClass('blank');
			}
			else {
				elem.parent().parent().addClass('blank');
			}
		}
	}
	
	// Removing invalid state when user enters text (not whitespace)
	$('.blank input').blur(function() {
		if ( $.trim( $(this).val() ) != '' ) {
			$(this).closest('.grid__col').removeClass('blank');
		}
	});
	
	$('.blank select').blur(function() {
		if ( $(this).val() ) {
			$(this).closest('.grid__col').removeClass('blank');
		}
	});
	
	// Adding invalid state when user revers to whitespace 
	$('.blank input').keyup(function() {
		if ( $.trim( $(this).val() ) == '' ) {
			$(this).closest('.grid__col').addClass('blank');
		}
	});

	var checkboxes = $('input[type="checkbox"]');
	for (var i = 0; i < checkboxes.length; i++) {
		var checkboxName = $(checkboxes[i]).attr('name');
		formValues[checkboxName] = $(checkboxes[i]).prop('checked');
	}

	// call ajax function
	// post(formValues);
	postFormValues(formValues);

	return false;
	// (?) return false works as event.stopPropagation() and event.preventDefault() within jQuery event handler

});

function postFormValues(formValues) {
	// if ($('.blank').length == 0) {
		$.post('/member_form/formvalues/', formValues, function(data) {
			console.log(data);
		});
	// }
// console.log(formValues)
// debug
}
