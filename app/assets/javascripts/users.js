$(document).on("turbolinks:load",function(){
  $('#my-sales').on('click', function(){

    $.ajax({
      url: window.location.href,
      type: 'get',
      data: { type: 'sales' },
      dataType: 'json',
      success: function(response){ 
        displaySales(response);
      }
    });
  });
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
  $('#art-sales').html(html);
}
