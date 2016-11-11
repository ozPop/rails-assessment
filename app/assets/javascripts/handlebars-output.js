// HANDLEBARS TEMPLATE COMPILERS
function formatPublicArtworks(artworks) {
  let template = $('#public-artworks-template').html();
  let templateScript = Handlebars.compile(template);
  return templateScript(artworks);
}

function formatOwnerArtworks(artworks) {
  let template = $('#owner-artworks-template').html();
  let templateScript = Handlebars.compile(template);
  return templateScript(artworks);
}

function formatCommerceArtworks(artworks) {
  let template = $('#commerce-template').html();
  let templateScript = Handlebars.compile(template);
  return templateScript(artworks);
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
