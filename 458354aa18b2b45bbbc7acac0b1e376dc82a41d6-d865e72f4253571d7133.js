(self.webpackChunkethberlin=self.webpackChunkethberlin||[]).push([[68],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var u,c,l,s;if(Array.isArray(e)){if((u=e.length)!=i.length)return!1;for(c=u;0!=c--;)if(!a(e[c],i[c]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!a(c.value[1],i.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((u=e.length)!=i.length)return!1;for(c=u;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((u=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!a(e[l[c]],i[l[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},1230:function(e,t,n){"use strict";n.d(t,{o:function(){return c},s:function(){return E}});var r=n(181);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=n(7294);function i(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=function(e){var t=E(e);return a.createElement(a.Fragment,null,t)},l=Object.defineProperty,s=Object.defineProperties,f=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,y=function(e,t,n){return t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},h=function(e,t){for(var n in t||(t={}))m.call(t,n)&&y(e,n,t[n]);if(p){var r,o=i(p(t));try{for(o.s();!(r=o.n()).done;){n=r.value;d.call(t,n)&&y(e,n,t[n])}}catch(a){o.e(a)}finally{o.f()}}return e},v=function(e,t){return s(e,f(t))},b="undefined"==typeof window?a.useEffect:a.useLayoutEffect,g={easeOutQuad:function(e,t,n,r){return-n*(e/=r)*(e-2)+t},easeInQuad:function(e,t,n,r){return n*(e/=r)*e+t},random:function(e,t,n){return Math.floor(Math.random()*(n-t+1)+t)},linear:function(e,t,n,r){return n*e/r+t}},T=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;return e[Math.floor(Math.random()*e.length)]},E=function(e){var t,n=(0,a.useRef)(),r=(0,a.useRef)([]),i=function(e){var t=e.isPlaying,n=e.duration,r=e.startAt,i=void 0===r?0:r,u=e.updateInterval,c=void 0===u?0:u,l=e.onComplete,s=e.onUpdate,f=o((0,a.useState)(i),2),p=f[0],m=f[1],d=(0,a.useRef)(-1e3*i),y=(0,a.useRef)(null),g=(0,a.useRef)(null),T=(0,a.useRef)(null),w=(0,a.useRef)({elapsedTimeRef:0,startAtRef:i,durationRef:n,updateIntervalRef:c});w.current=v(h({},w.current),{durationRef:n,updateIntervalRef:c});var E=function e(t){var n=t/1e3;if(null===g.current)return g.current=n,void(y.current=requestAnimationFrame(e));var r=w.current,o=r.durationRef,a=r.elapsedTimeRef,i=r.updateIntervalRef,u=r.startAtRef,c=a+(n-g.current);g.current=n,w.current=v(h({},w.current),{elapsedTimeRef:c});var l="number"==typeof o&&u+c>=o;m(l?o:u+(0===i?c:(c/i|0)*i)),l||(y.current=requestAnimationFrame(e))},A=function(){y.current&&cancelAnimationFrame(y.current),T.current&&clearTimeout(T.current),g.current=null},C=(0,a.useCallback)((function(e){var n="number"==typeof e?e:i;A(),w.current=v(h({},w.current),{elapsedTimeRef:0,startAtRef:n}),m(n),t&&(y.current=requestAnimationFrame(E))}),[t,i]);return b((function(){if(null==s||s(p),n&&p>=n){d.current+=1e3*n;var e=(null==l?void 0:l(d.current/1e3))||{},t=e.shouldRepeat,r=void 0!==t&&t,o=e.delay,a=void 0===o?0:o,i=e.newStartAt;r&&(T.current=setTimeout((function(){return C(i)}),1e3*a))}}),[p,n]),b((function(){return t&&(y.current=requestAnimationFrame(E)),A}),[t]),{elapsedTime:p,reset:C}}({isPlaying:e.isPlaying,duration:e.duration,updateInterval:null!=(t=e.updateInterval)?t:.065,onComplete:e.onComplete}),u=i.elapsedTime;if(n.current===u)return r.current;n.current=u,r.current=[];for(var c=function(e){var t=e.characters,n=e.duration,r=e.revealDuration,a=void 0===r?.6:r,i=e.revealEasing,u=void 0===i?"linear":i,c=e.ignoreCharacterSet,l=Array.isArray(t)?t:t.split(""),s=function(e,t){if(0===t)return[e,0];var n=t>1?1:t,r=e*(n=n<0?0:n);return[e-r,r]}(n,a),f=o(s,2),p=f[0],m=f[1],d=g[u],y=function(e,t){return 1/(e.filter((function(e){return!(null==t?void 0:t.includes(e))})).length-1)}(l,c),h=0,v=function(e){if(e||0===a)return n;var t=d(h*y,0,m,1);return h+=1,p+t};return l.map((function(e){var t=!!(null==c?void 0:c.find((function(t){return t===e})));return{character:e,isIgnored:t,revealTime:v(t)}}))}(e),l=0;l<c.length;l++){var s=c[l],f=s.character,p=s.isIgnored,m=s.revealTime,d=p||u>=m?f:w(e.characterSet);r.current.push((0,a.isValidElement)(d)?(0,a.cloneElement)(d,{key:l}):d)}return r.current}},4839:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function s(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",u),f}}},8977:function(e,t,n){"use strict";var r=n(7294),o=n(1230),a=r.forwardRef((function(e,t){var n=(0,r.useState)("3"),a=n[0],i=n[1],u=(0,r.useState)(!1),c=u[0],l=u[1],s=(0,r.useState)(!1),f=s[0],p=s[1],m=(0,r.useState)(!1),d=m[0],y=m[1];(0,r.useEffect)((function(){!function e(){l(!0),setTimeout((function(){l(!1),y(!0),i((function(e){return"3"===e?"E":"3"})),setTimeout((function(){y(!1),setTimeout((function(){e()}),7500)}),50)}),2e3)}()}),[]);var h=(0,o.s)({isPlaying:!0,duration:2,characters:"ETHB3RLIN",onComplete:function(){return p(!0)}});return r.createElement("div",{ref:t,className:"font-digi text-berlin-yellow "+e.className},r.createElement("div",{className:"flex m-0 "+e.titleClassName},r.createElement("div",{className:(c&&"glitch layers")+" blur-text-smaller sm:blur-text-small","data-text":"ETHB"+a+"rlin"},f||e.noReveal?r.createElement("span",null,"ETHB",r.createElement("span",{className:d?"invisible":""},a),"rlin"):h)),r.createElement("div",{className:(c&&"glitch")+" font-w95 blur-text-smaller "+e.subtitleClassName,"data-text":"to the power of 3"},"to the power of 3"))}));t.Z=a},411:function(e,t,n){"use strict";var r=n(7294),o=function(e){var t=e.className,n=e.isPrimaryColor,o=e.smallScreen;return r.createElement("div",{className:"whitespace-pre font-mono text-[4px] xl:text-[6px] tracking-wider "+t,style:{color:n?"rgba(255, 210, 0, 0.5)":"rgba(158, 141, 226, 0.75)",marginTop:!o&&"60vh"}},"\n                                                 ~.                                                 \n                                                73:.                                                \n                                              .J5J::.                                               \n                                             ^333J:.::                                              \n                                            !5333J:.:::.                                            \n                                          .J53333J:.::::.                                           \n                                         :3533333J:.:::::.                                          \n                                        ~53333333J:.:::::::.                                        \n                                       ?533333333J:.::::::::.                                       \n                                     .J5333333333J:.:::::::::.                                      \n                                    ^333333333333J:.:::::::::::                                     \n                                   75333333333333J:.::::::::::::.                                   \n                                 .J53333333333333J:.:::::::::::::.                                  \n                                :3333333333333333J:.::::::::::::::.                                 \n                               !53333333333333333J:.::::::::::::::::.                               \n                             .?533333333333333333J:.:::::::::::::::::.                              \n                            :35333333333333333333J:.::::::::::::::::::.                             \n                           ~333333333333333333333J:.::::::::::::::::::::.                           \n                          75333333333333333333333J:.:::::::::::::::::::::.                          \n                        .J53333333333333333333333J:.::::::::::::::::::::::.                         \n                       ^3333333333333333333333333J:.:::::::::::::::::::::::.                        \n                      !53333333333333333333333333J:.:::::::::::::::::::::::::.                      \n                    .?533333333333333333333333333J:.::::::::::::::::::::::::::.                     \n                   :35333333333333333333333333333J:.:::::::::::::::::::::::::::.                    \n                  ~533333333333333333333333333333J:.:::::::::::::::::::::::::::::.                  \n                 75333333333333333333333333333333J:.::::::::::::::::::::::::::::::.                 \n               .J53333333333333333333333333333333J:.:::::::::::::::::::::::::::::::.                \n              ^3333333333333333333333333333333335J:::::::::::::::::::::::::::::::::::               \n             !53333333333333333333333333333333J7!^.....:::::::::::::::::::::::::::::::.             \n           .J5333333333333333333333333533J?!~^::::     .....:::::::::::::::::::::::::::.            \n          :3533333333333333333333333J?!~^:::::::::          ....::::::::::::::::::::::::.           \n         ~5333333333333333333333?7~^::::::::::::::               ....:::::::::::::::::::::.         \n        ?533333333333333533J7!^:::::::::::::::::::                    ....:::::::::::::::::.        \n      .J53333333333333J?!~^:::::::::::::::::::::::                        .....:::::::::::::.       \n     ^333333333333?7~^::::::::::::::::::::::::::::                             ....:::::::::::      \n    753333333J7~^:::::::::::::::::::::::::::::::::                                  ....:::::::.    \n  .J5533J?!~^:::::::::::::::::::::::::::::::::::::                                      .....:::.   \n ^33?!~^::::::::::::::::::::::::::::::::::::::::::                                           .....  \n:~^:::::::::::::::::::::::::::::::::::::::::::::::                                                . \n   ..:::::::::::::::::::::::::::::::::::::::::::::                                                  \n      ..::::::::::::::::::::::::::::::::::::::::::                                                  \n          ..::::::::::::::::::::::::::::::::::::::                                                  \n              .:::::::::::::::::::::::::::::::::::                                                  \n.:.              ..:::::::::::::::::::::::::::::::                                                  \n .7J!.               ..:::::::::::::::::::::::::::                                             .:.  \n   :3537^.               .::::::::::::::::::::::::                                         ..:::    \n     !5553J!:               ..::::::::::::::::::::                                      .:::::.     \n      :J533553?~.               ..::::::::::::::::                                  ..:::::::       \n        !5333335537^.              ..:::::::::::::                              ..:::::::::.        \n         :J5333333553J!:               ..:::::::::                           .::::::::::::          \n           !3333333333553?~.               .::::::                       ..:::::::::::::.           \n            .J53333333333355J7^.              ..::                   ..::::::::::::::::             \n              ~33333333333333553?~:                               .::::::::::::::::::.              \n               .J53333333333333335537^.                       ..::::::::::::::::::::                \n                 ~333333333333333333553J!:                 .::::::::::::::::::::::.                 \n                  .?53333333333333333333553?~.         ..:::::::::::::::::::::::.                   \n                    ~353333333333333333333335537^. ..::::::::::::::::::::::::::.                    \n                     .?533333333333333333333333553:::::::::::::::::::::::::::.                      \n                       ~35333333333333333333333333::::::::::::::::::::::::::.                       \n                        .?533333333333333333333333::::::::::::::::::::::::.                         \n                          ^35333333333333333333333:::::::::::::::::::::::.                          \n                           .?533333333333333333333:::::::::::::::::::::.                            \n                             ^35333333333333333333::::::::::::::::::::.                             \n                              .7533333333333333333::::::::::::::::::.                               \n                                ^35333333333333333:::::::::::::::::.                                \n                                  7533333333333333:::::::::::::::.                                  \n                                   :35333333333333::::::::::::::                                    \n                                     7533333333333::::::::::::.                                     \n                                      :35333333333:::::::::::                                       \n                                        !533333333:::::::::.                                        \n                                         :J5333333::::::::                                          \n                                           !533333::::::.                                           \n                                            :J5333:::::                                             \n                                              !553:::.                                              \n                                               .J3^:                                                \n                                                 !.                                                 \n")};o.defaultProps={isPrimaryColor:!0},t.Z=o},3019:function(e,t,n){"use strict";var r=n(7294),o=n(8977);t.Z=function(e){var t=e.className,n=e.hideLogo;return r.createElement("div",{className:"h-screen flex flex-col py-8 px-6 font-w95 fixed w-60 left-0 top-0 text-berlin-yellow "+t},r.createElement("a",{style:{textDecoration:"none"},href:"/",className:""+(n&&"invisible")},r.createElement(o.Z,{titleClassName:"text-5xl",subtitleClassName:""})),r.createElement("nav",{className:"flex flex-col mt-[5.5rem] text-xl text-left"},r.createElement("a",{className:"my-2",href:"/about"}," ","(a)bout"),r.createElement("a",{className:"my-2",href:"/manifesto"}," ","(m)anifesto"),r.createElement("a",{className:"my-2",href:"/hack"}," ","(h)ack"),r.createElement("a",{className:"my-2",href:"/program"}," ","(p)rogram"),r.createElement("a",{className:"my-2",href:"/contribute"}," ","(c)ontribute"),r.createElement("a",{className:"my-2",href:"/sponsor"}," ","(s)ponsor")),r.createElement("div",{className:"mt-auto"},r.createElement("div",{className:"my-2"},"join our"," ",r.createElement("a",{className:"underline",href:"https://matrix.to/#/%23ethberlin:matrix.org",target:"_blank",rel:"noreferrer"},"matrix space"),r.createElement("br",null),"or"," ",r.createElement("a",{className:"underline",href:"mailto:henlo@ethberlin.ooo",target:"_blank",rel:"noreferrer"},"e-mail us"))))}},3771:function(e,t,n){"use strict";n.d(t,{Z:function(){return ve}});var r,o,a,i,u=n(7294),c=n(5697),l=n.n(c),s=n(4839),f=n.n(s),p=n(2993),m=n.n(p),d=n(6494),y=n.n(d),h="bodyAttributes",v="htmlAttributes",b="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(g).map((function(e){return g[e]})),"charset"),w="cssText",E="href",A="http-equiv",C="innerHTML",O="itemprop",S="name",x="property",j="rel",J="src",P="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",k="defer",R="encodeSpecialCharacters",L="onChangeClientState",M="titleTemplate",_=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),q=[g.NOSCRIPT,g.SCRIPT,g.STYLE],D="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=G(e,g.TITLE),n=G(e,M);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=G(e,N);return t||r||void 0},V=function(e){return G(e,L)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},W=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],c=u.toLowerCase();-1===t.indexOf(c)||n===j&&"canonical"===e[n].toLowerCase()||c===j&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==C&&u!==w&&u!==O||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],c=y()({},r[u],o[u]);r[u]=c}return e}),[]).reverse()},G=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ce(g.BODY,r),ce(g.HTML,o),ue(f,p);var m={baseTag:le(g.BASE,n),linkTags:le(g.LINK,a),metaTags:le(g.META,i),noscriptTags:le(g.NOSCRIPT,u),scriptTags:le(g.SCRIPT,l),styleTags:le(g.STYLE,s)},d={},y={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(y[e]=m[e].oldTags)})),t&&t(),c(e,d,y)},ie=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(g.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(D),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===o.indexOf(c)&&o.push(c);var s=a.indexOf(c);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(D):n.getAttribute(D)!==i.join(",")&&n.setAttribute(D,i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(D,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[D]=!0,o=fe(n,r),[u.createElement(g.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case v:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[D]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===C||n===w){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),u.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(g.BASE,t,r),bodyAttributes:pe(h,n,r),htmlAttributes:pe(v,o,r),link:pe(g.LINK,a,r),meta:pe(g.META,i,r),noscript:pe(g.NOSCRIPT,u,r),script:pe(g.SCRIPT,c,r),style:pe(g.STYLE,l,r),title:pe(g.TITLE,{title:f,titleAttributes:p},r)}},de=f()((function(e){return{baseTag:W([E,P],e),bodyAttributes:Q(h,e),defer:G(e,k),encode:G(e,R),htmlAttributes:Q(v,e),linkTags:$(g.LINK,[j,E],e),metaTags:$(g.META,[S,T,A,x,O],e),noscriptTags:$(g.NOSCRIPT,[C],e),onChangeClientState:V(e),scriptTags:$(g.SCRIPT,[J,C],e),styleTags:$(g.STYLE,[w],e),title:Z(e),titleAttributes:Q(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),me)((function(){return null})),ye=(o=de,i=a=function(e){function t(){return F(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case g.TITLE:return U({},o,((t={})[r.type]=i,t.titleAttributes=U({},a),t));case g.BODY:return U({},o,{bodyAttributes:U({},a)});case g.HTML:return U({},o,{htmlAttributes:U({},a)})}return U({},o,((n={})[r.type]=U({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return u.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),u.createElement(o,r)},H(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(u.Component),a.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ye.renderStatic=ye.rewind;var he=n(1597);function ve(e){var t=e.title,n=e.description,r=e.image,o=e.article,a=(0,he.useStaticQuery)("26522286").site.siteMetadata,i=a.defaultTitle,c=a.defaultDescription,l=a.siteUrl,s=a.defaultImage,f=a.twitterUsername,p={title:t||i,description:n||c,image:""+l+(r||s),url:""+l};return u.createElement(ye,{title:p.title},u.createElement("meta",{name:"description",content:p.description}),u.createElement("meta",{name:"image",content:p.image}),p.url&&u.createElement("meta",{property:"og:url",content:p.url}),!o?null:u.createElement("meta",{property:"og:type",content:"article"}),p.title&&u.createElement("meta",{property:"og:title",content:p.title}),p.description&&u.createElement("meta",{property:"og:description",content:p.description}),p.image&&u.createElement("meta",{property:"og:image",content:p.image}),u.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),f&&u.createElement("meta",{name:"twitter:creator",content:f}),p.title&&u.createElement("meta",{name:"twitter:title",content:p.title}),p.description&&u.createElement("meta",{name:"twitter:description",content:p.description}),p.image&&u.createElement("meta",{name:"twitter:image",content:p.image}))}ve.defaultProps={title:null,description:null,image:null,article:!1}}}]);
//# sourceMappingURL=458354aa18b2b45bbbc7acac0b1e376dc82a41d6-d865e72f4253571d7133.js.map