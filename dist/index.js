!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-easy-slider",[],e):"object"==typeof exports?exports["vue-easy-slider"]=e():t["vue-easy-slider"]=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SliderItem=e.Slider=void 0;var r=i(1),s=n(r),a=i(19),o=n(a);e.Slider=s.default,e.SliderItem=o.default},function(t,e,i){i(2);var n=i(7)(i(8),i(18),"data-v-5dba9d84",null);t.exports=n.exports},function(t,e,i){var n=i(3);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);i(5)("a13f6a24",n,!0)},function(t,e,i){e=t.exports=i(4)(),e.push([t.id,".slider[data-v-5dba9d84]{position:relative;overflow:hidden}.slider-content[data-v-5dba9d84]{position:relative;height:100%}.slider-indicators[data-v-5dba9d84]{position:absolute;bottom:0;z-index:99;padding:1rem}.slider-center[data-v-5dba9d84]{left:50%;transform:translateX(-50%)}.slider-left[data-v-5dba9d84]{left:0}.slider-right[data-v-5dba9d84]{right:0}.slider-indicator-icon[data-v-5dba9d84]{display:inline-block;width:10px;height:10px;margin:0 .1rem;cursor:pointer;border-radius:50%;background-color:rgba(0,0,0,.2)}.slider-indicator-active[data-v-5dba9d84]{background-color:hsla(0,0%,100%,.2)}.slider-btn[data-v-5dba9d84]{position:absolute;top:50%;z-index:99;transform:translateY(-50%);cursor:pointer;background-color:#000;transition:opacity .3s;opacity:.3}.slider-btn[data-v-5dba9d84]:hover{opacity:.5}.slider-left-btn[data-v-5dba9d84]{left:0;padding:1rem .5rem .75rem .8rem}.slider-right-btn[data-v-5dba9d84]{right:0;padding:1rem .8rem .75rem .5rem}.slider-icon[data-v-5dba9d84]{display:inline-block;width:20px;height:20px;border-left:2px solid #fff;border-bottom:2px solid #fff}.slider-icon-left[data-v-5dba9d84]{transform:rotate(45deg)}.slider-icon-right[data-v-5dba9d84]{transform:rotate(-135deg)}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(n[s]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),t.push(a))}},t}},function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=c[i.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](i.parts[r]);for(;r<i.parts.length;r++)n.parts.push(a(i.parts[r]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var s=[],r=0;r<i.parts.length;r++)s.push(a(i.parts[r]));c[i.id]={id:i.id,refs:1,parts:s}}}}function r(t,e){for(var i=[],n={},r=0;r<e.length;r++){var s=e[r],a=s[0],o=s[1],l=s[2],d=s[3],c={css:o,media:l,sourceMap:d};n[a]?(c.id=t+":"+n[a].parts.length,n[a].parts.push(c)):(c.id=t+":0",i.push(n[a]={id:a,parts:[c]}))}return i}function s(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function a(t){var e,i,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]'),r=null!=n;if(r&&h)return v;if(m){var a=p++;n=f||(f=s()),e=o.bind(null,n,a,!1),i=o.bind(null,n,a,!0)}else n=n||s(),e=l.bind(null,n),i=function(){n.parentNode.removeChild(n)};return r||e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function o(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var s=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function l(t,e){var i=e.css,n=e.media,r=e.sourceMap;if(n&&t.setAttribute("media",n),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var d="undefined"!=typeof document,r=i(6),c={},u=d&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){h=i;var s=r(t,e);return n(s),function(e){for(var i=[],a=0;a<s.length;a++){var o=s[a],l=c[o.id];l.refs--,i.push(l)}e?(s=r(t,e),n(s)):s=[];for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete c[l.id]}}}};var g=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var i=[],n={},r=0;r<e.length;r++){var s=e[r],a=s[0],o=s[1],l=s[2],d=s[3],c={id:t+":"+r,css:o,media:l,sourceMap:d};n[a]?n[a].parts.push(c):i.push(n[a]={id:a,parts:[c]})}return i}},function(t,e){t.exports=function(t,e,i,n){var r,s=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(r=t,s=t.default);var o="function"==typeof s?s.options:s;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),i&&(o._scopeId=i),n){var l=Object.create(o.computed||null);Object.keys(n).forEach(function(t){var e=n[t];l[t]=function(){return e}}),o.computed=l}return{esModule:r,exports:s,options:o}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(9);e.default={data:function(){return{posFlag:0,childrenArr:[],timer:null}},props:{width:{type:String,default:"auto"},height:{type:String,default:"300px"},interval:{type:Number,default:3e3},speed:{type:Number,default:500},auto:{type:Boolean,default:!0},indicators:{default:"center"},controlBtn:{type:Boolean,default:!0},animation:{type:String,default:"normal"}},computed:{thisSpeed:function(){var t=this.speed/1e3;return t.toFixed(2)},indicatorClass:function(){if(this.indicators)return"slider-"+this.indicators}},methods:{autoplay:function(){function t(){return setInterval(function(){i.posFlag<e.$children.length-1?i.posFlag++:i.posFlag=0,e.animation(n,i.posFlag)},i.interval)}var e=this.$refs.content,i=this,n=this.posFlag;return function(){this.timer?(clearInterval(this.timer),this.timer=t()):i.auto&&e.$children.length>1&&(this.timer=t())}},next:function(){var t=this.$refs.content,e=this.posFlag;this.posFlag<t.$children.length-1?++this.posFlag:this.posFlag=0,t.animation(e,this.posFlag),this.autoplay()},preview:function(){var t=this.$refs.content,e=this.posFlag;this.posFlag>0?--this.posFlag:this.posFlag=t.$children.length-1,t.animation(e,this.posFlag,"preview"),this.autoplay()},jump2:function(t){var e=this.$refs.content,i=this.posFlag;e.animation(i,t,"jump"),this.posFlag=t,this.autoplay()},addChildrenLength:function(){this.childrenArr.push(this.childrenArr.length)},scaleItemsWidth:function(t){t.style.width=this.$el.clientWidth+"px"},newItem:function(t){var e=this.$refs.content;this.addChildrenLength(),this.scaleItemsWidth(t),e.scaleWidth&&e.scaleWidth(this.$el.clientWidth),e.init&&e.init(),this.autoplay()}},mounted:function(){this.autoplay=this.autoplay(),this.autoplay()},beforeDestroy:function(){clearInterval(this.timer)},components:{normal:n.normal,fade:n.fade}}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.infinite=e.fade=e.normal=void 0;var r=i(10),s=n(r),a=i(13),o=n(a),l=i(16),d=n(l);e.normal=s.default,e.fade=o.default,e.infinite=d.default},function(t,e,i){var n=i(7)(i(11),i(12),null,null);t.exports=n.exports},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{width:"",childrenLen:0}},methods:{scaleWidth:function(t){var e=t*++this.childrenLen;this.width=t,this.$el.style.width=e+"px"},animation:function(t,e,i){this.$el.style.transform="translate3d( "+e*-this.width+"px, 0, 0 )",this.$el.style.webkitTransform="translate3d( "+e*-this.width+"px, 0, 0 )"}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._t("default")],2)},staticRenderFns:[]}},function(t,e,i){var n=i(7)(i(14),i(15),null,null);t.exports=n.exports},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{items:{}}},props:{speed:String},methods:{animation:function(t,e,i){function n(t,e){var i=this;this.items[t].style.opacity=0,this.items[e].style.opacity=1,setTimeout(function(){i.items[t].style.zIndex=s,i.items[e].style.zIndex=s+1},1e3*parseInt(this.speed))}var r=this,s=this.items.length;"preview"===i?e===s-1?n.call(this,0,e):n.call(this,e+1,e):"jump"===i?(Array.prototype.forEach.call(this.items,function(t,e){t.style.opacity=0,setTimeout(function(){t.style.zIndex=s},1e3*parseInt(r.speed))}),this.items[e].style.opacity=1,setTimeout(function(){r.items[e].style.zIndex=s+1},1e3*parseInt(this.speed))):0===e?n.call(this,s-1,e):n.call(this,e-1,e)},init:function(){var t=this,e=this.items=this.$el.children,i=e.length;i&&(Array.prototype.forEach.call(e,function(e,n){e.style.position="absolute",e.style.left=0,e.style.top=0,e.style.zIndex=i-n,e.style.transition="opacity "+t.speed+"s",e.style.opacity=0}),e[0].style.opacity=1)}},mounted:function(){this.init()}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._t("default")],2)},staticRenderFns:[]}},function(t,e,i){var n=i(7)(null,i(17),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slider",style:{width:t.width,height:t.height}},[i(t.animation,{ref:"content",tag:"component",staticClass:"slider-content",style:{transition:"all "+t.thisSpeed+"s"},attrs:{speed:t.thisSpeed}},[t._t("default")],2),t._v(" "),t.controlBtn?i("div",{staticClass:"slider-btn slider-left-btn",on:{click:function(e){e.stopPropagation(),t.preview(e)}}},[i("i",{staticClass:"slider-icon slider-icon-left"})]):t._e(),t._v(" "),t.controlBtn?i("div",{staticClass:"slider-btn slider-right-btn",on:{click:function(e){e.stopPropagation(),t.next(e)}}},[i("i",{staticClass:"slider-icon slider-icon-right"})]):t._e(),t._v(" "),t.indicators!==!1?i("div",{staticClass:"slider-indicators",class:t.indicatorClass,on:{click:function(t){t.stopPropagation()}}},t._l(t.childrenArr,function(e,n){return i("i",{staticClass:"slider-indicator-icon",class:{"slider-indicator-active":t.posFlag===n},on:{click:function(e){t.jump2(n)}}})})):t._e()],1)},staticRenderFns:[]}},function(t,e,i){i(20);var n=i(7)(i(22),i(23),"data-v-31c81028",null);t.exports=n.exports},function(t,e,i){var n=i(21);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);i(5)("ae69fdba",n,!0)},function(t,e,i){e=t.exports=i(4)(),e.push([t.id,".slider-item[data-v-31c81028]{float:left;width:100%;height:100%}",""])},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){var t=this.$parent;t.$parent.newItem(this.$el)}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slider-item"},[t._t("default")],2)},staticRenderFns:[]}}])});