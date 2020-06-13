

$( document ).ready(function() {
    var status = 1;
    $('.container').on('click', function(){
        console.log('i am clicked!');
        $('.container *').animate({
            opacity: status == 0 ? 1 : 0,
          });
          status = status == 0 ? 1 : 0;
    });

    // var availableTags = [
    //     "Beograd", 'Novi Sad', 'Niš', 'Kraljevo'
    //   ];
    //   $( "#tags" ).autocomplete({
    //     source: availableTags
    //   });
    // $('.clickBtn').on('click', function(){
    //     $('.container').toggle();
    // });

    // jQuery('.camera_wrap').camera(); //the basic method

	// jQuery('.camera_wrap').camera({ //here I declared some settings, the height and the presence of the thumbnails 
	// 	height: '41%',
	// 	pagination: false,
	// 	thumbnails: true
	// });
});