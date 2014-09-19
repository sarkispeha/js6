$(document).on('ready', function() {

var user = '';
var bio = '';
var favbooks = '';
var favjava = '';

	$(document).on('click', '.user-profile button', function(){
		console.log('works');
	 	$(this).text('Hide Form');
		$('.user-input').toggleClass('user-input-show');
	})

	$(document).on('click', '.userSubmit', function(e) {
		e.preventDefault();
		var user = $('form input[name="username"]').val();
		var bio = $('form input[name="bio"]').val();
		var favbooks = $('form input[name="favbooks"]').val();
		var favjava = $('form input[name="favjava"]').val();

		$('#username').append(user);
		$('#bio').append(bio);
		$('#favbooks').append(favbooks);
		$('#favjava').append(favjava);
		});


  
});






// $('input[name="username"]').keyup(function() {
// 		var value = $(this).val();
// 		$('p').text(value);
// 	})
// 	.keyup();

// 	autosave feature