$(document).on('turbolinks:load', function() {
  if($('.users.show').length !== 0) {
    // alert('All artworks');
    getArtworks();
  }
  getSales();

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
      // data: { type: 'sales' },
      dataType: 'json',
      success: function(response){ 
        // displaySales(response);
      }
    });
  }

  function getSales() {
    $('#my-sales').on('click', function(e){
      e.preventDefault();
      let userId = $('h2').attr('id');
      $.ajax({
        url: '/users/' + userId + '/sales',
        type: 'get',
        // data: { type: 'sales' },
        dataType: 'json',
        success: function(response){ 
          // here we would need to have a function to iterate over the response and turn each artwork
          // into a JS object
          displaySales(response);
        }
      });
    });
  }

  // $('#my-sales').on('click', function(e){
  //   e.preventDefault();
  //   $.ajax({
  //     url: window.location.href,
  //     type: 'get',
  //     data: { type: 'sales' },
  //     dataType: 'json',
  //     success: function(response){ 
  //       displaySales(response);
  //     }
  //   });
  // });
  $('#my-purchases').on('click', function(){
    $.ajax({
      url: window.location.href,
      type: 'get',
      data: { type: 'purchases' },
      dataType: 'json',
      success: function(response){ 
        displayPurchases(response);
      }
    });
  });
});

function formatResponse(response) {
  let template = $('#artworks').html();
  let templateScript = Handlebars.compile(template);
  return templateScript(response);
}

function displaySales(response) {
  let html = formatResponse(response);
  $('#art-sales').html(html);
}

function displayPurchases(response) {
  let html = formatResponse(response);
  $('#art-purchases').html(html);
}
