(this.webpackJsonptaproom=this.webpackJsonptaproom||[]).push([[0],{1:function(e,t,n){},13:function(e,t,n){e.exports=n(23)},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=(n(18),n(11)),i=n(2),u=n(7),s=n(8),m=n(12),d=n(10);n(1);var p=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Welcome to the Epicodus Tap Room!"),r.a.createElement("p",null,"Formerly known as The Rialto"))},h=function(e){return r.a.createElement("div",{className:"keg",id:e.id},r.a.createElement("h3",null,e.name),r.a.createElement("h4",null,"ABV: ",e.abv," Price/Pint: ",e.price),(t=e.inventory)>10?r.a.createElement("button",{className:"purchaseButton",onClick:function(){return e.onBeerPuchase(e.id)}},"Purchase"):t<=10&&t>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Almost Out!"),r.a.createElement("button",{className:"purchaseButton",onClick:function(){return e.onBeerPuchase(e.id)}},"Purchase")):r.a.createElement("p",null,"Sold Out!"),r.a.createElement("button",{className:"purchaseButton",onClick:function(){return e.onKegClick(e.id)}},"Beer Details"));var t};n(19);var v=function(e){return r.a.createElement("div",{className:"formControl"},r.a.createElement("form",{className:"createForm",onSubmit:e.formSubmissionHandler},r.a.createElement("input",{type:"text",name:"name",placeholder:"Beer Name"}),r.a.createElement("input",{type:"text",name:"brand",placeholder:"Brewery"}),r.a.createElement("input",{type:"text",name:"price",placeholder:"Price per Pint"}),r.a.createElement("input",{type:"text",name:"abv",placeholder:"ABV"}),r.a.createElement("button",{type:"submit"},e.buttonText)))},g=(n(20),n(9));var f=function(e){var t=e.tapList.sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?-1:1}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"kegs"},t.map((function(t){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement(h,{key:t.id,name:t.name,brand:t.brand,price:t.price,abv:t.abv,inventory:t.inventory,id:t.id,onKegClick:e.onKegSelection,onBeerPuchase:e.onPintSold}))}))),r.a.createElement("hr",null),r.a.createElement("div",{className:"form"},r.a.createElement("h3",null,"Buy a new Keg: "),r.a.createElement(v,{formSubmissionHandler:function(t){t.preventDefault(),e.onNewKegPurchase({name:t.target.name.value,brand:t.target.brand.value,price:t.target.price.value,abv:t.target.abv.value,inventory:124,id:Object(g.v4)()})},buttonText:"Purchase Keg"})))},E=function(e){return r.a.createElement("div",{className:"form"},r.a.createElement("h1",null,e.keg.name),r.a.createElement("h3",null,e.keg.brand),r.a.createElement("p",null,"ABV: ",e.keg.abv,"  Pints Left: ",e.keg.inventory),r.a.createElement("button",{className:"detailsButton",onClick:function(){return e.onKegDeletion(e.keg.id)}},"Delete Keg"),r.a.createElement("button",{className:"detailsButton",onClick:e.handleBackToTapRoom},"Back to Tap Room"),r.a.createElement("div",{className:"form"},r.a.createElement(v,{formSubmissionHandler:function(t){t.preventDefault(),e.onKegEdit({name:t.target.name.value,brand:t.target.brand.value,price:t.target.price.value,abv:t.target.abv.value,inventory:e.keg.inventory,id:e.keg.id})},buttonText:"Edit this Keg"})))},b=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).currentPage=function(){return a.state.showTapRoom?{component:r.a.createElement(f,{tapList:a.state.tapList,onKegSelection:a.handleKegSelection,onNewKegPurchase:a.handleNewKegPurchase,onPintSold:a.handlePintPurchase})}:{component:r.a.createElement(E,{keg:a.state.selectedKeg,handleBackToTapRoom:a.handleBackToTapRoom,onKegDeletion:a.handleKegDelete,onKegEdit:a.handleKegEdit})}},a.handleKegEdit=function(e){var t=a.state.tapList.filter((function(t){return t.id!==e.id}));a.setState({tapList:[].concat(Object(i.a)(t),[e]),selectedKeg:{},showTapRoom:!0})},a.handleKegDelete=function(e){var t=a.state.tapList.filter((function(t){return t.id!==e}));a.setState({tapList:t,selectedKeg:{},showTapRoom:!0})},a.handlePintPurchase=function(e){var t=a.state.tapList.filter((function(t){return t.id===e}))[0],n=t.inventory-1,r=Object(l.a)({},t,{inventory:n}),o=a.state.tapList.filter((function(t){return t.id!==e}));a.setState({tapList:[].concat(Object(i.a)(o),[r])})},a.handleNewKegPurchase=function(e){var t=a.state.tapList.concat(e);a.setState({tapList:t})},a.handleKegSelection=function(e){var t=a.state.tapList.filter((function(t){return t.id===e}))[0];a.setState({selectedKeg:t,showTapRoom:!1})},a.handleBackToTapRoom=function(){a.setState({showTapRoom:!0})},a.state={showTapRoom:!0,tapList:[{name:"Ranier",brand:"Ranier",price:"$3",abv:"4.6%",inventory:89,id:1},{name:"Old Rasputin Russian Imperial Stout",brand:"North Coast Brewing Co",price:"$6",abv:"9.0%",inventory:24,id:2},{name:"ESB English Ale",brand:"Ferment",price:"$6",abv:"5.4",inventory:12,id:3}],selectedKeg:{}},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.currentPage();return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),e.component)}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.be8582dc.chunk.js.map