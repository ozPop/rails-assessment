(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['commerce-artworks'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "  <div class=\"col-sm-6 col-md-4\">\n    <div class=\"thumbnail\">\n<a href=\"/users/"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.artist : depth0)) != null ? stack1.id : stack1), depth0))
    + "/artworks/"
    + alias1(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><img src=\"/system/images/"
    + alias1(((helper = (helper = helpers.image_file_name || (depth0 != null ? depth0.image_file_name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"image_file_name","hash":{},"data":data}) : helper)))
    + "\" class=\"img-responsive\" alt=\""
    + alias1(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data}) : helper)))
    + "\"></a>\n      <div class=\"caption\">\n        <h4>"
    + alias1(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n        <p>"
    + alias1(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n        <p>price: "
    + alias1(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"price","hash":{},"data":data}) : helper)))
    + "</p>\n      </div>\n    </div>\n  </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['owner-artworks'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "  <div class=\"col-sm-6 col-md-4\">\n    <div class=\"thumbnail\">\n<a href=\"/users/"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.artist : depth0)) != null ? stack1.id : stack1), depth0))
    + "/artworks/"
    + alias1(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><img src=\"/system/images/"
    + alias1(((helper = (helper = helpers.image_file_name || (depth0 != null ? depth0.image_file_name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"image_file_name","hash":{},"data":data}) : helper)))
    + "\" class=\"img-responsive\" alt=\""
    + alias1(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data}) : helper)))
    + "\"></a>\n      <div class=\"caption\">\n        <h4>"
    + alias1(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n        <p>"
    + alias1(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n        <p>price: "
    + alias1(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"price","hash":{},"data":data}) : helper)))
    + "</p>\n      </div>\n      <div class=\"artwork-controls\">\n        <!-- modifying these classes may affect #modifyArtwork behavior!! -->\n        <button class=\"btn btn-default\">Edit</button>\n        <button class=\"btn btn-danger\">Delete</button>\n      </div>\n    </div>\n  </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['public-artworks'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "  <div class=\"col-sm-6 col-md-4\">\n    <div class=\"thumbnail\">\n<a href=\"/users/"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.artist : depth0)) != null ? stack1.id : stack1), depth0))
    + "/artworks/"
    + alias1(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><img src=\"/system/images/"
    + alias1(((helper = (helper = helpers.image_file_name || (depth0 != null ? depth0.image_file_name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"image_file_name","hash":{},"data":data}) : helper)))
    + "\" class=\"img-responsive\" alt=\""
    + alias1(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data}) : helper)))
    + "\"></a>\n      <div class=\"caption\">\n        <h4>"
    + alias1(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n        <p>"
    + alias1(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n        <p>price: "
    + alias1(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"price","hash":{},"data":data}) : helper)))
    + "</p>\n      </div>\n    </div>\n  </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['show-artwork'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "  <div id=\"artwork-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <h2>Title: "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n    <p>Description: "
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n    <p>Artist: <a href=\"/users/"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.artist : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.artist : depth0)) != null ? stack1.email : stack1), depth0))
    + "</a></p>\n    <img src=\"/system/images/"
    + alias4(((helper = (helper = helpers.image_file_name || (depth0 != null ? depth0.image_file_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_file_name","hash":{},"data":data}) : helper)))
    + "\" class=\"img-responsive thumbnail\" alt=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n  </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();