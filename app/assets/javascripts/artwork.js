// $(document).on('turbolinks:load', function() {
//   // make sure we are on the right page
//   // in this case, the artworks/show
//   if($('.artworks.show').length !== 0) {
//     getArtwork();
//   }
// });

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
  // this might me useful on the artwork/show
  renderHTML() {
    let html = `<h1>${this.title}</h1>`;
    html += `<img class="img-responsive thumbnail" width="800" alt="${this.title}" src="/system/images/${this.image_file_name}" />`;
    return html;
      // <h1>Artwork Show Page</h1>
      // <hr />
      // <%= content_tag :div, class: 'row' do %>
      // <%= render partial: 'artwork', locals: { artwork: @artwork } %>
      // <% end %>

      console.log(`Title: ${this.title}`);
    // code here...
  }
}
