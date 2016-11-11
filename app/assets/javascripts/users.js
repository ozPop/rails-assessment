$(document).on('turbolinks:load', function() {
  // page detection using class name of body
  if($('.users.show').length !== 0) {
    getUser();
  }
  // attach event listener to #my-sales and #my-purchases
  attachListeners();
});

function attachListeners(){
  $('#all-artworks').on('click', function(e){
    e.preventDefault();
    getUser();
  });

  $('#my-sales').on('click', function(e){
    e.preventDefault();
    getSales();
  });

  $('#my-purchases').on('click', function(e){
    e.preventDefault();
    getPurchases();
  });
  $('.main-container').on('click', '.listing-controls .btn', function(){
    modifyArtwork($(this));
  });
}

class User {
  constructor(userObject) {
    this.id = userObject.id;
    this.email = userObject.email;
    this.seller = userObject.seller;
    this.owner = userObject.owner;
    this.artworks = userObject.artworks;
  }
}

// return an array of JS objects
function createArtworks(artworks){
  if (artworks.length !== 0) {
    return artworks.map(artwork => new Artwork(artwork));
  } else {
    return [];
  }
}

function modifyArtwork(element) {
  // NOTE: This is very brittle targeting! Consider refactoring.
  let imgUrl = element.parent().parent().children(':first-child').attr('href');
  let className = element.attr('class').split(' ').pop();
  if (className === 'btn-default') {
    let url = imgUrl + "/edit";
    $(location).attr('href', url);
  }
  if ( className === 'btn-danger') {
    destroyArtwork(imgUrl);
  }
}

// AJAX CALLS

function getUser() {
  let userId = $('.main-container').attr('id');

  $.ajax({
    url: '/users/' + userId,
    type: 'get',
    dataType: 'json',
    success: function(response){
      let user = new User(response.user);
      let artworks = [];
      if (user.artworks) {
        artworks = createArtworks(user.artworks);
      }
      displayUserInfo(user);
      if (user.owner) {
        displayOwnerArtworks(user.artworks);
      } else {
        displayPublicArtworks(user.artworks);
      }
    }
  });
}

function getSales() {
  let userId = $('.main-container').attr('id');

  $.ajax({
    url: '/users/' + userId + '/sales',
    type: 'get',
    dataType: 'json',
    success: function(response){
      let artworks = [];
      if (response.artworks) {
        artworks = createArtworks(response.artworks);
      }
      displaySales(artworks);
    }
  });
}

function getPurchases() {
  let userId = $('.main-container').attr('id');

  $.ajax({
    url: '/users/' + userId + '/purchases',
    type: 'get',
    dataType: 'json',
    success: function(response){
      let artworks = [];
      if (response.artworks) {
        artworks = createArtworks(response.artworks);
      }
      displayPurchases(artworks);
    }
  });
}

function destroyArtwork(url) {
  $.ajax({
    url: url,
    method: 'DELETE',
    success: function(response) {
      displayOwnerArtworks(response.user.artworks);
    }
  });
}

// HANDLEBARS TEMPLATE COMPILERS
function formatPublicArtworks(artworks) {
  let template = $('#public-artworks-template').html();
  let templateScript = Handlebars.compile(template);
  return templateScript(artworks);
}

function formatOwnerArtworks(artworks) {
  let template = $('#owner-artworks-template').html();
  let templateScript = Handlebars.compile(template);
  return templateScript(artworks);
}

function formatCommerceArtworks(artworks) {
  let template = $('#commerce-template').html();
  let templateScript = Handlebars.compile(template);
  return templateScript(artworks);
}

// DISPLAYING OF THINGS

function displayUserInfo(user) {
  $('.owner-info').html("<h2>Profile of: " + user.email + "</h2>");
}

function displayPublicArtworks(artworks) {
  let html = formatPublicArtworks(artworks);
  $('#all-art').html(html);
}

function displayOwnerArtworks(artworks) {
  let html = formatOwnerArtworks(artworks);
  $('#all-art').html(html);
}

function displaySales(artworks) {
  let html = formatCommerceArtworks(artworks);
  $('#art-sales').html(html);
}

function displayPurchases(artworks) {
  let html = formatCommerceArtworks(artworks);
  $('#art-purchases').html(html);
}
