
/*......................This is the News section...................................*/
/*.................................................................................*/

$(document).ready(function(){

    var newsTemplate = $('#newsApi').html();
    var showNews = _.template(newsTemplate);
    var newsUrl='http://private-2d011-restaurantapi.apiary-mock.com/news/latest';

    $.getJSON(newsUrl).done(
    function (pullingApi) {
      $('.news').append( showNews(pullingApi) );
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


    /*......................This is the menuApi section...................................*/
    /*.................................................................................*/

    $.getJSON(menuUrl).done(function (pullingApi) {


      pullingApi.appetizers.forEach(function(pullingFromArray) {
          app_ID = pullingFromArray.id;
          sp_ID =pullingFromArray.spicy;
          vg_ID =pullingFromArray.vegan;
          alg_ID =pullingFromArray.allergies;
          fav_ID =pullingFromArray.favorite;

          $('.appetizers').append( showMenu(pullingFromArray));

            if(app_ID === special_ID) {

              $('.special').append(showMenu(pullingFromArray));

            };


            /*...........This is the end of the if statement...............*/

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

        };/*...........This is the end of the if statement...............*/

      });/*...........This is the end of the sides section...............*/

      });/*.............This is the end of the targeting(inward) documentReady function..........*/

    });/*.............This is the end for the getJSON of the menu..........*/


});/*.............This is the end of the overall documentReady fucntion..........*/
