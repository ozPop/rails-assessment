$(document).on('turbolinks:load', function() {
  let userId = $('h2').attr('id');

  if($('.users.show').length !== 0) {
    getArtworks();
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

function getArtworks() {
  let userId = $('h2').attr('id');

  $.ajax({
    url: '/users/' + userId,
    type: 'get',
    dataType: 'json',
    success: function(response){
      let artworks = [];
      if (response.user.artworks) {
        artworks = createArtworks(response.user.artworks);
      }
      displayArtworks(artworks);
    }
  });
}

function getSales() {
  let userId = $('h2').attr('id');

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
  let userId = $('h2').attr('id');

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

function formatResponse(response) {
  let template = $('#artworks').html();
  let templateScript = Handlebars.compile(template);
  return templateScript(response);
}

function displayArtworks(artworks) {
  let html = formatResponse(artworks);
  $('#all-art').html(html);
}

function displaySales(artworks) {
  let html = formatResponse(artworks);
  $('#art-sales').html(html);
}

function displayPurchases(artworks) {
  let html = formatResponse(artworks);
  $('#art-purchases').html(html);
}

// return an array of JS objects
function createArtworks(artworks){
  if (artworks.length !== 0) {
    return artworks.map(artwork => new Artwork(artwork));
  } else {
    return [];
  }
}
