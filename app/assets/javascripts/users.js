$(document).on('turbolinks:load', function() {
  let userId = $('.main-container').attr('id');
  // page detection using class name of body
  if($('.users.show').length !== 0) {
    getUser(userId);
  }
  // attach event listener to #my-sales and #my-purchases
  attachListeners(userId);
});

function attachListeners(userId){
  $('#all-artworks').on('click', function(e){
    e.preventDefault();
    getUser(userId);
  });

  $('#my-sales').on('click', function(e){
    e.preventDefault();
    getSales(userId);
  });

  $('#my-purchases').on('click', function(e){
    e.preventDefault();
    getPurchases(userId);
  });

  $('.main-container').on('click', '.artwork-controls .btn', function(){
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

  renderHTML() {
    return "<h2>Profile of: " + this.email + "</h2>";
  }
}

// return an array of JS objects
function createArtworks(artworks) {
  if (artworks.length !== 0) {
    return artworks.map(artwork => new Artwork(artwork));
  } else {
    return artworks;
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

function getUser(userId) {
  $.ajax({
    url: '/users/' + userId,
    type: 'get',
    dataType: 'json',
    success: function(response) {
      let user = new User(response.user);
      let artworks = createArtworks(user.artworks);
      displayUserInfo(user);
      if (user.owner) {
        displayArtworks('owner-artworks', artworks);
      } else {
        displayArtworks('public-artworks',artworks);
      }
    }
  });
}

function getSales(userId) {
  $.ajax({
    url: '/users/' + userId + '/sales',
    type: 'get',
    dataType: 'json',
    success: function(response){
      let artworks = [];
      if (response.artworks) {
        artworks = createArtworks(response.artworks);
      }
      displaySales('commerce-artworks', artworks);
    }
  });
}

function getPurchases(userId) {
  $.ajax({
    url: '/users/' + userId + '/purchases',
    type: 'get',
    dataType: 'json',
    success: function(response){
      let artworks = [];
      if (response.artworks) {
        artworks = createArtworks(response.artworks);
      }
      artworks = createArtworks(response.artworks);
      displayPurchases('commerce-artworks', artworks);
    }
  });
}

function destroyArtwork(url) {
  $.ajax({
    url: url,
    method: 'DELETE',
    dataType: 'json',
    success: function(response) {
      displayArtworks('owner-artworks', response.user.artworks);
    }
  });
}
