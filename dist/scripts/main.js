
//assign your api key equal to a variable
var apiKey = '5543de5f4fb6de6783119447abc9951e';

//flickr API url to our group images
var flickrUrl= 'https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=1e152e137f1bc9338ea97cd8ef12250a&group_id=2669433%40N25&format=json&nojsoncallback=1&auth_token=72157648800861235-b6be1ffdd1d5eb22&api_sig=2414daba54cd1c8681a6167c5131f1ba';

var temp_string1 = $('#photo').html();
var rendered_temp1 = _.template(temp_string1);

var test = $.getJSON(flickrUrl).done(function(x){
	x.photos.photo.forEach(function(y){
    $('.photo').append(rendered_temp1(y));
	});

console.log('The Iron Yard Rocks');
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
