Ember.TEMPLATES['application'] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  data.buffer.push("Portfolios");
  },"3":function(depth0,helpers,partials,data) {
  data.buffer.push("Users");
  },"5":function(depth0,helpers,partials,data) {
  data.buffer.push("AAPL");
  },"7":function(depth0,helpers,partials,data) {
  data.buffer.push("NFLX");
  },"9":function(depth0,helpers,partials,data) {
  data.buffer.push("BA");
  },"11":function(depth0,helpers,partials,data) {
  data.buffer.push("TSLA");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<header id=\"main-header\">\n  <div class=\"inner\">\n    <div class=\"row\">\n      <div class=\"two columns\">\n        <a href=\"#\" class=\"logo\">Plum</a>\n      </div>\n\n      <div class=\"three columns\">\n        <nav id=\"main-nav\">\n          <ul>\n            <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "portfolios", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "users", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          </ul>\n        </nav>\n      </div>\n\n      <div class=\"four columns\">\n        <div id=\"quick-links\">\n          <ul>\n            <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "quote", "AAPL", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(5, data),"inverse":this.noop,"types":["STRING","STRING"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "quote", "NFLX", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING","STRING"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "quote", "BA", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(9, data),"inverse":this.noop,"types":["STRING","STRING"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "quote", "TSLA", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(11, data),"inverse":this.noop,"types":["STRING","STRING"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"three columns\">\n        ");
  data.buffer.push(escapeExpression(((helpers['stock-search'] || (depth0 && depth0['stock-search']) || helperMissing).call(depth0, {"name":"stock-search","hash":{
    'data': ("model")
  },"hashTypes":{'data': "ID"},"hashContexts":{'data': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n      </div>\n    </div>\n  </div>\n</header>\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<footer id=\"main-footer\">\n  <div class=\"inner\">\n    <div class=\"row\">\n      <div class=\"six columns\">\n        <div class=\"copyright\">Copyright &copy; 2015. All rights reserved.</div>\n      </div>\n      <div class=\"six columns\">\n        <div class=\"author\">Created by <a href=\"http://jadn.co\">Jaden Dessureault.</a></div>\n      </div>\n    </div>\n  </div>\n</footer>");
  return buffer;
},"useData":true});
Ember.TEMPLATES['error'] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "";
},"useData":true});
Ember.TEMPLATES['loading'] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("<h2>Loading.. </h2>");
  },"useData":true});
Ember.TEMPLATES['not-found'] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("<h1>404 Not Found</h1>");
  },"useData":true});
Ember.TEMPLATES['portfolio'] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<div><b>Name:</b> ");
  stack1 = helpers._triageMustache.call(depth0, "name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n<div><b>Value:</b> ");
  stack1 = helpers._triageMustache.call(depth0, "value", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>");
  return buffer;
},"useData":true});
Ember.TEMPLATES['portfolios'] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<div><b>Title:</b> ");
  stack1 = helpers._triageMustache.call(depth0, "portfolio.name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n<div><b>Value:</b> ");
  stack1 = helpers._triageMustache.call(depth0, "portfolio.value", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n<br>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<h3>Portfolios:</h3>\n\n");
  stack1 = helpers.each.call(depth0, "portfolio", "in", "controller", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"useData":true});
Ember.TEMPLATES['quote'] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<main id=\"quote\" class=\"main-page\">\n  <section>\n    <div class=\"inner\">\n      <div class=\"row\">\n        <div class=\"nine columns\">\n          <div class=\"name\">");
  stack1 = helpers._triageMustache.call(depth0, "name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n          <div class=\"ticker\">");
  stack1 = helpers._triageMustache.call(depth0, "ticker", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n          <div class=\"price\">");
  stack1 = helpers._triageMustache.call(depth0, "price", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n          <div class=\"graph\"></div>\n        </div>\n\n        <div class=\"three columns\">\n          <div><b>Volume:</b> ");
  data.buffer.push(escapeExpression(((helpers.withCommas || (depth0 && depth0.withCommas) || helperMissing).call(depth0, "volume", {"name":"withCommas","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("</div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n\n");
  return buffer;
},"useData":true});
Ember.TEMPLATES['user'] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<h3>User</h3>\n\n\n\n<div><b>Name:</b> ");
  stack1 = helpers._triageMustache.call(depth0, "name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n<div><b>Username:</b> ");
  stack1 = helpers._triageMustache.call(depth0, "username", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n<br>");
  return buffer;
},"useData":true});
Ember.TEMPLATES['users'] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<div><b>Name:</b> ");
  stack1 = helpers._triageMustache.call(depth0, "user.name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n<div><b>Username:</b> ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "user", "user.username", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n<br>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "user.username", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<h3>Users:</h3>\n\n");
  stack1 = helpers.each.call(depth0, "user", "in", "controller", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"useData":true});
Ember.TEMPLATES['components/stock-search'] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<div id=\"main-search\">\n  ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'role': ("search"),
    'valueBinding': ("term"),
    'search': ("search"),
    'placholder': ("Searh Ticker")
  },"hashTypes":{'role': "STRING",'valueBinding': "STRING",'search': "STRING",'placholder': "STRING"},"hashContexts":{'role': depth0,'valueBinding': depth0,'search': depth0,'placholder': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n  <div id=\"search-results\">\n    <ul>\n      <li> - ");
  stack1 = helpers._triageMustache.call(depth0, "term", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    </ul>\n  </div>\n</div>");
  return buffer;
},"useData":true});