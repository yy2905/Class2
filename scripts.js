$('.d-list-item').on('click', function() {
	var dCoverUrl = $(this).attr('data-destination-pic')
  console.log(dCoverUrl)
  // this will empty div with id d-pics
  $('#d-pics').empty()
  // this will show a background image on the screen
  $('#d-pics').css('background-image', `url(${dCoverUrl})`)
})
