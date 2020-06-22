(this["webpackJsonpnpocore-client"]=this["webpackJsonpnpocore-client"]||[]).push([[0],{33:function(e,t,a){e.exports=a(43)},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),o=a(10),i=a(12),s=a(9),m=a.n(s),u=a(13),p=a(3),E=a(46);a(23),a(20),a(21);var d=function(){var e=Object(n.useState)({}),t=Object(p.a)(e,2),a=t[0],l=t[1],c=Object(E.a)(["name"]),i=Object(p.a)(c,2),s=i[0];return i[1],Object(n.useEffect)(Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(s.organization);case 2:case"end":return e.stop()}}),e)}))),[]),r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{src:"/static/img/npocore.png",alt:"NPO Core Logo"})),r.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbar-target"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbar-target"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/contact"},"Contact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/organizations"},"Organizations")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/opportunities"},"Opportunities")),void 0==a?r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"btn btn-info npo-button",href:"/login"},"Login/Register")):r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},a.logo?r.a.createElement("div",{className:"image-cropper-container"},r.a.createElement("div",{className:"image-cropper"},r.a.createElement("img",{className:"nav-logo",src:"https://npocore.s3-us-west-2.amazonaws.com/"+a.logo,alt:""}))):r.a.createElement("div",{className:"image-cropper"},r.a.createElement("img",{className:"nav-logo",src:"/static/img/no-logo.png",alt:""}))),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"/@"+a.idName},"View my organization"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("a",{className:"dropdown-item",href:"/logout"},"Logout")))))))},g=a(11),v=a(16);var f=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),o=Object(p.a)(c,2),i=o[0],s=o[1],E=Object(n.useState)(0),d=Object(p.a)(E,2),f=d[0],b=d[1],h=Object(n.useState)([]),N=Object(p.a)(h,2),y=N[0],O=N[1],j=Object(n.useState)(!1),w=Object(p.a)(j,2),C=w[0],k=w[1],S=Object(n.useState)(""),z=Object(p.a)(S,2),x=z[0],A=z[1],P=Object(n.useState)(""),L=Object(p.a)(P,2),R=L[0],F=L[1],H=Object(n.useState)(""),M=Object(p.a)(H,2),T=M[0],D=M[1],B=Object(n.useState)(""),q=Object(p.a)(B,2),Y=q[0],_=q[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/get-organizations?skip=".concat(i.length));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s((function(e){return[].concat(Object(g.a)(e),Object(g.a)(a))})),l((function(e){return[].concat(Object(g.a)(e),Object(g.a)(a))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[f]),Object(n.useEffect)((function(){window.addEventListener("scroll",(function(e){window.innerHeight+window.scrollY>=document.body.scrollHeight&&b(10*Math.random())})),fetch("/api/get-featured-organizations").then((function(e){return e.json()})).then((function(e){O(e)}))}),[]),Object(n.useEffect)((function(){W()}),[x,R,T,Y]);var W=function(){var e=a;e=G(e),e=J(e),e=U(e),e=V(e),s(e)},G=function(e){var t=x.toLowerCase();return""===t?e:e.filter((function(e){return e.name.toLowerCase().includes(t)}))},J=function(e){return R?e.filter((function(e){return e.targetAudiences.includes(R)})):e},U=function(e){return T?e.filter((function(e){return e.causes.includes(T)})):e},V=function(e){return Y?e.filter((function(e){return!!e.interests&&e.interests.includes(Y)})):e},I=function(e){var t=e.target;t.parentNode.style.display="none",t.parentNode.parentNode.parentNode.querySelector("p").className=""},K=function(e){k(!C)};return r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement("title",null,"NPO Core - Nonprofit Organizations"),r.a.createElement("meta",{name:"description",content:"Look at our huge, curated list of nonprofit organizations that we've built up! Find a nonprofit organization to join, partner with, or simply get in contact with here on NPO Core!"})),r.a.createElement("div",{className:"pb-5"},r.a.createElement("div",{className:"options"},r.a.createElement("h1",{className:"mt-4"},"Organizations"),r.a.createElement("a",{className:"solid-cta-button",href:"/organizations/map"},"Check out our organization map!")),r.a.createElement("div",{className:"organizations mt-5"},y?y.map((function(e,t){return r.a.createElement("div",{className:"organization",key:t},r.a.createElement("div",{className:"image-cropper-container"},r.a.createElement("div",{style:{height:"50px"},className:"image-cropper"},e.logo?r.a.createElement("img",{src:"https://npocore.s3-us-west-2.amazonaws.com/"+e.logo,alt:""}):r.a.createElement("img",{src:"/static/img/no-logo.png",alt:""})),e.verifiedNonprofit?r.a.createElement("img",{className:"nonprofit-badge",src:"/static/img/icons/501c3.svg",alt:""}):r.a.createElement("span",null)),r.a.createElement("div",null,r.a.createElement("div",{className:"organization-header"},r.a.createElement("h4",null,r.a.createElement("a",{href:"/@"+e.idName},e.name)),r.a.createElement("div",{className:"organization-resources"},r.a.createElement("a",{href:"mailto:"+e.email,target:"_"},e.email?r.a.createElement("img",{src:"/img/email.svg",alt:"{organization.name} Email Address"}):null),r.a.createElement("a",{href:"/@"+e.idName},r.a.createElement("img",{style:{transform:"translateY(-2px)"},src:"/img/link.svg",alt:"{organization.name}"})))),e.location.name?r.a.createElement("div",null,r.a.createElement("strong",null,"Location:")," ",e.location.name):r.a.createElement("span",null),e.targetAudiences?r.a.createElement("div",null,r.a.createElement("strong",null,"Target Audiences:")," ",e.targetAudiences.join(", ")):r.a.createElement("span",null),e.causes?r.a.createElement("div",null,r.a.createElement("strong",null,"Causes:")," ",e.causes.join(", ")):r.a.createElement("span",null),r.a.createElement("p",{className:"organization-description"},r.a.createElement("strong",null,"Description:")," ",e.description),r.a.createElement("div",{className:"text-right mb-2"},r.a.createElement("button",{className:"btn btn-link p-0",onClick:I},r.a.createElement("small",null,"Read More"))),r.a.createElement("div",{className:"organization-interests"},(e.interests||[]).map((function(e,t){return r.a.createElement("small",null,e)})))))})):r.a.createElement("div",{className:"text-center"},r.a.createElement("small",null,"No featured organizations yet!"))),r.a.createElement("div",{className:"mt-4 text-right"},C?r.a.createElement("button",{className:"toggle-filter",onClick:K},"Filters \u2191"):r.a.createElement("button",{className:"toggle-filter",onClick:K},"Filters \u2193")),C?r.a.createElement("div",{className:"filters mt-3"},r.a.createElement("input",{className:"form-control search-bar",type:"text",placeholder:"Filter by Name",onChange:function(e){return A(e.target.value)}}),r.a.createElement("select",{onChange:function(e){return F(e.target.value)},required:!0},r.a.createElement("option",{value:""},"All Target Audiences"),r.a.createElement("option",{value:"Everyone"},"Everyone"),r.a.createElement("option",{value:"Kids"},"Kids"),r.a.createElement("option",{value:"Teens"},"Teens"),r.a.createElement("option",{value:"Adults"},"Adults"),r.a.createElement("option",{value:"Seniors"},"Seniors"),r.a.createElement("option",{value:"Groups"},"Groups")),r.a.createElement("select",{onChange:function(e){return D(e.target.value)},required:!0},r.a.createElement("option",{value:""},"All Causes"),r.a.createElement("option",{value:"Advocacy and Human Rights"},"Advocacy and Human Rights"),r.a.createElement("option",{value:"Animal Welfare"},"Animal Welfare"),r.a.createElement("option",{value:"Arts and Culture"},"Arts and Culture"),r.a.createElement("option",{value:"Children and Youth"},"Children and Youth"),r.a.createElement("option",{value:"Civil Rights and Social Action"},"Civil Rights and Social Action"),r.a.createElement("option",{value:"Crisis Support"},"Crisis Support"),r.a.createElement("option",{value:"Disaster Relief"},"Disaster Relief"),r.a.createElement("option",{value:"Emergency and Safety"},"Emergency and Safety"),r.a.createElement("option",{value:"Education"},"Education"),r.a.createElement("option",{value:"Environment"},"Environment"),r.a.createElement("option",{value:"Female Empowerment"},"Female Empowerment"),r.a.createElement("option",{value:"Health"},"Health"),r.a.createElement("option",{value:"Homeless and Housing"},"Homeless and Housing"),r.a.createElement("option",{value:"Politics"},"Politics"),r.a.createElement("option",{value:"LGBTQ+"},"LGBTQ+"),r.a.createElement("option",{value:"Race and Ethnicity"},"Race and Ethnicity"),r.a.createElement("option",{value:"Poverty Alleviation"},"Poverty Alleviation"),r.a.createElement("option",{value:"Science and Technology"},"Science and Technology"),r.a.createElement("option",{value:"Social Services"},"Social Services"),r.a.createElement("option",{value:"Veterans and Military Families"},"Veterans and Military Families")),r.a.createElement("select",{onChange:function(e){return _(e.target.value)},required:!0},r.a.createElement("option",{value:""},"All Interests"),r.a.createElement("option",{value:"Members"},"Members"),r.a.createElement("option",{value:"Partnerships"},"Partnerships"),r.a.createElement("option",{value:"Sponsors"},"Sponsors"),r.a.createElement("option",{value:"Clients"},"Clients"),r.a.createElement("option",{value:"Opportunities"},"Opportunities"))):r.a.createElement("span",null),r.a.createElement("div",{className:"organizations mt-5"},i?i.map((function(e,t){return r.a.createElement("div",{className:"organization",key:t},r.a.createElement("div",{className:"image-cropper-container"},r.a.createElement("div",{style:{height:"50px"},className:"image-cropper"},r.a.createElement("a",{href:"/@"+e.idName},e.logo?r.a.createElement("img",{src:"https://npocore.s3-us-west-2.amazonaws.com/"+e.logo,alt:""}):r.a.createElement("img",{src:"/static/img/no-logo.png",alt:""}))),e.verifiedNonprofit?r.a.createElement("img",{className:"nonprofit-badge",src:"/static/img/icons/501c3.svg",alt:""}):r.a.createElement("span",null)),r.a.createElement("div",null,r.a.createElement("div",{className:"organization-header"},r.a.createElement("h4",null,r.a.createElement("a",{style:{color:"black"},href:"/@"+e.idName},e.name)),r.a.createElement("div",{className:"organization-resources"},r.a.createElement("a",{href:"mailto:"+e.email,target:"_"},e.email?r.a.createElement("img",{src:"/img/email.svg",alt:"{organization.name} Email Address"}):null),r.a.createElement("a",{href:"/@"+e.idName},r.a.createElement("img",{style:{transform:"translateY(-2px)"},src:"/img/link.svg",alt:"{organization.name}"})))),e.location.name?r.a.createElement("div",null,r.a.createElement("strong",null,"Location:")," ",e.location.name):r.a.createElement("span",null),r.a.createElement("div",null,r.a.createElement("strong",null,"Target Audiences:")," ",e.targetAudiences.join(", ")),r.a.createElement("div",null,r.a.createElement("strong",null,"Causes:")," ",e.causes.join(", ")),r.a.createElement("p",{className:"organization-description"},r.a.createElement("strong",null,"Description:")," ",e.description),r.a.createElement("div",{className:"text-right mb-2"},r.a.createElement("button",{className:"btn btn-link p-0",onClick:I},r.a.createElement("small",null,"Read More"))),r.a.createElement("div",{className:"organization-interests"},(e.interests||[]).map((function(e,t){return r.a.createElement("small",null,e)})))))})):r.a.createElement("div",{className:"text-center"},r.a.createElement("small",null,"No organizations yet!")))))};var b=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),o=Object(p.a)(c,2),i=o[0],s=o[1],E=Object(n.useState)(0),d=Object(p.a)(E,2),f=d[0],b=d[1],h=Object(n.useState)([]),N=Object(p.a)(h,2),y=N[0],O=N[1],j=Object(n.useState)(!1),w=Object(p.a)(j,2),C=w[0],k=w[1],S=Object(n.useState)(""),z=Object(p.a)(S,2),x=z[0],A=z[1],P=Object(n.useState)(""),L=Object(p.a)(P,2),R=L[0],F=L[1],H=Object(n.useState)(""),M=Object(p.a)(H,2),T=M[0],D=M[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/get-posts?skip=".concat(i.length));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s((function(e){return[].concat(Object(g.a)(e),Object(g.a)(a))})),l((function(e){return[].concat(Object(g.a)(e),Object(g.a)(a))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[f]),Object(n.useEffect)((function(){window.addEventListener("scroll",(function(e){window.innerHeight+window.scrollY>=document.body.scrollHeight&&b(10*Math.random())})),fetch("/api/get-featured-posts").then((function(e){return e.json()})).then((function(e){O(e)}))}),[]),Object(n.useEffect)((function(){B()}),[x,R,T]);var B=function(){var e=a;e=q(e),e=Y(e),e=_(e),s(e)},q=function(e){var t=x.toLowerCase();return""===t?e:e.filter((function(e){return e.title.toLowerCase().includes(t)}))},Y=function(e){var t=R.toLowerCase();return""===t?e:e.filter((function(e){return e.content.toLowerCase().includes(t)}))},_=function(e){return T?e.filter((function(e){return e.type.includes(T)})):e},W=function(e){var t=e.target;t.parentNode.style.display="none",t.parentNode.parentNode.parentNode.querySelector("p").className=""},G=function(e){k(!C)};return r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement("title",null,"NPO Core - Nonprofit Organization Opportunity Posts - Opportunities for everyone!")),r.a.createElement("div",{className:"py-5"},y.length?r.a.createElement("h1",null,"Featured Opportunity Posts"):r.a.createElement("span",null),r.a.createElement("div",{className:"organizations mt-5"},y?y.map((function(e,t){return r.a.createElement("div",{className:"post",key:t},e.image?r.a.createElement("div",{className:"post-header"},r.a.createElement("img",{className:"post-header-image",src:"https://npocore.s3-us-west-2.amazonaws.com/"+e.image,alt:""})):r.a.createElement("span",null),r.a.createElement("div",{className:"p-3"},r.a.createElement("h3",null,e.title),r.a.createElement("strong",null,"By: ",r.a.createElement("a",{href:"/@"+e.creator.idName},e.creator.name)),r.a.createElement("br",null),r.a.createElement("small",null,"Posted: ",new Date(e.datetimePosted).toLocaleDateString("en-US")),r.a.createElement("p",{className:"post-content mt-3"},e.content),r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{id:e._id,className:"btn btn-link p-0",onClick:W},r.a.createElement("small",null,"Read More"))),r.a.createElement("p",null,r.a.createElement("small",{className:"type"},e.type)),r.a.createElement("a",{style:{backgroundColor:e.button.color||"#f28c41",borderColor:e.button.color||"#f28c41"},className:"solid-cta-button",href:e.button.link||"#",target:"_blank"},e.button.text||"Button")))})):r.a.createElement("div",{className:"text-center"},r.a.createElement("small",null,"No featured posts yet!"))),r.a.createElement("h1",{className:"mt-5"},"Opportunity Posts"),r.a.createElement("p",null,"Check out all of the opportunities that our registered NPOs have posted!"),r.a.createElement("div",{className:"text-right"},C?r.a.createElement("button",{className:"toggle-filter",onClick:G},"Filters \u2191"):r.a.createElement("button",{className:"toggle-filter",onClick:G},"Filters \u2193")),C?r.a.createElement("div",{className:"filters my-3"},r.a.createElement("input",{className:"form-control search-bar",type:"text",placeholder:"Filter by Title",onChange:function(e){return A(e.target.value)}}),r.a.createElement("input",{className:"form-control search-bar",type:"text",placeholder:"Filter by Content",onChange:function(e){return F(e.target.value)}}),r.a.createElement("select",{onChange:function(e){return D(e.target.value)},required:!0},r.a.createElement("option",{value:""},"All Post Types"),r.a.createElement("option",{value:"Announcement"},"Announcement"),r.a.createElement("option",{value:"Event"},"Event"),r.a.createElement("option",{value:"Opportunity"},"Opportunity"),r.a.createElement("option",{value:"Job Opening"},"Job Opening"))):r.a.createElement("span",null),r.a.createElement("div",{className:"posts mt-4"},i?i.map((function(e,t){return r.a.createElement("div",{className:"post",key:t},e.image?r.a.createElement("div",{className:"post-header"},r.a.createElement("img",{className:"post-header-image",src:"https://npocore.s3-us-west-2.amazonaws.com/"+e.image,alt:""})):r.a.createElement("span",null),r.a.createElement("div",{className:"p-3"},r.a.createElement("h3",null,e.title),r.a.createElement("strong",null,"By: ",r.a.createElement("a",{href:"/@"+e.creator.idName},e.creator.name)),r.a.createElement("br",null),r.a.createElement("small",null,"Posted: ",new Date(e.datetimePosted).toLocaleDateString("en-US")),r.a.createElement("p",{className:"post-content mt-3"},e.content),r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{id:e._id,className:"btn btn-link p-0",onClick:W},r.a.createElement("small",null,"Read More"))),r.a.createElement("p",null,r.a.createElement("small",{className:"type"},e.type)),r.a.createElement("a",{style:{backgroundColor:e.button.color,borderColor:e.button.color},className:"solid-cta-button",href:e.button.link,target:"_blank"},e.button.text)))})):r.a.createElement("div",{className:"text-center"},r.a.createElement("small",null,"No opportunity posts yet!")))))};var h=function(){return r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement("title",null,"NPO Core - Page not found!")),r.a.createElement("div",{className:"float-container"},r.a.createElement("h1",null,"404 - Page not found!"),r.a.createElement("p",null,"We're sorry, but we couldn't find the page you were looking for! Please make sure you were given or typed in the URL you were looking for correctly, or please ",r.a.createElement("a",{href:"/contact"},"contact us")," if you believe this is a true issue. So sorry for the inconvenience!"),r.a.createElement("div",{className:"cta-buttons"},r.a.createElement("a",{className:"ghost-cta-button",href:"/contact"},"Contact us"),r.a.createElement("a",{className:"solid-cta-button",href:"/"},"Return to home page"))))};var N=function(){return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"hover-container"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/organizations",component:f}),r.a.createElement(i.a,{path:"/opportunities",component:b}),r.a.createElement(i.a,{component:h})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.7f963e74.chunk.js.map