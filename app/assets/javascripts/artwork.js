$(document).on('turbolinks:load', function() {
  // page detection using class name of body
  if ($('.artworks.new').length !== 0) {
    attachFormListener();
  }

  // Add site-wide listener for clicks on thumbnails
  $('body').on('click', '.img-responsive', function(e){
    e.preventDefault();
    let url = $(this).parent().attr('href');
    getArtwork(url);
  });
});

class Artwork {
  constructor({id, artist, title, description, price, image_file_name}) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.image_file_name = image_file_name;
    this.artist = artist;
  }
}

function attachFormListener() {
  $( "form" ).on( "submit", function(e) {
    e.preventDefault();
    createArtwork(this);
  });
}

// AJAX CALLS

function getArtwork(url) {
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    success: function(response){
      displayArtwork(response.artwork);
    }
  });
}

function createArtwork(form) {
  let url = $(form).attr('action');
  let formData = new FormData(form);
  $.ajax({
    url: url,
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    success: function(response){
      let artwork = new Artwork(response.artwork);
      displayArtwork(artwork);
    }
  });
}
