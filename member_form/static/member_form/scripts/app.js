// (?) OVERVIEW: Validates, grabs data from inputs on submit, creates object, and submits via AJAX post

// (1) pre-submit validation (happens automatically)
$('.text-only').on('keydown', function(e) {
    var AllowRegex  = /^[A-Za-z\s\-]+$/;   
    var string = String.fromCharCode(e.keyCode);
    if (AllowRegex.test(string) || e.keyCode == 16 || e.keyCode == 8 || e.keyCode == 224 || e.keyCode == 18 || e.keyCode == 17 || e.keyCode == 16 || e.keyCode == 20 || e.keyCode == 9 || e.keyCode == 39 || e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 91) return true;
 
	$(this).fadeTo(100, 0.6, function() { 
		$(this).fadeTo(100, 1); 
	});  
    return false;
});

$('.name-only').on('keydown', function(e) {
 		var string = String.fromCharCode(e.keyCode);
  		function isAlphaOrParen(str) {
		  return /^[a-zA-Z()]+$/.test(str);
		}
 		if (isAlphaOrParen(string) || e.keyCode == 16 || e.keyCode == 8 || e.keyCode == 224 || e.keyCode == 18 || e.keyCode == 17 || e.keyCode == 16 || e.keyCode == 20 || e.keyCode == 9 || e.keyCode == 39 || e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 91 || e.keyCode == 173 || e.keyCode == 32) {
 			return true;
 		}

	 	$(this).fadeTo(100, 0.6, function() { 
			$(this).fadeTo(100, 1); 
		});  
 		return false;
});

// masked input & auto-validation
$("#mobile_number").mask("(999) 999-9999");
$('#mobile_number').on('keyup', function(event) {
	if ($(this).val() == '(999) 999-9999') {
		$(this).css('color','gray');
	}
	else {
		$(this).css('color','black');
	}
});
$("#zip").mask("99999", {placeholder:""});
$("#birthdate").mask("9999-99-99", {placeholder:"yyyy-MM-dd"});
$('#birthdate').on('keyup', function(event) {
	if ($(this).val() == 'yyyy-MM-dd') {
		$(this).css('color','gray');
	}
	else {
		$(this).css('color','black');
	}
});

// (2) submit method
$('.container__form').on('submit', function(event) {
	var form_validated = false;
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
	var mobile_number = $('#mobile_number').val().replace(/[- )(]/g,'');
	var birthdate = $('#birthdate').val().replace(/[- )(]/g,'');
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

	if (first_name && last_name && city && state && zip && timezone && mobile_number && birthdate && csrfmiddlewaretoken) {
		form_validated = true;
	}

	$('.submit--button').blur();

	if (form_validated) {
		postFormValues(formValues)
	}

	return false;
	// (?) return false works as event.stopPropagation() and event.preventDefault() within jQuery event handler

});

// (3) posting with ajax
function postFormValues(formValues) {
	console.log(formValues);

	$('.submit--button').val('Submitting...');
	//$.post('/member_form/formvalues/', formValues, function(data) {
		//console.log(data);
	//});
// console.log(formValues)
// debug
}
