
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
    pullingApi.forEach( function(pullingFromArray) {
        $('.menu').append( showMenu(pullingFromArray));
  });

});


var repoTemplate = $('#repoApi').html();
var showRepo = _.template(repoTemplate);
var repoUrl='https://api.github.com/users/elmasrya/repos';

$.getJSON(repoUrl).done(
  function (user) {
    user.forEach( function(x) {
    $('.repoSec').append( showRepo(x));
  });

});
