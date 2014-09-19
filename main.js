$(document).on('ready', function() {

var user = '';
var bio = '';
var favbooks = '';
var favjava = '';

	$(document).on('click', '.user-profile button', function(){
	 	$(this).text('Hide Form');
		$('.user-input').toggleClass('user-input-show');
	})

	// $(document).on('click', '.userSubmit', function(e) {     //submit button
	// 	e.preventDefault();
		$(document).on('keyup','input[name="username"]',(function() {	//autosave keyup
 		var value = $(this).val();
 		$('#username').text(value)
 		}))
 		
 		$(document).on('keyup','input[name="bio"]',(function() {	//autosave keyup
 		var value = $(this).val();
 		$('#bio').text(value)
 		}))

 		$(document).on('keyup','input[name="favbooks"]',(function() {	//autosave keyup
 		var value = $(this).val();
 		$('#favbooks').text(value)
 		}))

 		$(document).on('keyup','input[name="favjava"]',(function() {	//autosave keyup
 		var value = $(this).val();
 		$('#favjava').text(value)
 		}))


		// var user = $('form input[name="username"]').val();
		// var bio = $('form input[name="bio"]').val();
		// var favbooks = $('form input[name="favbooks"]').val();
		// var favjava = $('form input[name="favjava"]').val();

		// $('#username').append(user);
		// $('#bio').append(bio);
		// $('#favbooks').append(favbooks);
		// $('#favjava').append(favjava);
		 

})