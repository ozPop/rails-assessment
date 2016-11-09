$(document).on('turbolinks:load', function() {
  let userId = $('h2').attr('id');

  if($('.users.show').length !== 0) {
    getArtworks();
  }
  // attach event listener to #my-sales and #my-purchases
  attachListeners();
});


class Artwork {
  constructor({id, title, description, price, image_file_name}) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.image_file_name = image_file_name;
  }

  // formatter instance method
  // this might me useful on the artwork/show
  renderHTML() {
    console.log('this would be html or handlebars...');
    // code here...
  }
}

function attachListeners(){
  $('#my-sales').on('click', function(e){
    e.preventDefault();
    getSales();
  });

  $('#my-purchases').on('click', function(e){
    e.preventDefault();
    getPurchases();
  });
}

function getArtworksOnClick() {
  $('#all-artworks').on('click', function(e){
    e.preventDefault();
    getArtworks();
  });
}

function getArtworks() {
  let userId = $('h2').attr('id');

  $.ajax({
    url: '/users/' + userId,
    type: 'get',
    dataType: 'json',
    success: function(response){ 
      // displaySales(response);
      console.log(response);
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
      // here we would need to have a function to iterate over the response and turn each artwork
      // into a JS object
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
