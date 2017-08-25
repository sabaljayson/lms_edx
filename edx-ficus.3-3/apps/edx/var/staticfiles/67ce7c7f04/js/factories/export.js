/*
* Underscore.string
* (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>
* Underscore.string is freely distributable under the terms of the MIT license.
* Documentation: https://github.com/epeli/underscore.string
* Some code is borrowed from MooTools and Alexandru Marasteanu.
* Version '3.3.4'
* @preserve
*/

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define("underscore.string",[],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.s=e()}}(function(){var e;return function t(e,n,r){function i(a,s){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(o)return o(a,!0);var p=new Error("Cannot find module '"+a+"'");throw p.code="MODULE_NOT_FOUND",p}var l=n[a]={exports:{}};e[a][0].call(l.exports,function(t){var n=e[a][1][t];return i(n?n:t)},l,l.exports,t,e,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){var r=e("./trim"),i=e("./decapitalize");t.exports=function(e,t){return e=r(e).replace(/[-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),t===!0?i(e):e}},{"./decapitalize":10,"./trim":65}],2:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){e=r(e);var n=t?e.slice(1).toLowerCase():e.slice(1);return e.charAt(0).toUpperCase()+n}},{"./helper/makeString":20}],3:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e){return r(e).split("")}},{"./helper/makeString":20}],4:[function(e,t,n){t.exports=function(e,t){return null==e?[]:(e=String(e),t=~~t,t>0?e.match(new RegExp(".{1,"+t+"}","g")):[e])}},{}],5:[function(e,t,n){var r=e("./capitalize"),i=e("./camelize"),o=e("./helper/makeString");t.exports=function(e){return e=o(e),r(i(e.replace(/[\W_]/g," ")).replace(/\s/g,""))}},{"./camelize":1,"./capitalize":2,"./helper/makeString":20}],6:[function(e,t,n){var r=e("./trim");t.exports=function(e){return r(e).replace(/\s\s+/g," ")}},{"./trim":65}],7:[function(e,t,n){var r=e("./helper/makeString"),i="ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž",o="aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";i+=i.toUpperCase(),o+=o.toUpperCase(),o=o.split(""),i+="ß",o.push("ss"),t.exports=function(e){return r(e).replace(/.{1}/g,function(e){var t=i.indexOf(e);return-1===t?e:o[t]})}},{"./helper/makeString":20}],8:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){return e=r(e),t=r(t),0===e.length||0===t.length?0:e.split(t).length-1}},{"./helper/makeString":20}],9:[function(e,t,n){var r=e("./trim");t.exports=function(e){return r(e).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()}},{"./trim":65}],10:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e){return e=r(e),e.charAt(0).toLowerCase()+e.slice(1)}},{"./helper/makeString":20}],11:[function(e,t,n){function r(e){for(var t=e.match(/^[\s\\t]*/gm),n=t[0].length,r=1;r<t.length;r++)n=Math.min(t[r].length,n);return n}var i=e("./helper/makeString");t.exports=function(e,t){e=i(e);var n,o=r(e);return 0===o?e:(n="string"==typeof t?new RegExp("^"+t,"gm"):new RegExp("^[ \\t]{"+o+"}","gm"),e.replace(n,""))}},{"./helper/makeString":20}],12:[function(e,t,n){var r=e("./helper/makeString"),i=e("./helper/toPositive");t.exports=function(e,t,n){return e=r(e),t=""+t,n="undefined"==typeof n?e.length-t.length:Math.min(i(n),e.length)-t.length,n>=0&&e.indexOf(t,n)===n}},{"./helper/makeString":20,"./helper/toPositive":22}],13:[function(e,t,n){var r=e("./helper/makeString"),i=e("./helper/escapeChars"),o="[";for(var a in i)o+=a;o+="]";var s=new RegExp(o,"g");t.exports=function(e){return r(e).replace(s,function(e){return"&"+i[e]+";"})}},{"./helper/escapeChars":17,"./helper/makeString":20}],14:[function(e,t,n){t.exports=function(){var e={};for(var t in this)this.hasOwnProperty(t)&&!t.match(/^(?:include|contains|reverse|join|map|wrap)$/)&&(e[t]=this[t]);return e}},{}],15:[function(e,t,n){var r=e("./makeString");t.exports=function(e,t){return e=r(e),0===e.length?"":e.slice(0,-1)+String.fromCharCode(e.charCodeAt(e.length-1)+t)}},{"./makeString":20}],16:[function(e,t,n){var r=e("./escapeRegExp");t.exports=function(e){return null==e?"\\s":e.source?e.source:"["+r(e)+"]"}},{"./escapeRegExp":18}],17:[function(e,t,n){var r={"¢":"cent","£":"pound","¥":"yen","€":"euro","©":"copy","®":"reg","<":"lt",">":"gt",'"':"quot","&":"amp","'":"#39"};t.exports=r},{}],18:[function(e,t,n){var r=e("./makeString");t.exports=function(e){return r(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}},{"./makeString":20}],19:[function(e,t,n){var r={nbsp:" ",cent:"¢",pound:"£",yen:"¥",euro:"€",copy:"©",reg:"®",lt:"<",gt:">",quot:'"',amp:"&",apos:"'"};t.exports=r},{}],20:[function(e,t,n){t.exports=function(e){return null==e?"":""+e}},{}],21:[function(e,t,n){t.exports=function(e,t){if(1>t)return"";for(var n="";t>0;)1&t&&(n+=e),t>>=1,e+=e;return n}},{}],22:[function(e,t,n){t.exports=function(e){return 0>e?0:+e||0}},{}],23:[function(e,t,n){var r=e("./capitalize"),i=e("./underscored"),o=e("./trim");t.exports=function(e){return r(o(i(e).replace(/_id$/,"").replace(/_/g," ")))}},{"./capitalize":2,"./trim":65,"./underscored":67}],24:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){return""===t?!0:-1!==r(e).indexOf(t)}},{"./helper/makeString":20}],25:[function(e,t,n){function r(e){return this instanceof r?void(this._wrapped=e):new r(e)}function i(e,t){"function"==typeof t&&(r.prototype[e]=function(){var e=[this._wrapped].concat(Array.prototype.slice.call(arguments)),n=t.apply(null,e);return"string"==typeof n?new r(n):n})}function o(e){i(e,function(t){var n=Array.prototype.slice.call(arguments,1);return String.prototype[e].apply(t,n)})}r.VERSION="3.3.4",r.isBlank=e("./isBlank"),r.stripTags=e("./stripTags"),r.capitalize=e("./capitalize"),r.decapitalize=e("./decapitalize"),r.chop=e("./chop"),r.trim=e("./trim"),r.clean=e("./clean"),r.cleanDiacritics=e("./cleanDiacritics"),r.count=e("./count"),r.chars=e("./chars"),r.swapCase=e("./swapCase"),r.escapeHTML=e("./escapeHTML"),r.unescapeHTML=e("./unescapeHTML"),r.splice=e("./splice"),r.insert=e("./insert"),r.replaceAll=e("./replaceAll"),r.include=e("./include"),r.join=e("./join"),r.lines=e("./lines"),r.dedent=e("./dedent"),r.reverse=e("./reverse"),r.startsWith=e("./startsWith"),r.endsWith=e("./endsWith"),r.pred=e("./pred"),r.succ=e("./succ"),r.titleize=e("./titleize"),r.camelize=e("./camelize"),r.underscored=e("./underscored"),r.dasherize=e("./dasherize"),r.classify=e("./classify"),r.humanize=e("./humanize"),r.ltrim=e("./ltrim"),r.rtrim=e("./rtrim"),r.truncate=e("./truncate"),r.prune=e("./prune"),r.words=e("./words"),r.pad=e("./pad"),r.lpad=e("./lpad"),r.rpad=e("./rpad"),r.lrpad=e("./lrpad"),r.sprintf=e("./sprintf"),r.vsprintf=e("./vsprintf"),r.toNumber=e("./toNumber"),r.numberFormat=e("./numberFormat"),r.strRight=e("./strRight"),r.strRightBack=e("./strRightBack"),r.strLeft=e("./strLeft"),r.strLeftBack=e("./strLeftBack"),r.toSentence=e("./toSentence"),r.toSentenceSerial=e("./toSentenceSerial"),r.slugify=e("./slugify"),r.surround=e("./surround"),r.quote=e("./quote"),r.unquote=e("./unquote"),r.repeat=e("./repeat"),r.naturalCmp=e("./naturalCmp"),r.levenshtein=e("./levenshtein"),r.toBoolean=e("./toBoolean"),r.exports=e("./exports"),r.escapeRegExp=e("./helper/escapeRegExp"),r.wrap=e("./wrap"),r.map=e("./map"),r.strip=r.trim,r.lstrip=r.ltrim,r.rstrip=r.rtrim,r.center=r.lrpad,r.rjust=r.lpad,r.ljust=r.rpad,r.contains=r.include,r.q=r.quote,r.toBool=r.toBoolean,r.camelcase=r.camelize,r.mapChars=r.map,r.prototype={value:function(){return this._wrapped}};for(var a in r)i(a,r[a]);i("tap",function(e,t){return t(e)});var s=["toUpperCase","toLowerCase","split","replace","slice","substring","substr","concat"];for(var c in s)o(s[c]);t.exports=r},{"./camelize":1,"./capitalize":2,"./chars":3,"./chop":4,"./classify":5,"./clean":6,"./cleanDiacritics":7,"./count":8,"./dasherize":9,"./decapitalize":10,"./dedent":11,"./endsWith":12,"./escapeHTML":13,"./exports":14,"./helper/escapeRegExp":18,"./humanize":23,"./include":24,"./insert":26,"./isBlank":27,"./join":28,"./levenshtein":29,"./lines":30,"./lpad":31,"./lrpad":32,"./ltrim":33,"./map":34,"./naturalCmp":35,"./numberFormat":38,"./pad":39,"./pred":40,"./prune":41,"./quote":42,"./repeat":43,"./replaceAll":44,"./reverse":45,"./rpad":46,"./rtrim":47,"./slugify":48,"./splice":49,"./sprintf":50,"./startsWith":51,"./strLeft":52,"./strLeftBack":53,"./strRight":54,"./strRightBack":55,"./stripTags":56,"./succ":57,"./surround":58,"./swapCase":59,"./titleize":60,"./toBoolean":61,"./toNumber":62,"./toSentence":63,"./toSentenceSerial":64,"./trim":65,"./truncate":66,"./underscored":67,"./unescapeHTML":68,"./unquote":69,"./vsprintf":70,"./words":71,"./wrap":72}],26:[function(e,t,n){var r=e("./splice");t.exports=function(e,t,n){return r(e,t,0,n)}},{"./splice":49}],27:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e){return/^\s*$/.test(r(e))}},{"./helper/makeString":20}],28:[function(e,t,n){var r=e("./helper/makeString"),i=[].slice;t.exports=function(){var e=i.call(arguments),t=e.shift();return e.join(r(t))}},{"./helper/makeString":20}],29:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){"use strict";if(e=r(e),t=r(t),e===t)return 0;if(!e||!t)return Math.max(e.length,t.length);for(var n=new Array(t.length+1),i=0;i<n.length;++i)n[i]=i;for(i=0;i<e.length;++i){for(var o=i+1,a=0;a<t.length;++a){var s=o;o=n[a]+(e.charAt(i)===t.charAt(a)?0:1);var c=s+1;o>c&&(o=c),c=n[a+1]+1,o>c&&(o=c),n[a]=s}n[a]=o}return o}},{"./helper/makeString":20}],30:[function(e,t,n){t.exports=function(e){return null==e?[]:String(e).split(/\r\n?|\n/)}},{}],31:[function(e,t,n){var r=e("./pad");t.exports=function(e,t,n){return r(e,t,n)}},{"./pad":39}],32:[function(e,t,n){var r=e("./pad");t.exports=function(e,t,n){return r(e,t,n,"both")}},{"./pad":39}],33:[function(e,t,n){var r=e("./helper/makeString"),i=e("./helper/defaultToWhiteSpace"),o=String.prototype.trimLeft;t.exports=function(e,t){return e=r(e),!t&&o?o.call(e):(t=i(t),e.replace(new RegExp("^"+t+"+"),""))}},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":20}],34:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){return e=r(e),0===e.length||"function"!=typeof t?e:e.replace(/./g,t)}},{"./helper/makeString":20}],35:[function(e,t,n){t.exports=function(e,t){if(e==t)return 0;if(!e)return-1;if(!t)return 1;for(var n=/(\.\d+|\d+|\D+)/g,r=String(e).match(n),i=String(t).match(n),o=Math.min(r.length,i.length),a=0;o>a;a++){var s=r[a],c=i[a];if(s!==c){var p=+s,l=+c;return p===p&&l===l?p>l?1:-1:c>s?-1:1}}return r.length!=i.length?r.length-i.length:t>e?-1:1}},{}],36:[function(t,n,r){!function(t){function n(){var e=arguments[0],t=n.cache;return t[e]&&t.hasOwnProperty(e)||(t[e]=n.parse(e)),n.format.call(null,t[e],arguments)}function i(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function o(e,t){return Array(t+1).join(e)}var a={not_string:/[^s]/,number:/[diefg]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[\+\-]/};n.format=function(e,t){var r,s,c,p,l,u,f,h=1,d=e.length,m="",g=[],v=!0,x="";for(s=0;d>s;s++)if(m=i(e[s]),"string"===m)g[g.length]=e[s];else if("array"===m){if(p=e[s],p[2])for(r=t[h],c=0;c<p[2].length;c++){if(!r.hasOwnProperty(p[2][c]))throw new Error(n("[sprintf] property '%s' does not exist",p[2][c]));r=r[p[2][c]]}else r=p[1]?t[p[1]]:t[h++];if("function"==i(r)&&(r=r()),a.not_string.test(p[8])&&a.not_json.test(p[8])&&"number"!=i(r)&&isNaN(r))throw new TypeError(n("[sprintf] expecting number but found %s",i(r)));switch(a.number.test(p[8])&&(v=r>=0),p[8]){case"b":r=r.toString(2);break;case"c":r=String.fromCharCode(r);break;case"d":case"i":r=parseInt(r,10);break;case"j":r=JSON.stringify(r,null,p[6]?parseInt(p[6]):0);break;case"e":r=p[7]?r.toExponential(p[7]):r.toExponential();break;case"f":r=p[7]?parseFloat(r).toFixed(p[7]):parseFloat(r);break;case"g":r=p[7]?parseFloat(r).toPrecision(p[7]):parseFloat(r);break;case"o":r=r.toString(8);break;case"s":r=(r=String(r))&&p[7]?r.substring(0,p[7]):r;break;case"u":r>>>=0;break;case"x":r=r.toString(16);break;case"X":r=r.toString(16).toUpperCase()}a.json.test(p[8])?g[g.length]=r:(!a.number.test(p[8])||v&&!p[3]?x="":(x=v?"+":"-",r=r.toString().replace(a.sign,"")),u=p[4]?"0"===p[4]?"0":p[4].charAt(1):" ",f=p[6]-(x+r).length,l=p[6]&&f>0?o(u,f):"",g[g.length]=p[5]?x+r+l:"0"===u?x+l+r:l+x+r)}return g.join("")},n.cache={},n.parse=function(e){for(var t=e,n=[],r=[],i=0;t;){if(null!==(n=a.text.exec(t)))r[r.length]=n[0];else if(null!==(n=a.modulo.exec(t)))r[r.length]="%";else{if(null===(n=a.placeholder.exec(t)))throw new SyntaxError("[sprintf] unexpected placeholder");if(n[2]){i|=1;var o=[],s=n[2],c=[];if(null===(c=a.key.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(o[o.length]=c[1];""!==(s=s.substring(c[0].length));)if(null!==(c=a.key_access.exec(s)))o[o.length]=c[1];else{if(null===(c=a.index_access.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");o[o.length]=c[1]}n[2]=o}else i|=2;if(3===i)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");r[r.length]=n}t=t.substring(n[0].length)}return r};var s=function(e,t,r){return r=(t||[]).slice(0),r.splice(0,0,e),n.apply(null,r)};"undefined"!=typeof r?(r.sprintf=n,r.vsprintf=s):(t.sprintf=n,t.vsprintf=s,"function"==typeof e&&e.amd&&e(function(){return{sprintf:n,vsprintf:s}}))}("undefined"==typeof window?this:window)},{}],37:[function(e,t,n){(function(e){function n(e,t){function n(){if(!i){if(r("throwDeprecation"))throw new Error(t);r("traceDeprecation")?console.trace(t):console.warn(t),i=!0}return e.apply(this,arguments)}if(r("noDeprecation"))return e;var i=!1;return n}function r(t){try{if(!e.localStorage)return!1}catch(n){return!1}var r=e.localStorage[t];return null==r?!1:"true"===String(r).toLowerCase()}t.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],38:[function(e,t,n){t.exports=function(e,t,n,r){if(isNaN(e)||null==e)return"";e=e.toFixed(~~t),r="string"==typeof r?r:",";var i=e.split("."),o=i[0],a=i[1]?(n||".")+i[1]:"";return o.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+r)+a}},{}],39:[function(e,t,n){var r=e("./helper/makeString"),i=e("./helper/strRepeat");t.exports=function(e,t,n,o){e=r(e),t=~~t;var a=0;switch(n?n.length>1&&(n=n.charAt(0)):n=" ",o){case"right":return a=t-e.length,e+i(n,a);case"both":return a=t-e.length,i(n,Math.ceil(a/2))+e+i(n,Math.floor(a/2));default:return a=t-e.length,i(n,a)+e}}},{"./helper/makeString":20,"./helper/strRepeat":21}],40:[function(e,t,n){var r=e("./helper/adjacent");t.exports=function(e){return r(e,-1)}},{"./helper/adjacent":15}],41:[function(e,t,n){var r=e("./helper/makeString"),i=e("./rtrim");t.exports=function(e,t,n){if(e=r(e),t=~~t,n=null!=n?String(n):"...",e.length<=t)return e;var o=function(e){return e.toUpperCase()!==e.toLowerCase()?"A":" "},a=e.slice(0,t+1).replace(/.(?=\W*\w*$)/g,o);return a=a.slice(a.length-2).match(/\w\w/)?a.replace(/\s*\S+$/,""):i(a.slice(0,a.length-1)),(a+n).length>e.length?e:e.slice(0,a.length)+n}},{"./helper/makeString":20,"./rtrim":47}],42:[function(e,t,n){var r=e("./surround");t.exports=function(e,t){return r(e,t||'"')}},{"./surround":58}],43:[function(e,t,n){var r=e("./helper/makeString"),i=e("./helper/strRepeat");t.exports=function o(e,t,n){if(e=r(e),t=~~t,null==n)return i(e,t);for(var o=[];t>0;o[--t]=e);return o.join(n)}},{"./helper/makeString":20,"./helper/strRepeat":21}],44:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t,n,i){var o=i===!0?"gi":"g",a=new RegExp(t,o);return r(e).replace(a,n)}},{"./helper/makeString":20}],45:[function(e,t,n){var r=e("./chars");t.exports=function(e){return r(e).reverse().join("")}},{"./chars":3}],46:[function(e,t,n){var r=e("./pad");t.exports=function(e,t,n){return r(e,t,n,"right")}},{"./pad":39}],47:[function(e,t,n){var r=e("./helper/makeString"),i=e("./helper/defaultToWhiteSpace"),o=String.prototype.trimRight;t.exports=function(e,t){return e=r(e),!t&&o?o.call(e):(t=i(t),e.replace(new RegExp(t+"+$"),""))}},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":20}],48:[function(e,t,n){var r=e("./trim"),i=e("./dasherize"),o=e("./cleanDiacritics");t.exports=function(e){return r(i(o(e).replace(/[^\w\s-]/g,"-").toLowerCase()),"-")}},{"./cleanDiacritics":7,"./dasherize":9,"./trim":65}],49:[function(e,t,n){var r=e("./chars");t.exports=function(e,t,n,i){var o=r(e);return o.splice(~~t,~~n,i),o.join("")}},{"./chars":3}],50:[function(e,t,n){var r=e("util-deprecate");t.exports=r(e("sprintf-js").sprintf,"sprintf() will be removed in the next major release, use the sprintf-js package instead.")},{"sprintf-js":36,"util-deprecate":37}],51:[function(e,t,n){var r=e("./helper/makeString"),i=e("./helper/toPositive");t.exports=function(e,t,n){return e=r(e),t=""+t,n=null==n?0:Math.min(i(n),e.length),e.lastIndexOf(t,n)===n}},{"./helper/makeString":20,"./helper/toPositive":22}],52:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){e=r(e),t=r(t);var n=t?e.indexOf(t):-1;return~n?e.slice(0,n):e}},{"./helper/makeString":20}],53:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){e=r(e),t=r(t);var n=e.lastIndexOf(t);return~n?e.slice(0,n):e}},{"./helper/makeString":20}],54:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){e=r(e),t=r(t);var n=t?e.indexOf(t):-1;return~n?e.slice(n+t.length,e.length):e}},{"./helper/makeString":20}],55:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){e=r(e),t=r(t);var n=t?e.lastIndexOf(t):-1;return~n?e.slice(n+t.length,e.length):e}},{"./helper/makeString":20}],56:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e){return r(e).replace(/<\/?[^>]+>/g,"")}},{"./helper/makeString":20}],57:[function(e,t,n){var r=e("./helper/adjacent");t.exports=function(e){return r(e,1)}},{"./helper/adjacent":15}],58:[function(e,t,n){t.exports=function(e,t){return[t,e,t].join("")}},{}],59:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e){return r(e).replace(/\S/g,function(e){return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()})}},{"./helper/makeString":20}],60:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e){return r(e).toLowerCase().replace(/(?:^|\s|-)\S/g,function(e){return e.toUpperCase()})}},{"./helper/makeString":20}],61:[function(e,t,n){function r(e,t){var n,r,i=e.toLowerCase();for(t=[].concat(t),n=0;n<t.length;n+=1)if(r=t[n]){if(r.test&&r.test(e))return!0;if(r.toLowerCase()===i)return!0}}var i=e("./trim");t.exports=function(e,t,n){return"number"==typeof e&&(e=""+e),"string"!=typeof e?!!e:(e=i(e),r(e,t||["true","1"])?!0:r(e,n||["false","0"])?!1:void 0)}},{"./trim":65}],62:[function(e,t,n){t.exports=function(e,t){if(null==e)return 0;var n=Math.pow(10,isFinite(t)?t:0);return Math.round(e*n)/n}},{}],63:[function(e,t,n){var r=e("./rtrim");t.exports=function(e,t,n,i){t=t||", ",n=n||" and ";var o=e.slice(),a=o.pop();return e.length>2&&i&&(n=r(t)+n),o.length?o.join(t)+n+a:a}},{"./rtrim":47}],64:[function(e,t,n){var r=e("./toSentence");t.exports=function(e,t,n){return r(e,t,n,!0)}},{"./toSentence":63}],65:[function(e,t,n){var r=e("./helper/makeString"),i=e("./helper/defaultToWhiteSpace"),o=String.prototype.trim;t.exports=function(e,t){return e=r(e),!t&&o?o.call(e):(t=i(t),e.replace(new RegExp("^"+t+"+|"+t+"+$","g"),""))}},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":20}],66:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t,n){return e=r(e),n=n||"...",t=~~t,e.length>t?e.slice(0,t)+n:e}},{"./helper/makeString":20}],67:[function(e,t,n){var r=e("./trim");t.exports=function(e){return r(e).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()}},{"./trim":65}],68:[function(e,t,n){var r=e("./helper/makeString"),i=e("./helper/htmlEntities");t.exports=function(e){return r(e).replace(/\&([^;]+);/g,function(e,t){var n;return t in i?i[t]:(n=t.match(/^#x([\da-fA-F]+)$/))?String.fromCharCode(parseInt(n[1],16)):(n=t.match(/^#(\d+)$/))?String.fromCharCode(~~n[1]):e})}},{"./helper/htmlEntities":19,"./helper/makeString":20}],69:[function(e,t,n){t.exports=function(e,t){return t=t||'"',e[0]===t&&e[e.length-1]===t?e.slice(1,e.length-1):e}},{}],70:[function(e,t,n){var r=e("util-deprecate");t.exports=r(e("sprintf-js").vsprintf,"vsprintf() will be removed in the next major release, use the sprintf-js package instead.")},{"sprintf-js":36,"util-deprecate":37}],71:[function(e,t,n){var r=e("./isBlank"),i=e("./trim");t.exports=function(e,t){return r(e)?[]:i(e,t).split(t||/\s+/)}},{"./isBlank":27,"./trim":65}],72:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){e=r(e),t=t||{};var n,i=t.width||75,o=t.seperator||"\n",a=t.cut||!1,s=t.preserveSpaces||!1,c=t.trailingSpaces||!1;if(0>=i)return e;if(a){var p=0;for(n="";p<e.length;)p%i==0&&p>0&&(n+=o),n+=e.charAt(p),p++;if(c)for(;p%i>0;)n+=" ",p++;return n}var l=e.split(" "),u=0;for(n="";l.length>0;){if(1+l[0].length+u>i&&u>0){if(s)n+=" ",u++;else if(c)for(;i>u;)n+=" ",u++;n+=o,u=0}u>0&&(n+=" ",u++),n+=l[0],u+=l[0].length,l.shift()}if(c)for(;i>u;)n+=" ",u++;return n}},{"./helper/makeString":20}]},{},[25])(25)}),define("text",{load:function(e){throw new Error("Dynamic load not allowed: "+e)}}),define("text!common/templates/components/system-feedback.underscore",[],function(){return'<div class="wrapper wrapper-<%= type %> wrapper-<%= type %>-<%= intent %>\n            <% if(obj.shown) { %>is-shown<% } else { %>is-hiding<% } %>\n            <% if(_.contains([\'help\', \'mini\'], intent)) { %>wrapper-<%= type %>-status<% } %>"\n     id="<%= type %>-<%= intent %>"\n     aria-hidden="<% if(obj.shown) { %>false<% } else { %>true<% } %>"\n     aria-labelledby="<%= type %>-<%= intent %>-title"\n     tabindex="-1"\n     <% if (obj.message) { %>aria-describedby="<%= type %>-<%= intent %>-description" <% } %>\n     <% if (obj.actions) { %>role="dialog"<% } %>\n  >\n  <div class="<%= type %> <%= intent %> <% if(obj.actions) { %>has-actions<% } %>">\n    <% if(obj.icon) { %>\n      <% var iconClass = {"warning": "warning", "confirmation": "check", "error": "warning", "announcement": "bullhorn", "step-required": "exclamation-circle", "help": "question", "mini": "cog"} %>\n      <span class="feedback-symbol fa fa-<%= iconClass[intent] %>" aria-hidden="true"></span>\n    <% } %>\n\n    <div class="copy">\n      <h2 class="title title-3" id="<%= type %>-<%= intent %>-title"><%- title %></h2>\n      <% if(obj.message) { %><p class="message" id="<%= type %>-<%= intent %>-description"><%- message %></p><% } %>\n    </div>\n\n    <% if(obj.actions) { %>\n    <nav class="nav-actions">\n      <ul>\n        <% if(actions.primary) { %>\n        <li class="nav-item">\n          <button class="action-primary <%= actions.primary.class %>"><%- actions.primary.text %></button>\n        </li>\n        <% } %>\n        <% if(actions.secondary) {\n             _.each(actions.secondary, function(secondary) { %>\n        <li class="nav-item">\n          <button class="action-secondary <%= secondary.class %>"><%- secondary.text %></button>\n        </li>\n        <%   });\n           } %>\n      </ul>\n    </nav>\n    <% } %>\n\n    <% if(obj.closeIcon) { %>\n    <a href="#" rel="view" class="action action-close action-<%= type %>-close">\n      <span class="icon fa fa-times-circle" aria-hidden="true"></span>\n      <span class="label">close <%= type %></span>\n    </a>\n    <% } %>\n  </div>\n</div>\n'}),function(e){"use strict";e("common/js/components/views/feedback",["jquery","underscore","underscore.string","backbone","text!common/templates/components/system-feedback.underscore"],function(e,t,n,r,i){var o=["a[href]:not([tabindex='-1'])","area[href]:not([tabindex='-1'])","input:not([disabled]):not([tabindex='-1'])","select:not([disabled]):not([tabindex='-1'])","textarea:not([disabled]):not([tabindex='-1'])","button:not([disabled]):not([tabindex='-1'])","iframe:not([tabindex='-1'])","[tabindex]:not([tabindex='-1'])","[contentEditable=true]:not([tabindex='-1'])"],a=r.View.extend({options:{title:"",message:"",intent:null,type:null,shown:!0,icon:!0,closeIcon:!0,minShown:0,maxShown:1/0,outFocusElement:null},initialize:function(n){if(this.options=t.extend({},this.options,n),!this.options.type)throw"SystemFeedback: type required (given "+JSON.stringify(this.options)+")";if(!this.options.intent)throw"SystemFeedback: intent required (given "+JSON.stringify(this.options)+")";return this.setElement(e("#page-"+this.options.type)),this.options.actions&&this.options.actions.secondary&&!t.isArray(this.options.actions.secondary)&&(this.options.actions.secondary=[this.options.actions.secondary]),this},inFocus:function(){this.options.outFocusElement=this.options.outFocusElement||document.activeElement,this.$(".wrapper").first().focus();var e=this.$(o.join());return e.on("keydown",function(t){9===t.which&&t.shiftKey&&t.target===e.first()[0]?(t.preventDefault(),e.last().focus()):9!==t.which||t.shiftKey||t.target!==e.last()[0]||(t.preventDefault(),e.first().focus())}),this},outFocus:function(){this.$(o.join()).off("keydown");return this.options.outFocusElement&&this.options.outFocusElement.focus(),this},show:function(){return clearTimeout(this.hideTimeout),this.options.shown=!0,this.shownAt=new Date,this.render(),e.isNumeric(this.options.maxShown)&&(this.hideTimeout=setTimeout(t.bind(this.hide,this),this.options.maxShown)),this},hide:function(){return this.shownAt&&e.isNumeric(this.options.minShown)&&this.options.minShown>new Date-this.shownAt?(clearTimeout(this.hideTimeout),this.hideTimeout=setTimeout(t.bind(this.hide,this),this.options.minShown-(new Date-this.shownAt))):(this.options.shown=!1,delete this.shownAt,this.render()),this},events:{"click .action-close":"hide","click .action-primary":"primaryClick","click .action-secondary":"secondaryClick"},render:function(){var e=a["active_"+this.options.type];return e&&e!==this&&(e.stopListening(),e.undelegateEvents()),this.$el.html(t.template(i)(this.options)),a["active_"+this.options.type]=this,this},primaryClick:function(e){var t,n;t=this.options.actions,t&&(n=t.primary,n&&(n.preventDefault!==!1&&e.preventDefault(),n.click&&n.click.call(e.target,this,e)))},secondaryClick:function(e){var n,r,i,o;n=this.options.actions,n&&(r=n.secondary,r&&(o=0,e&&e.target&&(o=t.indexOf(this.$(".action-secondary"),e.target)),i=r[o],i.preventDefault!==!1&&e.preventDefault(),i.click&&i.click.call(e.target,this,e)))}});return a})}.call(this,define||RequireJS.define),function(e){"use strict";e("common/js/components/views/feedback_prompt",["jquery","underscore","underscore.string","common/js/components/views/feedback"],function(e,t,n,r){var i,o,a=r.extend({options:e.extend({},r.prototype.options,{type:"prompt",closeIcon:!1,icon:!1}),render:function(){return window.$body||(window.$body=e(document.body)),this.options.shown?$body.addClass("prompt-is-shown"):$body.removeClass("prompt-is-shown"),r.prototype.render.apply(this,arguments)},show:function(){return r.prototype.show.apply(this,arguments),this.inFocus()},hide:function(){return r.prototype.hide.apply(this,arguments),this.outFocus()}});return i=t.compose(n.capitalize,n.camelize),o=["warning","error","confirmation","announcement","step-required","help","mini"],t.each(o,function(t){var n;n=a.extend({options:e.extend({},a.prototype.options,{intent:t})}),a[i(t)]=n}),a})}.call(this,define||RequireJS.define),define("js/factories/export",["gettext","common/js/components/views/feedback_prompt"],function(e,t){"use strict";return function(n,r,i,o,a){var s;if(n)s=new t({title:e("There has been an error while exporting."),message:e("There has been a failure to export to XML at least one component. It is recommended that you go to the edit page and repair the error before attempting another export. Please check that all components on the page are valid and do not display any error messages."),intent:"error",actions:{primary:{text:e("Correct failed component"),click:function(e){e.hide(),document.location=r}},secondary:{text:e("Return to Export"),click:function(e){e.hide()}}}});else{var c,p="<p>";o?(p+=e("Your library could not be exported to XML. There is not enough information to identify the failed component. Inspect your library to identify any problematic components and try again."),c=e("Take me to the main library page")):(p+=e("Your course could not be exported to XML. There is not enough information to identify the failed component. Inspect your course to identify any problematic components and try again."),c=e("Take me to the main course page")),p+="</p><p>"+e("The raw error message is:")+"</p>"+a,s=new t({title:e("There has been an error with your export."),message:p,intent:"error",actions:{primary:{text:c,click:function(e){e.hide(),document.location=i}},secondary:{text:e("Cancel"),click:function(e){e.hide()}}}})}$("body").addClass("js"),s.show()}});