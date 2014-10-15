
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

$.getJSON(specialUrl).done(
  function (pullingApi) {
    $('.special').append( showSpecial(pullingApi) );
});

var menuTemplate = $('#menuApi').html();
var showMenu = _.template(menuTemplate);
var menuUrl='http://restaurantapi.apiary-mock.com/menu';

$.getJSON(menuUrl).done(
  function (pullingApi) {
    pullingApi.entrees.forEach(
      function(pullingFromArray) {
         $('.menu').append( showMenu(pullingFromArray));
  });

});
