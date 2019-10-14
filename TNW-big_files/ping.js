!function(){var n={n:"1.1.6",r:"/v1/event",t:"/v1/error",e:86400,u:"/",o:{i:"_scp",c:63072e3},f:{i:"_scs",c:86400},a:{i:"_sca",c:86400},_:["utm_campaign","utm_medium","utm_source"]},r=function(){if(!(arguments.length<1)){for(var n=arguments[0],r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])}return n}},t=function(){return Math.round(new Date/1e3)},e=function(n){try{var r=new Uint32Array(1);return n.crypto.getRandomValues(r),2147483647&r[0]}catch(t){return Math.round(2147483647*Math.random())}},u=function(n){return"https://api.stack-sonar.com"+n},o=function(n,r){if("string"!=typeof n)return null;try{var t=new RegExp("(?:\\?|&(?:amp;)?)"+r+"=(.*?)(?:$|&)"),e=n.match(t)}catch(u){throw"re"}return e?c(e[1]):null},i=function(n){return encodeURIComponent(n)},c=function(n){return decodeURIComponent(n)},f=function(n){return n.location?n.location.href||"":""},a=function(r,t){if(!t||0===t.length)throw"ede";var e=function(n,t,e,u,o){if(!n)throw"ecn";var c=n+"="+i(t);e&&(c+="; path="+e),u&&(c+="; expires="+_(u)),o&&(c+="; domain="+o);try{r.cookie=c}catch(f){throw"cs"}};return{get:function(n){if(!r.cookie)return null;try{var t=new RegExp("(?:^|;)\\s*"+n+"=([^;]*)(?:;|$)"),e=r.cookie.match(t)}catch(u){throw"re"}return e?c(e[1]):null},set:function(r,u){for(var o=0,i=t.length;o<i;o++)e(r.i,u,n.u,r.c,t[o])}}},_=function(n){var r=1*new Date+1e3*n;return new Date(r).toUTCString()},l=function(n){return 1===parseInt(o(n,"scsonar"),10)},v=function(n){for(var r,t=n.getElementsByTagName("a"),e=0,u=t.length;e<u;e++)if(r=t[e].getAttribute("href"),l(r))return r;return null},s=function(n){return!(!n.SC||!n.SC.config)},p=function(n,r,t,e){var u=window.XMLHttpRequest;if(!u)return!1;var o=new u;return o.open("POST",n,!0),o.setRequestHeader("Content-Type",r),o.onreadystatechange=function(){o.readyState===XMLHttpRequest.DONE&&e&&e()},o.send(t),!0},d=function(n,r,t){return p(n,"application/json",JSON.stringify(r),t)},w=function(n,r,t){return p(n,"text/plain",r,t)},h=function(n){var r=[];for(var t in n)n.hasOwnProperty(t)&&r.push(t+"="+i(n[t]));return r.join("&")},m=function(n,r){var t=document.createElement("img");return t.width=1,t.height=1,t.onload=t.onerror=function(){t.onload=null,t.onerror=null,r&&r()},t.src=n,t},I=function(n,r,t){var e=[n,"?",r].join("");m(e,t);return!0},y=function(n){if(!n)return!0;for(var r in n)if(n.hasOwnProperty(r))return!1;return!0},A=function(n){var r=(n=n||{}).url,t=n.imgSend||I,e=n.xhrSend||w;if(!r)throw"edu";return{send:function(n,u){var o,i;if(y(n))throw"enp";if(o=h(n),(i=o.length)<=2036)t(r,o,u);else{if(!(i<=8192))throw"eps";e(r,o,u)||t(r,o,u)}}}},g=function(n){if(!n||"string"!=typeof n)return[];for(var r=n.split("\n"),t=[],e=r.length-1;e>=0;e--)r[e]&&t.push(r[e]);return t},T=function(t,e,u){var o={version:n.n,userAgent:t.navigator.userAgent,url:f(t)};return{report:function(n){var t=r({},o,{message:n.toString(),stack:g(n.stack),stackTrace:n.stack||""});u(e,t,null)}}},R=function(n,r){var t=[],e=!1,u=!1,o=function(){if(!e){e=!0;for(var n=0;n<t.length;n++)t[n]();t=[]}},i=function(){"complete"===r.readyState&&o()},c=function(){r.addEventListener?(r.addEventListener("DOMContentLoaded",o,!1),n.addEventListener("load",o,!1)):r.attachEvent&&(r.attachEvent("onreadystatechange",i),n.attachEvent("onload",o))};return function(i){e?n.setTimeout(i,1):(t.push(i),"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?n.setTimeout(o,1):u||(c(),u=!0))}},E=function(r){var t,e={},u=n._,i=f(r),c=!1;if(!i)return null;for(var a=0,_=u.length;a<_;a++)t=o(i,u[a]),e[u[a]]=t,c=c||null!==t;return c?e:null},O=function(r){if(!r)return null;var t=r.split(",");return t.length!==n._.length+1?null:parseInt(t.shift(),10)||null},C=function(r,e){if(e){for(var u=n._,o=[t()],i=0,c=u.length;i<c;i++)o.push(e[u[i]]||"");r.set(n.a,o.join(","))}},P=function(n){if(!n.location)return"";var r=""+n.location.hostname;return 0===r.indexOf("www.")?r.substring(4):r},k=function(n){var r=P(n).split(".");if(r.length<2)return[];for(var t=[],e=r.length-2;e>=0;e--)t.push(r.slice(e).join("."));return t},x=function(n){return[1*new Date,e(n)].join(".")},D=function(n,r,t){var e=x(n);return r.set(t,e),e},M=function(r,t){var e=t.get(n.o.i);return e||(e=D(r,t,n.o)),e},S=function(r,t){var e=t.get(n.f.i);return e?t.set(n.f,e):e=D(r,t,n.f),e},N=function(r){return new Date/1e3-r>n.e},U=function(r,t){var e=t.get(n.a.i),u=O(e),o=E(r);u?o&&N(u)?C(t,o):t.set(n.a,e):o&&C(t,o)},H=/^[A-Za-z_][\w.-]*$/,L=function(n){return void 0===n?"":n instanceof Array?n.map(L).join(","):"object"==typeof n?"":n},j=function(n){if("object"!=typeof n||!n)return{};var r={};for(var t in n)n.hasOwnProperty(t)&&t.match(H)&&(r[t]=L(n[t]));return r},$=function(e){if(!e.v)throw"enc";var u=e.s;return{collect:function(o,i,c){if(o&&i&&"string"==typeof o&&"string"==typeof i){var f={_v:n.n,_c:e.v,_a:e.p,_f:e.d,_u:e.w,_r:e.h,_x:e.m?1:0,_l:e.m||"",_p:e.I?1:0,_z:e.y||"",_y:e.A||"",_t:t(),_s:o,_e:i},a=j(c),_=r({},a,f);u.send(_)}}}},b=function(n){return!!n&&("stack-connect"===n[0]||"stack-connect-wp"===n[0]||"stack-connect-a"===n[0]||"stack-connect-p"===n[0])},z=function(n){try{return"string"==typeof n.cookie}catch(r){return!1}},B=function(n,r){if(!z(r))return{y:null,A:null};var t,e=k(n);if(0===e.length)return{y:null,A:null};t=a(r,e);try{return U(n,t),{y:M(n,t),A:S(n,t)}}catch(u){if("cs"===u||"re"===u)return{y:null,A:null};throw u}},V=function(n,r){for(var t=0;t<r.length;t++){var e=r[t];b(e)||n.collect.apply(n,e)}},q=function(n,r){return function(){try{n.collect.apply(n,arguments)}catch(t){r.report(t)}}},F=function(n,r,t,e){try{var u,o,i=n.stackSonar.q,c=n.stackSonar.l;if(!i)return;var a=i.shift();if(!b(a))return;u=a[0],o=a[1];var _=B(n,r),l=$({v:u,p:o,w:f(n),h:r.referrer,d:0,m:v(r),I:s(n),y:_.y,A:_.A,s:t});n.stackSonar=q(l,e),l.collect("send","session-start",{ts:c}),V(l,i)}catch(p){e.report(p)}};!function(){var r=A({url:u(n.r)}),t=T(window,u(n.t),d),e=R(window,document);try{e(function(){F(window,document,r,t)})}catch(o){t.report(o)}}()}();
