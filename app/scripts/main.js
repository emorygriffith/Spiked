var newsTemplate = $('#newsApi').html();
var showNews = _.template(newsTemplate);
var newsUrl='http://restaurantapi.apiary-mock.com/news/latest';

$.getJSON(newsUrl).done(
  function (pullingApi) {
    $('.news').append( showNews(pullingApi) );
});





var specialTemplate = $('#specialApi').html();
var showSpecial = _.template(specialTemplate);
var specialUrl='http://restaurantapi.apiary-mock.com/menu/special';

var special_ID;
$.getJSON(specialUrl).done(function(special_data) {
      special_ID = special_data.menu_item_id;
      console.log(special_ID);
      });


$.getJSON(specialUrl).done(
        function (pullingApi) {
      $('.special').append( showSpecial(pullingApi) );
      });


var menuTemplate = $('#menuApi').html();
var showMenu = _.template(menuTemplate);
var menuUrl='http://restaurantapi.apiary-mock.com/menu';



var app_ID;
var sid_ID;
var ent_ID;

$.getJSON(menuUrl).done(
  function (pullingApi) {
    pullingApi.appetizers.forEach(
      function(pullingFromArray) {
        app_ID = pullingFromArray.id;
        console.log(app_ID);
         $('.appetizers').append( showMenu(pullingFromArray));
          });


    pullingApi.entrees.forEach(
      function(pullingFromArray) {
        ent_ID = pullingFromArray.id;
        console.log(ent_ID);
         $('.entrees').append( showMenu(pullingFromArray));
          });

    pullingApi.sides.forEach(
      function(pullingFromArray) {
        sid_ID = pullingFromArray.id;
        console.log(sid_ID);
         $('.sides').append( showMenu(pullingFromArray));
       });
       if (special_ID===ent_ID) {
          (special_data=pullingFromArray.item)
          (special_data=pullingFromArray.price)
          (special_data=pullingFromArray.description)
          //console.log(pullingFromArray.description);
       }


    });
