(this["webpackJsonpmi-tienda"]=this["webpackJsonpmi-tienda"]||[]).push([[0],{30:function(t,e,c){},32:function(t){t.exports=JSON.parse('[{"id":0,"title":"Raising Skull","category":"Staff","description":"Lorem Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","stock":4,"price":4684,"src":"https://www.pikpng.com/pngl/m/20-206122_skull-staff-minecraft-fire-sword-pixel-art-clipart.png"},{"id":1,"title":"Warlock Poison Staff","category":"Staff","description":"Lorem ipsum dolor sit amet,consectetur adipiscing elit.","stock":2,"price":868,"src":"https://www.pinclipart.com/picdir/middle/460-4603973_warlock-staff-boy-pixel-art-clipart.png"},{"id":2,"title":"Tempest Staff","category":"Staff","description":"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","stock":12,"price":1334,"src":"https://www.pngkit.com/png/detail/133-1335287_terraria-tempest-staff-minecraft-skin-magic-staff.png"},{"id":3,"title":"Seas Storm","category":"Staff","description":"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","stock":5,"price":3487,"src":"https://www.seekpng.com/png/detail/331-3316340_gear-moses-staff-of-seas-render-unison-league.png"},{"id":4,"title":"Shadow Beam","category":"Staff","description":"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","stock":42,"price":975,"src":"https://art.pixilart.com/c2af2f344dd4179.png"}]')},40:function(t,e,c){},41:function(t,e,c){},47:function(t,e,c){},48:function(t,e,c){},49:function(t,e,c){},50:function(t,e,c){},51:function(t,e,c){},53:function(t,e,c){"use strict";c.r(e);var n=c(1),i=c(2),r=c.n(i),s=c(31),a=c.n(s),o=(c(40),c(6)),d=c(7),l=(c(41),c(34)),j=c(3),b=c(32),u=c(17),O=(c(28),u.a.initializeApp({apiKey:"AIzaSyDw-rnDZnHzVsB8iT6PKy3VBPDjmGyF8p8",authDomain:"the-tent--react-proyect.firebaseapp.com",projectId:"the-tent--react-proyect",storageBucket:"the-tent--react-proyect.appspot.com",messagingSenderId:"1083262875967",appId:"1:1083262875967:web:44b945ebd514f67f97fb8a"})),h=function(){return u.a.firestore(O)},m=r.a.createContext(),A=function(t){var e=t.children,c=Object(i.useState)(0),r=Object(j.a)(c,2),s=r[0],a=r[1],o=Object(i.useState)([]),d=Object(j.a)(o,2),u=d[0],O=d[1],A=Object(i.useState)(0),x=Object(j.a)(A,2),g=x[0],f=x[1];return Object(n.jsx)(m.Provider,{value:{subirJson:function(){var t=h();b.forEach((function(e){t.collection("items").add({title:e.title,description:e.description,price:e.price,stock:e.stock,src:e.src,category:e.category}).then((function(t){console.log("Document written with ID: ",t.id)})).catch((function(t){console.error("Error adding document: ",t)}))}))},count:s,itemsInCart:u,totalPrice:g,addItem:function(t,e){a(s+e),f(g+t.price*e),t.cartcount=e,O([].concat(Object(l.a)(u),[t])),console.log("Usted Agrego "+e+" items al carrito")},isInCart:function(t){return!!u.find((function(e){return e.id===t}))},removeItem:function(t,e){var c=u.find((function(e){return e.id===t}));if(-1!==u.findIndex((function(e){return e.id===t}))){var n=u.map((function(t){return t===c&&(t.cartcount=t.cartcount-e),t}));if(O(n),a(s-e),f(g-c.price*e),console.log("Item Borrado"),0===c.cartcount){var i=u.filter((function(e){return e.id!==t&&e}));O(i)}}},clearCart:function(){f(0),a(0),O([]),console.log("El carrito vaciado exitosamente")}},children:e})},x=function(){var t=Object(i.useContext)(m).count;return Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{className:"m-2 ".concat(t>0&&"tada"),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAN2AAADdgF91YLMAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAASlQTFRF////K1J/K1F+K1F9Jk+BJE+CHE2HHk2GJ0pzM0lkJkduJkZtNEhiKERoI0NoMUVfIkFlMkRcID5hIDxeID1fLj9VHzpaLT1SKjZIGS9JMD9TFipBHSo7JURqFSc8Hyg0HycyESAzESAxCCA8DB0vHSQtDBwvBx44GyEqEDlrKjA6DBYiEDtuBBUpMjdAAAAAAAEBAAIEAB0/ACpcAC5mADFqAEebAQIDAQMFAR5AATNsAUicAgIDAgQHAkqeCAgJDRAUDxwrEDtuEFitEkF6ElqvExQXE1yxFEN8FRUXFSc9FSk/FTNWFkyMFyxEFzVZF0+RGxsdGzNPG2S6Hme9I0JnJFaTJ1uXNDM2NGGXNH7WODk/OTg8OWunOYTcPHGvT05TV1ZcV6T/j/d8kQAAAC90Uk5TAAQKEBITFxdVamtwdHmHh5KUoKamrbK40NXV4eTm5+zu7/Dz8/P09fX4+Pn5+/zz9zhoAAABpklEQVR42u3ax1ICQRSFYRQTBhQzYgAMYMSIOYs5A2ZFef+HcDGnqe5xmnGQZNX5l7cvPV+xmGKBK2Zq2FXmCCCAgIoDOkx1BlBtuSXIK74KNwEEEEAAAQRUGhAO5WtsFmk3xMJE3ntCekCZIoAAAn4AmvxoFRvnaatuFlFa1zoWLi1Pr7WAXNvYeM5a9RFHWV07WHixPH0ngAACCCCAAAL+AWANGwdJqxICkNS1iYVDy9Mje8ACNpbipWiZAAIIsAeMRowmT42uUnIn4qaULvEeSCjTW9w2g9sjLtv8oF4U5U14j9sC9g8mgAACCCCAAAIIIIAAAqoOsJ+Re1xBGV0bWHhQpkPDRr3OAcXJ+/sHE0AAAVUHCLvl6hqQW1cjFuqVaU3hgJDzjxYnAgggoLnbqEv8t2MkKOe3a1BZby0c0lKUN2EPAQQQUDigTdxxfCYnptPm/2rO42BPWR/wGXmcA3ziUZ9fcmLaZ97fwsGTsn6HaZQAAggggAACnAM8UfT6Jiem7eb9cRzMKetTmPY7B+TajcnZrgeV9T/8HiCAAAJKBPgGWNJ5bXIsYBcAAAAASUVORK5CYII=",width:"60",alt:"Cart Icon"}),Object(n.jsx)("span",{className:"badge badge-danger badge-pill ".concat(t>0?"d-inline":"d-none"),children:t})]})},g=c.p+"static/media/logo.7dcd2f3e.png",f=function(){return Object(n.jsx)("header",{children:Object(n.jsx)("nav",{id:"navBar",className:"container align-items-start",children:Object(n.jsxs)("div",{className:"row justify-content-center align-items-end",children:[Object(n.jsxs)("div",{className:"row col-5 mt-2 align-items-end",children:[Object(n.jsx)(o.b,{to:"/",children:Object(n.jsx)("img",{src:g,height:"100",alt:"Wizard Icon"})}),Object(n.jsx)(o.b,{to:"/",children:Object(n.jsx)("h1",{id:"navBar--title",className:"col-2 m-0 pt-0",children:"MAGIC TENT"})})]}),Object(n.jsx)("div",{className:"col-5",children:Object(n.jsxs)("ul",{id:"navBar--menu",children:[Object(n.jsx)("li",{className:"navBar--item",children:Object(n.jsx)(o.b,{to:"/",href:"./#home",children:"Home"})}),Object(n.jsx)("li",{className:"navBar--item",children:Object(n.jsx)(o.b,{to:"/Orders",children:"Orders"})}),Object(n.jsxs)("li",{className:"navBar--item deploy_trigger",children:["Categories",Object(n.jsxs)("ul",{className:"deploy_menu",children:[Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/category:Potion",children:"Potions"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/category:Staff",children:"Staffs"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/category:Cloak",children:"Cloaks"})})]})]})]})}),Object(n.jsx)("div",{className:" col-2",children:Object(n.jsx)(o.b,{to:"/cart",children:Object(n.jsx)(x,{})})})]})})})},p=(c(47),c(14)),C=function(t){var e=t.itemData,c=t.handlerClick,s=e&&e.stock,a=Object(i.useState)(!1),o=Object(j.a)(a,2),d=o[0],l=o[1],b=Object(i.useState)(!1),u=Object(j.a)(b,2),O=u[0],h=u[1],m=Object(i.useState)(!1),A=Object(j.a)(m,2),x=A[0],g=A[1],f=Object(i.useState)(s),p=Object(j.a)(f,2),C=p[0],N=p[1],v=Object(i.useState)(0),S=Object(j.a)(v,2),I=S[0],y=S[1];return Object(i.useEffect)((function(){N(s-I),h(I>=s),l(I<=0),g(I<=0)}),[I]),Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsxs)("h6",{className:"text-left",children:["Stock : ",C]}),Object(n.jsxs)("div",{className:"row justify-content-between",children:[Object(n.jsx)("button",{className:"btn btn-sm btn-danger",disabled:d,type:"button",onClick:function(){I>0&&y(I-1)},children:Object(n.jsx)("h4",{children:"-"})}),Object(n.jsx)("h3",{children:I}),Object(n.jsx)("button",{className:"btn btn-sm btn-success",disabled:O,type:"button",onClick:function(){I<s&&y(I+1)},children:Object(n.jsx)("h4",{children:"+"})})]}),Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("button",{onClick:function(){return c(e,I)},type:"button",className:"btn btn-primary m-1 ",disabled:x,children:"Add to Cart"})})]})},N=(c(30),function(){return Object(n.jsx)(o.b,{to:"/cart",children:Object(n.jsx)("div",{className:"d-flex justify-content-center",children:Object(n.jsx)("button",{type:"button",className:"purchaseButton btn btn-success btn-lg text-center mt-4",children:"Complete Purchase!"})})})}),v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAN2AAADdgF91YLMAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAIRQTFRF////eWkhbV8eaFocRDsTQTgSY1cbZFcbWU4ZUUYWU0gXAAAABwYCFxQGHxsJIR0JNzAPPzcRQjkSST8USkAUT0UWb2Eed2gheGghe2sifW0ij3wnlYIpl4MpoYwsp5Eur5gws5wxv6Y0x60348Y+58k/681B8dJC99dE+NhE/dxF/95GulNanwAAAAt0Uk5TADBwh93h4eHk/f3wOGBsAAABdElEQVR42u3b21LCMBAG4NKDllqQqkWrQhUFC3n/9/Oiu8xQJ0PibIip/3+dw5eZMqTpJopME99YJI7kAwAAAFwckGanyVuL5IPO6S8A5WBRlbJINehcAgAAAObzThJKUZ+msQE0g85THnVyFpAwulOC6XjUZEyA98c+r74AS2q4AAAAGUBa9ik6ipIEKB61oGl+7lAyGq42/m1bATg1dcoACBmwXvW5ox63q2PWFwHM9K8DMwAAAMAl4MD/J/NSmzm3OTgAbHiZW/36ttxmExAgpuRVn8YtoKFprnjeiLu05x4fGQCn5ZYAACAL2L9Rdp4A5gEAAAAACBHw+UJ5Wmrz7BIgsysGAAAAJAAPC23uPyhfLgHK06YUAAAAAAAAAHZ8+LDHEQ0AIwN4Oqy+Ph5W43tBOJ9sZF5MAAAAgFGUcHBQxjM2ABezTX0Vs6GeEIAAAd4Lm20SEsBNeX9hXt6PGxYAAPB3AN6v++HGJQAA/BfANzibdUc+fSCIAAAAAElFTkSuQmCC",S=function(t){var e=t.itemData,c=Object(i.useContext)(m),r=c.isInCart,s=c.addItem;c.subirJson;return Object(n.jsxs)("div",{className:"card col-12 col-sm-10 col-md-12 col-lg-3 m-3 rounded-lg",children:[Object(n.jsxs)("div",{className:"card-body text-center",children:[Object(n.jsx)("h3",{className:"card-title ",children:e.title}),Object(n.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:e.category}),Object(n.jsx)("img",{src:e.src,className:"m-2 img-fluid",width:"150",alt:"Descripcion de producto"}),Object(n.jsx)("p",{className:"card-text",children:e.description})]}),Object(n.jsxs)("div",{className:"text-center mb-2",children:[Object(n.jsxs)("h3",{children:[Object(n.jsx)("img",{src:v,width:"27",alt:"Coin Logo"}),"  ",e.price]}),Object(n.jsx)(o.b,{to:"/item:".concat(e.id),children:Object(n.jsx)("button",{type:"button",className:"btn btn-primary ",children:"More Info"})})]}),Object(n.jsx)("div",{className:"card-footer",children:r(e.id)?Object(n.jsx)(N,{}):Object(n.jsx)(C,{itemData:e,handlerClick:s})})]})},I=function(t){var e=t.data;return t.loading?Object(n.jsx)("div",{}):Object(n.jsx)("div",{className:"d-flex flex-wrap justify-content-around",children:e&&e.map((function(t,e){return Object(n.jsx)(S,{itemData:t},e)}))})},y=(c(48),function(t){var e=t.loaderState;return Object(n.jsx)(r.a.Fragment,{children:!0===e&&Object(n.jsx)("div",{id:"loader--wrapper",children:Object(n.jsx)("div",{id:"loader",children:Object(n.jsx)("h2",{id:"loader--Title",children:"Loading"})})})})}),w=c(27),k=function(t){for(var e=t.itemsPerPage,c=t.totalItems,i=t.paginate,r=t.currentPage,s=[],a=function(t){s.push(Object(n.jsx)(w.a.Item,{active:t===r,onClick:function(){return i(t)},children:t},t))},o=1;o<=Math.ceil(c/e);o++)a(o);return Object(n.jsx)("nav",{className:"container  mb-1",children:Object(n.jsx)(w.a,{className:"justify-content-center",size:"lg",children:s})})},B=function(){var t=Object(i.useState)([]),e=Object(j.a)(t,2),c=e[0],s=e[1],a=Object(i.useState)(!1),o=Object(j.a)(a,2),d=o[0],l=o[1],b=Object(i.useState)(1),u=Object(j.a)(b,2),O=u[0],m=u[1],A=Object(i.useState)(3),x=Object(j.a)(A,1)[0];Object(i.useEffect)((function(){return l(!0),h().collection("items").get().then((function(t){0===t.size&&console.log("No results");var e=t.docs.map((function(t){return Object(p.a)({id:t.id},t.data())}));s(e),setTimeout((function(){l(!1)}),600)})),function(){return clearTimeout()}}),[]);var g=O*x,f=g-x,C=c.slice(f,g);return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(y,{loaderState:d}),Object(n.jsx)(I,{data:C,loading:d}),Object(n.jsx)(k,{itemsPerPage:x,totalItems:c.length,paginate:function(t){return m(t)},currentPage:O})]})},F=function(t){var e=t.itemData,c=Object(i.useContext)(m),r=c.isInCart,s=c.addItem;return e&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("h1",{className:"mt-4",children:e.title})}),Object(n.jsxs)("div",{className:"row justify-content-between p-2",children:[Object(n.jsx)("img",{src:e.src,className:"m-2 col-5",width:"100",alt:"Descripcion de producto"}),Object(n.jsxs)("div",{className:"col-5 m-2",children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("h4",{className:"text-muted",children:e.category}),Object(n.jsx)("p",{children:e.description}),Object(n.jsxs)("h3",{className:"text-center",children:[Object(n.jsx)("img",{src:v,width:"32",alt:"Coin Logo"})," ",e.price]}),r(e.id)?Object(n.jsx)(N,{}):Object(n.jsx)(C,{itemData:e,handlerClick:s})]})]})]})},E=(c(49),function(){var t=Object(i.useState)(null),e=Object(j.a)(t,2),c=e[0],r=e[1],s=Object(i.useState)(!1),a=Object(j.a)(s,2),o=a[0],l=a[1],b=Object(d.h)().itemId;return Object(i.useEffect)((function(){l(!0),h().collection("items").doc(b.substr(1)).get().then((function(t){0===t&&console.log("No results"),console.log("Item Found!");var e=Object(p.a)({id:t.id},t.data());r(e),setTimeout((function(){l(!1)}),600)})).catch((function(t){console.log("Ocurrio un error: "+t),setTimeout((function(){l(!1)}),500)}))}),[]),Object(n.jsxs)("div",{id:"itemDetail",className:"container justify-content-center mt-4 mb-4",children:[Object(n.jsx)(y,{loaderState:o}),Object(n.jsx)(F,{itemData:c})]})}),D=function(){var t=Object(d.h)().categoryId,e=Object(i.useState)([]),c=Object(j.a)(e,2),r=c[0],s=c[1],a=Object(i.useState)(!1),o=Object(j.a)(a,2),l=o[0],b=o[1],u=Object(i.useState)(1),O=Object(j.a)(u,2),m=O[0],A=O[1],x=Object(i.useState)(3),g=Object(j.a)(x,1)[0];Object(i.useEffect)((function(){b(!0);var e=t.substr(1);h().collection("items").where("category","==",e).limit(10).get().then((function(t){0===t.size&&console.log("No results");var e=t.docs.map((function(t){return Object(p.a)({id:t.id},t.data())}));setTimeout((function(){b(!1)}),500),s(e)}))}),[t]);var f=m*g,C=f-g,N=r.slice(C,f);return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(y,{loaderState:l}),Object(n.jsx)(I,{data:N}),Object(n.jsx)(k,{itemsPerPage:g,totalItems:r.length,paginate:function(t){return A(t)}})]})},T=(c(50),r.a.createContext()),U=function(t){var e=t.children,c=Object(i.useContext)(m),r=c.itemsInCart,s=c.clearCart,a=c.totalPrice,o=Object(i.useState)({userName:"Comprador",phone:32154896,email:"compratuti@elmail"}),d=Object(j.a)(o,1)[0],l=Object(i.useState)([]),b=Object(j.a)(l,2),O=b[0],A=b[1],x=Object(i.useState)(!1),g=Object(j.a)(x,2),f=g[0],C=g[1],N=function(){var t=h();t.collection("items").where(u.a.firestore.FieldPath.documentId(),"in",r.map((function(t){return t.id}))).get().then((function(e){var c=t.batch(),n=[];e.docs.forEach((function(t,e){t.data().stock>=r[e].cartcount?c.update(t.ref,{stock:t.data().stock-r[e].cartcount}):(alert("We are out of stock of: "+t.data().title),n.push.apply(n,n.concat([t.data()])))})),0===n.length&&c.commit()}))};return Object(n.jsx)(T.Provider,{value:{loading:f,ordersSended:O,userData:d,uploadOrder:function(t){var e={buyer:d,items:r,date:u.a.firestore.Timestamp.fromDate(new Date),total:a};h().collection("orders").add(e).then((function(t){var c=t.id;e.orderId=c,N()})).catch((function(t){return console.log("Ocurrio un error: ",t)})).finally((function(){console.log("Compra exitosa, su codigo de orden es: ",e.orderId),s(),t.push("/Orders")}))},updateStock:N,getOrders:function(){return C(!0),h().collection("orders").get().then((function(t){0===t.size&&console.log("No results");var e=t.docs.map((function(t){return Object(p.a)({id:t.id},t.data())}));0!==t.size&&e.length!==O.length&&A(e),console.log("Getting orders from the DB ")})).catch((function(t){return console.log("An error ocurred: "+t)})).finally(setTimeout((function(){C(!1)}),600)),O}},children:e})},P=function(t){var e=t.itemData,c=t.itemId,s=t.handlerClick,a=e&&e.cartcount,o=Object(i.useState)(!1),d=Object(j.a)(o,2),l=d[0],b=d[1],u=Object(i.useState)(!1),O=Object(j.a)(u,2),h=O[0],m=O[1],A=Object(i.useState)(!1),x=Object(j.a)(A,2),g=x[0],f=x[1],p=Object(i.useState)(0),C=Object(j.a)(p,2),N=C[0],v=C[1];return Object(i.useEffect)((function(){m(N>=a),b(N<=0),f(N<=0)}),[N]),Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsxs)("div",{className:"row justify-content-center align-items-center",children:[Object(n.jsx)("button",{className:"countersButtons rounded-circle",disabled:l,type:"button",onClick:function(){N>0&&v(N-1)},children:"-"}),Object(n.jsx)("h4",{children:N}),Object(n.jsx)("button",{className:"countersButtons rounded-circle",disabled:h,type:"button",onClick:function(){N<a&&v(N+1)},children:"+"})]}),Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("button",{type:"button",disabled:g,onClick:function(){return s(c,N)},className:"btn btn-danger text-center",children:"Delete Items"})})]})},G=function(){var t=Object(d.g)(),e=Object(i.useContext)(m),c=e.itemsInCart,s=e.totalPrice,a=e.removeItem,l=e.clearCart,j=Object(i.useContext)(T).uploadOrder;return Object(n.jsxs)("div",{id:"cart",className:"container",children:[Object(n.jsx)("div",{className:"row justify-content-center mt-5",children:Object(n.jsx)("h1",{id:"cart--title",children:"YOUR CART"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("table",{className:"table text-center mt-4",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{}),Object(n.jsx)("th",{children:"Item"}),Object(n.jsx)("th",{children:"Price per Unit"}),Object(n.jsx)("th",{children:"Count"}),Object(n.jsx)("th",{children:"Total"}),Object(n.jsx)("th",{})]})}),Object(n.jsx)("tbody",{children:c.length?c.map((function(t,e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)(o.b,{to:"/item:".concat(t.id),children:Object(n.jsx)("img",{src:t.src,className:"rounded-circle",width:"70",height:"70",alt:"Descripcion de producto"})})}),Object(n.jsx)("td",{children:Object(n.jsxs)(o.b,{to:"/item:".concat(t.id),children:[t.title,Object(n.jsx)("br",{}),Object(n.jsx)("h5",{className:"category--description",children:t.category})]})}),Object(n.jsxs)("td",{children:[Object(n.jsx)("img",{src:v,width:"27",alt:"Coin Logo"}),t.price]}),Object(n.jsx)("td",{children:t.cartcount}),Object(n.jsxs)("td",{children:[Object(n.jsx)("img",{src:v,width:"30",alt:"Coin Logo"}),t.cartcount*t.price]}),Object(n.jsx)("td",{children:Object(n.jsx)(P,{itemData:t,itemId:t.id,handlerClick:a})})]},e)})):Object(n.jsx)("tr",{children:Object(n.jsxs)("td",{colSpan:"6",children:[Object(n.jsx)("h3",{children:"There is nothing around here"}),Object(n.jsx)(o.b,{to:"./",children:Object(n.jsx)("button",{id:"cart--defaultButton",type:"button",className:"btn btn-success btn-lg text-center",children:"Lets Go Shopping!"})})]})})}),Object(n.jsx)("tfoot",{children:Object(n.jsx)("tr",{children:c.length?Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)("td",{children:Object(n.jsx)("button",{id:"cart--clearButton",type:"button",onClick:function(){return l()},className:"btn btn-danger text-center",children:"Clear Cart"})}),Object(n.jsx)("td",{colSpan:"4",children:Object(n.jsxs)("h3",{id:"cart--totalPrice",children:["TOTAL ",Object(n.jsx)("img",{src:v,width:"35",alt:"Coin Logo"}),s]})}),Object(n.jsx)("td",{children:Object(n.jsx)("button",{id:"cart--buyButton",type:"button",onClick:function(){return j(t)},className:"btn btn-success text-center",children:"\xa1BUY!"})})]}):Object(n.jsx)("td",{})})})]})})]})},J=(c(51),function(){var t=Object(i.useContext)(T),e=t.loading,c=t.ordersSended,r=t.getOrders,s=Object(i.useState)([]),a=Object(j.a)(s,2),d=a[0],l=a[1];return Object(i.useEffect)((function(){l(r())}),[c]),Object(n.jsxs)("div",{id:"orders",className:"container",children:[Object(n.jsx)(y,{loaderState:e}),Object(n.jsx)("div",{className:"row justify-content-center mt-5",children:Object(n.jsx)("h1",{id:"orders--title",children:"YOUR ORDERS"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("table",{className:"table text-center mt-4",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Order Code"}),Object(n.jsx)("th",{children:"Ordered Items"}),Object(n.jsx)("th",{children:"Total"})]})}),Object(n.jsx)("tbody",{children:d.length?d.map((function(t,e){var c=t.items;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t.id}),Object(n.jsx)("td",{children:c.map((function(t,e){return Object(n.jsxs)("h5",{children:[t.title," x ",t.cartcount,Object(n.jsx)("br",{})]},e)}))}),Object(n.jsxs)("td",{children:[Object(n.jsx)("img",{src:v,width:"27",alt:"Coin Logo"}),t.total]})]},e)})):Object(n.jsx)("tr",{children:Object(n.jsxs)("td",{colSpan:"6",children:[Object(n.jsx)("h3",{children:"There is nothing around here"}),Object(n.jsx)(o.b,{to:"./",children:Object(n.jsx)("button",{id:"cart--defaultButton",type:"button",className:"btn btn-success btn-lg text-center",children:"Lets Go Shopping!"})})]})})})]})})]})});c(52);var R=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(o.a,{children:Object(n.jsx)(A,{children:Object(n.jsxs)(U,{children:[Object(n.jsx)(f,{}),Object(n.jsx)(d.a,{from:"/Proyecto-ReactJS/",to:"/"}),Object(n.jsx)(d.d,{children:Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(d.b,{exact:!0,path:"/",children:Object(n.jsx)(B,{})}),Object(n.jsx)(d.b,{exact:!0,path:"/category:categoryId",children:Object(n.jsx)(D,{})}),Object(n.jsx)(d.b,{path:"/item:itemId",children:Object(n.jsx)(E,{})}),Object(n.jsx)(d.b,{path:"/cart",children:Object(n.jsx)(G,{})}),Object(n.jsx)(d.b,{path:"/Orders",children:Object(n.jsx)(J,{})})]})})]})})})})},H=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;c(t),n(t),i(t),r(t),s(t)}))};a.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(R,{})}),document.getElementById("root")),H()}},[[53,1,2]]]);
//# sourceMappingURL=main.592c2ede.chunk.js.map