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

function getArtwork(url) {
  $.ajax({
    url: url,
    type: 'get',
    dataType: 'json',
    success: function(response){
      let $target = $('.main-container');
      let html = new Artwork(response.artwork).renderHTML();
      $target.html(html);
      console.log('Response: ', response.artwork);
    }
  });
}
