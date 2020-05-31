(this["webpackJsonpnpocore-client"]=this["webpackJsonpnpocore-client"]||[]).push([[0],{31:function(e,a,t){e.exports=t(41)},41:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),o=t.n(r),c=t(10),i=t(9),s=t(12),m=t.n(s),u=t(16),E=t(4),g=t(44);t(20),t(15),t(18);var p=function(){var e=Object(n.useState)({}),a=Object(E.a)(e,2),t=a[0],r=a[1],o=Object(g.a)(["name"]),c=Object(E.a)(o,2),i=c[0];return c[1],Object(n.useEffect)(Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(i.organization);case 2:case"end":return e.stop()}}),e)}))),[]),l.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("img",{src:"/static/img/npocore.png",alt:"NPO Core Logo"})),l.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbar-target"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbar-target"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/contact"},"Contact")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/organizations"},"Organizations")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/posts"},"Posts")),void 0==t?l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"btn btn-info npo-button",href:"/login"},"Login/Register")):l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},t.logo?l.a.createElement("div",{className:"image-cropper"},l.a.createElement("img",{className:"nav-logo",src:"http://localhost:3000/static/media/logos/"+t.logo,alt:""})):l.a.createElement("div",{className:"image-cropper"},l.a.createElement("img",{className:"nav-logo",src:"/static/img/no-logo.png",alt:""}))),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},l.a.createElement("a",{className:"dropdown-item",href:"/organizations/"+t._id},"View my organization"),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement("a",{className:"dropdown-item",href:"/logout"},"Logout")))))))},v=t(28);var d=function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)([]),c=Object(E.a)(o,2),i=c[0],s=c[1],g=Object(n.useState)([]),p=Object(E.a)(g,2),d=p[0],h=p[1],f=Object(n.useState)(!1),N=Object(E.a)(f,2),b=N[0],z=N[1],y=function(){var e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/get-organizations",{method:"GET",mode:"no-cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){s(e),r(e);var a=e.filter((function(e){return 1==e.featured}));h(a)})).catch((function(e){console.log("Exception:",e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){y()}),[]);var w=function(e){var a=e.target;a.parentNode.style.display="none",a.parentNode.parentNode.parentNode.querySelector("p").className=""},C=function(e){z(!b)};return l.a.createElement("div",null,l.a.createElement(v.a,null,l.a.createElement("title",null,"NPO Core - A List of Nonprofit Organizations for High School & College Students"),l.a.createElement("meta",{name:"description",content:"Look at our huge, curated list of nonprofit organizations that we've built up! Find a nonprofit organization to join, partner with, or simply get in contact with here on NPO Core!"})),l.a.createElement("div",{className:"pb-5"},l.a.createElement("div",{className:"options"},l.a.createElement("h1",{className:"mt-4"},"Organizations"),l.a.createElement("a",{class:"solid-cta-button",href:"/organizations/map"},"Check out our organization map!")),d.length?l.a.createElement("h3",null,"Featured Organizations"):l.a.createElement("span",null),l.a.createElement("div",{className:"organizations mt-5"},d?d.map((function(e,a){return l.a.createElement("div",{className:"organization",key:a},l.a.createElement("div",{className:"image-cropper-container"},l.a.createElement("div",{style:{height:"50px"},className:"image-cropper"},e.logo?l.a.createElement("img",{src:"http://localhost:3000/static/media/logos/"+e.logo,alt:""}):l.a.createElement("img",{src:"http://localhost:3000/static/img/no-logo.png",alt:""})),e.verifiedNonprofit?l.a.createElement("img",{class:"nonprofit-badge",src:"/static/img/icons/501c3.svg",alt:""}):l.a.createElement("span",null)),l.a.createElement("div",null,l.a.createElement("div",{className:"organization-header"},l.a.createElement("h4",null,e.name),l.a.createElement("div",{className:"organization-resources"},l.a.createElement("a",{href:"mailto:{organization.email}",target:"_"},e.email?l.a.createElement("img",{src:"/img/email.svg",alt:"{organization.name} Email Address"}):null),l.a.createElement("a",{href:"/organizations/"+e._id},l.a.createElement("img",{style:{transform:"translateY(-2px)"},src:"/img/link.svg",alt:"{organization.name}"})))),e.location.name?l.a.createElement("div",null,l.a.createElement("strong",null,"Location:")," ",e.location.name):l.a.createElement("span",null),l.a.createElement("div",null,l.a.createElement("strong",null,"Gender:")," ",e.gender),l.a.createElement("div",null,l.a.createElement("strong",null,"Cause:")," ",e.cause),l.a.createElement("p",{className:"organization-description"},l.a.createElement("strong",null,"Description:")," ",e.description),l.a.createElement("div",{className:"text-right mb-2"},l.a.createElement("button",{className:"btn btn-link p-0",onClick:w},l.a.createElement("small",null,"Read More"))),l.a.createElement("div",{className:"organization-interests"},(e.interests||[]).map((function(e,a){return l.a.createElement("small",null,e)})))))})):l.a.createElement("div",{className:"text-center"},l.a.createElement("small",null,"No organizations yet!"))),l.a.createElement("div",{className:"mt-4 text-right"},b?l.a.createElement("button",{class:"toggle-filter",onClick:C},"Filters \u2191"):l.a.createElement("button",{class:"toggle-filter",onClick:C},"Filters \u2193")),b?l.a.createElement("div",{className:"filters mt-3"},l.a.createElement("input",{className:"form-control search-bar",type:"text",placeholder:"Filter",onChange:function(e){var a=e.target.value.toLowerCase();if(""===a)y();else{var n=t.filter((function(e){return e.name.toLowerCase().includes(a)}));s(n)}}}),l.a.createElement("select",{onChange:function(e){var a=e.target.value;a?s(t.filter((function(e){return e.gender===a}))):y()},required:!0},l.a.createElement("option",{value:""},"Gender"),l.a.createElement("option",{value:"Everyone"},"Everyone"),l.a.createElement("option",{value:"Male"},"Male"),l.a.createElement("option",{value:"Female"},"Female"),l.a.createElement("option",{value:"Non-binary"},"Non-binary")),l.a.createElement("select",{onChange:function(e){var a=e.target.value;a?s(t.filter((function(e){return e.cause===a}))):y()},required:!0},l.a.createElement("option",{value:""},"Cause"),l.a.createElement("option",{value:"Animal Welfare"},"Animal Welfare"),l.a.createElement("option",{value:"Arts and Culture"},"Arts and Culture"),l.a.createElement("option",{value:"Children"},"Children"),l.a.createElement("option",{value:"Civil Rights and Social Action"},"Civil Rights and Social Action"),l.a.createElement("option",{value:"Disaster Relief"},"Disaster Relief"),l.a.createElement("option",{value:"Economic Empowerment"},"Economic Empowerment"),l.a.createElement("option",{value:"Education"},"Education"),l.a.createElement("option",{value:"Environment"},"Environment"),l.a.createElement("option",{value:"Health"},"Health"),l.a.createElement("option",{value:"Human Rights"},"Human Rights"),l.a.createElement("option",{value:"Politics"},"Politics"),l.a.createElement("option",{value:"Poverty Alleviation"},"Poverty Alleviation"),l.a.createElement("option",{value:"Science and Technology"},"Science and Technology"),l.a.createElement("option",{value:"Social Services"},"Social Services")),l.a.createElement("select",{onChange:function(e){var a=e.target.value;a?s(t.filter((function(e){return e.interests.includes(a)}))):y()},required:!0},l.a.createElement("option",{value:""},"Interest"),l.a.createElement("option",{value:"Members"},"Members"),l.a.createElement("option",{value:"Partnerships"},"Partnerships"),l.a.createElement("option",{value:"Sponsors"},"Sponsors"),l.a.createElement("option",{value:"Clients"},"Clients"),l.a.createElement("option",{value:"Opportunities"},"Opportunities"))):l.a.createElement("span",null),l.a.createElement("div",{className:"organizations mt-5"},i?i.map((function(e,a){return l.a.createElement("div",{className:"organization",key:a},l.a.createElement("div",{className:"image-cropper-container"},l.a.createElement("div",{style:{height:"50px"},className:"image-cropper"},e.logo?l.a.createElement("img",{src:"http://localhost:3000/static/media/logos/"+e.logo,alt:""}):l.a.createElement("img",{src:"http://localhost:3000/static/img/no-logo.png",alt:""})),e.verifiedNonprofit?l.a.createElement("img",{class:"nonprofit-badge",src:"/static/img/icons/501c3.svg",alt:""}):l.a.createElement("span",null)),l.a.createElement("div",null,l.a.createElement("div",{className:"organization-header"},l.a.createElement("h4",null,e.name),l.a.createElement("div",{className:"organization-resources"},l.a.createElement("a",{href:"mailto:{organization.email}",target:"_"},e.email?l.a.createElement("img",{src:"/img/email.svg",alt:"{organization.name} Email Address"}):null),l.a.createElement("a",{href:"/organizations/"+e._id},l.a.createElement("img",{style:{transform:"translateY(-2px)"},src:"/img/link.svg",alt:"{organization.name}"})))),e.location.name?l.a.createElement("div",null,l.a.createElement("strong",null,"Location:")," ",e.location.name):l.a.createElement("span",null),l.a.createElement("div",null,l.a.createElement("strong",null,"Gender:")," ",e.gender),l.a.createElement("div",null,l.a.createElement("strong",null,"Cause:")," ",e.cause),l.a.createElement("p",{className:"organization-description"},l.a.createElement("strong",null,"Description:")," ",e.description),l.a.createElement("div",{className:"text-right mb-2"},l.a.createElement("button",{className:"btn btn-link p-0",onClick:w},l.a.createElement("small",null,"Read More"))),l.a.createElement("div",{className:"organization-interests"},(e.interests||[]).map((function(e,a){return l.a.createElement("small",null,e)})))))})):l.a.createElement("div",{className:"text-center"},l.a.createElement("small",null,"No organizations yet!")))))};var h=function(){return l.a.createElement("div",{className:"float-container"},l.a.createElement("h1",null,"404 - Page not found!"),l.a.createElement("p",null,"We're sorry, but we couldn't find the page you were looking for! Please make sure you were given or typed in the URL you were looking for correctly, or please ",l.a.createElement("a",{href:"/contact"},"contact us")," if you believe this is a true issue. So sorry for the inconvenience!"),l.a.createElement("div",{className:"cta-buttons"},l.a.createElement("a",{className:"ghost-cta-button",href:"/contact"},"Contact us"),l.a.createElement("a",{className:"solid-cta-button",href:"/"},"Return to home page")))};var f=function(){return l.a.createElement("div",null,l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"hover-container"},l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/organizations",component:d}),l.a.createElement(i.a,{component:h})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.817bcb63.chunk.js.map