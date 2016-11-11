// HANDLEBARS TEMPLATE COMPILERS
function formatPublicArtworks(artworks) {
  let templateScript = Handlebars.templates['public-artworks'];
  return templateScript(artworks);
}

function formatOwnerArtworks(artworks) {
  let templateScript = Handlebars.templates['owner-artworks'];
  return templateScript(artworks);
}

function formatCommerceArtworks(artworks) {
  let templateScript = Handlebars.templates['commerce-artworks'];
  return templateScript(artworks);
}

function formatShowArtwork(artwork) {
  let templateScript = Handlebars.templates['show-artwork'];
  return templateScript(artwork);
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

function displayArtwork(artwork) {
  let html = formatShowArtwork(artwork);
  $('.main-container').html(html);
}
