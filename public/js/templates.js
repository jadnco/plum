Ember.TEMPLATES['application'] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  data.buffer.push("Portfolio");
  },"3":function(depth0,helpers,partials,data) {
  data.buffer.push("User");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<div class=\"container\">\n  <ul>\n    <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "portfolio", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "user", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n  </ul>\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
},"useData":true});
Ember.TEMPLATES['portfolios'] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<div>Title: ");
  stack1 = helpers._triageMustache.call(depth0, "portfolio.name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n<div>Title: ");
  stack1 = helpers._triageMustache.call(depth0, "portfolio.value", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n<br><br><br>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("Some cool portfolios:\n\n");
  stack1 = helpers.each.call(depth0, "portfolio", "in", "model", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"useData":true});
Ember.TEMPLATES['user'] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("<h3>This is the user template</h3>");
  },"useData":true});