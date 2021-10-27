(this["webpackJsonpdc-extension-product-selector"]=this["webpackJsonpdc-extension-product-selector"]||[]).push([[0],{303:function(e,t,a){e.exports=a(623)},618:function(e,t,a){},621:function(e,t,a){},622:function(e,t,a){},623:function(e,t,a){"use strict";a.r(t);a(304);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),o=a(275),s=a(84),u=a(8),l=a.n(u),m=a(26),d=a(20),p=a(276),f=function(e){return{type:"SET_PARAMS",value:e}},h=a(68),g=a(94),v=a(119),E=a.n(v),b=a(27),y=a(292),T=a(277),x=a(293),O=function(e){Object(T.a)(a,e);var t=Object(y.a)(a);function a(e,n){var r;return Object(h.a)(this,a),(r=t.call(this,e)).code="UNDEFINED",n&&(r.code=n),r}return a}(Object(x.a)(Error));O.codes={INVALID_FIELD:"INVALID_PROPERTY",INVALID_VALUE:"INVALID_VALUE",GET_ITEMS:"GET_ITEMS",GET_SELECTED_ITEMS:"GET_SELECTED_ITEMS",GET_SDK:"GET_SDK"};var S=function(){function e(t){Object(h.a)(this,e),this.settings=t}return Object(g.a)(e,[{key:"getHeaders",value:function(e){var t=e.params,a=t.authSecret;return{headers:{"Content-Type":"application/json","x-auth-id":t.authClientId,"x-auth-secret":a,endpoint:t.sfccUrl}}}},{key:"getItems",value:function(){var e=Object(d.a)(l.a.mark((function e(t,a){var n,r,c,i,o,s,u,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=n.siteId,c=n.proxyUrl,e.prev=1,i=E.a.stringify({site_id:r,ids:a},{arrayFormat:"brackets"}),(o=Object(m.a)({method:"GET"},this.getHeaders(t))).method="GET",e.next=7,fetch(Object(b.trimEnd)(c,"/")+"/products?"+i,o);case 7:return s=e.sent,e.next=10,s.json();case 10:return u=e.sent,d=u.items,e.abrupt("return",d);case 15:throw e.prev=15,e.t0=e.catch(1),console.error(e.t0),new O("Could not get items",O.codes.GET_SELECTED_ITEMS);case 19:case"end":return e.stop()}}),e,this,[[1,15]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,r,c,i,o,s,u,d,p;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.searchText,n=t.page,r=t.selectedCatalog,c=t.params,i=c.siteId,o=c.proxyUrl,s={items:[],page:{numPages:0,curPage:0,total:0}},e.prev=2,u={site_id:i,search_text:a,page:n.curPage},null!==r&&(u.catalog_id=r),d=Object(m.a)({method:"POST",body:JSON.stringify(u)},this.getHeaders(t)),e.next=8,fetch(Object(b.trimEnd)(o,"/")+"/product-search",d);case 8:return p=e.sent,e.abrupt("return",p.json()||s);case 12:throw e.prev=12,e.t0=e.catch(2),console.error(e.t0),new O("Could not search",O.codes.GET_ITEMS);case 16:case"end":return e.stop()}}),e,this,[[2,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"exportItem",value:function(e){return e.id}}]),e}(),I=a(278),w=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.hybrisUrl;Object(h.a)(this,e),this.hybrisUrl=a,this.productService=new I.ProductService(a,"/rest/v2",null)}return Object(g.a)(e,[{key:"getItems",value:function(){var e=Object(d.a)(l.a.mark((function e(t,a){var n,r,c,i=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=n.currency,c=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,n=t.catalog,e.next=3,i.productService.getByCode(n,a,r);case 3:return c=e.sent,e.abrupt("return",i.itemModel(c,n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prev=3,e.abrupt("return",Promise.all(a.map(c)));case 7:throw e.prev=7,e.t0=e.catch(3),console.error(e.t0),new O("Could not get items",O.codes.GET_SELECTED_ITEMS);case 11:case"end":return e.stop()}}),e,null,[[3,7]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._get(t);case 3:return a=e.sent,n=a.items,r=a.page,e.abrupt("return",{items:n,page:r});case 9:throw e.prev=9,e.t0=e.catch(0),console.error(e.t0),new O("Could not get items",O.codes.GET_ITEMS);case 13:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_get",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,r,c,i,o,s,u,m,d,p,f,h,g=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.selectedCatalog,n=t.searchText,r=t.page,c=t.params,i=c.currency,e.next=4,this.productService.search(a,n,i,r.curPage);case 4:return o=e.sent,s=o.products,u=o.pagination,m=u.totalResults,d=u.currentPage,p=u.totalPages,f={total:m,curPage:d,numPages:p},h=s.map((function(e){return g.itemModel(e,a)})),e.abrupt("return",{items:h,page:f});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getImage",value:function(e){var t=function(e){return e.images.find((function(e){return"product"===e.format}))};return e.images&&e.images.length&&t(e)?this.hybrisUrl+t(e).url:e.defaultImageUrl}},{key:"stripHtml",value:function(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""}},{key:"itemModel",value:function(e,t){var a=e.code,n=e.name,r=e.images,c=e.defaultImageUrl;return{id:a,name:this.stripHtml(n),image:this.getImage({images:r,defaultImageUrl:c}),catalog:t}}},{key:"exportItem",value:function(e){return{id:e.id,catalog:e.catalog}}}]),e}(),j=a(152),_=a(279),k=a.n(_),C=function(){function e(t){var a=t.host,n=t.projectKey,r=t.clientId,c=t.clientSecret,i=t.apiUrl,o=t.scope,s=void 0===o?"view_published_products":o,u=t.locale;Object(h.a)(this,e),this.sdkAuth=new k.a({host:a,projectKey:n,disableRefreshToken:!1,credentials:{clientId:r,clientSecret:c},scopes:[s+":"+n]}),this.apiUrl=i,this.locale=u}return Object(g.a)(e,[{key:"getHeaders",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sdkAuth.clientCredentialsFlow();case 2:return this.token=e.sent,t=this.token,a=t.token_type,n=t.access_token,e.abrupt("return",{headers:{Authorization:"".concat(a," ").concat(n)}});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getItems",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,r,c,i,o,s,u,d,p,f=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=f.length>1&&void 0!==f[1]?f[1]:[],n=t.PAGE_SIZE,r=t.params.projectKey,e.prev=2,a.length){e.next=5;break}return e.abrupt("return",[]);case 5:return e.next=7,this.getHeaders();case 7:return c=e.sent,i='"'+a.join('","')+'"',o=Object(m.a)({method:"GET"},c),s=E.a.stringify({staged:!1,limit:n,where:"id in (".concat(i,")")}),e.next=13,fetch("".concat(this.apiUrl,"/").concat(r,"/product-projections?").concat(s),o);case 13:return u=e.sent,e.next=16,u.json();case 16:return d=e.sent,p=d.results,e.abrupt("return",this.parseResults(p));case 21:throw e.prev=21,e.t0=e.catch(2),console.error(e.t0),new O("Could not get items",O.codes.GET_SELECTED_ITEMS);case 25:case"end":return e.stop()}}),e,this,[[2,21]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getImage",value:function(e){var t=e.attributes,a=void 0===t?[]:t,n=e.images,r=void 0===n?[]:n,c=a.find((function(e){var t=e.name;return"largeImageUrl"===(void 0===t?"":t)}));return c&&c.value?c.value:r.length?r[0].url:""}},{key:"parseResults",value:function(e){var t=this;return e.map((function(e){return{id:e.id,name:e.name[t.locale],image:t.getImage(e.masterVariant)}}))}},{key:"search",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,r,c,i,o,s,u,d,p,f;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.searchText,n=t.page,r=t.PAGE_SIZE,c=t.params.projectKey,e.prev=1,e.next=4,this.getHeaders();case 4:return i=e.sent,o=Object(m.a)({method:"GET"},i),s=E.a.stringify(Object(j.a)({staged:!1,offset:n.curPage*r,limit:r},"text.".concat(this.locale),a)),e.next=9,fetch("".concat(this.apiUrl,"/").concat(c,"/product-projections/search?").concat(s),o);case 9:return u=e.sent,e.next=12,u.json();case 12:return d=e.sent,p=d.results,f=d.total,e.abrupt("return",{items:this.parseResults(p),page:{numPages:Math.ceil(f/r),curPage:n.curPage,total:f}});case 18:throw e.prev=18,e.t0=e.catch(1),console.error(e.t0),new O("Could not search",O.codes.GET_ITEMS);case 22:case"end":return e.stop()}}),e,this,[[1,18]])})));return function(t){return e.apply(this,arguments)}}()},{key:"exportItem",value:function(e){return e}},{key:"formatteItem",value:function(e){return{props:Object(m.a)({},e)}}}]),e}(),D="sfcc",P="hybris",N="commercetools",A=function(){return function(e,t){var a=function(e){switch(e.backend){case P:return new w(e);case N:return new C(e);case D:default:return new S(e)}}(t().params);e(L(a))}},L=function(e){return{type:"SET_BACKEND",value:e}},G=a(280),M=a.n(G),R=a(281),U=a.n(R),K=a(282),H=a.n(K),B=a(283),V=a.n(B),F=a(44),z=a.n(F),W=function(e){return{type:"SET_PAGE",value:e}},Z=function(e){return function(){var t=Object(d.a)(l.a.mark((function t(a,n){var r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n(),c=r.page,a(W(Object(m.a)({},c,{curPage:e}))),a(q());case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},X=function(e){return{type:"SET_FETCHING",value:e}},J=function(e){return{type:"SET_GLOBAL_ERROR",value:e}},Y=function(e){return function(){var t=Object(d.a)(l.a.mark((function t(a,n){var r,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n(),c=r.SDK,i=r.backend,t.prev=1,t.next=4,c.field.setValue(Object(b.map)(e,(function(e){return i.formatteItem(e)})));case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(1),Object(b.get)(t.t0,"[0].data.keyword")||a(J("Could not set value"));case 10:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e,a){return t.apply(this,arguments)}}()},q=function(){return function(){var e=Object(d.a)(l.a.mark((function e(t,a){var n,r,c,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a(),!Object(b.isEmpty)(Object(b.trim)(n.searchText))){e.next=6;break}return t(W({numPages:0,curPage:0,total:0})),t(Q([])),e.abrupt("return");case 6:return t(X(!0)),r=[],e.prev=8,e.next=11,n.backend.search(n);case 11:c=e.sent,i=c.items,o=c.page,r=i,t(W(o)),t(Q(r)),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(8),t(J("Could not get items")),console.error(e.t0);case 23:t(X(!1));case 24:case"end":return e.stop()}}),e,null,[[8,19]])})));return function(t,a){return e.apply(this,arguments)}}()},Q=function(e){return{type:"SET_ITEMS",value:e}},$=function(e){return{type:"SET_INITIALISED",value:e}},ee=function(e){return{type:"ADD_SELECTED_ITEM",value:e}},te=function(e){return{type:"REMOVE_SELECTED_ITEM",value:e}},ae=function(e){return{type:"SET_CATALOG",value:e}},ne=function(e){return{type:"SET_SDK",value:e}};var re={numPages:0,curPage:0,total:0};var ce={proxyUrl:"",sfccUrl:"",authSecret:"",authClientId:"",siteId:"",currency:"USD",catalogs:[],backend:"SFCC",noItemsText:"No items selected.",searchPlaceholderText:"Search"};var ie=a(86);var oe=Object(s.c)({SDK:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SDK":return t.value;default:return e}},page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":return Object(m.a)({},e,{},t.value);default:return e}},items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ITEMS":return t.value;default:return e}},params:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.value;switch(a){case"SET_PARAMS":var r=n||{},c=r.installation,i=r.instance,o=Object(m.a)({},c,{},i);return Object(m.a)({},e,{},o,{backend:Object(b.toLower)(o.backend)});default:return e}},backend:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BACKEND":return t.value;default:return e}},touched:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOUCHED":return t.value;default:return e}},isFetching:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FETCHING":return t.value;default:return e}},searchText:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH_TEXT":return t.value;default:return e}},initialised:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALISED":return t.value;default:return e}},selectedCatalog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CATALOG":return t.value;default:return e}},selectedItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SELECTED_ITEMS":return t.value;case"REMOVE_SELECTED_ITEM":return Object(b.reject)(e,{id:t.value.id});case"ADD_SELECTED_ITEM":return[].concat(Object(ie.a)(e),[t.value]);case"REORDER_SELECTED_ITEM":var a=t.value,n=a.oldIndex,r=a.newIndex,c=e[n],i=Object(b.reject)(e,{id:c.id}),o=[].concat(Object(ie.a)(Object(b.slice)(i,0,r)),[c],Object(ie.a)(Object(b.slice)(i,r)));return o;default:return e}},globalError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GLOBAL_ERROR":return t.value;default:return e}},PAGE_SIZE:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;return e}}),se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,ue=Object(s.e)(oe,se(Object(s.a)(o.a))),le=a(291),me=Object(le.a)({palette:{primary:{main:"#039be5"},secondary:{main:"#1ab0f9"},error:{main:"#ff3366"}}}),de=a(28),pe=a(675),fe=a(673),he=a(653),ge=a(674),ve=a(679),Ee=a(626),be=a(680),ye=a(656),Te=a(657),xe=Object(he.a)((function(e){return{root:{width:"100%",marginBottom:e.spacing(2)},search:{padding:"2px 4px",display:"flex",alignItems:"center"},input:{marginLeft:e.spacing(1),flex:1},icon:{padding:10,fill:"rgba(0, 0, 0, 0.54)"},divider:{height:28,margin:4}}})),Oe=Object(b.debounce)(function(){var e=Object(d.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a(0)}catch(n){t("Error getting products")}case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),1e3),Se=Object(de.b)((function(e){return{params:e.params,searchText:e.searchText}}),{changePage:Z,setSearchText:function(e){return{type:"SET_SEARCH_TEXT",value:e}},setGlobalError:J})((function(e){var t=xe();return r.a.createElement("div",{className:t.root},r.a.createElement(Ee.a,{className:t.search},r.a.createElement(be.a,{value:e.searchText,className:t.input,placeholder:e.params.searchPlaceholderText,inputProps:{"aria-label":"search"},onChange:function(t){var a=Object(b.isUndefined)(t.target.value)?e.searchText:t.target.value;e.setSearchText(Object(b.trim)(a)),Oe(e.setGlobalError,e.changePage)}}),r.a.createElement(ye.a,{className:t.divider,orientation:"vertical"}),r.a.createElement(Te.a,{className:t.icon})))})),Ie=a(670),we=a(671),je=a(658),_e=a(627),ke=a(659),Ce=a(660),De=a(661),Pe=a(662),Ne=a(202),Ae=a.n(Ne),Le=a(162),Ge=a.n(Le),Me=a(288),Re=a.n(Me),Ue=Object(he.a)((function(e){return{root:{marginTop:e.spacing(1)}}})),Ke=Object(de.b)((function(e){return{page:e.page}}),{changePage:Z})((function(e){var t=e.changePage,a=e.page,n=a.numPages,c=a.curPage,i=Ue(),o=Ge()(n),s=[];if(c-3<0)s=Ae()(o,6);else if(c+3>n)s=Re()(o,6);else{var u=Ge()(c-3,c),l=Ge()(c,c+3);s=Ae()([].concat(Object(ie.a)(u),Object(ie.a)(l)),6)}return r.a.createElement(je.a,{color:"primary",className:i.root},r.a.createElement(_e.a,{"aria-label":"first",onClick:function(){return t(0)},disabled:0===c},r.a.createElement(ke.a,{fontSize:"small"})),r.a.createElement(_e.a,{"aria-label":"previous",onClick:function(){return t(c-1)},disabled:0===c},r.a.createElement(Ce.a,{fontSize:"small"})),s.map((function(e){return r.a.createElement(_e.a,{variant:e===c?"contained":null,key:e,onClick:function(){return t(e)}},e+1)})),r.a.createElement(_e.a,{"aria-label":"next",onClick:function(){return t(c+1)},disabled:c===n-1},r.a.createElement(De.a,{fontSize:"small"})),r.a.createElement(_e.a,{"aria-label":"last",onClick:function(){return t(n-1)},disabled:c===n-1},r.a.createElement(Pe.a,{fontSize:"small"})))})),He=a(125),Be=function(e){var t=e.show,a=void 0===t||t,n=e.children,c=e.exitOptions,i=void 0===c?{}:c,o=e.className,s=void 0===o?"":o;return r.a.createElement(He.a,null,a&&r.a.createElement(He.b.div,{className:s,initial:{opacity:0},animate:{opacity:1},exit:Object(m.a)({opacity:0},i)},n))},Ve=a(83),Fe=a(665),ze=a(663),We=a(664),Ze=a(666),Xe=a(667),Je=a(668),Ye=a(289),qe=a.n(Ye),Qe=(a(618),Object(he.a)((function(e){return{root:{display:"flex",flex:"1 1 auto",flexDirection:"column",width:"100%",transition:"border-width 0.3s",border:function(t){return t.isSelected?"1px solid ".concat(e.palette.grey[500]):"none"},margin:function(t){return t.isSelected?"6px":e.spacing(1)},opacity:function(e){return e.readOnly?"0.6":""},pointerEvents:function(e){return e.readOnly?"none":""}},cardWrapper:{height:"100%",display:"flex"},thumbnail:{paddingBottom:"100%",marginTop:"auto",backgroundColor:function(t){return t.hasImage?"transparent":e.palette.grey[100]}},removeBtn:{marginLeft:e.spacing(1)}}}))),$e=Object(de.b)((function(e){return{selectedItems:e.selectedItems,backend:e.backend,SDK:e.SDK}}),{toggleProduct:function(e,t){return function(){var a=Object(d.a)(l.a.mark((function a(n,r){var c,i;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n(t?te(e):ee(e)),n({type:"SET_TOUCHED",value:!0}),c=r(),i=c.selectedItems,n(Y(i));case 4:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}})((function(e){var t=Object(n.useState)(!1),a=Object(Ve.a)(t,2),c=a[0],i=a[1],o="removable"===e.variant,s=Boolean(qe()(e.selectedItems,{id:e.item.id})),u=e.SDK.form.readOnly,l=function(){return e.toggleProduct(e.item,s)},m=function(){i(!0),l()};Object(n.useEffect)((function(){return i(!0)}),[]);var d=e.item,p=d.name,f=d.image,h=Qe({isSelected:s,readOnly:u,hasImage:Boolean(f)}),g=r.a.createElement(ze.a,{className:h.thumbnail,image:f||"/images/image-icon.svg",title:p}),v=function(){return r.a.createElement(We.a,{"aria-label":"Remove",onClick:m,className:h.removeBtn},r.a.createElement(Fe.a,null))},E=o?g:r.a.createElement(Ze.a,null,g);return r.a.createElement(Be,{show:c,className:h.cardWrapper},r.a.createElement(Xe.a,{className:"product "+h.root,raised:s,onClick:o?null:l},r.a.createElement(Je.a,{action:o&&r.a.createElement(v,null),title:e.item.name,subheader:"Product ID: "+e.item.id,titleTypographyProps:{variant:"subtitle1"},subheaderTypographyProps:{variant:"body2"}}),E))})),et=a(669),tt=a(681),at=a(676),nt=a(682),rt=Object(he.a)((function(e){return{root:{marginLeft:"auto",marginBottom:e.spacing(1)},select:{minWidth:200}}})),ct=Object(de.b)((function(e){return{catalogs:e.params.catalogs,searchText:e.searchText,selectedCatalog:e.selectedCatalog,backend:e.backend}}),{changeCatalog:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(ae(e)),a(Z(0));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCatalog:ae})((function(e){var t=Object(n.useState)(0),a=Object(Ve.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(e.selectedCatalog),s=Object(Ve.a)(o,2),u=s[0],l=s[1],m=rt(),d=r.a.useRef(null);return Object(n.useEffect)((function(){return i(d.current.offsetWidth)}),[]),r.a.createElement(et.a,{variant:"outlined",className:m.root},r.a.createElement(tt.a,{id:"catalog",ref:d},"Catalog"),r.a.createElement(at.a,{className:m.select,labelId:"catalog",onChange:function(t){var a=t.target.value;a!==u&&(l(a),e.searchText.length?e.changeCatalog(a):e.setCatalog(a))},labelWidth:c,value:u||""},e.catalogs.map((function(e){var t=e.id,a=e.name;return r.a.createElement(nt.a,{key:t,value:t},a)}))))})),it=a(163),ot=Object(de.b)((function(e){return{total:e.page.total,curPage:e.page.curPage,PAGE_SIZE:e.PAGE_SIZE}}),{})((function(e){var t=e.PAGE_SIZE*e.curPage,a=t+1,n=Math.min(t+e.PAGE_SIZE,e.total);return r.a.createElement(it.a,{variant:"body1"},"Showing ".concat(a," to ").concat(n," of ").concat(e.total))})),st=Object(he.a)((function(e){return{root:{width:"100%",display:"flex",alignItems:"center",flexDirection:"column"},items:{display:"grid",gridTemplateColumns:"100%",justifyContent:"space-between",width:"100%","@media(min-width: 450px)":{gridTemplateColumns:"50% 50%"},"@media(min-width: 800px)":{gridTemplateColumns:"25% 25% 25% 25%"},"@media(min-width: 1024px)":{gridTemplateColumns:"20% 20% 20% 20% 20%"}},loader:{margin:e.spacing(2)}}})),ut=Object(de.b)((function(e){return{items:e.items,loading:e.isFetching,initialised:e.initialised,catalogs:e.params.catalogs,backend:e.backend}}),null)((function(e){var t=st();return r.a.createElement("div",{className:t.root},r.a.createElement(Ie.a,{container:!0,alignItems:"center"},r.a.createElement(Ie.a,{item:!0,xs:6},r.a.createElement(Be,{show:e.items.length&&!e.loading},r.a.createElement(ot,null))),r.a.createElement(Ie.a,{item:!0,container:!0,xs:6},e.catalogs.length&&e.initialised?r.a.createElement(ct,null):"")),r.a.createElement(Be,{show:e.loading,exitOptions:{position:"absolute"}},r.a.createElement(we.a,{className:t.loader})),r.a.createElement("div",{className:t.items},!e.loading&&e.items.map((function(e){return r.a.createElement($e,{key:e.id,item:e})}))),r.a.createElement(Be,{show:e.items.length&&!e.loading},r.a.createElement(Ke,null)))})),lt=a(121),mt=a.n(lt),dt=a(677),pt=a(290),ft=a.n(pt),ht=a(672),gt=a(628),vt=Object(gt.a)((function(e){return{error:{marginTop:e.spacing(1)}}})),Et=function(e){var t=e.show,a=void 0===t||t,n=e.children,c=vt();return r.a.createElement(Be,{show:a},r.a.createElement(ht.a,{error:!0,className:c.error},n))},bt=(a(621),Object(he.a)((function(e){return{root:{width:"100%",minHeight:"200px",margin:e.spacing(2),padding:e.spacing(2),backgroundColor:e.palette.grey[100],boxSizing:"border-box",overflow:"hidden",display:"flex",flexDirection:"column",position:"relative"},dragItem:{transition:"flex 0.15s, opacity 0.15s"},title:{fontWeight:700},items:{margin:"auto",width:"100%",zIndex:2,display:"grid",gridTemplateColumns:"100%","@media(min-width: 450px)":{gridTemplateColumns:"50% 50%"},"@media(min-width: 800px)":{gridTemplateColumns:"25% 25% 25% 25%"},"@media(min-width: 1024px)":{gridTemplateColumns:"20% 20% 20% 20% 20%"}},errorWrapper:{height:"20px",marginTop:"auto"},loader:{margin:"auto",alignSelf:"center"},placeholder:{margin:"-12px 0 0 0",position:"absolute",width:"100%",textAlign:"center",top:"50%"}}}))),yt=function(e){var t=e.selectedItems,a=e.classes,n=e.isDragging;return t.map((function(e){return r.a.createElement(He.b.div,{positionTransition:n?null:{type:"tween"},key:e.id},r.a.createElement($e,{className:a.dragItem,item:e,variant:"removable"}))}))},Tt=function(e){var t=e.show,a=e.className;return r.a.createElement(Be,{show:t,className:a,exitOptions:{position:"absolute",zIndex:3,top:"50%",marginTop:"-20px"}},r.a.createElement(we.a,null))},xt=function(e){var t=e.classes,a=e.noItemsText;return r.a.createElement(it.a,{component:"div",variant:"body1",className:t.placeholder},r.a.createElement(dt.a,{fontWeight:"fontWeightLight"},a))},Ot=Object(de.b)((function(e){return{selectedItems:e.selectedItems,SDK:e.SDK,params:e.params,touched:e.touched,backend:e.backend,initialised:e.initialised}}),{reorderItems:function(e){return function(t,a){t(function(e){return{type:"REORDER_SELECTED_ITEM",value:e}}(e));var n=a().selectedItems;t(Y(n))}}})((function(e){var t=Object(n.useState)(!1),a=Object(Ve.a)(t,2),c=a[0],i=a[1],o=mt()(e.SDK,"field.schema",{}),s=o.minItems,u=o.maxItems,l=mt()(e.SDK,"form",{}).readOnly,m=bt({readOnly:l}),d=e.touched&&s&&e.selectedItems.length<s,p=e.touched&&u&&e.selectedItems.length>u,f=e.selectedItems.length?r.a.createElement(yt,{selectedItems:e.selectedItems,classes:m,isDragging:c}):r.a.createElement(xt,{classes:m,noItemsText:e.params.noItemsText});return r.a.createElement(Ee.a,{className:"selected-products "+m.root},r.a.createElement(it.a,{variant:"subtitle1",component:"h2",className:m.title},mt()(e.SDK,"field.schema.title","Selected products")),r.a.createElement(Tt,{show:!e.initialised,className:m.loader}),r.a.createElement(Be,{show:e.initialised},l&&r.a.createElement("div",{className:m.items},f),!l&&r.a.createElement(ft.a,{onChange:function(t,a,n){return e.reorderItems(n)},className:m.items,options:{animation:150,ghostClass:"product-placeholder",onStart:function(){return i(!0)},onEnd:function(){return i(!1)}}},f)),r.a.createElement("div",{className:m.errorWrapper},r.a.createElement(Et,{show:Boolean(d)},"You must select a minimum of ",s," items"),r.a.createElement(Et,{show:Boolean(p)},"You must select a maximum of ",u," items")))})),St=Object(he.a)((function(){return{root:{display:"flex",flexDirection:"column",alignItems:"center"},message:{display:"flex",alignItems:"center"},icon:{marginRight:me.spacing(1)}}})),It=Object(de.b)((function(e){return{globalError:e.globalError}}),{setGlobalError:J})((function(e){var t=St(),a=r.a.createElement("span",{className:t.message},r.a.createElement(fe.a,{className:t.icon}),e.globalError);return r.a.createElement(ge.a,{className:t.root},r.a.createElement(ve.a,{anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:function(){return e.setGlobalError(null)},open:Boolean(e.globalError),message:a}),r.a.createElement(Ot,null),r.a.createElement(Se,null),r.a.createElement(ut,null))}));a(622);ue.dispatch(function(){var e=Object(d.a)(l.a.mark((function e(t,a){var n,r,c,i,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a(),!(r=n.SDK)){e.next=3;break}return e.abrupt("return",r);case 3:return t(X(!0)),e.prev=4,e.next=7,Object(p.a)();case 7:r=e.sent,t(ne(r)),t(f(r.params)),t(A()),c=a(),(i=c.params).catalogs.length&&t(ae(i.catalogs[0].id)),t(function(){var e=Object(d.a)(l.a.mark((function e(t,a){var n,r,c,i,o,s,u,m;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(),r=n.SDK,c=n.backend,t(X(!0)),i=[],e.prev=4,e.next=7,r.field.getValue();case 7:if(o=e.sent,s=o.map((function(e){return e.props.id})),!(u=U()(s,(function(e){return!H()(e)})))||!u.length){e.next=17;break}return e.next=13,c.getItems(n,u);case 13:if(m=e.sent,z()(m)){e.next=16;break}throw new O("Field value is not an array",O.codes.INVALID_VALUE);case 16:i=m;case 17:(i=M()(i,(function(e){var t=e.id;return V()(s,t)}))).length!==s.length&&t(Y(i)),t({type:"SET_SELECTED_ITEMS",value:i}),t(X(!1)),t($(!0)),e.next=30;break;case 24:e.prev=24,e.t0=e.catch(4),console.error("could not load",e.t0),t(X(!1)),t($(!0)),t(J("Could not get selected items"));case 30:case"end":return e.stop()}}),e,null,[[4,24]])})));return function(t,a){return e.apply(this,arguments)}}()),o=a(),(s=o.params).catalogs.length!==i.catalogs.length&&t(ae(s.catalogs[0].id)),t(X(!1)),r.frame.startAutoResizer(),r.form.onReadOnlyChange((function(e){t(ne(Object(m.a)({},r,{form:Object(m.a)({},r.form,{readOnly:e})})))})),e.next=27;break;case 21:e.prev=21,e.t0=e.catch(4),console.error("Failed to load",e.t0),t(X(!1)),t($(!0)),t(J("Could not get SDK"));case 27:return e.abrupt("return",r);case 28:case"end":return e.stop()}}),e,null,[[4,21]])})));return function(t,a){return e.apply(this,arguments)}}());var wt=function(){return r.a.createElement(de.a,{store:ue},r.a.createElement(pe.a,{theme:me},r.a.createElement(It,null)))};i.a.render(r.a.createElement(wt,null),document.getElementById("root"))}},[[303,1,2]]]);
//# sourceMappingURL=main.1d1692fb.chunk.js.map