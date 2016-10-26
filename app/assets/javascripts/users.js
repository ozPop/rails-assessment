$(document).on("turbolinks:load",function(){
  $('#my-sales').on('click', function(){

    $.ajax({
      url: window.location.href,
      type: 'get',
      data: { type: 'sales' },
      dataType: 'json',
      success: function(response){ 
        console.log('sales', response);
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
        console.log('purchases', response);
      }
    });
  });
});

// Take the objects returned and format it to HTML and append to page
// have empty div to receive the payload 