(this["webpackJsonparthmis-client"]=this["webpackJsonparthmis-client"]||[]).push([[256],{993:function(e,n){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"==typeof o&&!o(e))return e;for(var r,c=i.length;-1!==t.code.indexOf(r=n(a,c));)++c;return i[c]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function i(c){for(var s=0;s<c.length&&!(r>=o.length);s++){var u=c[s];if("string"==typeof u||u.content&&"string"==typeof u.content){var p=o[r],g=t.tokenStack[p],l="string"==typeof u?u:u.content,f=n(a,p),k=l.indexOf(f);if(-1<k){++r;var h=l.substring(0,k),m=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),d=l.substring(k+f.length),v=[];h&&v.push.apply(v,i([h])),v.push(m),d&&v.push.apply(v,i([d])),"string"==typeof u?c.splice.apply(c,[s,1].concat(v)):u.content=v}}else u.content&&i(u.content)}return c}(t.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=256.ae741c2e.chunk.js.map