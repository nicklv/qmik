!function(a,b){function c(a,b){session&&session.setItem(a,JSON.stringify(b))}function d(a){try{return session&&session[a]?JSON.parse(session[a]):[]}catch(b){return[]}}function e(a){var b=this;b.key=a,b._queue=d(a)}function f(){c(B.key,B._queue),c(C.key,C._queue)}function g(a){v.hash=a}function h(){return A?v.hash.replace(/^#/g,"").trim():v.search.replace(/.*#/g,"").trim()}function i(b){var c=b||h()||"",d=[];return a.each(c.split(/&|&amp;/g),function(b,c){var e=c.split("=");d[a.decode(e[0])]=a.decode(e[1])}),d}function j(b,c,d){b=l(b);var e=y(c)?b:b[c];try{return e.apply(b,d||[])}catch(f){a.log(b),a.log(c),a.log(d)}}function k(b){var c,d,e;return a.isObject(b)?(c=b.module,d=b.method,e=b.param):(e=i(b),c=e[config.module],d=e[config.method]),c&&x.use(c,function(a){j(a,d,e||[])}),c}function l(b){return b.constructor!=z&&a.isFun(b)&&a.isFun(b.getInstance)&&(b=b.getInstance()),b}function m(){k()||y(config.defaultModule)||k(config.defaultModule)}function n(){a(t).on("hashchange",m)}function o(){a(t).un("hashchange",m,n)}function p(a){var b=a.touches?a.touches[0]:a;return F.x=b.clientX-E.x,F.y=b.clientY-E.y,Math.abs(F.y)>=config.navDiff?"Y":F.x>=config.navDiff?"-X":F.x<=-config.navDiff?"+X":null}function q(a){D=null,G=!0;var b=a.touches?a.touches[0]:a;E.x=b.clientX,E.y=b.clientY}function r(b){return G&&a.likeNull(D)?(D=p(b),void 0):void 0}function s(b){if(G){switch(G=!1,D&&(b.preventDefault(),b.stopPropagation()),D){case"+X":a.nav.forward();break;case"-X":a.nav.back()}D=null}}var t=a.global,u=t.document,v=location,w=a.encode,x=a.sun,y=(a.isFun,a.likeNull),z={}.constructor;session=t.sessionStorage,config={module:"module",method:"method",enableTouch:!1,navDiff:60};var A="onhashchange"in t&&(void 0===u.documentMode||u.documentMode>7);a.extend(e.prototype,{pop:function(){var a=this,b=null;return a.size()>0&&(b=a._queue[a.size()-1],a._queue.splice(a.size()-1,1)),b},push:function(a){var b=this;a&&b.get(b.size()-1)!=a&&b._queue.push(a)},get:function(a){return this._queue[a]},size:function(){return this._queue.length}});var B=new e("store_nav_goBack"),C=new e("store_nav_goForward");a(window).on({unload:f}),a(u).ready(function(){var a=h(),b=B.get(B.size()-1);a!=b&&B.push(a),m(),n()}),a.extend({nav:{use:function(b){var c=b.param||[],d=c.callback,e=b.method||"";x.use(b.module,function(f){f.constructor!=z&&a.isFun(f)&&a.isFun(f.getInstance)&&(f=f.getInstance());var h=[];h.push(w(config.module)+"="+w(b.module)),h.push(w(config.method)+"="+w(e)),a.each(c,function(a,b){h.push(w(a)+"="+w(b))});var i=h.join("&");o(),g(i),B.push(i);var k=j(f,e,c);d&&d.apply(d,[k]),a.delay(n,500)})},getInfo:function(a){var b=i();return a?b[a]:b},back:function(){if(B.size()>0){var a=B.pop();A?history.back():k(a),C.push(a)}},forward:function(){if(C.size()>0){var a=C.pop();A?history.forward():k(a),B.push(a)}},onload:function(a){y(h())&&a()},config:function(b){return a.config(b,config)}}});var D,E={x:0,y:0},F={x:0,y:0},G=!1;"true"!=a("body").attr("data-bindNav")&&a("body").on({touchstart:q,mouseover:q,mousedown:q,touchmove:r,mousemove:r,touchend:s,mouseup:s}),b(function(b,c,d){d.exports=a})}(Qmik,Qmik.define);