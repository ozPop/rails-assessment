// HANDLEBARS TEMPLATE COMPILERS
function formatArtworks(templateName, artworks) {
  let templateScript = Handlebars.templates[templateName];
  return templateScript(artworks);
}

// DISPLAYING OF THINGS

function displayUserInfo(user) {
  $('.owner-info').html(user.renderHTML());
}

function displayArtworks(templateName, artworks) {
  let html = formatArtworks(templateName, artworks);
  $('#all-art').html(html);
}

function displaySales(templateName, artworks) {
  let html = formatArtworks(templateName, artworks);
  $('#art-sales').html(html);
}

function displayPurchases(templateName, artworks) {
  let html = formatArtworks(templateName, artworks);
  $('#art-purchases').html(html);
}

function displayArtwork(templateName, artwork) {
  let html = formatArtworks(templateName, artwork);
  $('.main-container').html(html);
}
