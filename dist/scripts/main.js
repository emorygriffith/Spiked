<<<<<<< HEAD
// ************** FLICKR API SECTION ************** //
=======
>>>>>>> 2491e0ea4af517c30fde75125646e7686302e3ac
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

// ************** END FLICKR API SECTION ************** //

// ************** START MAINSECTION ************** //
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


// ************** END MAIN SECTION ************** //

// ************** START MENU SECTION ************** //


/*......................This is the News section...................................*/
/*.................................................................................*/

$(document).ready(function(){

    var newsTemplate = $('#newsApi').html();
    var showNews = _.template(newsTemplate);
    var newsUrl='http://private-2d011-restaurantapi.apiary-mock.com/news/latest';

    $.getJSON(newsUrl).done(
    function (pullingApi) {
      $('.menunews').append( showNews(pullingApi) );
    });


    /*This is where the specialApi is called, but not implemented*/
    /*The variables for the specialApi are set here along with the getJSon*/



    var specialTemplate = $('#specialApi').html();
    var showSpecial = _.template(specialTemplate);
    var specialUrl='http://private-2d011-restaurantapi.apiary-mock.com/menu/special';
    var special_ID;

    $.getJSON(specialUrl).done(
      function(special_data) {
        special_ID = special_data.menu_item_id;
          });


    var menuTemplate = $('#menuApi').html();
    var showMenu = _.template(menuTemplate);

    var sidesTemplate = $('#sidesApi').html();
    var showSides = _.template(sidesTemplate);

    var menuUrl='http://private-2d011-restaurantapi.apiary-mock.com/menu';
    var app_ID;
    var sid_ID;
    var ent_ID;


    /*......................This is the menuApi section...................................*/
    /*.................................................................................*/

    $.getJSON(menuUrl).done(function (pullingApi) {

      pullingApi.appetizers.forEach(function(pullingFromArray) {
          app_ID = pullingFromArray.id;
          $('.appetizers').append( showMenu(pullingFromArray));

            if(app_ID === special_ID) {

              $('.special').append(showMenu(pullingFromArray));

            };/*...........This is the end of the if statement...............*/

        });/*.............This is the end of the APPETIZERS section..........*/

$(document).ready(function(){

      pullingApi.entrees.forEach(function(pullingFromArray) {
          ent_ID = pullingFromArray.id;
          $('.entrees').append( showMenu(pullingFromArray));

            if(ent_ID === special_ID) {

              $('.special').append(showMenu(pullingFromArray));

            };/*...........This is the end of the if statement...............*/

      });/*.............This is the end of the ENTREES section..........*/



    pullingApi.sides.forEach(function(pullingFromArray) {
        sid_ID = pullingFromArray.id;

        $('.sides').append( showSides(pullingFromArray));
        if(sid_ID === special_ID) {
          $('.special').append(showSides(pullingFromArray));
        };
        });
      });/*.............This is the end of the targeting(inward) documentReady function..........*/

    });/*.............This is the end for the getJSON of the menu Api..........*/

  //});

});/*.............This is the end of the overall documentReady fucntion..........*/


// ************** END MENU SECTION ************** //
