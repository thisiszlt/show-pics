(this["webpackJsonpshow-pics"]=this["webpackJsonpshow-pics"]||[]).push([[0],{159:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),i=(n(87),n(57)),l=n(74),s=n(75),u=n(81),m=n(80),p=n(60),h=(n(158),Array.from(new Array(4)).map((function(e,t){return{picture:t+".PNG"}}))),f=window.innerHeight;var d=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).showModal=function(e){return function(t){t.preventDefault(),console.log(e),a.setState(Object(i.a)({},e,!0))}},a.onClose=function(e){return function(){a.setState(Object(i.a)({},e,!1))}},a.onWrapTouchStart=function(e){/iPhone|iPod|iPad/i.test(navigator.userAgent)&&(function(e,t){for(var n=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;e;){if(n.call(e,t))return e;e=e.parentElement}return null}(e.target,".am-modal-content")||e.preventDefault())},a.state={pic0:!1,pic1:!1,pic2:!1,pic3:!1},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=Array.from(new Array(4)).map((function(t,n){var a="pic".concat(n);return o.a.createElement(p.b,{visible:e.state[a],transparent:!0,onClose:e.onClose(a),popup:!0,wrapProps:{onTouchStart:e.onWrapTouchStart},key:a},o.a.createElement("div",{style:{position:"relative",height:f-140,overflow:"scroll"}},o.a.createElement("img",{src:"".concat(n,".PNG"),alt:"",style:{height:"100%",objectFit:"cover"}})))}));return o.a.createElement("div",{style:{position:"absolute",transform:"translate(-50%,50%)",bottom:"50%",left:"50%"}},o.a.createElement(p.a,{data:h,columnNum:2,square:!1,hasLine:!1,renderItem:function(t,n){return o.a.createElement("div",{style:{padding:0},onClick:e.showModal("pic".concat(n))},o.a.createElement("img",{src:t.picture,style:{height:f/2-100},alt:""}))},itemStyle:{padding:0}}),t)}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,t,n){e.exports=n(159)},87:function(e,t,n){}},[[82,1,2]]]);
//# sourceMappingURL=main.5dce1e5f.chunk.js.map