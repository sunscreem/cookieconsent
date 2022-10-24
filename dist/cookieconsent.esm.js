/*!
* CookieConsent 3.0.0-rc.8
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
const e='button',t=e=>'function'==typeof e,n=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let a=e[o];t[o]=n(a)}return t},o=(e,t)=>{window.dispatchEvent(new CustomEvent(e,{detail:t}))},a=(e,a,i)=>{const c=r.t,s=r.o,l={cookie:r.l.i};if(a){const n={modalName:a};return e===s.u?t(c.u)&&c.u(n):e===s.v?t(c.v)&&c.v(n):(n.modal=i,t(c.p)&&c.p(n)),o(e,n)}e===s._?t(c._)&&c._(n(l)):e===s.g?t(c.g)&&c.g(n(l)):(l.changedCategories=r.l.m,l.changedServices=r.l.h,t(c.C)&&c.C(n(l))),o(e,n(l))};class i{constructor(){this.k={mode:'opt-in',revision:0,autoShow:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,lazyHtmlGeneration:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.l={M:null,S:'',T:{},A:null,i:null,D:[],H:!1,V:null,I:null,F:null,N:'',j:!0,B:!1,P:!1,R:!1,O:!1,G:!1,J:!1,L:[],U:!1,q:!0,m:[],K:!1,W:'',X:!1,Y:[],Z:[],$:[],ee:[],te:!1,ne:!1,oe:!1,ae:[],ie:[],re:[],ce:{},se:{},le:{},h:{},de:{},fe:[],ue:[]},this.ve={pe:{},_e:{}},this.t={},this.o={_:'cc:onFirstConsent',g:'cc:onConsent',C:'cc:onChange',u:'cc:onModalShow',v:'cc:onModalHide',p:'cc:onModalReady'}}}const r=new i,c=(e,t)=>e.indexOf(t),s=(e,t)=>-1!==c(e,t),l=e=>Array.isArray(e),d=e=>!!e&&'object'==typeof e&&!l(e),f=e=>Object.keys(e),u=e=>Array.from(new Set(e)),v=()=>document.activeElement,p=e=>e.preventDefault(),_=(e,t)=>e.querySelectorAll(t),g=()=>{let e={};return r.l.Y.forEach((t=>{e[t]=S(r.l.se[t]||[],f(r.l.ce[t])||[])})),e},m=t=>{const n=document.createElement(t);return t===e&&b(n,'type',t),n},b=(e,t,n)=>{e.setAttribute(t,n)},h=(e,t)=>e.appendChild(t),y=(e,t,n,o)=>{e.addEventListener(t,n),o&&r.l.D.push({ge:e,me:t,be:n})},w=(e,t)=>{e.classList.add(t)},C=(e,t)=>{w(e,'cm__'+t)},k=(e,t)=>{w(e,'pm__'+t)},x=(e,t)=>{e.classList.remove(t)},M=()=>{const e=r.k.cookie.expiresAfterDays;return t(e)?e(r.l.W):e},S=(e,t)=>e.filter((e=>!s(t,e))).concat(t.filter((t=>!s(e,t)))),T=()=>{r.l.W=(()=>{let e='custom',t=D().accepted.length;return t===r.l.Y.length?e='all':t===r.l.$.length&&(e='necessary'),e})()},A=(e,t,n,o)=>{const a='accept-',i=u('show-preferencesModal'),c=u('show-consentModal'),s=u(a+'all'),l=u(a+'necessary'),d=u(a+'custom'),f=r.k.lazyHtmlGeneration;function u(t){return _(e||document,'[data-cc="'+t+'"]')}function v(e,n){p(e),t.acceptCategory(n),t.hidePreferences(),t.hide()}i.forEach((e=>{b(e,'aria-haspopup','dialog'),y(e,'click',(e=>{p(e),t.showPreferences()})),f&&y(e,'mouseover',(e=>{p(e),r.l.O||n(t,o)}),!0)})),c.forEach((e=>{b(e,'aria-haspopup','dialog'),y(e,'click',(e=>{p(e),t.show(!0)}),!0)})),s.forEach((e=>{y(e,'click',(e=>{v(e,'all')}),!0)})),d.forEach((e=>{y(e,'click',(e=>{v(e)}),!0)})),l.forEach((e=>{y(e,'click',(e=>{v(e,[])}),!0)}))},D=()=>{let e=r.l.Z;return{accepted:e,rejected:r.l.Y.filter((t=>!s(e,t)))}},E=()=>{const t=r.l,n=r.ve,o=['[href]',e,'input','details','[tabindex="0"]'].join(':not([tabindex="-1"]), '),a=(e,t)=>{const n=_(e,o);t[0]=n[0],t[1]=n[n.length-1]};t.B&&a(n.he,t.ae),t.O&&a(n.ye,t.ie)},H=e=>{const n=r.l,o=n.se;if(n.Y.forEach((e=>{(n.h[e]||n.se[e]||[]).forEach((o=>{const a=n.ce[e][o];a&&(!a.enabled&&s(n.se[e],o)&&t(a.onAccept)?(a.enabled=!0,a.onAccept()):a.enabled&&!s(n.se[e],o)&&t(a.onReject)&&(a.enabled=!1,a.onReject()))}))})),!r.k.manageScriptTags)return;var a=n.fe,i=e||n.i.categories||[];const c=(e,t)=>{if(t<e.length){var a=e[t],r=n.ue[t],l=r.we,d=r.Ce,f=s(i,l),u=!!d&&s(o[l],d);if(!r.ke){var v=!d&&!r.xe&&f,p=d&&!r.xe&&u,_=!d&&r.xe&&!f&&s(n.m,l),g=d&&r.xe&&!u&&s(n.h[l]||[],d);if(v||_||p||g){r.ke=!0,a.removeAttribute('type'),a.removeAttribute('data-category');let n=a.getAttribute('data-src');n&&a.removeAttribute('data-src');const o=m('script');if(o.textContent=a.innerHTML,[...a.attributes].forEach((e=>{let t=e.nodeName;b(o,t,a[t]||a.getAttribute(t))})),n?o.src=n:n=a.src,n&&(o.onload=o.onerror=()=>{c(e,++t)}),a.replaceWith(o),n)return}}c(e,++t)}};c(a,0)},V=e=>{const t=r.l.M.guiOptions,n=t&&t.consentModal,o=t&&t.preferencesModal,a=(e,t,n,o,a,i)=>{var c=n&&n.layout,l=n&&n.position,d=n&&!0===n.flipButtons,f=n&&!1===n.equalWeightButtons,u=c&&c.split(' ')||[],v=l&&l.split(' ')||[],p=u[0],_=u[1],g=v[0],m='pm--'===o?v[0]:v[1],b=p,h=t[p];h||(h=t[a],b=a);var y=s(h.Me,_)&&_,C=s(h.Se,g)?g:h.Te,k=s(h.Ae,m)?m:h.De;e.className=i,w(e,o+b),y&&w(e,o+y),C&&w(e,o+C),k&&w(e,o+k),d&&w(e,o+'flip');const M='btn--secondary',S=i+'__';if('cm'===i){const{Ee:e,He:t}=r.ve;e&&x(e,S+M),t&&x(t,S+M),f&&(e&&w(e,S+M),t&&w(t,S+M))}else{const{Ve:e}=r.ve;e&&x(e,S+M),f&&e&&w(e,S+M)}};if(0===e){const e=['middle','top','bottom'],t=['left','center','right'],o={box:{Me:['wide','inline'],Se:e,Ae:t,Te:'bottom',De:'right'},cloud:{Me:['inline'],Se:e,Ae:t,Te:'bottom',De:'center'},bar:{Me:['inline'],Se:e.slice(1),Ae:[],Te:'bottom',De:''}};a(r.ve.he,o,n,'cm--','box','cm')}if(1===e){const e={box:{Me:[],Se:[],Ae:[],Te:'',De:''},bar:{Me:['wide'],Se:[],Ae:['left','right'],Te:'',De:'left'}};a(r.ve.ye,e,o,'pm--','box','pm')}},I=(t,n)=>{const o=r.l,i=r.ve,c=o.A&&o.A.preferencesModal;if(!c)return;var s=c.title,l=c.closeIconLabel,d=c.acceptAllBtn,u=c.acceptNecessaryBtn,v=c.savePreferencesBtn,p=c.sections;if(i.Ie)i.Fe=m('div'),k(i.Fe,'body');else{i.Ie=m('div'),w(i.Ie,'pm-wrapper'),i.ye=m('div'),i.ye.style.visibility='hidden',w(i.ye,'pm'),b(i.ye,'role','dialog'),b(i.ye,'aria-hidden',!0),b(i.ye,'aria-modal',!0),y(i.Ne,'keydown',(e=>{27===e.keyCode&&t.hidePreferences()}),!0),i.je=m('div'),k(i.je,'header'),i.Be=m('div'),k(i.Be,'title'),b(i.Be,'role','heading'),i.Pe=m(e),k(i.Pe,'close-btn'),b(i.Pe,'aria-label',c.closeIconLabel||''),y(i.Pe,'click',t.hidePreferences),i.Re=m('div'),k(i.Re,'body'),i.Oe=m('div'),k(i.Oe,'footer');var _=m('div');w(_,'btns');var g=m('div'),C=m('div');k(g,'btn-group'),k(C,'btn-group'),h(i.Oe,C),h(i.Oe,g),h(i.je,i.Be),h(i.je,i.Pe),h(i.ye,i.je),h(i.ye,i.Re),h(i.ye,i.Oe),h(i.Ie,i.ye)}let M;function S(e){t.acceptCategory(e),t.hidePreferences(),t.hide()}s&&(i.Be.innerHTML=s,l&&b(i.Pe,'aria-label',l)),p&&p.forEach((t=>{var n=t.title,a=t.description,r=t.linkedCategory,s=r&&o.X[r],l=t.cookieTable,d=l&&l.body,u=d&&d.length>0,v=!!s,p=v&&o.ce[r]||!1,_=p&&f(p)||[],g=v&&(!!a||!!u||f(p).length>0),C=m('div');if(k(C,'section'),g||a){var S=m('div');k(S,'section-desc-wrapper')}let T=_.length;if(g&&T>0){var A=m('div');k(A,'section-services'),_.forEach((e=>{var t=p[e].label||e,n=m('div'),o=m('div'),a=m('div'),i=m('div');k(n,'service'),k(i,'service-title'),k(o,'service-header'),k(a,'service-icon');var c=F(t,e,s,!0,r);i.innerHTML=t,h(o,a),h(o,i),h(n,o),h(n,c),h(A,n)})),h(S,A)}if(n){var D=m('div'),E=m(v?e:'div');if(k(D,'section-title-wrapper'),k(E,'section-title'),E.innerHTML=n,h(D,E),v){var H=m('span');k(H,'section-arrow'),h(D,H),C.className+='--toggle';var V=F(n,r,s);let e=c.serviceCounterLabel;if(T>0&&'string'==typeof e){let t=m('span');k(t,'badge'),k(t,'service-counter'),b(t,'aria-hidden',!0),b(t,'data-servicecounter',T),e&&(e=e.split('|'),e=e.length>1&&T>1?e[1]:e[0],b(t,'data-counterlabel',e)),t.innerHTML=T+(e?' '+e:''),h(E,t)}if(g){k(C,'section--expandable');var I=r+'-desc';b(E,'aria-expanded',!1),b(E,'aria-controls',I)}h(D,V)}else b(E,'role','heading'),b(E,'aria-level','3');h(C,D)}if(a){var N=m('div');k(N,'section-desc'),N.innerHTML=a,h(S,N)}if(g&&(b(S,'aria-hidden','true'),S.id=I,((e,t,n)=>{y(E,'click',(()=>{t.classList.contains('is-expanded')?(x(t,'is-expanded'),b(n,'aria-expanded','false'),b(e,'aria-hidden','true')):(w(t,'is-expanded'),b(n,'aria-expanded','true'),b(e,'aria-hidden','false'))}))})(S,C,E),u)){var j=m('table'),B=m('thead'),P=m('tbody');k(j,'section-table'),k(B,'table-head'),k(P,'table-body');var R=l.headers,O=f(R),G=i.Ge.createDocumentFragment(),J=m('tr');b(J,'role','row');for(var L=0;L<O.length;L++){var U=R[O[L]],z=m('th');z.id='cc__row-'+U,b(z,'role','columnheader'),b(z,'scope','col'),k(z,'table-th'),z.innerHTML=U,h(G,z)}h(J,G),h(B,J);var q=i.Ge.createDocumentFragment();for(L=0;L<d.length;L++){var K=d[L],Q=m('tr');b(Q,'role','row'),k(Q,'table-tr');for(var W=0;W<O.length;W++){var X=O[W],Y=R[X],Z=K[X],$=m('td'),ee=m('div');k($,'table-td'),b($,'data-column',Y),b($,'headers','cc__row-'+Y),ee.insertAdjacentHTML('beforeend',Z),h($,ee),h(Q,$)}h(q,Q)}h(P,q),h(j,B),h(j,P),h(S,j)}(g||a)&&h(C,S);const te=i.Fe||i.Re;v?(M||(M=m('div'),k(M,'section-toggles')),M.appendChild(C)):M=null,h(te,M||C)})),(d||u)&&(u&&(i.Ve||(i.Ve=m(e),k(i.Ve,'btn'),b(i.Ve,'data-role','necessary'),h(g,i.Ve),y(i.Ve,'click',(()=>{S([])}))),i.Ve.innerHTML=u),d&&(i.Je||(i.Je=m(e),k(i.Je,'btn'),b(i.Je,'data-role','all'),h(g,i.Je),y(i.Je,'click',(()=>{S('all')}))),i.Je.innerHTML=d)),v&&(i.Le||(i.Le=m(e),k(i.Le,'btn'),k(i.Le,'btn--secondary'),b(i.Le,'data-role','save'),h(C,i.Le),y(i.Le,'click',(()=>{S()}))),i.Le.innerHTML=v),i.Fe&&(i.ye.replaceChild(i.Fe,i.Re),i.Re=i.Fe),V(1),o.O||(o.O=!0,a(r.o.p,'preferencesModal',i.ye),E(),n(t),h(i.Ue,i.Ie),setTimeout((()=>w(i.Ie,'cc--anim')),100))};function F(e,t,n,o,a){const i=r.l,c=r.ve;var l=m('label'),d=m('input'),f=m('span'),u=m('span'),v=m('span'),p=m('span');if(d.type='checkbox',w(l,'section__toggle-wrapper'),w(d,'section__toggle'),w(v,'toggle__icon-on'),w(p,'toggle__icon-off'),w(f,'toggle__icon'),w(u,'toggle__label'),b(f,'aria-hidden','true'),o?(w(l,'toggle-service'),w(d,'toggle-service'),b(d,'data-category',a),c._e[a][t]=d):c.pe[t]=d,o?(e=>{y(d,'change',(()=>{var t=c._e[e],n=c.pe[e];for(var o in i.le[e]=[],t){const n=t[o];n.checked&&i.le[e].push(n.value)}i.le[e].length>0?n.checked=!0:n.checked=!1}))})(a):(e=>{y(d,'click',(()=>{var t=c._e[e];if(i.le[e]=[],d.checked)for(var n in t)t[n].checked=!0;else for(n in t)t[n].checked=!1}))})(t),d.value=t,u.textContent=e.replace(/<.*>.*<\/.*>/gm,''),h(f,p),h(f,v),i.j)(n.enabled||n.readOnly)&&(d.checked=!0);else if(o){var _=i.se[a];(n.readOnly||s(_,t))&&(d.checked=!0)}else s(i.Z,t)&&(d.checked=!0);return n.readOnly&&(d.disabled=!0),h(l,d),h(l,f),h(l,u),l}const N=(t,n)=>{const o=r.l,i=r.ve,c=o.A&&o.A.consentModal;if(c){var s=c.acceptAllBtn,l=c.acceptNecessaryBtn,d=c.showPreferencesBtn,f=c.closeIconLabel,u=c.footer;if(!i.ze){i.ze=m('div'),i.he=m('div'),i.qe=m('div'),i.Ke=m('div'),i.Qe=m('div'),w(i.ze,'cm-wrapper'),w(i.he,'cm'),C(i.qe,'body'),C(i.Ke,'texts'),C(i.Qe,'btns'),b(i.he,'role','dialog'),b(i.he,'aria-modal','true'),b(i.he,'aria-hidden','false'),b(i.he,'aria-labelledby','cm__title'),b(i.he,'aria-describedby','cm__desc'),i.he.style.visibility='hidden';const n='box',a=o.M.guiOptions,r=a&&a.consentModal,c=(r&&r.layout||n).split(' ')[0]===n;f&&c&&(i.He||(i.He=m(e),C(i.He,'btn'),C(i.He,'btn--close'),y(i.He,'click',(()=>{t.hide(),t.acceptCategory([])})),h(i.qe,i.He)),b(i.He,'aria-label',f)),h(i.qe,i.Ke),(s||l||d)&&h(i.qe,i.Qe),h(i.he,i.qe),h(i.ze,i.he)}var v=c.title;v&&(i.We||(i.We=m('div'),i.We.className=i.We.id='cm__title',b(i.We,'role','heading'),b(i.We,'aria-level','2'),h(i.Ke,i.We)),i.We.innerHTML=v);var p=c.description;if(p&&(o.U&&(p=p.replace('{{revisionMessage}}',o.q?'':c.revisionMessage||'')),i.Xe||(i.Xe=m('div'),i.Xe.className=i.Xe.id='cm__desc',h(i.Ke,i.Xe)),i.Xe.innerHTML=p),s&&(i.Ye||(i.Ye=m(e),C(i.Ye,'btn'),b(i.Ye,'data-role','all'),y(i.Ye,'click',(()=>{t.hide(),t.acceptCategory('all')}))),i.Ye.innerHTML=s),l&&(i.Ee||(i.Ee=m(e),C(i.Ee,'btn'),b(i.Ee,'data-role','necessary'),y(i.Ee,'click',(()=>{t.hide(),t.acceptCategory([])}))),i.Ee.innerHTML=l),d&&(i.Ze||(i.Ze=m(e),C(i.Ze,'btn'),C(i.Ze,'btn--secondary'),b(i.Ze,'data-role','show'),y(i.Ze,'mouseover',(()=>{o.O||I(t,n)})),y(i.Ze,'click',t.showPreferences)),i.Ze.innerHTML=d),!i.$e&&d&&(i.$e=m('div'),C(i.$e,'btn-group'),h(i.$e,i.Ze),h(i.Qe,i.$e)),i.et||(i.et=m('div'),C(i.et,'btn-group'),l&&h(i.et,i.Ee),s&&h(i.et,i.Ye),(s||l)&&h(i.qe,i.et),h(i.Qe,i.et)),u){if(!i.tt){var _=m('div'),g=m('div');i.tt=m('div'),C(_,'footer'),C(g,'links'),C(i.tt,'link-group'),h(g,i.tt),h(_,g),h(i.he,_)}i.tt.innerHTML=u}V(0),o.B||(o.B=!0,a(r.o.p,'consentModal',i.he),E(),n(t),h(i.Ue,i.ze),setTimeout((()=>w(i.ze,'cc--anim')),100)),A(i.qe,t,I,n)}},j=e=>{const t=r.ve;if(!t.Ue){t.Ue=m('div'),t.Ue.id='cc-main',t.Ue.style.position='fixed',t.Ue.style.zIndex='2147483647';let n=r.l.M.root;n&&'string'==typeof n&&(n=document.querySelector(n)),h(n||t.Ge.body,t.Ue),(e=>{const t=r.ve;y(t.Ue,'click',(n=>{const o=r.l;o.J?t.ye.contains(n.target)?o.G=!0:(e.hidePreferences(0),o.G=!1):o.P&&t.he.contains(n.target)&&(o.G=!0)}))})(e)}},B=e=>!!e&&s(f(r.l.T),e),P=()=>{const e=r.l;return e.S||e.M.language.default},R=e=>{e&&(r.l.S=e)},O=async e=>{const t=r.l;let n;n=e&&B(e)?e:P();let o=t.T[n];if(!o)return!1;if('string'==typeof o){const e=await(async e=>{try{const t=await fetch(e,{method:'GET'});return!!t.ok&&await t.json()}catch(e){return!1}})(o);if(!e)return!1;o=e}return t.A=o,R(n),!0},G=e=>{const{hostname:t,protocol:n}=window.location,{name:o,path:a,domain:i,sameSite:c}=r.k.cookie,l=encodeURIComponent(JSON.stringify(r.l.i)),d=e?(()=>{const e=r.l.F,t=e?new Date-e:0;return 864e5*M()-t})():864e5*M(),f=new Date;f.setTime(f.getTime()+d);let u=o+'='+l+(0!==d?'; expires='+f.toUTCString():'')+'; Path='+a+'; SameSite='+c;s(t,'.')&&(u+='; Domain='+i),'https:'===n&&(u+='; Secure'),document.cookie=u,r.l.i},J=(e,t,n)=>{const o=n||r.k.cookie.domain,a=t||r.k.cookie.path,i='www.'===o.slice(0,4),c=i&&o.substring(4),s=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};e.forEach((e=>{s(e),s(e,o),i&&s(e,c)}))},L=e=>(e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t})(U(e||r.k.cookie.name,!0)),U=(e,t)=>{const n=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return n?t?n.pop():e:''},z=e=>{const t=document.cookie.split(/;\s*/),n=[];return t.forEach((t=>{let o=t.split('=')[0];if(e)try{e.test(o)&&n.push(o)}catch(e){}else n.push(o)})),n},q=e=>{e.dispatchEvent(new Event('change'))},K=(e,t=[])=>{const o=r.l;let i=!1;var l=[];if(e)if('object'==typeof e&&'number'==typeof e.length)for(var d=0;d<e.length;d++)s(o.Y,e[d])&&l.push(e[d]);else'string'==typeof e&&('all'===e?l=o.Y.slice():s(o.Y,e)&&l.push(e));else l=(()=>{let e=r.ve.pe,t=[];if(e)for(var n in e)e[n].checked&&t.push(e[n].value);else o.j||(t=o.i.categories);for(let e in o.le)o.le[e].length>0&&(s(t,e)||t.push(e));return t})(),i=!0;if(t.length>=1)for(d=0;d<t.length;d++)l=l.filter((e=>e!==t[d]));for(d=0;d<o.$.length;d++)s(l,o.$[d])||l.push(o.$[d]);o.Z=l,T(),i||(o.le={}),o.de=n(o.se),o.Y.forEach((e=>{const t=o.ce[e],n=f(t),a=o.se;0!==n.length&&(a[e]=[],s(o.$,e)?n.forEach((t=>{a[e].push(t)})):'all'===o.W?i&&o.le[e]&&o.le[e].length>0?o.le[e].forEach((t=>{a[e].push(t)})):n.forEach((t=>{a[e].push(t)})):'necessary'===o.W?a[e]=[]:i&&o.le[e]&&o.le[e].length>0?o.le[e].forEach((t=>{a[e].push(t)})):s(o.Z,e)&&f(t).forEach((t=>a[e].push(t))),a[e]=u(a[e]))})),(()=>{const e=r.l;'opt-out'===r.k.mode&&e.j?e.m=S(e.ee,e.Z):e.m=S(e.Z,e.i.categories||[]);let t=e.m.length>0,o=!1;e.Y.forEach((t=>{e.h[t]=S(e.se[t],e.de[t]||[]),e.h[t].length>0&&(o=!0)}));var i=r.ve.pe;for(var l in i)s(e.Z,l)?i[l].checked=!0:i[l].checked=!1;e.Y.forEach((t=>{var n=r.ve._e[t],o=e.se[t];for(var a in n){const e=n[a];s(o,a)?e.checked=!0:e.checked=!1}})),e.I||(e.I=new Date),e.N||(e.N=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.i={categories:n(e.Z),revision:r.k.revision,data:e.V,consentTimestamp:e.I.toISOString(),consentId:e.N,services:n(e.se)};var d=!1;(e.j||t||o)&&(e.j&&(e.j=!1,d=!0),T(),e.F?e.F=new Date:e.F=e.I,e.i.lastConsentTimestamp=e.F.toISOString(),G(),r.k.autoClearCookies&&(d||!e.j&&t)&&(e=>{const t=r.l,n=z();t.K=!1;let o=e?t.Y:t.m;o=o.filter((e=>{let n=t.X[e];return!!n&&!n.readOnly&&!!n.autoClear})),o.forEach((o=>{const a=t.X[o].autoClear,i=a&&a.cookies||[],r=s(t.m,o),l=!s(t.Z,o),d=r&&l;(e&&l||!e&&d)&&(!0===a.reloadPage&&d&&(t.K=!0),i.forEach((e=>{let t=[];const o=e.name,a=e.domain,i=e.path;if(o instanceof RegExp)n.forEach((e=>{o.test(e)&&t.push(e)}));else{let e=c(n,o);e>-1&&t.push(n[e])}t.length>0&&J(t,i,a)})))}))})(d),H()),d&&(a(r.o._),a(r.o.g),'opt-in'===r.k.mode)||((t||o)&&a(r.o.C),e.K&&window.location.reload())})()},Q=e=>{let t;return t=r.l.j&&'opt-in'!==r.k.mode?r.l.ee:D().accepted||[],s(t,e)},W=(e,t)=>{const n=r.l;if(!e||!t||'string'!=typeof t||!s(n.Y,t))return!1;const o=r.ve._e[t]||{},a=f(n.ce[t]);if(n.le[t]=[],'string'==typeof e)if('all'===e){for(let e in o)o[e].checked=!0,q(o[e]);n.le[t]=[...a]}else{for(let t in o)o[t].checked=e===t,q(o[t]);s(a,e)&&n.le[t].push(e)}else if(l(e)){for(let t in o)s(e,t)?o[t].checked=!0:o[t].checked=!1,q(o[t]);a.forEach((o=>{s(e,o)&&n.le[t].push(o)}))}K()},X=(e,t)=>s(r.l.se[t]||[],e),Y=e=>''!==U(e,!0),Z=(e,t,n)=>{let o=[];const a=e=>{if('string'==typeof e){let t=U(e);''!==t&&o.push(t)}else o=o.concat(z(e))};if(l(e))for(var i=0;i<e.length;i++)a(e[i]);else a(e);J(o,t,n)};let $;const ee=e=>{clearTimeout($),e?w(r.ve.Ne,'disable--interaction'):$=setTimeout((()=>{x(r.ve.Ne,'disable--interaction')}),500)},te=e=>{const t=r.ve,n=r.l;e&&!n.B&&N(ie,j),n.B&&(n.P=!0,n.H&&ee(!0),w(t.Ne,'show--consent'),b(t.he,'aria-hidden','false'),setTimeout((()=>{n.ne=v(),n.L=n.ae}),200),a(r.o.u,'consentModal'))},ne=()=>{const e=r.ve,t=r.l;t.B&&(t.P=!1,t.H&&ee(),x(e.Ne,'show--consent'),b(e.he,'aria-hidden','true'),setTimeout((()=>{t.ne.focus(),t.L=[]}),200),a(r.o.v,'consentModal'))},oe=()=>{const e=r.l;e.O&&e.R||(e.O||I(ie,j),w(r.ve.Ne,'show--preferences'),b(r.ve.ye,'aria-hidden','false'),e.R=!0,setTimeout((()=>{e.J=!0}),1),setTimeout((()=>{e.P?e.oe=v():e.ne=v(),0!==e.ie.length&&(e.ie[0].focus(),e.L=e.ie)}),200),a(r.o.u,'preferencesModal'))},ae=()=>{const e=r.l;e.R&&(x(r.ve.Ne,'show--preferences'),b(r.ve.ye,'aria-hidden','true'),e.R=!1,setTimeout((()=>{e.J=!1}),1),e.P?(e.oe&&e.oe.focus(),e.L=e.ae):(e.ne&&e.ne.focus(),e.L=[]),e.G=!1,a(r.o.v,'preferencesModal'))};var ie={show:te,hide:ne,showPreferences:oe,hidePreferences:ae,acceptCategory:K};const re=async(e,t)=>!(!B(e)||e===P()&&!0!==t||!await O(e)||(R(e),r.l.B&&N(ie,j),r.l.O&&I(ie,j),0)),ce=()=>{const e=!r.l.j;var t=e&&D();return{acceptType:r.l.W,acceptedCategories:e?t.accepted:[],rejectedCategories:e?t.rejected:[],acceptedServices:e?r.l.se:{},rejectedServices:e?g():{}}},se=(e,t)=>{let n=document.querySelector('script[src="'+e+'"]');return new Promise((o=>{if(n)return o(!0);n=m('script'),l(t)&&t.forEach((e=>{b(n,e.name,e.value)})),n.onload=()=>o(!0),n.onerror=()=>{n.remove(),o(!1)},n.src=e,h(document.head,n)}))},le=e=>{let t,n=e.value,o=e.mode,a=!1;const i=r.l;if('update'===o){i.V=de('data'),t=de('data');const e=typeof t==typeof n;if(e&&'object'==typeof t)for(var c in!t&&(t={}),n)t[c]!==n[c]&&(t[c]=n[c],a=!0);else!e&&t||t===n||(t=n,a=!0)}else t=n,a=!0;return a&&(i.V=t,i.i.data=t,G(!0)),a},de=(e,t)=>{const n=L(t);return e?n[e]:n},fe=e=>{const t=r.k,n=r.l.M;return e?t[e]||n[e]:{...t,...n,cookie:{...t.cookie}}},ue=()=>!r.l.j,ve=async e=>{const t=r.l,n=r.k,o=window;if(!o._ccRun){if(o._ccRun=!0,(e=>{!function(){const e=document;r.ve.Ge=e,r.ve.Ne=e.documentElement,r.k.cookie.domain=window.location.hostname}();const t=r.k,n=r.l,o=t.cookie,a=r.t,i=e.cookie,c=e.categories,l=f(c)||[],u=navigator;n.M=e,n.T=e.language.translations,n.X=c,n.Y=l,n.H=!!e.disablePageInteraction,a._=e.onFirstConsent,a.g=e.onConsent,a.C=e.onChange,a.v=e.onModalHide,a.u=e.onModalShow,a.p=e.onModalReady;const{mode:v,autoShow:p,autoClearCookies:g,revision:m,manageScriptTags:b,hideFromBots:h,lazyHtmlGeneration:y}=e;'opt-out'===v&&(t.mode=v),'boolean'==typeof p&&(t.autoShow=p),'boolean'==typeof g&&(t.autoClearCookies=g),'boolean'==typeof b&&(t.manageScriptTags=b),'number'==typeof m&&m>=0&&(t.revision=m,n.U=!0),'boolean'==typeof y&&(t.lazyHtmlGeneration=y),!1===h&&(t.hideFromBots=!1),!0===t.hideFromBots&&u&&(n.te=u.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(u.userAgent)||u.webdriver),d(i)&&(t.cookie={...o,...i}),t.autoClearCookies,n.U,t.manageScriptTags,function(e){const t=r.l;e.forEach((e=>{const n=t.X[e],o=n.services||{},a=o&&d(o)&&f(o)||[];t.ce[e]={},t.se[e]=[],n.readOnly&&(t.$.push(e),t.se[e]=f(o)),r.ve._e[e]={},a.forEach((n=>{const a=o[n];a.enabled=!1,t.ce[e][n]=a}))}))}(l),(()=>{if(!r.k.manageScriptTags)return;const e=r.l;e.fe=_(r.ve.Ge,'script[data-category]'),e.ue=[],e.fe.forEach((t=>{let n=t.getAttribute('data-category'),o=t.dataset.service||'',a=!1;if(n&&'!'===n.charAt(0)&&(n=n.slice(1),a=!0),'!'===o.charAt(0)&&(o=o.slice(1),a=!0),s(e.Y,n)&&(e.ue.push({ke:!1,xe:a,we:n,Ce:o}),o)){const t=e.ce[n];t[o]||(t[o]={enabled:!1})}}))})(),R((()=>{const e=r.l.M.language.autoDetect;if(e){let t;if('browser'===e?t=navigator.language.slice(0,2).toLowerCase():'document'===e&&(t=document.documentElement.lang),B(t))return t}return P()})())})(e),t.te)return;const c=L(),g=c.categories,m=l(g);t.i=c,t.N=c.consentId;const b=!!t.N&&'string'==typeof t.N;t.I=c.consentTimestamp,t.I&&(t.I=new Date(t.I)),t.F=c.lastConsentTimestamp,t.F&&(t.F=new Date(t.F));const h=c.data;if(t.V=void 0!==h?h:null,t.U&&b&&c.revision!==n.revision&&(t.q=!1),t.j=!(b&&t.q&&t.I&&t.F&&m),t.j,t.j?'opt-out'===n.mode&&(()=>{const e=r.l;e.Y.forEach((t=>{if(e.X[t].enabled){e.ee.push(t);const o=e.ce[t]||{};for(var n in o)e.se[t].push(n)}}))})():(t.Z=u([...t.$,...c.categories]),t.se={...t.se,...c.services},T()),!await O())return;i=ie,r.l.j&&N(i,j),r.k.lazyHtmlGeneration||I(i,j),A(null,i,I,j),n.autoShow&&t.j&&te(!0),(()=>{const e=r.ve;var t=!1,n=!1;y(e.Ne,'keydown',(e=>{if('Tab'!==e.key)return;const o=r.l.L;if(o.length>0){const a=v();e.shiftKey?a===o[0]&&(o[1].focus(),p(e)):a===o[1]&&(o[0].focus(),p(e)),n||r.l.G||(n=!0,!t&&p(e),e.shiftKey?o[1].focus():o[0].focus())}!n&&(t=!0)}),!0)})(),t.j?'opt-out'===n.mode&&(n.mode,t.ee,H(t.ee)):(H(),a(r.o.g))}var i},pe=e=>{const t=r.ve,n=r.k.cookie;!0===e&&Z(n.name,n.path,n.domain),r.l.D.forEach((e=>{e.ge.removeEventListener(e.me,e.be)})),t.Ue&&t.Ue.remove(),t.Ne&&(x(t.Ne,'disable--interaction'),x(t.Ne,'show--preferences'),x(t.Ne,'show--consent'));const o=new i;r.l=o.l,r.ve=o.ve,r.k=o.k,r.t=o.t,r.o=o.o,window._ccRun=!1};export{K as acceptCategory,W as acceptService,Q as acceptedCategory,X as acceptedService,Z as eraseCookies,fe as getConfig,de as getCookie,ce as getUserPreferences,ne as hide,ae as hidePreferences,se as loadScript,pe as reset,ve as run,le as setCookieData,re as setLanguage,te as show,oe as showPreferences,ue as validConsent,Y as validCookie};
