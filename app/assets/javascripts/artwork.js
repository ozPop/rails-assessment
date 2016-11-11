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

  // formatter instance method
  renderHTML() {
    let html = `<h1>${this.title}</h1>`;
    html += `<img class="img-responsive thumbnail" width="800" alt="${this.title}" src="/system/images/${this.image_file_name}" />`;
    return html;
  }
}

function attachFormListener() {
  $( "form" ).on( "submit", function(e) {
    e.preventDefault();
    createArtwork(this);
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
      console.log(response);
      let artwork = new Artwork(response.artwork);
      let html = artwork.renderHTML();
      // NOTE: this needs to be refactored to include all info we want
      // from the image, by reactoring the renderHTML() prototype method
    $('.artwork-new').html(html);
    }
  });
}

function getArtwork(url) {
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    success: function(response){
      let $target = $('.main-container');
      let html = new Artwork(response.artwork).renderHTML();
      $target.html(html);
      console.log('Response: ', response.artwork);
    }
  });
}
