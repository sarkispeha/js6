$(document).on('ready', function() {



	$(document).on('click', '.userSubmit', function() {
		var value = $('form input[name="username"]').val();
		console.log(value);
		var bio = $('form input[name="bio"]').val();
		console.log(bio);
		var favbooks = $('form input[name="favbooks"]').val();
		console.log(favbooks);
		var favjava = $('form input[name="favjava"]').val();
		console.log(favjava);
	
	


	});


  
});






// $('input[name="username"]').keyup(function() {
// 		var value = $(this).val();
// 		$('p').text(value);
// 	})
// 	.keyup();

// 	autosave feature