//assign your api key equal to a variable
var apiKey = '5543de5f4fb6de6783119447abc9951e';

//flickr API url to our group images
var flickrUrl= 'https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=db30b0c59f9ca279fee865506e35802a&group_id=2669433%40N25&format=json&nojsoncallback=1';

var temp_string1 = $('#photo').html();
var rendered_temp1 = _.template(temp_string1);

var test = $.getJSON(flickrUrl).done(function(x){
	x.photos.photo.forEach(function(y){
    $('.flickrPhoto').append(rendered_temp1(y));
		});
	});

$(".js-vertical-tab-content").hide();
$(".js-vertical-tab-content:first").show();

/* if in tab mode */
$(".js-vertical-tab").click(function(event) {
  event.preventDefault();

  $(".js-vertical-tab-content").hide();
  var activeTab = $(this).attr("rel");
  $("#"+activeTab).show();

  $(".js-vertical-tab").removeClass("is-active");
  $(this).addClass("is-active");

  $(".js-vertical-tab-accordion-heading").removeClass("is-active");
  $(".js-vertical-tab-accordion-heading[rel^='"+activeTab+"']").addClass("is-active");
});

/* if in accordion mode */
$(".js-vertical-tab-accordion-heading").click(function(event) {
  event.preventDefault();

  $(".js-vertical-tab-content").hide();
  var accordion_activeTab = $(this).attr("rel");
  $("#"+accordion_activeTab).show();

  $(".js-vertical-tab-accordion-heading").removeClass("is-active");
  $(this).addClass("is-active");

  $(".js-vertical-tab").removeClass("is-active");
  $(".js-vertical-tab[rel^='"+accordion_activeTab+"']").addClass("is-active");

});

//social media button entrance


$('.socialtab').on('mouseover',function() {
		$('.hidden').addClass('socialmedia');
		$('.hidden').addClass('animated bounceInRight');
	});

$('.socialtab').on('mouseover',function() {
		$('.socialtab').addClass('hidden');

	});
