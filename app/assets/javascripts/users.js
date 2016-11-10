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
    getArtworks();
  });

  $('#my-sales').on('click', function(e){
    e.preventDefault();
    getSales();
  });

  $('#my-purchases').on('click', function(e){
    e.preventDefault();
    getPurchases();
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

function getArtworks() {
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

// HANDLEBARS TEMPLATE COMPILERS
function formatPublicArtworksResponse(response) {
  let template = $('#public-artworks-template').html();
  let templateScript = Handlebars.compile(template);
  return templateScript(response);
}

function formatOwnerArtworksResponse(response) {
  let template = $('#owner-artworks-template').html();
  let templateScript = Handlebars.compile(template);
  return templateScript(response);
}

function formatCommerceResponse(response) {
  let template = $('#commerce-template').html();
  let templateScript = Handlebars.compile(template);
  return templateScript(response);
}

// DISPLAYING OF THINGS

function displayUserInfo(user) {
  $('.tabs').prepend($('<h2>Profile of: '+ user.email +'</h2>'));
}

function displayPublicArtworks(artworks) {
  let html = formatPublicArtworksResponse(artworks);
  $('#all-art').html(html);
}

function displayOwnerArtworks(artworks) {
  let html = formatOwnerArtworksResponse(artworks);
  $('#all-art').html(html);
}

function displaySales(artworks) {
  let html = formatCommerceResponse(artworks);
  $('#art-sales').html(html);
}

function displayPurchases(artworks) {
  let html = formatCommerceResponse(artworks);
  $('#art-purchases').html(html);
}
