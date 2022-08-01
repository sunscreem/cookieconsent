/*!
* CookieConsent 3.0.0-rc.1
* https://github.com/orestbida/cookieconsent.git
* Author Orest Bida
* Released under the MIT License
*/
var e,a;e=this,a=function(){'use strict';const e='opt-in',a='opt-out',t='show--consent',n='show--preferences',r='disable--interaction',o='data-category',i='div',c='button',l='consentModal',s='preferencesModal',d=(e,a)=>{const t={cookie:f.o.t};if(a){const t={modalName:a};return e===f.l.i?r(f._.i)&&f._.i(t):r(f._.p)&&f._.p(t),n(e,t)}function n(e,a){window.dispatchEvent(new CustomEvent(e,{detail:o(a)}))}function r(e){return'function'==typeof e}function o(e){return JSON.parse(JSON.stringify(e))}e===f.l.u?r(f._.u)&&f._.u(o(t)):e===f.l.v?r(f._.v)&&f._.v(o(t)):e===f.l.m&&(t.changedCategories=f.o.g,t.changedServices=f.o.h,r(f._.m)&&f._.m(o(t))),n(e,t)};class _{constructor(){this.C=!1,this.S={mode:e,revision:0,autoShow:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={k:null,M:'',T:{},A:null,t:null,N:null,D:null,B:null,O:'',H:!0,J:!1,V:!1,j:!1,F:!1,I:!1,P:[],G:!1,U:!0,g:[],L:!1,R:'',q:!1,K:[],W:[],X:[],Y:[],Z:!1,$:!1,ee:!1,ae:[],te:[],ne:[],re:{},oe:{},ie:{},h:{},ce:{},le:[],se:[]},this.de={_e:0,fe:0,pe:0,ue:0,ve:0,me:0,ge:0,be:0,he:0,ye:0,we:0,Ce:0,Se:0,ke:0,Me:0,xe:0,Te:0,Ae:0,Ne:0,De:0,Be:0,Oe:0,He:0,Ee:0,Je:0,Ve:0,je:0,Fe:0,Ie:0,Pe:{},Ge:{}},this._={u:0,v:0,m:0,i:0,p:0},this.l={u:'cc:onFirstConsent',v:'cc:onConsent',m:'cc:onChange',i:'cc:onModalShow',p:'cc:onModalHide'}}}const f=new _,p=(e,a)=>-1!==e.indexOf(a),u=e=>{var a=document.createElement(e);return e===c&&v(a,'type',e),a},v=(e,a,t)=>{e.setAttribute(a,t)},m=(e,a)=>{e.appendChild(a)},g=(e,a,t,n)=>{e.addEventListener(a,t,!0===n&&{passive:!0})},b=e=>{if('object'==typeof e)return Object.keys(e)},h=(e,a)=>{e.classList.add(a)},y=(e,a)=>{e.classList.remove(a)},w=()=>{var e=f.S.cookie.expiresAfterDays;return'function'==typeof e?e(f.o.R):e},C=(e,a)=>e.filter((e=>!p(a,e))).concat(a.filter((a=>!p(e,a)))),S=e=>{var a='custom';return e.accepted.length===f.o.K.length?a='all':e.accepted.length===f.o.X.length&&(a='necessary'),a},k=()=>{f.o.R=S(x())},M=(e,a)=>{for(var t='accept-',n=s('show-preferencesModal'),r=s('show-consentModal'),o=s(t+'all'),i=s(t+'necessary'),c=s(t+'custom'),l=0;l<n.length;l++)v(n[l],'aria-haspopup','dialog'),g(n[l],'click',(e=>{e.preventDefault(),a.showPreferences()}));for(l=0;l<r.length;l++)v(r[l],'aria-haspopup','dialog'),g(r[l],'click',(e=>{e.preventDefault(),a.show(!0)}));for(l=0;l<o.length;l++)g(o[l],'click',(e=>{d(e,'all')}));for(l=0;l<c.length;l++)g(c[l],'click',(e=>{d(e)}));for(l=0;l<i.length;l++)g(i[l],'click',(e=>{d(e,[])}));function s(a){return(e||document).querySelectorAll('[data-cc="'+a+'"]')}function d(e,t){e.preventDefault(),a.acceptCategory(t),a.hidePreferences(),a.hide()}},x=()=>{var e=f.o.K.filter((e=>!p(f.o.W,e)));return{accepted:f.o.W,rejected:e}},T=()=>{var e=['[href]',c,'input','details','[tabindex="0"]'];function a(a,t){var n=!1,r=!1;try{for(var o,i=a&&a.querySelectorAll(e.join(':not([tabindex="-1"]), ')),c=i.length,l=0;l<c;)o=i[l].getAttribute('data-focus'),r||'1'!==o?'0'===o&&(n=i[l],r||'0'===i[l+1].getAttribute('data-focus')||(r=i[l+1])):r=i[l],l++}catch(e){return[]}t[0]=i[0],t[1]=i[i.length-1],t[2]=n,t[3]=r}a(f.de.Ne,f.o.te),f.o.J&&a(f.de.me,f.o.ae)},A=e=>{var a=f.o.oe;if(f.o.K.forEach((e=>{(f.o.h[e]||f.o.oe[e]||[]).forEach((a=>{const t=f.o.re[e][a];!t.enabled&&p(f.o.oe[e],a)&&'function'==typeof t.onAccept?(t.enabled=!0,t.onAccept()):t.enabled&&!p(f.o.oe[e],a)&&'function'==typeof t.onAccept&&(t.enabled=!1,t.onReject())}))})),f.S.manageScriptTags){var t=f.o.le,n=e||f.o.t.categories||[],r=(e,t)=>{if(t<e.length){var i=e[t],c=f.o.se[t],l=c.Ue,s=c.Le,d=p(n,l),_=!!s&&p(a[l],s);if(!c.Re){var m=!s&&!c.qe&&d,g=s&&!c.qe&&_,b=!s&&c.qe&&!d&&p(f.o.g,l),h=s&&c.qe&&!_&&p(f.o.h[l]||[],s);if(m||b||g||h){c.Re=!0,i.removeAttribute('type'),i.removeAttribute(o);var y=i.getAttribute('data-src');y&&i.removeAttribute('data-src');var w=u('script');if(w.textContent=i.innerHTML,((e,a)=>{for(var t=a.attributes,n=t.length,r=0;r<n;r++){var o=t[r].nodeName;v(e,o,a[o]||a.getAttribute(o))}})(w,i),y?w.src=y:y=i.src,y&&(w.onload=w.onerror=()=>{w.onload=w.onerror=null,r(e,++t)}),i.parentNode.replaceChild(w,i),y)return}}r(e,++t)}};r(t,0)}},N=e=>{var a=f.o.k.guiOptions,t=a&&a.consentModal,n=a&&a.preferencesModal;function r(e,a,t,n,r,o){var i=t&&t.layout,c=t&&t.position,l=t&&!0===t.flipButtons,s=t&&!1===t.equalWeightButtons,d=i&&i.split(' ')||[],_=c&&c.split(' ')||[],u=d[0],v=d[1],m=_[0],g='pm--'===n?_[0]:_[1],b=u,w=a[u];w||(w=a[r],b=r);var C=p(w.ze,v)&&v,S=p(w.Ke,m)?m:w.Qe,k=p(w.We,g)?g:w.Xe;e.className=o,h(e,n+b),C&&h(e,n+C),S&&h(e,n+S),k&&h(e,n+k),l&&h(e,n+'flip');var M='btn--secondary',x=o+'__';'cm'===o?(f.de.Me&&y(f.de.Me,x+M),f.de.Ae&&y(f.de.Ae,x+M),s&&(f.de.Me&&h(f.de.Me,x+M),f.de.Ae&&h(f.de.Ae,x+M))):(f.de.Fe&&y(f.de.Fe,x+M),s&&f.de.Fe&&h(f.de.Fe,x+M))}if(0===e&&f.o.J){var o=['middle','top','bottom'],i=['left','center','right'],c={box:{ze:['wide','inline'],Ke:o,We:i,Qe:'bottom',Xe:'right'},cloud:{ze:['inline'],Ke:o,We:i,Qe:'bottom',Xe:'center'},bar:{ze:['inline'],Ke:o.slice(1),We:[],Qe:'bottom',Xe:''}};r(f.de.me,c,t,'cm--','box','cm')}1===e&&r(f.de.Ne,{box:{ze:[],Ke:[],We:[],Qe:'',Xe:''},bar:{ze:['wide'],Ke:[],We:['left','right'],Qe:'',Xe:'left'}},n,'pm--','box','pm')},D=e=>{var a=f.o.A&&f.o.A.consentModal;if(a){!0===f.o.k.disablePageInteraction&&h(f.de.fe,r);var t=a.acceptAllBtn,n=a.acceptNecessaryBtn,o=a.showPreferencesBtn,l=a.closeIconLabel,s=a.footer;f.de.ue||(f.de.ue=u(i),f.de.me=u(i),f.de.ge=u(i),f.de.be=u(i),f.de.we=u(i),h(f.de.ue,'cm-wrapper'),h(f.de.me,'cm'),h(f.de.ge,'cm__body'),h(f.de.be,'cm__texts'),h(f.de.we,'cm__btns'),v(f.de.me,'role','dialog'),v(f.de.me,'aria-modal','true'),v(f.de.me,'aria-hidden','false'),v(f.de.me,'aria-labelledby','cm__title'),v(f.de.me,'aria-describedby','cm__desc'),f.de.me.style.visibility='hidden',l&&(f.de.Ae||(f.de.Ae=u(c),f.de.Ae.className='cm__btn cm__btn--close',g(f.de.Ae,'click',(()=>{e.hide(),e.acceptCategory([])})),m(f.de.ge,f.de.Ae)),v(f.de.Ae,'aria-label',l)),m(f.de.ge,f.de.be),(t||n||o)&&m(f.de.ge,f.de.we),m(f.de.me,f.de.ge),m(f.de.ue,f.de.me),m(f.de.pe,f.de.ue));var d=a.title;d&&(f.de.he||(f.de.he=u(i),f.de.he.className=f.de.he.id='cm__title',v(f.de.he,'role','heading'),v(f.de.he,'aria-level','2'),m(f.de.be,f.de.he)),f.de.he.innerHTML=d);var _=a.description;if(_&&(f.o.G&&(_=_.replace('{{revisionMessage}}',f.o.U?'':a.revisionMessage||'')),f.de.ye||(f.de.ye=u(i),f.de.ye.className=f.de.ye.id='cm__desc',m(f.de.be,f.de.ye)),f.de.ye.innerHTML=_),t&&(f.de.ke||(f.de.ke=u(c),h(f.de.ke,'cm__btn'),g(f.de.ke,'click',(()=>{e.hide(),e.acceptCategory('all')}))),f.de.ke.innerHTML=t),n&&(f.de.Me||(f.de.Me=u(c),h(f.de.Me,'cm__btn'),g(f.de.Me,'click',(()=>{e.hide(),e.acceptCategory([])}))),f.de.Me.innerHTML=n),o&&(f.de.xe||(f.de.xe=u(c),f.de.xe.className='cm__btn cm__btn--secondary',g(f.de.xe,'click',e.showPreferences)),f.de.xe.innerHTML=o),!f.de.Se&&o&&(f.de.Se=u(i),h(f.de.Se,'cm__btn-group'),m(f.de.Se,f.de.xe),m(f.de.we,f.de.Se)),f.de.Ce||(f.de.Ce=u(i),h(f.de.Ce,'cm__btn-group'),n&&m(f.de.Ce,f.de.Me),t&&m(f.de.Ce,f.de.ke),(t||n)&&m(f.de.ge,f.de.Ce),m(f.de.we,f.de.Ce)),s){if(!f.de.Te){var p=u(i),b=u(i);f.de.Te=u(i),h(p,'cm__footer'),h(b,'cm__links'),h(f.de.Te,'cm__link-group'),m(b,f.de.Te),m(p,b),m(f.de.me,p)}f.de.Te.innerHTML=s}f.o.J=!0,N(0)}},B=e=>{var a=f.o.A&&f.o.A.preferencesModal;if(a){var t=a.title,n=a.closeIconLabel,r=a.acceptAllBtn,o=a.acceptNecessaryBtn,l=a.savePreferencesBtn,s=a.sections;if(f.de.ve)f.de.Ee=u(i),h(f.de.Ee,'pm__body');else{f.de.ve=u(i),h(f.de.ve,'pm-wrapper'),f.de.Ne=u(i),f.de.Ne.style.visibility='hidden',h(f.de.Ne,'pm'),v(f.de.Ne,'role','dialog'),v(f.de.Ne,'aria-hidden',!0),v(f.de.Ne,'aria-modal',!0),g(f.de.fe,'keydown',(a=>{27===a.keyCode&&e.hidePreferences()}),!0),f.de.De=u(i),h(f.de.De,'pm__header'),f.de.Be=u(i),h(f.de.Be,'pm__title'),v(f.de.Be,'role','heading'),f.de.Oe=u(c),h(f.de.Oe,'pm__close-btn'),v(f.de.Oe,'aria-label',a.closeIconLabel||''),g(f.de.Oe,'click',e.hidePreferences),f.de.He=u(i),h(f.de.He,'pm__body'),f.de.Ve=u(i),h(f.de.Ve,'pm__footer');var d=u(i);h(d,'pm__btns');var _=u(i),p=u(i);h(_,'pm__btn-group'),h(p,'pm__btn-group'),m(f.de.Ve,p),m(f.de.Ve,_),m(f.de.De,f.de.Be),m(f.de.De,f.de.Oe),m(f.de.Ne,f.de.De),m(f.de.Ne,f.de.He),m(f.de.Ne,f.de.Ve),m(f.de.ve,f.de.Ne),m(f.de.pe,f.de.ve)}t&&(f.de.Be.innerHTML=t,n&&v(f.de.Oe,'aria-label',n)),s&&s.forEach((e=>{var t=e.title,n=e.description,r=e.linkedCategory,o=r&&f.o.q[r],l=e.cookieTable,s=l&&l.body,d=s&&s.length>0,_=!!o,p=_&&f.o.re[r]||!1,w=p&&b(p)||[],C=_&&(!!n||!!d||b(p).length>0),S=u(i);if(h(S,'pm__section'),C||n){var k=u(i);h(k,'pm__section-desc-wrapper')}if(C&&w.length>0){var M=u(i);h(M,'pm__section-services'),w.forEach((e=>{var a=p[e].label||e,t=u(i),n=u(i),c=u(i),l=u('span'),s=u(i);h(t,'pm__service'),h(s,'pm__service-title'),h(l,'gg-code-slash'),h(n,'pm__service-header'),h(c,'pm__service-icon');var d=O(a,e,o,0,!0,r);s.innerHTML=a,m(c,l),m(n,c),m(n,s),m(t,n),m(t,d),m(M,t)})),m(k,M)}if(t){var x=u(i),T=u(_?c:i);if(h(x,'pm__section-title-wrapper'),h(T,'pm__section-title'),T.innerHTML=t,m(x,T),_){S.className+='--toggle';var A=O(t,r,o);if(w.length>0){var N=u('span');h(N,'pm__service-counter'),v(N,'aria-hidden',!0),v(N,'data-servicecounter',w.length);var D=a.serviceCounterLabel;D&&'string'==typeof D&&v(N,'data-counterlabel',D),m(T,N)}if(C){h(S,'pm__section--expandable');var B=r+'-desc';v(T,'aria-expanded',!1),v(T,'aria-controls',B)}m(x,A)}else v(T,'role','heading'),v(T,'aria-level','3');m(S,x)}if(n){var H=u(i);h(H,'pm__section-desc'),H.innerHTML=n,m(k,H)}if(C&&(v(k,'aria-hidden','true'),k.id=B,((e,a,t)=>{g(T,'click',(()=>{a.classList.contains('is-expanded')?(y(a,'is-expanded'),v(t,'aria-expanded','false'),v(e,'aria-hidden','true')):(h(a,'is-expanded'),v(t,'aria-expanded','true'),v(e,'aria-hidden','false'))}),!1)})(k,S,T),d)){var E=u('table'),J=u('thead'),V=u('tbody');h(E,'pm__section-table'),h(J,'pm__table-head'),h(V,'pm__table-body');var j=l.headers,F=b(j),I=f.de._e.createDocumentFragment(),P=u('tr');v(P,'role','row');for(var G=0;G<F.length;G++){var U=j[F[G]],L=u('th');L.id='cc__row-'+U,v(L,'role','columnheader'),v(L,'scope','col'),h(L,'pm__table-th'),L.innerHTML=U,m(I,L)}m(P,I),m(J,P);var R=f.de._e.createDocumentFragment();for(G=0;G<s.length;G++){var q=s[G],z=u('tr');v(z,'role','row'),h(z,'pm__table-tr');for(var K=0;K<F.length;K++){var Q=F[K],W=j[Q],X=q[Q],Y=u('td'),Z=u(i);h(Y,'pm__table-td'),v(Y,'data-column',W),v(Y,'headers','cc__row-'+W),Z.insertAdjacentHTML('beforeend',X),m(Y,Z),m(z,Y)}m(R,z)}m(V,R),m(E,J),m(E,V),m(k,E)}(C||n)&&m(S,k),m(f.de.He,S),f.de.Ee?m(f.de.Ee,S):m(f.de.He,S)})),(r||o)&&(o&&(f.de.Fe||(f.de.Fe=u(c),h(f.de.Fe,'pm__btn'),m(_,f.de.Fe),g(f.de.Fe,'click',(()=>{w([])}))),f.de.Fe.innerHTML=o),r&&(f.de.je||(f.de.je=u(c),h(f.de.je,'pm__btn'),m(_,f.de.je),g(f.de.je,'click',(()=>{w('all')}))),f.de.je.innerHTML=r)),l&&(f.de.Ie||(f.de.Ie=u(c),f.de.Ie.className='pm__btn pm__btn--secondary',m(p,f.de.Ie),g(f.de.Ie,'click',(()=>{w()}))),f.de.Ie.innerHTML=l),f.de.Ee&&(f.de.Ne.replaceChild(f.de.Ee,f.de.He),f.de.He=f.de.Ee),N(1)}function w(a){e.acceptCategory(a),e.hidePreferences(),e.hide()}};function O(e,a,t,n,r,i){var c=u('label'),l=u('input'),s=u('span'),d=u('span'),_=u('span'),b=u('span');if(l.type='checkbox',h(c,'section__toggle-wrapper'),h(l,'section__toggle'),h(_,'toggle__icon-on'),h(b,'toggle__icon-off'),h(s,'toggle__icon'),h(d,'toggle__label'),v(s,'aria-hidden','true'),r?(h(c,'toggle-service'),h(l,'toggle-service'),v(l,o,i),f.de.Ge[i][a]=l):f.de.Pe[a]=l,r?(e=>{g(l,'change',(()=>{var a=f.de.Ge[e],t=f.de.Pe[e];for(var n in f.o.ie[e]=[],a){const t=a[n];t.checked&&f.o.ie[e].push(t.value)}f.o.ie[e].length>0?t.checked=!0:t.checked=!1}))})(i):(e=>{g(l,'click',(()=>{var a=f.de.Ge[e];if(f.o.ie[e]=[],l.checked)for(var t in a)a[t].checked=!0;else for(t in a)a[t].checked=!1}))})(a),l.value=a,d.textContent=e,m(s,b),m(s,_),f.o.H)(t.enabled||t.readOnly)&&(l.checked=!0);else if(r){var y=f.o.oe[i];y&&p(y,a)&&(l.checked=!0)}else p(f.o.t.categories,a)&&(l.checked=!0);return t.readOnly&&(l.disabled=!0),m(c,l),m(c,s),m(c,d),c}const H=e=>{var a=b(f.o.T);return p(a,e)?e:p(a,f.o.M)?f.o.M:a[0]},E=async e=>{let a=f.o.M;if(e&&(a=H(e)),f.o.A=f.o.T[a],!f.o.A)return!1;if('string'==typeof f.o.A){const e=await(async e=>{try{const a=await fetch(e,{method:'GET'});return!!a.ok&&await a.json()}catch(e){return!1}})(f.o.A);if(!e)return!1;f.o.A=e,f.o.T[a]=e}else f.o.A=f.o.T[a];return f.o.M=a,!0},J=e=>{var a=f.S.cookie.domain;f.o.L=!1;var t=P(),n=[a,'.'+a];if('www.'===a.slice(0,4)){var r=a.substring(4);n.push(r,'.'+r)}var o,i=e?f.o.K:f.o.g;i=i.filter((e=>{var a=f.o.q[e];return!!a&&!a.readOnly&&!!a.autoClear}));for(var c=0;c<i.length;c++){var l=i[c],s=f.o.q[l].autoClear,d=s&&s.cookies||[],_=p(f.o.g,l),u=!p(f.o.W,l),v=_&&u;if(e&&u||!e&&v){var m=d.length;!0===s.reloadPage&&v&&(f.o.L=!0);for(var g=0;g<m;g++){var b=[],h=d[g].name,y=!!h&&'string'!=typeof h,w=d[g].domain||null,C=d[g].path||!1;if(w&&(n=[w,'.'+w]),y)for(var S=0;S<t.length;S++)h.test(t[S])&&b.push(t[S]);else{var k=(o=h,t.indexOf(o));k>-1&&b.push(t[k])}b.length>0&&F(b,C,n)}}}},V=(e,a,t)=>{var n,r=encodeURIComponent(a),o=t?(n=f.o.B?new Date-f.o.B:0,864e5*w()-n):864e5*w(),i=new Date;i.setTime(i.getTime()+o);var c=e+'='+(r||'')+(0!==o?'; expires='+i.toUTCString():'')+'; Path='+f.S.cookie.path+';';c+=' SameSite='+f.S.cookie.sameSite+';',p(window.location.hostname,'.')&&(c+=' Domain='+f.S.cookie.domain+';'),'https:'===window.location.protocol&&(c+=' Secure;'),document.cookie=c,JSON.parse(decodeURIComponent(r))},j=e=>{let a;try{a=JSON.parse(decodeURIComponent(e))}catch(e){a={}}return a},F=(e,a,t)=>{for(var n=a||f.S.cookie.path,r=0;r<e.length;r++){for(var o=0;o<t.length;o++)document.cookie=e[r]+'=; path='+n+(p(t[o],'.')?'; domain='+t[o]:'')+'; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';e[r]}},I=(e,a)=>{let t=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return t=t?a?t.pop():e:'',t},P=e=>{const a=document.cookie.split(/;\s*/);let t=[];for(var n=0;n<a.length;n++){let r=a[n].split('=')[0];if(e)try{e.test(r)&&t.push(r)}catch(e){}else t.push(r)}return t},G=()=>{f.S.cookie.domain=window.location.hostname,f.de._e=document,f.de.fe=f.de._e.documentElement},U={acceptCategory:(e,t)=>{var n=e||void 0,r=t||[],o=!1,i=[];if(n)if('object'==typeof n&&'number'==typeof n.length)for(var c=0;c<n.length;c++)p(f.o.K,n[c])&&i.push(n[c]);else'string'==typeof n&&('all'===n?i=f.o.K.slice():p(f.o.K,n)&&i.push(n));else i=(()=>{var e=f.de.Pe,a=[];for(var t in e)e[t].checked&&a.push(e[t].value);return a})(),o=!0;if(r.length>=1)for(c=0;c<r.length;c++)i=i.filter((e=>e!==r[c]));for(c=0;c<f.o.X.length;c++)p(i,f.o.X[c])||i.push(f.o.X[c]);f.o.W=i,k(),o||(f.o.ie={}),f.o.ce=JSON.parse(JSON.stringify(f.o.oe)),f.o.K.forEach((e=>{var a=f.de.Ge[e];if(0===b(a).length)return;const t=f.o.re[e],n=b(t);if(f.o.oe[e]=[],p(f.o.X,e))n.forEach((a=>{f.o.oe[e].push(a)}));else if('all'===f.o.R)o&&f.o.ie[e]&&f.o.ie[e].length>0?f.o.ie[e].forEach((a=>{f.o.oe[e].push(a)})):n.forEach((a=>{f.o.oe[e].push(a)}));else if('necessary'===f.o.R)f.o.oe[e]=[];else if(o&&f.o.ie[e]&&f.o.ie[e].length>0)f.o.ie[e].forEach((a=>{f.o.oe[e].push(a)}));else for(let t in a){const n=a[t];n.checked&&f.o.oe[e].push(n.value)}})),(()=>{f.S.mode===a&&f.o.H?f.o.g=C(f.o.Y,f.o.W):f.o.g=C(f.o.W,f.o.t.categories||[]);var e=f.o.g.length>0,t=!1;f.o.K.forEach((e=>{f.o.h[e]=C(f.o.oe[e]||[],f.o.ce[e]||[]),f.o.h[e].length>0&&(t=!0)}));var n=f.de.Pe;for(var r in n)p(f.o.W,r)?n[r].checked=!0:n[r].checked=!1;f.o.K.forEach((e=>{var a=f.de.Ge[e],t=f.o.oe[e];for(var n in a){const e=a[n];p(t,n)?e.checked=!0:e.checked=!1}})),!f.o.H&&f.S.autoClearCookies&&e&&J(),f.o.D||(f.o.D=new Date),f.o.O||(f.o.O=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^(window.crypto||window.msCrypto).getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),f.o.t={categories:JSON.parse(JSON.stringify(f.o.W)),revision:f.S.revision,data:f.o.N,consentTimestamp:f.o.D.toISOString(),consentId:f.o.O,services:JSON.parse(JSON.stringify(f.o.oe))};var o=!1;(f.o.H||e||t)&&(f.o.H&&(f.o.H=!1,o=!0),k(),f.o.B?f.o.B=new Date:f.o.B=f.o.D,f.o.t.lastConsentTimestamp=f.o.B.toISOString(),V(f.S.cookie.name,JSON.stringify(f.o.t)),A()),o&&(f.S.autoClearCookies&&J(!0),d(f.l.u),d(f.l.v),'opt-in'===f.S.mode)||((e||t)&&d(f.l.m),f.o.L&&window.location.reload())})()},acceptService:(e,a)=>{if(!e||!a||'string'!=typeof a||!p(f.o.K,a))return!1;const t=f.de.Ge[a]||{};if(f.o.ie[a]=[],'string'==typeof e)if('all'===e)for(var n in t)t[n].checked=!0,r(t[n]);else for(n in t)t[n].checked=e===n,r(t[n]);else if('object'==typeof e&&Array.isArray(e))for(n in t)p(e,n)?t[n].checked=!0:t[n].checked=!1,r(t[n]);function r(e){e.dispatchEvent(new Event('change'))}U.acceptCategory()},validCookie:e=>''!==I(e,!0),eraseCookies:(e,a,t)=>{var n=[],r=f.S.cookie.domain,o=t?[t,'.'+t]:[r,'.'+r];if(Array.isArray(e))for(var i=0;i<e.length;i++)c(e[i]);else c(e);function c(e){if('string'==typeof e){let a=I(e);''!==a&&n.push(a)}else n=n.concat(P(e))}F(n,a,o)},setLanguage:async(e,a)=>{var t=H(e);return!(e!==t||t===f.o.M&&!0!==a||!await E(t)||(f.o.M=t,f.o.J&&(D(U),M(f.de.Ye,U)),B(U),0))},getUserPreferences:()=>{var e,a=!f.o.H&&x();return{acceptType:f.o.R,acceptedCategories:f.o.H?[]:a.accepted,rejectedCategories:f.o.H?[]:a.rejected,acceptedServices:f.o.H?{}:f.o.oe,rejectedServices:f.o.H?{}:(e={},f.o.K.forEach((a=>{e[a]=C(f.o.oe[a]||[],b(f.o.re[a])||[])})),e)}},loadScript:(e,a)=>{let t=document.querySelector('script[src="'+e+'"]');return new Promise(((n,r)=>{if(t)return n(!0);t=u('script'),Array.isArray(a)&&a.forEach((e=>{v(t,e.name,e.value)})),t.onload=()=>n(!0),t.onerror=()=>{t.remove(),r(!1)},t.src=e,m(document.head,t)}))},setCookieData:e=>{var a=e.value,t=!1;if('update'===e.mode){f.o.N=U.getCookie('data');var n=typeof f.o.N==typeof a;if(n&&'object'==typeof f.o.N)for(var r in!f.o.N&&(f.o.N={}),a)f.o.N[r]!==a[r]&&(f.o.N[r]=a[r],t=!0);else!n&&f.o.N||f.o.N===a||(f.o.N=a,t=!0)}else f.o.N=a,t=!0;return t&&(f.o.t.data=f.o.N,V(f.S.cookie.name,JSON.stringify(f.o.t),!0)),t},getCookie:(e,a)=>{var t=j(I(a||f.S.cookie.name,!0));return e?t[e]:t},getConfig:e=>e?f.S[e]||f.o.k[e]:{...f.S,...f.o.k,cookie:{...f.S.cookie}},show:e=>{f.C&&(e&&!f.o.J&&(D(U),T(),M(f.de.me,U)),f.o.J&&(h(f.de.fe,t),v(f.de.me,'aria-hidden','false'),f.o.V=!0,setTimeout((()=>{f.o.$=f.de._e.activeElement,f.o.P=f.o.ae}),200),d(f.l.i,l)))},hide:()=>{f.o.J&&f.o.V&&(y(f.de.fe,t),v(f.de.me,'aria-hidden','true'),f.o.V=!1,setTimeout((()=>{f.o.$.focus(),f.o.P=null}),200),d(f.l.p,l))},showPreferences:()=>{f.C&&(h(f.de.fe,n),v(f.de.Ne,'aria-hidden','false'),f.o.j=!0,setTimeout((()=>{f.o.I=!0}),1),setTimeout((()=>{f.o.V?f.o.ee=f.de._e.activeElement:f.o.$=f.de._e.activeElement,0!==f.o.te.length&&(f.o.te[3]?f.o.te[3].focus():f.o.te[0].focus(),f.o.P=f.o.te)}),200),d(f.l.i,s))},hidePreferences:()=>{f.C&&(y(f.de.fe,n),f.o.j=!1,v(f.de.Ne,'aria-hidden','true'),setTimeout((()=>{f.o.I=!1}),1),f.o.V?(f.o.ee&&f.o.ee.focus(),f.o.P=f.o.ae):(f.o.$&&f.o.$.focus(),f.o.P=null),f.o.F=!1,d(f.l.p,s))},acceptedCategory:a=>{var t;return t=f.o.H&&f.S.mode!==e?f.o.Y:x().accepted||[],p(t,a)},acceptedService:(e,a)=>p(f.o.oe[a]||[],e),validConsent:()=>!f.o.H,run:async e=>{if(!f.de.pe){if((e=>{G(),f.C=!0,f.o.k=e,f.o.T=e.language.translations,f.o.q=f.o.k.categories,'boolean'==typeof e.autoShow&&(f.S.autoShow=e.autoShow);var t=e.cookie;if(t&&'object'==typeof t){var n=t.name,r=t.domain,i=t.path,c=t.sameSite,l=t.expiresAfterDays;n&&(f.S.cookie.name=n),r&&(f.S.cookie.domain=r),i&&(f.S.cookie.path=i),c&&(f.S.cookie.sameSite=c),l&&(f.S.cookie.expiresAfterDays=l)}f._.u=e.onFirstConsent,f._.v=e.onConsent,f._.m=e.onChange,f._.p=e.onModalHide,f._.i=e.onModalShow;var s=e.mode,d=e.revision,_=e.autoClearCookies,u=e.manageScriptTags,v=e.hideFromBots;s===a&&(f.S.mode=s),'number'==typeof d&&(d>-1&&(f.S.revision=d),f.o.G=!0),'boolean'==typeof _&&(f.S.autoClearCookies=_),'boolean'==typeof u&&(f.S.manageScriptTags=u),!1===v&&(f.S.hideFromBots=!1),!0===f.S.hideFromBots&&(f.o.Z=navigator&&(navigator.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent)||navigator.webdriver)),f.S.autoClearCookies,f.o.G,f.S.manageScriptTags;var m=f.o.k.language.default;m&&(f.o.M=m),f.o.M=function(){var e,a=f.o.k.language.autoDetect;if(a){if('browser'===a)return H(((e=navigator.language||navigator.browserLanguage).length>2&&(e=e[0]+e[1]),e.toLowerCase()));if('document'===a)return H(f.de._e.documentElement.lang)}return H(f.o.k.language.default)}(),f.o.A=f.o.T[f.o.M],f.o.M,f.o.K=b(f.o.q),f.o.K.forEach((e=>{const a=f.o.q[e].services||{},t=a&&!!(n=a)&&'object'==typeof n&&!Array.isArray(n)&&b(a)||[];var n;f.o.re[e]={},f.o.oe[e]=[],f.de.Ge[e]={},0!==t.length&&t.forEach((t=>{const n=a[t];n.enabled=!1,f.o.re[e][t]=n}))}));for(var g=0;g<f.o.K.length;g++)!0===f.o.q[f.o.K[g]].readOnly&&f.o.X.push(f.o.K[g]);f.S.manageScriptTags&&(f.o.le=f.de._e.querySelectorAll('script[data-category]'),f.o.se=[],f.o.le.forEach((e=>{let a=e.getAttribute(o)||'',t=e.dataset.service||'',n=!1;if('!'===a.charAt(0)&&(a=a.slice(1),n=!0),'!'===t.charAt(0)&&(t=t.slice(1),n=!0),p(f.o.K,a)&&(f.o.se.push({Re:!1,qe:n,Ue:a,Le:t}),t)){const e=f.o.re[a];e[t]||(e[t]={enabled:!1})}})))})(e),f.o.Z)return;f.o.t=j(I(f.S.cookie.name,!0)),f.o.O=f.o.t.consentId;var t=void 0!==f.o.O;f.o.D=f.o.t.consentTimestamp,f.o.D&&(f.o.D=new Date(f.o.D)),f.o.B=f.o.t.lastConsentTimestamp,f.o.B&&(f.o.B=new Date(f.o.B));var n=f.o.t.data;if(f.o.N=void 0!==n?n:null,f.o.G&&t&&f.o.t.revision!==f.S.revision&&(f.o.U=!1),f.o.J=f.o.H=!(t&&f.o.U&&f.o.D&&f.o.B&&f.o.O),f.o.H,f.o.H?f.S.mode===a&&f.o.K.forEach((e=>{if(f.o.q[e].enabled){f.o.Y.push(e);const t=f.o.re[e]||{};for(var a in t)f.o.oe[e].push(a)}})):(f.o.W=f.o.t.categories,f.o.R=S(x()),f.o.oe=f.o.t.services||{}),!await E(null))return;(e=>{f.de.pe||(f.de.pe=u(i),f.de.pe.id='cc-main',f.de.pe.style.position='fixed',f.de.pe.style.zIndex='1000000',f.o.J&&D(e),B(e),m(f.o.k.root||f.de._e.body,f.de.pe))})(U),T(),M(null,U),f.S.autoShow&&f.o.J&&U.show(),setTimeout((()=>{h(f.de.pe,'c--anim')}),100),(e=>{var a=!1,t=!1;g(f.de.fe,'keydown',(e=>{'Tab'===e.key&&(f.o.P&&(e.shiftKey?f.de._e.activeElement===f.o.P[0]&&(f.o.P[1].focus(),e.preventDefault()):f.de._e.activeElement===f.o.P[1]&&(f.o.P[0].focus(),e.preventDefault()),t||f.o.F||(t=!0,!a&&e.preventDefault(),e.shiftKey?f.o.P[3]?f.o.P[2]?f.o.P[2].focus():f.o.P[0].focus():f.o.P[1].focus():f.o.P[3]?f.o.P[3].focus():f.o.P[0].focus())),!t&&(a=!0))})),g(f.de.pe,'click',(a=>{f.o.I?f.de.Ne.contains(a.target)?f.o.F=!0:(e.hidePreferences(0),f.o.F=!1):f.o.V&&f.de.me.contains(a.target)&&(f.o.F=!0)}),!0)})(U),f.o.H?f.S.mode===a&&(f.S.mode,f.o.Y,A(f.o.Y)):(A(),d(f.l.v))}},reset:e=>{if(!f.C)return;f.C=!1,!0===e&&U.eraseCookies(f.S.cookie.name,f.S.cookie.path,f.S.cookie.domain),f.de.pe&&f.de.pe.remove(),y(f.de.fe,r),y(f.de.fe,n),y(f.de.fe,t);const a=new _;f.o=a.o,f.de=a.de,f.S=a.S,f._=a._,f.l=a.l}};return{init:()=>(G(),U)}},'object'==typeof exports&&'undefined'!=typeof module?module.exports=a():'function'==typeof define&&define.amd?define(a):(e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent=a();
