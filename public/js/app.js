!function t(e,n,r){function i(s,a){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var f=n[s]={exports:{}};e[s][0].call(f.exports,function(t){var n=e[s][1][t];return i(n?n:t)},f,f.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e){var n,r=(t("__browserify_process"),t("__browserify_Buffer"),function(t,e){return function(){return t.apply(e,arguments)}});e.exports=n=function(){function t(){this.on_user_data=r(this.on_user_data,this),this.load=r(this.load,this),this.loadByType=r(this.loadByType,this),this.on_error=r(this.on_error,this),this.on_user_loged=r(this.on_user_loged,this),this.loged=r(this.loged,this),console.log("Instagram()")}return t.token="",t.prototype.start=function(){var t,e,n,r,i,o,s;return r="https://instagram.com/oauth/authorize/?client_id=07afc136d1d94461bec600cd7ea5e515&redirect_uri=http://local.followback/oauth.html&response_type=token&scope=basic+relationships",o="oauth",i=620,t=490,e=$(window).width()/2-i/2,n=$(window).height()/2-t/2,s="toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+i+", height="+t+", top="+n+", left="+e,window.open(r,o,s)},t.prototype.loged=function(t){return this.token=t,$.ajax({method:"GET",url:"https://api.instagram.com/v1/users/self",dataType:"jsonp",data:{access_token:this.token},jsonp:"callback",jsonpCallback:"jsonpcallback",success:this.on_user_loged,error:this.on_error})},t.prototype.on_user_loged=function(t){return this.user_medias=t.data.counts.media,this.user_followers=t.data.counts.followed_by,this.user_follows=t.data.counts.follows,this.user_full=t.data.full_name,this.user_id=t.data.id,this.user_name=t.data.username,this.user_bio=t.data.bio,this.user_website=t.data.website,this.user_profile_picture=t.data.profile_picture,$(this).trigger("onLoginSuccess")},t.prototype.on_error=function(){return $(this).trigger("onLoginError")},t.prototype.loadByType=function(t){var e;return this.next_url=null,this.array_data=[],this.total_pages=0,null!=this.data_loader&&this.data_loader.abort(),e="following"===t?"https://api.instagram.com/v1/users/"+this.user_id+"/follows":"https://api.instagram.com/v1/users/"+this.user_id+"/followed-by",this.load(e)},t.prototype.load=function(t){return this.data_loader=$.ajax({method:"GET",url:t,dataType:"jsonp",data:{access_token:this.token},jsonp:"callback",jsonpCallback:"jsonpcallback",success:this.on_user_data,error:this.on_error})},t.prototype.on_user_data=function(t){var e;return this.next_url=t.pagination.next_url,e=t.data,this.array_data.push(e),this.total_pages=this.array_data.length,void 0!==this.next_url||null!=this.next_url?$(this).trigger("partial_load_complete"):$(this).trigger("load_complete")},t}()},{__browserify_Buffer:5,__browserify_process:6}],2:[function(t,e){var n,r,i,o,s=(t("__browserify_process"),t("__browserify_Buffer"),function(t,e){return function(){return t.apply(e,arguments)}});r=t("./ui/login.coffee"),n=t("./api/instagram.coffee"),o=t("./views/nav_type.coffee"),e.exports=i=function(){function t(){this.close_table=s(this.close_table,this),this.feed_table=s(this.feed_table,this),this.on_type_update=s(this.on_type_update,this),this.on_login_success=s(this.on_login_success,this),this.set_token=s(this.set_token,this),this.social_name="instagram",this.container_list=$(".container .list"),this.login=new r,this.navigation_type=new o($(".login-wrapper .search-type")),$(this.login).bind("onLoginSuccess",this.on_login_success),$(this.navigation_type).bind("onTypeUpdate",this.on_type_update),this.ApiInstagram=this.login.instagram}return t.prototype.set_token=function(t){return"instagram"===this.social_name?(this.ApiInstagram.loged(t),$(this.ApiInstagram).bind("partial_load_complete",this.feed_table),$(this.ApiInstagram).bind("load_complete",this.close_table)):void 0},t.prototype.on_login_success=function(){return this.navigation_type.show()},t.prototype.on_type_update=function(){return"instagram"===this.social_name?this.ApiInstagram.loadByType(this.navigation_type.current_type):void 0},t.prototype.feed_table=function(){},t.prototype.close_table=function(){},t}(),$(document).ready(function(){return this.main=new i});var n,s=function(t,e){return function(){return t.apply(e,arguments)}};e.exports=n=function(){function t(){this.on_user_data=s(this.on_user_data,this),this.load=s(this.load,this),this.loadByType=s(this.loadByType,this),this.on_error=s(this.on_error,this),this.on_user_loged=s(this.on_user_loged,this),this.loged=s(this.loged,this),console.log("Instagram()")}return t.token="",t.prototype.start=function(){var t,e,n,r,i,o,s;return r="https://instagram.com/oauth/authorize/?client_id=07afc136d1d94461bec600cd7ea5e515&redirect_uri=http://local.followback/oauth.html&response_type=token&scope=basic+relationships",o="oauth",i=620,t=490,e=$(window).width()/2-i/2,n=$(window).height()/2-t/2,s="toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+i+", height="+t+", top="+n+", left="+e,window.open(r,o,s)},t.prototype.loged=function(t){return this.token=t,$.ajax({method:"GET",url:"https://api.instagram.com/v1/users/self",dataType:"jsonp",data:{access_token:this.token},jsonp:"callback",jsonpCallback:"jsonpcallback",success:this.on_user_loged,error:this.on_error})},t.prototype.on_user_loged=function(t){return this.user_medias=t.data.counts.media,this.user_followers=t.data.counts.followed_by,this.user_follows=t.data.counts.follows,this.user_full=t.data.full_name,this.user_id=t.data.id,this.user_name=t.data.username,this.user_bio=t.data.bio,this.user_website=t.data.website,this.user_profile_picture=t.data.profile_picture,$(this).trigger("onLoginSuccess")},t.prototype.on_error=function(){return $(this).trigger("onLoginError")},t.prototype.loadByType=function(t){var e;return this.next_url=null,this.array_data=[],this.total_pages=0,null!=this.data_loader&&this.data_loader.abort(),e="following"===t?"https://api.instagram.com/v1/users/"+this.user_id+"/follows":"https://api.instagram.com/v1/users/"+this.user_id+"/followed-by",this.load(e)},t.prototype.load=function(t){return this.data_loader=$.ajax({method:"GET",url:t,dataType:"jsonp",data:{access_token:this.token},jsonp:"callback",jsonpCallback:"jsonpcallback",success:this.on_user_data,error:this.on_error})},t.prototype.on_user_data=function(t){var e;return this.next_url=t.pagination.next_url,e=t.data,this.array_data.push(e),this.total_pages=this.array_data.length,void 0!==this.next_url||null!=this.next_url?$(this).trigger("partial_load_complete"):$(this).trigger("load_complete")},t}();var r,s=function(t,e){return function(){return t.apply(e,arguments)}};e.exports=r=function(){function t(){this.on_button_hidden=s(this.on_button_hidden,this),this.on_login_error=s(this.on_login_error,this),this.on_login_success=s(this.on_login_success,this),this.on_login_click=s(this.on_login_click,this),this.setup()}return t.prototype.setup=function(){return this.login_button=$(".login-wrapper #login"),this.login_button.bind("click",this.on_login_click),this.instagram=new n,$(this.instagram).bind("onLoginSuccess",this.on_login_success),$(this.instagram).bind("onLoginError",this.on_login_error)},t.prototype.on_login_click=function(){return this.instagram.start()},t.prototype.on_login_success=function(){return this.login_button.unbind("click",this.on_login_click),$(this.instagram).unbind("onLoginSuccess",this.on_login_success),$(this.instagram).unbind("onLoginError",this.on_login_error),TweenLite.to(this.login_button,.5,{opacity:0,ease:Expo.easeOut,onComplete:this.on_button_hidden})},t.prototype.on_login_error=function(){return this.login_button.unbind("click",this.on_login_click),$(this.instagram).unbind("onLoginSuccess",this.on_login_success),$(this.instagram).unbind("onLoginError",this.on_login_error)},t.prototype.on_button_hidden=function(){return TweenLite.set(this.login_button,{display:"none"}),$(this).trigger("onLoginSuccess")},t}();var a;e.exports=a=function(){function t(){console.log("init Home")}return t}();var o,s=function(t,e){return function(){return t.apply(e,arguments)}};e.exports=o=function(){function t(t){this.on_type_click=s(this.on_type_click,this),this.change_button_status=s(this.change_button_status,this),this.update=s(this.update,this),this.show=s(this.show,this),this.wrapper=t}return t.prototype.show=function(){var t=this;return TweenLite.set(this.wrapper,{display:"inline-block",opacity:0}),TweenLite.to(this.wrapper,.5,{opacity:1,ease:Expo.easeOut,onComplete:function(){return null!=t.current_type?t.update():(t.current_type="following",t.update())}}),this.wrapper.find(".btn").bind("click",this.on_type_click)},t.prototype.update=function(){return this.change_button_status()},t.prototype.change_button_status=function(){var t,e,n;for(t=0,e=this.wrapper.find(".btn").length,n=[];e>t;)$(this.wrapper.find(".btn")[t]).attr("id")===this.current_type?(this.wrapper.find("a#"+this.current_type).addClass("btn-primary active disable"),this.wrapper.find("a#"+this.current_type).removeClass("btn-default")):($(this.wrapper.find(".btn")[t]).addClass("btn-default"),$(this.wrapper.find(".btn")[t]).removeClass("btn-primary active disable")),n.push(t++);return n},t.prototype.on_type_click=function(t){return $(t.currentTarget).hasClass("disable")?void 0:(this.current_type=$(t.currentTarget).attr("id"),$(this).trigger("onTypeUpdate"),this.update())},t}()},{"./api/instagram.coffee":1,"./ui/login.coffee":3,"./views/nav_type.coffee":4,__browserify_Buffer:5,__browserify_process:6}],3:[function(t,e){var n,r=(t("__browserify_process"),t("__browserify_Buffer"),function(t,e){return function(){return t.apply(e,arguments)}});e.exports=n=function(){function t(){this.on_button_hidden=r(this.on_button_hidden,this),this.on_login_error=r(this.on_login_error,this),this.on_login_success=r(this.on_login_success,this),this.on_login_click=r(this.on_login_click,this),this.setup()}return t.prototype.setup=function(){return this.login_button=$(".login-wrapper #login"),this.login_button.bind("click",this.on_login_click),this.instagram=new Instagram,$(this.instagram).bind("onLoginSuccess",this.on_login_success),$(this.instagram).bind("onLoginError",this.on_login_error)},t.prototype.on_login_click=function(){return this.instagram.start()},t.prototype.on_login_success=function(){return this.login_button.unbind("click",this.on_login_click),$(this.instagram).unbind("onLoginSuccess",this.on_login_success),$(this.instagram).unbind("onLoginError",this.on_login_error),TweenLite.to(this.login_button,.5,{opacity:0,ease:Expo.easeOut,onComplete:this.on_button_hidden})},t.prototype.on_login_error=function(){return this.login_button.unbind("click",this.on_login_click),$(this.instagram).unbind("onLoginSuccess",this.on_login_success),$(this.instagram).unbind("onLoginError",this.on_login_error)},t.prototype.on_button_hidden=function(){return TweenLite.set(this.login_button,{display:"none"}),$(this).trigger("onLoginSuccess")},t}()},{__browserify_Buffer:5,__browserify_process:6}],4:[function(t,e){var n,r=(t("__browserify_process"),t("__browserify_Buffer"),function(t,e){return function(){return t.apply(e,arguments)}});e.exports=n=function(){function t(t){this.on_type_click=r(this.on_type_click,this),this.change_button_status=r(this.change_button_status,this),this.update=r(this.update,this),this.show=r(this.show,this),this.wrapper=t}return t.prototype.show=function(){var t=this;return TweenLite.set(this.wrapper,{display:"inline-block",opacity:0}),TweenLite.to(this.wrapper,.5,{opacity:1,ease:Expo.easeOut,onComplete:function(){return null!=t.current_type?t.update():(t.current_type="following",t.update())}}),this.wrapper.find(".btn").bind("click",this.on_type_click)},t.prototype.update=function(){return this.change_button_status()},t.prototype.change_button_status=function(){var t,e,n;for(t=0,e=this.wrapper.find(".btn").length,n=[];e>t;)$(this.wrapper.find(".btn")[t]).attr("id")===this.current_type?(this.wrapper.find("a#"+this.current_type).addClass("btn-primary active disable"),this.wrapper.find("a#"+this.current_type).removeClass("btn-default")):($(this.wrapper.find(".btn")[t]).addClass("btn-default"),$(this.wrapper.find(".btn")[t]).removeClass("btn-primary active disable")),n.push(t++);return n},t.prototype.on_type_click=function(t){return $(t.currentTarget).hasClass("disable")?void 0:(this.current_type=$(t.currentTarget).attr("id"),$(this).trigger("onTypeUpdate"),this.update())},t}()},{__browserify_Buffer:5,__browserify_process:6}],5:[function(t,e){t=function n(e,r,i){function o(a,u){if(!r[a]){if(!e[a]){var f="function"==typeof t&&t;if(!u&&f)return f(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+a+"'")}var h=r[a]={exports:{}};e[a][0].call(h.exports,function(t){var n=e[a][1][t];return o(n?n:t)},h,h.exports,n,e,r,i)}return r[a].exports}for(var s="function"==typeof t&&t,a=0;a<i.length;a++)o(i[a]);return o}({PcZj9L:[function(t,e,n){function r(t,e){var n=typeof t;if("base64"===e&&"string"===n)for(t=ue(t);t.length%4!==0;)t+="=";var i;if("number"===n)i=pe(t);else if("string"===n)i=r.byteLength(t,e);else{if("object"!==n)throw new Error("First argument needs to be a number, array or string.");i=pe(t.length)}var o=le(new Ae(i));if(r.isBuffer(t))o.set(t);else if(ge(t))for(var s=0;i>s;s++)o[s]=r.isBuffer(t)?t.readUInt8(s):t[s];else"string"===n&&o.write(t,0,e);return o}function i(t,e,n,i){n=Number(n)||0;var o=t.length-n;i?(i=Number(i),i>o&&(i=o)):i=o;var s=e.length;if(s%2!==0)throw new Error("Invalid hex string");i>s/2&&(i=s/2);for(var a=0;i>a;a++){var u=parseInt(e.substr(2*a,2),16);if(isNaN(u))throw new Error("Invalid hex string");t[n+a]=u}return r._charsWritten=2*a,a}function o(t,e,n,i){return r._charsWritten=we(de(e),t,n,i)}function s(t,e,n,i){return r._charsWritten=we(_e(e),t,n,i)}function a(t,e,n,r){return s(t,e,n,r)}function u(t,e,n,i){return r._charsWritten=we(be(e),t,n,i)}function f(t,e,n,r){if(isFinite(e))isFinite(n)||(r=n,n=void 0);else{var f=r;r=e,e=n,n=f}e=Number(e)||0;var h=this.length-e;switch(n?(n=Number(n),n>h&&(n=h)):n=h,r=String(r||"utf8").toLowerCase()){case"hex":return i(this,t,e,n);case"utf8":case"utf-8":return o(this,t,e,n);case"ascii":return s(this,t,e,n);case"binary":return a(this,t,e,n);case"base64":return u(this,t,e,n);default:throw new Error("Unknown encoding")}}function h(t,e,n){var r=this instanceof he?this._proxy:this;if(t=String(t||"utf8").toLowerCase(),e=Number(e)||0,n=void 0!==n?Number(n):n=r.length,n===e)return"";switch(t){case"hex":return _(r,e,n);case"utf8":case"utf-8":return g(r,e,n);case"ascii":return y(r,e,n);case"binary":return d(r,e,n);case"base64":return p(r,e,n);default:throw new Error("Unknown encoding")}}function l(){return{type:"Buffer",data:Array.prototype.slice.call(this,0)}}function c(t,e,n,r){var i=this;if(n||(n=0),r||0===r||(r=this.length),e||(e=0),r!==n&&0!==t.length&&0!==i.length){if(n>r)throw new Error("sourceEnd < sourceStart");if(0>e||e>=t.length)throw new Error("targetStart out of bounds");if(0>n||n>=i.length)throw new Error("sourceStart out of bounds");if(0>r||r>i.length)throw new Error("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);for(var o=0;r-n>o;o++)t[o+e]=this[o+n]}}function p(e,n,r){var i=e.slice(n,r);return t("base64-js").fromByteArray(i)}function g(t,e,n){for(var r=t.slice(e,n),i="",o="",s=0;s<r.length;)r[s]<=127?(i+=me(o)+String.fromCharCode(r[s]),o=""):o+="%"+r[s].toString(16),s++;return i+me(o)}function y(t,e,n){for(var r=t.slice(e,n),i="",o=0;o<r.length;o++)i+=String.fromCharCode(r[o]);return i}function d(t,e,n){return y(t,e,n)}function _(t,e,n){var r=t.length;(!e||0>e)&&(e=0),(!n||0>n||n>r)&&(n=r);for(var i="",o=e;n>o;o++)i+=ye(t[o]);return i}function b(t,e){var n=this.length;return t=ce(t,n,0),e=ce(e,n,n),le(this.subarray(t,e))}function w(t,e){var n=this;return e||(Le(void 0!==t&&null!==t,"missing offset"),Le(t<n.length,"Trying to read beyond buffer length")),t>=n.length?void 0:n[t]}function m(t,e,n,r){r||(Le("boolean"==typeof n,"missing or invalid endian"),Le(void 0!==e&&null!==e,"missing offset"),Le(e+1<t.length,"Trying to read beyond buffer length"));var i=t.length;if(!(e>=i)){if(e+1===i){var o=new Ie(new Ue(2));return o.setUint8(0,t[i-1]),o.getUint16(0,n)}return t._dataview.getUint16(e,n)}}function v(t,e){return m(this,t,!0,e)}function E(t,e){return m(this,t,!1,e)}function T(t,e,n,r){r||(Le("boolean"==typeof n,"missing or invalid endian"),Le(void 0!==e&&null!==e,"missing offset"),Le(e+3<t.length,"Trying to read beyond buffer length"));var i=t.length;if(!(e>=i)){if(e+3>=i){for(var o=new Ie(new Ue(4)),s=0;i>s+e;s++)o.setUint8(s,t[s+e]);return o.getUint32(0,n)}return t._dataview.getUint32(e,n)}}function L(t,e){return T(this,t,!0,e)}function B(t,e){return T(this,t,!1,e)}function I(t,e){var n=this;return e||(Le(void 0!==t&&null!==t,"missing offset"),Le(t<n.length,"Trying to read beyond buffer length")),t>=n.length?void 0:n._dataview.getInt8(t)}function U(t,e,n,r){r||(Le("boolean"==typeof n,"missing or invalid endian"),Le(void 0!==e&&null!==e,"missing offset"),Le(e+1<t.length,"Trying to read beyond buffer length"));var i=t.length;if(!(e>=i)){if(e+1===i){var o=new Ie(new Ue(2));return o.setUint8(0,t[i-1]),o.getInt16(0,n)}return t._dataview.getInt16(e,n)}}function A(t,e){return U(this,t,!0,e)}function k(t,e){return U(this,t,!1,e)}function x(t,e,n,r){r||(Le("boolean"==typeof n,"missing or invalid endian"),Le(void 0!==e&&null!==e,"missing offset"),Le(e+3<t.length,"Trying to read beyond buffer length"));var i=t.length;if(!(e>=i)){if(e+3>=i){for(var o=new Ie(new Ue(4)),s=0;i>s+e;s++)o.setUint8(s,t[s+e]);return o.getInt32(0,n)}return t._dataview.getInt32(e,n)}}function O(t,e){return x(this,t,!0,e)}function S(t,e){return x(this,t,!1,e)}function $(t,e,n,r){return r||(Le("boolean"==typeof n,"missing or invalid endian"),Le(e+3<t.length,"Trying to read beyond buffer length")),t._dataview.getFloat32(e,n)}function j(t,e){return $(this,t,!0,e)}function C(t,e){return $(this,t,!1,e)}function N(t,e,n,r){return r||(Le("boolean"==typeof n,"missing or invalid endian"),Le(e+7<t.length,"Trying to read beyond buffer length")),t._dataview.getFloat64(e,n)}function P(t,e){return N(this,t,!0,e)}function R(t,e){return N(this,t,!1,e)}function M(t,e,n){var r=this;n||(Le(void 0!==t&&null!==t,"missing value"),Le(void 0!==e&&null!==e,"missing offset"),Le(e<r.length,"trying to write beyond buffer length"),ve(t,255)),e>=r.length||(r[e]=t)}function F(t,e,n,r,i){i||(Le(void 0!==e&&null!==e,"missing value"),Le("boolean"==typeof r,"missing or invalid endian"),Le(void 0!==n&&null!==n,"missing offset"),Le(n+1<t.length,"trying to write beyond buffer length"),ve(e,65535));var o=t.length;if(!(n>=o))if(n+1===o){var s=new Ie(new Ue(2));s.setUint16(0,e,r),t[n]=s.getUint8(0)}else t._dataview.setUint16(n,e,r)}function Y(t,e,n){F(this,t,e,!0,n)}function D(t,e,n){F(this,t,e,!1,n)}function z(t,e,n,r,i){i||(Le(void 0!==e&&null!==e,"missing value"),Le("boolean"==typeof r,"missing or invalid endian"),Le(void 0!==n&&null!==n,"missing offset"),Le(n+3<t.length,"trying to write beyond buffer length"),ve(e,4294967295));var o=t.length;if(!(n>=o))if(n+3>=o){var s=new Ie(new Ue(4));s.setUint32(0,e,r);for(var a=0;o>a+n;a++)t[a+n]=s.getUint8(a)}else t._dataview.setUint32(n,e,r)}function H(t,e,n){z(this,t,e,!0,n)}function G(t,e,n){z(this,t,e,!1,n)}function V(t,e,n){var r=this;n||(Le(void 0!==t&&null!==t,"missing value"),Le(void 0!==e&&null!==e,"missing offset"),Le(e<r.length,"Trying to write beyond buffer length"),Ee(t,127,-128)),e>=r.length||r._dataview.setInt8(e,t)}function q(t,e,n,r,i){i||(Le(void 0!==e&&null!==e,"missing value"),Le("boolean"==typeof r,"missing or invalid endian"),Le(void 0!==n&&null!==n,"missing offset"),Le(n+1<t.length,"Trying to write beyond buffer length"),Ee(e,32767,-32768));var o=t.length;if(!(n>=o))if(n+1===o){var s=new Ie(new Ue(2));s.setInt16(0,e,r),t[n]=s.getUint8(0)}else t._dataview.setInt16(n,e,r)}function W(t,e,n){q(this,t,e,!0,n)}function J(t,e,n){q(this,t,e,!1,n)}function X(t,e,n,r,i){i||(Le(void 0!==e&&null!==e,"missing value"),Le("boolean"==typeof r,"missing or invalid endian"),Le(void 0!==n&&null!==n,"missing offset"),Le(n+3<t.length,"Trying to write beyond buffer length"),Ee(e,2147483647,-2147483648));var o=t.length;if(!(n>=o))if(n+3>=o){var s=new Ie(new Ue(4));s.setInt32(0,e,r);for(var a=0;o>a+n;a++)t[a+n]=s.getUint8(a)}else t._dataview.setInt32(n,e,r)}function Z(t,e,n){X(this,t,e,!0,n)}function K(t,e,n){X(this,t,e,!1,n)}function Q(t,e,n,r,i){i||(Le(void 0!==e&&null!==e,"missing value"),Le("boolean"==typeof r,"missing or invalid endian"),Le(void 0!==n&&null!==n,"missing offset"),Le(n+3<t.length,"Trying to write beyond buffer length"),Te(e,3.4028234663852886e38,-3.4028234663852886e38));var o=t.length;if(!(n>=o))if(n+3>=o){var s=new Ie(new Ue(4));s.setFloat32(0,e,r);for(var a=0;o>a+n;a++)t[a+n]=s.getUint8(a)}else t._dataview.setFloat32(n,e,r)}function te(t,e,n){Q(this,t,e,!0,n)}function ee(t,e,n){Q(this,t,e,!1,n)}function ne(t,e,n,r,i){i||(Le(void 0!==e&&null!==e,"missing value"),Le("boolean"==typeof r,"missing or invalid endian"),Le(void 0!==n&&null!==n,"missing offset"),Le(n+7<t.length,"Trying to write beyond buffer length"),Te(e,1.7976931348623157e308,-1.7976931348623157e308));var o=t.length;if(!(n>=o))if(n+7>=o){var s=new Ie(new Ue(8));s.setFloat64(0,e,r);for(var a=0;o>a+n;a++)t[a+n]=s.getUint8(a)}else t._dataview.setFloat64(n,e,r)}function re(t,e,n){ne(this,t,e,!0,n)}function ie(t,e,n){ne(this,t,e,!1,n)}function oe(t,e,n){if(t||(t=0),e||(e=0),n||(n=this.length),"string"==typeof t&&(t=t.charCodeAt(0)),"number"!=typeof t||isNaN(t))throw new Error("value is not a number");if(e>n)throw new Error("end < start");if(n!==e&&0!==this.length){if(0>e||e>=this.length)throw new Error("start out of bounds");if(0>n||n>this.length)throw new Error("end out of bounds");for(var r=e;n>r;r++)this[r]=t}}function se(){for(var t=[],e=this.length,r=0;e>r;r++)if(t[r]=ye(this[r]),r===n.INSPECT_MAX_BYTES){t[r+1]="...";break}return"<Buffer "+t.join(" ")+">"}function ae(){return new r(this).buffer}function ue(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function fe(){var t=new Ae(0);t.foo=function(){return 42};try{return 42===t.foo()}catch(e){return!1}}function he(t){this._arr=t,0!==t.byteLength&&(this._dataview=new Ie(t.buffer,t.byteOffset,t.byteLength))}function le(t){if(void 0===ke&&(ke=fe()),ke)return t.write=f,t.toString=h,t.toLocaleString=h,t.toJSON=l,t.copy=c,t.slice=b,t.readUInt8=w,t.readUInt16LE=v,t.readUInt16BE=E,t.readUInt32LE=L,t.readUInt32BE=B,t.readInt8=I,t.readInt16LE=A,t.readInt16BE=k,t.readInt32LE=O,t.readInt32BE=S,t.readFloatLE=j,t.readFloatBE=C,t.readDoubleLE=P,t.readDoubleBE=R,t.writeUInt8=M,t.writeUInt16LE=Y,t.writeUInt16BE=D,t.writeUInt32LE=H,t.writeUInt32BE=G,t.writeInt8=V,t.writeInt16LE=W,t.writeInt16BE=J,t.writeInt32LE=Z,t.writeInt32BE=K,t.writeFloatLE=te,t.writeFloatBE=ee,t.writeDoubleLE=re,t.writeDoubleBE=ie,t.fill=oe,t.inspect=se,t.toArrayBuffer=ae,t._isBuffer=!0,0!==t.byteLength&&(t._dataview=new Ie(t.buffer,t.byteOffset,t.byteLength)),t;var e=new he(t),n=new Proxy(e,xe);return e._proxy=n,n}function ce(t,e,n){return"number"!=typeof t?n:(t=~~t,t>=e?e:t>=0?t:(t+=e,t>=0?t:0))}function pe(t){return t=~~Math.ceil(+t),0>t?0:t}function ge(t){return Array.isArray(t)||r.isBuffer(t)||t&&"object"==typeof t&&"number"==typeof t.length}function ye(t){return 16>t?"0"+t.toString(16):t.toString(16)}function de(t){for(var e=[],n=0;n<t.length;n++)if(t.charCodeAt(n)<=127)e.push(t.charCodeAt(n));else for(var r=encodeURIComponent(t.charAt(n)).substr(1).split("%"),i=0;i<r.length;i++)e.push(parseInt(r[i],16));return e}function _e(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e}function be(e){return t("base64-js").toByteArray(e)}function we(t,e,n,r){for(var i=0;r>i&&!(i+n>=e.length||i>=t.length);)e[i+n]=t[i],i++;return i}function me(t){try{return decodeURIComponent(t)}catch(e){return String.fromCharCode(65533)}}function ve(t,e){Le("number"==typeof t,"cannot write a non-number as a number"),Le(t>=0,"specified a negative value for writing an unsigned value"),Le(e>=t,"value is larger than maximum value for type"),Le(Math.floor(t)===t,"value has a fractional component")}function Ee(t,e,n){Le("number"==typeof t,"cannot write a non-number as a number"),Le(e>=t,"value larger than maximum allowed value"),Le(t>=n,"value smaller than minimum allowed value"),Le(Math.floor(t)===t,"value has a fractional component")}function Te(t,e,n){Le("number"==typeof t,"cannot write a non-number as a number"),Le(e>=t,"value larger than maximum allowed value"),Le(t>=n,"value smaller than minimum allowed value")}function Le(t,e){if(!t)throw new Error(e||"Failed assertion")}var Be=t("typedarray"),Ie="undefined"==typeof DataView?Be.DataView:DataView,Ue="undefined"==typeof ArrayBuffer?Be.ArrayBuffer:ArrayBuffer,Ae="undefined"==typeof Uint8Array?Be.Uint8Array:Uint8Array;n.Buffer=r,n.SlowBuffer=r,n.INSPECT_MAX_BYTES=50,r.poolSize=8192;var ke;r.isEncoding=function(t){switch((t+"").toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}},r.isBuffer=function(t){return t&&t._isBuffer},r.byteLength=function(t,e){switch(e||"utf8"){case"hex":return t.length/2;case"utf8":case"utf-8":return de(t).length;case"ascii":case"binary":return t.length;case"base64":return be(t).length;default:throw new Error("Unknown encoding")}},r.concat=function(t,e){if(!Array.isArray(t))throw new Error("Usage: Buffer.concat(list, [totalLength])\nlist should be an Array.");var n,i;if(0===t.length)return new r(0);if(1===t.length)return t[0];if("number"!=typeof e)for(e=0,n=0;n<t.length;n++)i=t[n],e+=i.length;var o=new r(e),s=0;for(n=0;n<t.length;n++)i=t[n],i.copy(o,s),s+=i.length;return o},he.prototype.write=f,he.prototype.toString=h,he.prototype.toLocaleString=h,he.prototype.toJSON=l,he.prototype.copy=c,he.prototype.slice=b,he.prototype.readUInt8=w,he.prototype.readUInt16LE=v,he.prototype.readUInt16BE=E,he.prototype.readUInt32LE=L,he.prototype.readUInt32BE=B,he.prototype.readInt8=I,he.prototype.readInt16LE=A,he.prototype.readInt16BE=k,he.prototype.readInt32LE=O,he.prototype.readInt32BE=S,he.prototype.readFloatLE=j,he.prototype.readFloatBE=C,he.prototype.readDoubleLE=P,he.prototype.readDoubleBE=R,he.prototype.writeUInt8=M,he.prototype.writeUInt16LE=Y,he.prototype.writeUInt16BE=D,he.prototype.writeUInt32LE=H,he.prototype.writeUInt32BE=G,he.prototype.writeInt8=V,he.prototype.writeInt16LE=W,he.prototype.writeInt16BE=J,he.prototype.writeInt32LE=Z,he.prototype.writeInt32BE=K,he.prototype.writeFloatLE=te,he.prototype.writeFloatBE=ee,he.prototype.writeDoubleLE=re,he.prototype.writeDoubleBE=ie,he.prototype.fill=oe,he.prototype.inspect=se,he.prototype.toArrayBuffer=ae,he.prototype._isBuffer=!0,he.prototype.subarray=function(){return this._arr.subarray.apply(this._arr,arguments)},he.prototype.set=function(){return this._arr.set.apply(this._arr,arguments)};var xe={get:function(t,e){return e in t?t[e]:t._arr[e]},set:function(t,e,n){t._arr[e]=n}}},{"base64-js":3,typedarray:4}],"native-buffer-browserify":[function(t,e){e.exports=t("PcZj9L")},{}],3:[function(t,e){!function(){"use strict";function t(t){var e,n,i,o,s,a;if(t.length%4>0)throw"Invalid string. Length must be a multiple of 4";for(s=t.indexOf("="),s=s>0?t.length-s:0,a=[],i=s>0?t.length-4:t.length,e=0,n=0;i>e;e+=4,n+=3)o=r.indexOf(t[e])<<18|r.indexOf(t[e+1])<<12|r.indexOf(t[e+2])<<6|r.indexOf(t[e+3]),a.push((16711680&o)>>16),a.push((65280&o)>>8),a.push(255&o);return 2===s?(o=r.indexOf(t[e])<<2|r.indexOf(t[e+1])>>4,a.push(255&o)):1===s&&(o=r.indexOf(t[e])<<10|r.indexOf(t[e+1])<<4|r.indexOf(t[e+2])>>2,a.push(o>>8&255),a.push(255&o)),a}function n(t){function e(t){return r[t>>18&63]+r[t>>12&63]+r[t>>6&63]+r[63&t]}var n,i,o,s=t.length%3,a="";for(n=0,o=t.length-s;o>n;n+=3)i=(t[n]<<16)+(t[n+1]<<8)+t[n+2],a+=e(i);switch(s){case 1:i=t[t.length-1],a+=r[i>>2],a+=r[i<<4&63],a+="==";break;case 2:i=(t[t.length-2]<<8)+t[t.length-1],a+=r[i>>10],a+=r[i>>4&63],a+=r[i<<2&63],a+="="}return a}var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";e.exports.toByteArray=t,e.exports.fromByteArray=n}()},{}],4:[function(t,e,n){function r(t){if(P&&N){var e,n=P(t);for(e=0;e<n.length;e+=1)N(t,n[e],{value:t[n[e]],writable:!1,enumerable:!1,configurable:!1})}}function i(t){function e(e){N(t,e,{get:function(){return t._getter(e)},set:function(n){t._setter(e,n)},enumerable:!0,configurable:!1})}if(N){if(t.length>U)throw new RangeError("Array too large for polyfill");var n;for(n=0;n<t.length;n+=1)e(n)}}function o(t,e){var n=32-e;return t<<n>>n}function s(t,e){var n=32-e;return t<<n>>>n}function a(t){return[255&t]}function u(t){return o(t[0],8)}function f(t){return[255&t]}function h(t){return s(t[0],8)}function l(t){return t=C(Number(t)),[0>t?0:t>255?255:255&t]}function c(t){return[t>>8&255,255&t]}function p(t){return o(t[0]<<8|t[1],16)}function g(t){return[t>>8&255,255&t]}function y(t){return s(t[0]<<8|t[1],16)}function d(t){return[t>>24&255,t>>16&255,t>>8&255,255&t]}function _(t){return o(t[0]<<24|t[1]<<16|t[2]<<8|t[3],32)}function b(t){return[t>>24&255,t>>16&255,t>>8&255,255&t]}function w(t){return s(t[0]<<24|t[1]<<16|t[2]<<8|t[3],32)}function m(t,e,n){function r(t){var e=O(t),n=t-e;return.5>n?e:n>.5?e+1:e%2?e+1:e}var i,o,s,a,u,f,h,l=(1<<e-1)-1;for(t!==t?(o=(1<<e)-1,s=j(2,n-1),i=0):1/0===t||t===-1/0?(o=(1<<e)-1,s=0,i=0>t?1:0):0===t?(o=0,s=0,i=1/t===-1/0?1:0):(i=0>t,t=x(t),t>=j(2,1-l)?(o=$(O(S(t)/k),1023),s=r(t/j(2,o)*j(2,n)),s/j(2,n)>=2&&(o+=1,s=1),o>l?(o=(1<<e)-1,s=0):(o+=l,s-=j(2,n))):(o=0,s=r(t/j(2,1-l-n)))),u=[],a=n;a;a-=1)u.push(s%2?1:0),s=O(s/2);for(a=e;a;a-=1)u.push(o%2?1:0),o=O(o/2);for(u.push(i?1:0),u.reverse(),f=u.join(""),h=[];f.length;)h.push(parseInt(f.substring(0,8),2)),f=f.substring(8);return h}function v(t,e,n){var r,i,o,s,a,u,f,h,l=[];for(r=t.length;r;r-=1)for(o=t[r-1],i=8;i;i-=1)l.push(o%2?1:0),o>>=1;return l.reverse(),s=l.join(""),a=(1<<e-1)-1,u=parseInt(s.substring(0,1),2)?-1:1,f=parseInt(s.substring(1,1+e),2),h=parseInt(s.substring(1+e),2),f===(1<<e)-1?0!==h?0/0:1/0*u:f>0?u*j(2,f-a)*(1+h/j(2,n)):0!==h?u*j(2,-(a-1))*(h/j(2,n)):0>u?-0:0}function E(t){return v(t,11,52)}function T(t){return m(t,11,52)}function L(t){return v(t,8,23)}function B(t){return m(t,8,23)}var I=void 0,U=1e5,A=function(){var t=Object.prototype.toString,e=Object.prototype.hasOwnProperty;return{Class:function(e){return t.call(e).replace(/^\[object *|\]$/g,"")},HasProperty:function(t,e){return e in t},HasOwnProperty:function(t,n){return e.call(t,n)},IsCallable:function(t){return"function"==typeof t},ToInt32:function(t){return t>>0},ToUint32:function(t){return t>>>0}}}(),k=Math.LN2,x=Math.abs,O=Math.floor,S=Math.log,$=Math.min,j=Math.pow,C=Math.round,N=Object.defineProperty||function(t,e,n){if(!t===Object(t))throw new TypeError("Object.defineProperty called on non-object");return A.HasProperty(n,"get")&&Object.prototype.__defineGetter__&&Object.prototype.__defineGetter__.call(t,e,n.get),A.HasProperty(n,"set")&&Object.prototype.__defineSetter__&&Object.prototype.__defineSetter__.call(t,e,n.set),A.HasProperty(n,"value")&&(t[e]=n.value),t},P=Object.getOwnPropertyNames||function(t){if(t!==Object(t))throw new TypeError("Object.getOwnPropertyNames called on non-object");var e,n=[];for(e in t)A.HasOwnProperty(t,e)&&n.push(e);return n};!function(){function t(t,n,s){var a;return a=function(t,n,o){var s,u,f,h;if(arguments.length&&"number"!=typeof arguments[0])if("object"==typeof arguments[0]&&arguments[0].constructor===a)for(s=arguments[0],this.length=s.length,this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new e(this.byteLength),this.byteOffset=0,f=0;f<this.length;f+=1)this._setter(f,s._getter(f));else if("object"!=typeof arguments[0]||(arguments[0]instanceof e||"ArrayBuffer"===A.Class(arguments[0]))){if("object"!=typeof arguments[0]||!(arguments[0]instanceof e||"ArrayBuffer"===A.Class(arguments[0])))throw new TypeError("Unexpected argument type(s)");
if(this.buffer=t,this.byteOffset=A.ToUint32(n),this.byteOffset>this.buffer.byteLength)throw new RangeError("byteOffset out of range");if(this.byteOffset%this.BYTES_PER_ELEMENT)throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.");if(arguments.length<3){if(this.byteLength=this.buffer.byteLength-this.byteOffset,this.byteLength%this.BYTES_PER_ELEMENT)throw new RangeError("length of buffer minus byteOffset not a multiple of the element size");this.length=this.byteLength/this.BYTES_PER_ELEMENT}else this.length=A.ToUint32(o),this.byteLength=this.length*this.BYTES_PER_ELEMENT;if(this.byteOffset+this.byteLength>this.buffer.byteLength)throw new RangeError("byteOffset and length reference an area beyond the end of the buffer")}else for(u=arguments[0],this.length=A.ToUint32(u.length),this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new e(this.byteLength),this.byteOffset=0,f=0;f<this.length;f+=1)h=u[f],this._setter(f,Number(h));else{if(this.length=A.ToInt32(arguments[0]),0>o)throw new RangeError("ArrayBufferView size is not a small enough positive integer");this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new e(this.byteLength),this.byteOffset=0}this.constructor=a,r(this),i(this)},a.prototype=new o,a.prototype.BYTES_PER_ELEMENT=t,a.prototype._pack=n,a.prototype._unpack=s,a.BYTES_PER_ELEMENT=t,a.prototype._getter=function(t){if(arguments.length<1)throw new SyntaxError("Not enough arguments");if(t=A.ToUint32(t),t>=this.length)return I;var e,n,r=[];for(e=0,n=this.byteOffset+t*this.BYTES_PER_ELEMENT;e<this.BYTES_PER_ELEMENT;e+=1,n+=1)r.push(this.buffer._bytes[n]);return this._unpack(r)},a.prototype.get=a.prototype._getter,a.prototype._setter=function(t,e){if(arguments.length<2)throw new SyntaxError("Not enough arguments");if(t=A.ToUint32(t),t>=this.length)return I;var n,r,i=this._pack(e);for(n=0,r=this.byteOffset+t*this.BYTES_PER_ELEMENT;n<this.BYTES_PER_ELEMENT;n+=1,r+=1)this.buffer._bytes[r]=i[n]},a.prototype.set=function(){if(arguments.length<1)throw new SyntaxError("Not enough arguments");var t,e,n,r,i,o,s,a,u,f;if("object"==typeof arguments[0]&&arguments[0].constructor===this.constructor){if(t=arguments[0],n=A.ToUint32(arguments[1]),n+t.length>this.length)throw new RangeError("Offset plus length of array is out of range");if(a=this.byteOffset+n*this.BYTES_PER_ELEMENT,u=t.length*this.BYTES_PER_ELEMENT,t.buffer===this.buffer){for(f=[],i=0,o=t.byteOffset;u>i;i+=1,o+=1)f[i]=t.buffer._bytes[o];for(i=0,s=a;u>i;i+=1,s+=1)this.buffer._bytes[s]=f[i]}else for(i=0,o=t.byteOffset,s=a;u>i;i+=1,o+=1,s+=1)this.buffer._bytes[s]=t.buffer._bytes[o]}else{if("object"!=typeof arguments[0]||"undefined"==typeof arguments[0].length)throw new TypeError("Unexpected argument type(s)");if(e=arguments[0],r=A.ToUint32(e.length),n=A.ToUint32(arguments[1]),n+r>this.length)throw new RangeError("Offset plus length of array is out of range");for(i=0;r>i;i+=1)o=e[i],this._setter(n+i,Number(o))}},a.prototype.subarray=function(t,e){function n(t,e,n){return e>t?e:t>n?n:t}t=A.ToInt32(t),e=A.ToInt32(e),arguments.length<1&&(t=0),arguments.length<2&&(e=this.length),0>t&&(t=this.length+t),0>e&&(e=this.length+e),t=n(t,0,this.length),e=n(e,0,this.length);var r=e-t;return 0>r&&(r=0),new this.constructor(this.buffer,this.byteOffset+t*this.BYTES_PER_ELEMENT,r)},a}var e=function(t){if(t=A.ToInt32(t),0>t)throw new RangeError("ArrayBuffer size is not a small enough positive integer");this.byteLength=t,this._bytes=[],this._bytes.length=t;var e;for(e=0;e<this.byteLength;e+=1)this._bytes[e]=0;r(this)};n.ArrayBuffer=n.ArrayBuffer||e;var o=function(){},s=t(1,a,u),m=t(1,f,h),v=t(1,l,h),U=t(2,c,p),k=t(2,g,y),x=t(4,d,_),O=t(4,b,w),S=t(4,B,L),$=t(8,T,E);n.Int8Array=n.Int8Array||s,n.Uint8Array=n.Uint8Array||m,n.Uint8ClampedArray=n.Uint8ClampedArray||v,n.Int16Array=n.Int16Array||U,n.Uint16Array=n.Uint16Array||k,n.Int32Array=n.Int32Array||x,n.Uint32Array=n.Uint32Array||O,n.Float32Array=n.Float32Array||S,n.Float64Array=n.Float64Array||$}(),function(){function t(t,e){return A.IsCallable(t.get)?t.get(e):t[e]}function e(e){return function(n,r){if(n=A.ToUint32(n),n+e.BYTES_PER_ELEMENT>this.byteLength)throw new RangeError("Array index out of range");n+=this.byteOffset;var i,s=new Uint8Array(this.buffer,n,e.BYTES_PER_ELEMENT),a=[];for(i=0;i<e.BYTES_PER_ELEMENT;i+=1)a.push(t(s,i));return Boolean(r)===Boolean(o)&&a.reverse(),t(new e(new Uint8Array(a).buffer),0)}}function i(e){return function(n,r,i){if(n=A.ToUint32(n),n+e.BYTES_PER_ELEMENT>this.byteLength)throw new RangeError("Array index out of range");var s,a,u=new e([r]),f=new Uint8Array(u.buffer),h=[];for(s=0;s<e.BYTES_PER_ELEMENT;s+=1)h.push(t(f,s));Boolean(i)===Boolean(o)&&h.reverse(),a=new Uint8Array(this.buffer,n,e.BYTES_PER_ELEMENT),a.set(h)}}var o=function(){var e=new n.Uint16Array([4660]),r=new n.Uint8Array(e.buffer);return 18===t(r,0)}(),s=function(t,e,n){if(0===arguments.length)t=new ArrayBuffer(0);else if(!(t instanceof ArrayBuffer||"ArrayBuffer"===A.Class(t)))throw new TypeError("TypeError");if(this.buffer=t||new ArrayBuffer(0),this.byteOffset=A.ToUint32(e),this.byteOffset>this.buffer.byteLength)throw new RangeError("byteOffset out of range");if(this.byteLength=arguments.length<3?this.buffer.byteLength-this.byteOffset:A.ToUint32(n),this.byteOffset+this.byteLength>this.buffer.byteLength)throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");r(this)};s.prototype.getUint8=e(n.Uint8Array),s.prototype.getInt8=e(n.Int8Array),s.prototype.getUint16=e(n.Uint16Array),s.prototype.getInt16=e(n.Int16Array),s.prototype.getUint32=e(n.Uint32Array),s.prototype.getInt32=e(n.Int32Array),s.prototype.getFloat32=e(n.Float32Array),s.prototype.getFloat64=e(n.Float64Array),s.prototype.setUint8=i(n.Uint8Array),s.prototype.setInt8=i(n.Int8Array),s.prototype.setUint16=i(n.Uint16Array),s.prototype.setInt16=i(n.Int16Array),s.prototype.setUint32=i(n.Uint32Array),s.prototype.setInt32=i(n.Int32Array),s.prototype.setFloat32=i(n.Float32Array),s.prototype.setFloat64=i(n.Float64Array),n.DataView=n.DataView||s}()},{}]},{},[]),e.exports=t("native-buffer-browserify").Buffer},{}],6:[function(t,e){var n=e.exports={};n.nextTick=function(){var t="undefined"!=typeof window&&window.setImmediate,e="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(t)return function(t){return window.setImmediate(t)};if(e){var n=[];return window.addEventListener("message",function(t){var e=t.source;if((e===window||null===e)&&"process-tick"===t.data&&(t.stopPropagation(),n.length>0)){var r=n.shift();r()}},!0),function(t){n.push(t),window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}(),n.title="browser",n.browser=!0,n.env={},n.argv=[],n.binding=function(){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(){throw new Error("process.chdir is not supported")}},{}]},{},[2]);