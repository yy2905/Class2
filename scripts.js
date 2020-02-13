$('.d-list-item').on('click', function() {
	var dCoverUrl = $(this).attr('data-destination-pic')
  console.log(dCoverUrl)
  $('#d-pics').empty()
  $('#d-pics').css('background-image', `url(${dCoverUrl})`)
})
