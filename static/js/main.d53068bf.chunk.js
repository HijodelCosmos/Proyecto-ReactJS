(this["webpackJsonpmi-tienda"]=this["webpackJsonpmi-tienda"]||[]).push([[0],{27:function(t,e,c){},37:function(t,e,c){},38:function(t,e,c){},43:function(t,e,c){},45:function(t,e,c){},46:function(t,e,c){},47:function(t,e,c){},49:function(t,e,c){"use strict";c.r(e);var n=c(1),r=c(2),s=c.n(r),i=c(29),a=c.n(i),o=(c(37),c(4)),j=c(6),d=(c(38),c(31)),l=c(3),b=s.a.createContext(),u=function(t){var e=t.children,c=Object(r.useState)(0),s=Object(l.a)(c,2),i=s[0],a=s[1],o=Object(r.useState)([]),j=Object(l.a)(o,2),u=j[0],O=j[1],h=Object(r.useState)(0),A=Object(l.a)(h,2),x=A[0],m=A[1];return Object(n.jsx)(b.Provider,{value:{count:i,itemsInCart:u,totalPrice:x,addItem:function(t,e){a(i+e),m(x+t.price*e),t.cartcount=e,O([].concat(Object(d.a)(u),[t])),console.log("Usted Agrego "+e+" items al carrito")},isInCart:function(t){return!!u.find((function(e){return e.id===t}))},removeItem:function(t,e){var c=u.find((function(e){return e.id===t}));if(-1!==u.findIndex((function(e){return e.id===t}))){var n=u.map((function(t){return t===c&&(t.cartcount=t.cartcount-e),t}));if(O(n),console.log(n),a(i-e),m(x-c.price*e),console.log("Item Borrado"),0===c.cartcount){var r=u.filter((function(e){return e.id!==t&&e}));O(r)}}},clearCart:function(){m(0),a(0),O([]),console.log("El carrito vaciado exitosamente")}},children:e})},O=function(){var t=Object(r.useContext)(b).count;return Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{className:"m-2 ".concat(t>0&&"tada"),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAN2AAADdgF91YLMAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAASlQTFRF////K1J/K1F+K1F9Jk+BJE+CHE2HHk2GJ0pzM0lkJkduJkZtNEhiKERoI0NoMUVfIkFlMkRcID5hIDxeID1fLj9VHzpaLT1SKjZIGS9JMD9TFipBHSo7JURqFSc8Hyg0HycyESAzESAxCCA8DB0vHSQtDBwvBx44GyEqEDlrKjA6DBYiEDtuBBUpMjdAAAAAAAEBAAIEAB0/ACpcAC5mADFqAEebAQIDAQMFAR5AATNsAUicAgIDAgQHAkqeCAgJDRAUDxwrEDtuEFitEkF6ElqvExQXE1yxFEN8FRUXFSc9FSk/FTNWFkyMFyxEFzVZF0+RGxsdGzNPG2S6Hme9I0JnJFaTJ1uXNDM2NGGXNH7WODk/OTg8OWunOYTcPHGvT05TV1ZcV6T/j/d8kQAAAC90Uk5TAAQKEBITFxdVamtwdHmHh5KUoKamrbK40NXV4eTm5+zu7/Dz8/P09fX4+Pn5+/zz9zhoAAABpklEQVR42u3ax1ICQRSFYRQTBhQzYgAMYMSIOYs5A2ZFef+HcDGnqe5xmnGQZNX5l7cvPV+xmGKBK2Zq2FXmCCCAgIoDOkx1BlBtuSXIK74KNwEEEEAAAQRUGhAO5WtsFmk3xMJE3ntCekCZIoAAAn4AmvxoFRvnaatuFlFa1zoWLi1Pr7WAXNvYeM5a9RFHWV07WHixPH0ngAACCCCAAAL+AWANGwdJqxICkNS1iYVDy9Mje8ACNpbipWiZAAIIsAeMRowmT42uUnIn4qaULvEeSCjTW9w2g9sjLtv8oF4U5U14j9sC9g8mgAACCCCAAAIIIIAAAqoOsJ+Re1xBGV0bWHhQpkPDRr3OAcXJ+/sHE0AAAVUHCLvl6hqQW1cjFuqVaU3hgJDzjxYnAgggoLnbqEv8t2MkKOe3a1BZby0c0lKUN2EPAQQQUDigTdxxfCYnptPm/2rO42BPWR/wGXmcA3ziUZ9fcmLaZ97fwsGTsn6HaZQAAggggAACnAM8UfT6Jiem7eb9cRzMKetTmPY7B+TajcnZrgeV9T/8HiCAAAJKBPgGWNJ5bXIsYBcAAAAASUVORK5CYII=",width:"60",alt:"Cart Icon"}),Object(n.jsx)("span",{className:"badge badge-danger badge-pill ".concat(t>0?"d-inline":"d-none"),children:t})]})},h=c.p+"static/media/logo.7dcd2f3e.png",A=function(){return Object(n.jsx)("header",{children:Object(n.jsx)("nav",{id:"navBar",className:"container align-items-start",children:Object(n.jsxs)("div",{className:"row justify-content-center align-items-end",children:[Object(n.jsxs)("div",{className:"row col-5 mt-2 align-items-end",children:[Object(n.jsx)(o.b,{to:"/",children:Object(n.jsx)("img",{src:h,height:"100",alt:"Wizard Icon"})}),Object(n.jsx)(o.b,{to:"/",children:Object(n.jsx)("h1",{id:"navBar--title",className:"col-2 m-0 pt-0",children:"MAGIC TENT"})})]}),Object(n.jsx)("div",{className:"col-5",children:Object(n.jsxs)("ul",{id:"navBar--menu",children:[Object(n.jsx)("li",{className:"navBar--item",children:Object(n.jsx)(o.b,{to:"/",href:"./#home",children:"Home"})}),Object(n.jsx)("li",{className:"navBar--item",children:Object(n.jsx)(o.b,{to:"/Orders",children:"Orders"})}),Object(n.jsxs)("li",{className:"navBar--item deploy_trigger",children:["Categories",Object(n.jsxs)("ul",{className:"deploy_menu",children:[Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/category:Potion",children:"Potions"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/category:Staff",children:"Staffs"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/category:Cloak",children:"Cloaks"})})]})]})]})}),Object(n.jsx)("div",{className:" col-2",children:Object(n.jsx)(o.b,{to:"/cart",children:Object(n.jsx)(O,{})})})]})})})},x=(c(43),c(13)),m=function(t){var e=t.itemData,c=t.handlerClick,i=e&&e.stock,a=Object(r.useState)(!1),o=Object(l.a)(a,2),j=o[0],d=o[1],b=Object(r.useState)(!1),u=Object(l.a)(b,2),O=u[0],h=u[1],A=Object(r.useState)(!1),x=Object(l.a)(A,2),m=x[0],g=x[1],f=Object(r.useState)(i),p=Object(l.a)(f,2),C=p[0],N=p[1],v=Object(r.useState)(0),I=Object(l.a)(v,2),y=I[0],B=I[1];return Object(r.useEffect)((function(){N(i-y),h(y>=i),d(y<=0),g(y<=0)}),[y]),Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsxs)("h6",{className:"text-left",children:["Stock : ",C]}),Object(n.jsxs)("div",{className:"row justify-content-between",children:[Object(n.jsx)("button",{className:"btn btn-sm btn-danger",disabled:j,type:"button",onClick:function(){y>0&&B(y-1)},children:Object(n.jsx)("h4",{children:"-"})}),Object(n.jsx)("h3",{children:y}),Object(n.jsx)("button",{className:"btn btn-sm btn-success",disabled:O,type:"button",onClick:function(){y<i&&B(y+1)},children:Object(n.jsx)("h4",{children:"+"})})]}),Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("button",{onClick:function(){return c(e,y)},type:"button",className:"btn btn-primary m-1 ",disabled:m,children:"Add to Cart"})})]})},g=(c(27),function(){return Object(n.jsx)(o.b,{to:"/cart",children:Object(n.jsx)("div",{className:"d-flex justify-content-center",children:Object(n.jsx)("button",{type:"button",className:"purchaseButton btn btn-success btn-lg text-center mt-4",children:"Complete Purchase!"})})})}),f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAN2AAADdgF91YLMAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAIRQTFRF////eWkhbV8eaFocRDsTQTgSY1cbZFcbWU4ZUUYWU0gXAAAABwYCFxQGHxsJIR0JNzAPPzcRQjkSST8USkAUT0UWb2Eed2gheGghe2sifW0ij3wnlYIpl4MpoYwsp5Eur5gws5wxv6Y0x60348Y+58k/681B8dJC99dE+NhE/dxF/95GulNanwAAAAt0Uk5TADBwh93h4eHk/f3wOGBsAAABdElEQVR42u3b21LCMBAG4NKDllqQqkWrQhUFC3n/9/Oiu8xQJ0PibIip/3+dw5eZMqTpJopME99YJI7kAwAAAFwckGanyVuL5IPO6S8A5WBRlbJINehcAgAAAObzThJKUZ+msQE0g85THnVyFpAwulOC6XjUZEyA98c+r74AS2q4AAAAGUBa9ik6ipIEKB61oGl+7lAyGq42/m1bATg1dcoACBmwXvW5ox63q2PWFwHM9K8DMwAAAMAl4MD/J/NSmzm3OTgAbHiZW/36ttxmExAgpuRVn8YtoKFprnjeiLu05x4fGQCn5ZYAACAL2L9Rdp4A5gEAAAAACBHw+UJ5Wmrz7BIgsysGAAAAJAAPC23uPyhfLgHK06YUAAAAAAAAAHZ8+LDHEQ0AIwN4Oqy+Ph5W43tBOJ9sZF5MAAAAgFGUcHBQxjM2ABezTX0Vs6GeEIAAAd4Lm20SEsBNeX9hXt6PGxYAAPB3AN6v++HGJQAA/BfANzibdUc+fSCIAAAAAElFTkSuQmCC",p=function(t){var e=t.itemData,c=Object(r.useContext)(b),s=c.isInCart,i=c.addItem;return Object(n.jsxs)("div",{className:"card col-12 col-sm-10 col-md-12 col-lg-4 mb-3 mt-5 rounded-lg",children:[Object(n.jsxs)("div",{className:"card-body text-center",children:[Object(n.jsx)("h3",{className:"card-title ",children:e.title}),Object(n.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:e.category}),Object(n.jsx)("img",{src:e.src,className:"m-2 img-fluid",width:"150",alt:"Descripcion de producto"}),Object(n.jsx)("p",{className:"card-text",children:e.description})]}),Object(n.jsxs)("div",{className:"text-center mb-2",children:[Object(n.jsxs)("h3",{children:[Object(n.jsx)("img",{src:f,width:"27",alt:"Coin Logo"}),"  ",e.price]}),Object(n.jsx)(o.b,{to:"/item:".concat(e.id),children:Object(n.jsx)("button",{type:"button",className:"btn btn-primary ",children:"More Info"})})]}),Object(n.jsx)("div",{className:"card-footer",children:s(e.id)?Object(n.jsx)(g,{}):Object(n.jsx)(m,{itemData:e,handlerClick:i})})]})},C=function(t){var e=t.data;return Object(n.jsx)("div",{className:"card-deck justify-content-around",children:e&&e.map((function(t,e){return Object(n.jsx)(p,{itemData:t},e)}))})},N=c(17),v=(c(28),N.a.initializeApp({apiKey:"AIzaSyDw-rnDZnHzVsB8iT6PKy3VBPDjmGyF8p8",authDomain:"the-tent--react-proyect.firebaseapp.com",projectId:"the-tent--react-proyect",storageBucket:"the-tent--react-proyect.appspot.com",messagingSenderId:"1083262875967",appId:"1:1083262875967:web:44b945ebd514f67f97fb8a"})),I=function(){return N.a.firestore(v)},y=function(){var t=Object(r.useState)(null),e=Object(l.a)(t,2),c=e[0],s=e[1];return Object(r.useEffect)((function(){I().collection("items").get().then((function(t){0===t.size&&console.log("No results");var e=t.docs.map((function(t){return Object(x.a)({id:t.id},t.data())}));s(e)}))}),[]),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(C,{data:c})})},B=function(t){var e=t.itemData,c=Object(r.useContext)(b),s=c.isInCart,i=c.addItem;return e&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("h1",{className:"mt-4",children:e.title})}),Object(n.jsxs)("div",{className:"row justify-content-between p-2",children:[Object(n.jsx)("img",{src:e.src,className:"m-2 col-5",width:"100",alt:"Descripcion de producto"}),Object(n.jsxs)("div",{className:"col-5 m-2",children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("h4",{className:"text-muted",children:e.category}),Object(n.jsx)("p",{children:e.description}),Object(n.jsxs)("h3",{className:"text-center",children:[Object(n.jsx)("img",{src:f,width:"32",alt:"Coin Logo"})," ",e.price]}),s(e.id)?Object(n.jsx)(g,{}):Object(n.jsx)(m,{itemData:e,handlerClick:i})]})]})]})},S=(c(45),function(){var t=Object(r.useState)(null),e=Object(l.a)(t,2),c=e[0],s=e[1],i=Object(j.h)().itemId;return Object(r.useEffect)((function(){I().collection("items").doc(i.substr(1)).get().then((function(t){0===t&&console.log("No results"),console.log("Item Found!");var e=Object(x.a)({id:t.id},t.data());s(e)})).catch((function(t){console.log("Ocurrio un error: "+t)}))}),[]),Object(n.jsx)("div",{id:"itemDetail",className:"container justify-content-center mt-4",children:Object(n.jsx)(B,{itemData:c})})}),F=function(){var t=Object(j.h)().categoryId,e=Object(r.useState)(null),c=Object(l.a)(e,2),s=c[0],i=c[1];return Object(r.useEffect)((function(){var e=t.substr(1);I().collection("items").where("category","==",e).limit(3).get().then((function(t){0===t.size&&console.log("No results");var e=t.docs.map((function(t){return Object(x.a)({id:t.id},t.data())}));i(e)}))}),[t]),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(C,{data:s})})},E=(c(46),s.a.createContext()),w=function(t){var e=t.children,c=Object(r.useContext)(b),s=c.itemsInCart,i=c.clearCart,a=c.totalPrice,o=Object(r.useState)({userName:"Comprador",phone:32154896,email:"compratuti@elmail"}),j=Object(l.a)(o,2),d=j[0],u=(j[1],Object(r.useState)([])),O=Object(l.a)(u,2),h=O[0],A=O[1],m=function(){var t=I();t.collection("items").where(N.a.firestore.FieldPath.documentId(),"in",s.map((function(t){return t.id}))).get().then((function(e){var c=t.batch(),n=[];e.docs.forEach((function(t,e){t.data().stock>=s[e].cartcount?c.update(t.ref,{stock:t.data().stock-s[e].cartcount}):(alert("We are out of stock of: "+t.data().title),n.push.apply(n,n.concat([t.data()])))})),0===n.length&&c.commit()}))};return Object(n.jsx)(E.Provider,{value:{ordersSended:h,userData:d,uploadOrder:function(t){var e={buyer:d,items:s,date:N.a.firestore.Timestamp.fromDate(new Date),total:a};I().collection("orders").add(e).then((function(t){var c=t.id;e.orderId=c,m()})).catch((function(t){return console.log("Ocurrio un error: ",t)})).finally((function(){console.log("Compra exitosa, su codigo de orden es: ",e.orderId),i(),t.push("/Orders")}))},updateStock:m,getOrders:function(){return I().collection("orders").get().then((function(t){0===t.size&&console.log("No results");var e=t.docs.map((function(t){return Object(x.a)({id:t.id},t.data())}));A(e)})).catch((function(t){return console.log("An error ocurred: "+t)})),h}},children:e})},k=function(t){var e=t.itemData,c=t.itemId,i=t.handlerClick,a=e&&e.cartcount,o=Object(r.useState)(!1),j=Object(l.a)(o,2),d=j[0],b=j[1],u=Object(r.useState)(!1),O=Object(l.a)(u,2),h=O[0],A=O[1],x=Object(r.useState)(!1),m=Object(l.a)(x,2),g=m[0],f=m[1],p=Object(r.useState)(0),C=Object(l.a)(p,2),N=C[0],v=C[1];return Object(r.useEffect)((function(){A(N>=a),b(N<=0),f(N<=0)}),[N]),Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsxs)("div",{className:"row justify-content-center align-items-center",children:[Object(n.jsx)("button",{className:"countersButtons rounded-circle",disabled:d,type:"button",onClick:function(){N>0&&v(N-1)},children:"-"}),Object(n.jsx)("h4",{children:N}),Object(n.jsx)("button",{className:"countersButtons rounded-circle",disabled:h,type:"button",onClick:function(){N<a&&v(N+1)},children:"+"})]}),Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("button",{type:"button",disabled:g,onClick:function(){return i(c,N)},className:"btn btn-danger text-center",children:"Delete Items"})})]})},D=function(){var t=Object(j.g)(),e=Object(r.useContext)(b),c=e.itemsInCart,i=e.totalPrice,a=e.removeItem,d=e.clearCart,l=Object(r.useContext)(E).uploadOrder;return Object(n.jsxs)("div",{id:"cart",className:"container",children:[Object(n.jsx)("div",{className:"row justify-content-center mt-5",children:Object(n.jsx)("h1",{id:"cart--title",children:"YOUR CART"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("table",{className:"table text-center mt-4",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{}),Object(n.jsx)("th",{children:"Item"}),Object(n.jsx)("th",{children:"Price per Unit"}),Object(n.jsx)("th",{children:"Count"}),Object(n.jsx)("th",{children:"Total"}),Object(n.jsx)("th",{})]})}),Object(n.jsx)("tbody",{children:c.length?c.map((function(t,e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)(o.b,{to:"/item:".concat(t.id),children:Object(n.jsx)("img",{src:t.src,className:"rounded-circle",width:"70",height:"70",alt:"Descripcion de producto"})})}),Object(n.jsx)("td",{children:Object(n.jsxs)(o.b,{to:"/item:".concat(t.id),children:[t.title,Object(n.jsx)("br",{}),Object(n.jsx)("h5",{className:"category--description",children:t.category})]})}),Object(n.jsxs)("td",{children:[Object(n.jsx)("img",{src:f,width:"27",alt:"Coin Logo"}),t.price]}),Object(n.jsx)("td",{children:t.cartcount}),Object(n.jsxs)("td",{children:[Object(n.jsx)("img",{src:f,width:"30",alt:"Coin Logo"}),t.cartcount*t.price]}),Object(n.jsx)("td",{children:Object(n.jsx)(k,{itemData:t,itemId:t.id,handlerClick:a})})]},e)})):Object(n.jsx)("tr",{children:Object(n.jsxs)("td",{colSpan:"6",children:[Object(n.jsx)("h3",{children:"There is nothing around here"}),Object(n.jsx)(o.b,{to:"./",children:Object(n.jsx)("button",{id:"cart--defaultButton",type:"button",className:"btn btn-success btn-lg text-center",children:"Lets Go Shopping!"})})]})})}),Object(n.jsx)("tfoot",{children:Object(n.jsx)("tr",{children:c.length?Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)("td",{children:Object(n.jsx)("button",{id:"cart--clearButton",type:"button",onClick:function(){return d()},className:"btn btn-danger text-center",children:"Clear Cart"})}),Object(n.jsx)("td",{colSpan:"4",children:Object(n.jsxs)("h3",{id:"cart--totalPrice",children:["TOTAL ",Object(n.jsx)("img",{src:f,width:"35",alt:"Coin Logo"}),i]})}),Object(n.jsx)("td",{children:Object(n.jsx)("button",{id:"cart--buyButton",type:"button",onClick:function(){return l(t)},className:"btn btn-success text-center",children:"\xa1BUY!"})})]}):Object(n.jsx)("td",{})})})]})})]})},T=(c(47),function(){var t=Object(r.useContext)(E),e=t.ordersSended,c=t.getOrders,s=Object(r.useState)([]),i=Object(l.a)(s,2),a=i[0],j=i[1];return Object(r.useEffect)((function(){j(c())}),[e]),Object(n.jsxs)("div",{id:"orders",className:"container",children:[Object(n.jsx)("div",{className:"row justify-content-center mt-5",children:Object(n.jsx)("h1",{id:"orders--title",children:"YOUR ORDERS"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("table",{className:"table text-center mt-4",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Order Code"}),Object(n.jsx)("th",{children:"Ordered Items"}),Object(n.jsx)("th",{children:"Total"})]})}),Object(n.jsx)("tbody",{children:a.length?a.map((function(t,e){var c=t.items;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t.id}),Object(n.jsx)("td",{children:c.map((function(t,e){return Object(n.jsxs)("h5",{children:[t.title," x ",t.cartcount,Object(n.jsx)("br",{})]},e)}))}),Object(n.jsxs)("td",{children:[Object(n.jsx)("img",{src:f,width:"27",alt:"Coin Logo"}),t.total]})]},e)})):Object(n.jsx)("tr",{children:Object(n.jsxs)("td",{colSpan:"6",children:[Object(n.jsx)("h3",{children:"There is nothing around here"}),Object(n.jsx)(o.b,{to:"./",children:Object(n.jsx)("button",{id:"cart--defaultButton",type:"button",className:"btn btn-success btn-lg text-center",children:"Lets Go Shopping!"})})]})})})]})})]})});c(48);var U=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(o.a,{children:Object(n.jsx)(u,{children:Object(n.jsxs)(w,{children:[Object(n.jsx)(A,{}),Object(n.jsx)(j.a,{from:"/Proyecto-ReactJS/",to:"/"}),Object(n.jsx)(j.d,{children:Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)(j.b,{exact:!0,path:"/",children:Object(n.jsx)(y,{})}),Object(n.jsx)(j.b,{exact:!0,path:"/category:categoryId",children:Object(n.jsx)(F,{})}),Object(n.jsx)(j.b,{path:"/item:itemId",children:Object(n.jsx)(S,{})}),Object(n.jsx)(j.b,{path:"/cart",children:Object(n.jsx)(D,{})}),Object(n.jsx)(j.b,{path:"/Orders",children:Object(n.jsx)(T,{})})]})})]})})})})},G=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(e){var c=e.getCLS,n=e.getFID,r=e.getFCP,s=e.getLCP,i=e.getTTFB;c(t),n(t),r(t),s(t),i(t)}))};a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root")),G()}},[[49,1,2]]]);
//# sourceMappingURL=main.d53068bf.chunk.js.map