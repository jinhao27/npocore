(this["webpackJsonpnpocore-client"]=this["webpackJsonpnpocore-client"]||[]).push([[0],{31:function(e,a,t){e.exports=t(41)},41:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(11),i=t.n(r),s=t(10),c=t(9),l=t(12),m=t.n(l),d=t(16),u=t(5),p=t(44);t(20),t(15),t(18);var b=function(){var e=Object(n.useState)({}),a=Object(u.a)(e,2),t=a[0],r=a[1],i=Object(p.a)(["name"]),s=Object(u.a)(i,2),c=s[0];return s[1],Object(n.useEffect)(Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(c.organization);case 2:case"end":return e.stop()}}),e)}))),[]),o.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light"},o.a.createElement("div",{className:"container"},o.a.createElement("a",{className:"navbar-brand",href:"/"},o.a.createElement("img",{src:"/static/img/npocore.png",alt:"NPO Core Logo"})),o.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbar-target"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbar-target"},o.a.createElement("ul",{className:"navbar-nav ml-auto"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/contact"},"Contact")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/organizations"},"Organizations")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/posts"},"Posts")),void 0==t?o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"btn btn-info npo-button",href:"/login"},"Login/Register")):o.a.createElement("li",{className:"nav-item dropdown"},o.a.createElement("a",{className:"nav-link",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},t.logo?o.a.createElement("div",{className:"image-cropper"},o.a.createElement("img",{className:"nav-logo",src:"http://localhost:3000/static/media/logos/"+t.logo,alt:""})):o.a.createElement("div",{className:"image-cropper"},o.a.createElement("img",{className:"nav-logo",src:"/static/img/no-logo.png",alt:""}))),o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},o.a.createElement("a",{className:"dropdown-item",href:"/organizations/"+t._id},"View my organization"),o.a.createElement("div",{className:"dropdown-divider"}),o.a.createElement("a",{className:"dropdown-item",href:"/logout"},"Logout")))))))},v=t(28);var g=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)([]),s=Object(u.a)(i,2),c=s[0],l=s[1],p=Object(n.useState)(!1),b=Object(u.a)(p,2),g=b[0],E=b[1],f=function(){var e=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/get-organizations",{method:"GET",mode:"no-cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then((function(e){return[{interests:null,posts:[],subscriptions:[],_id:"5ed1e2d5f59ad3298c90a5d1",name:"test2",email:"test2@mail.com",description:"test2",password:"sha1$9963bd02$1$0ee5886713e0fe3acabdc0f407f01190cc39c64c",location:{name:"San Francisco, CA, USA"},gender:"Everyone",cause:"Arts and Culture",npoScore:84.5,bumpedInLastHour:!1,__v:0,logo:"melodiesformath.png"},{interests:[],posts:[{title:"new post",content:"this is a new post\r\n",datetimePosted:"2020-05-30T02:31:00.862Z",creator:{interests:[],posts:[],subscriptions:["calix.huang1@gmail.com"],_id:"5ed1c3154b549a24cb29bd36",name:"test",email:"test@mail.com",description:"test",password:"sha1$a9e0b675$1$88e95c5ff5da3b602894388a0b06ebbdefde4010",location:{name:""},gender:"Everyone",cause:"Arts and Culture",npoScore:52.5,bumpedInLastHour:!0,__v:0}},{title:"a post",content:"this is a post",datetimePosted:"2020-05-30T02:31:49.423Z",creator:{interests:[],posts:[{title:"new post",content:"this is a new post\r\n",datetimePosted:"2020-05-30T02:31:00.862Z",creator:{interests:[],posts:[],subscriptions:["calix.huang1@gmail.com"],_id:"5ed1c3154b549a24cb29bd36",name:"test",email:"test@mail.com",description:"test",password:"sha1$a9e0b675$1$88e95c5ff5da3b602894388a0b06ebbdefde4010",location:{name:""},gender:"Everyone",cause:"Arts and Culture",npoScore:52.5,bumpedInLastHour:!0,__v:0}}],subscriptions:["calix.huang1@gmail.com"],_id:"5ed1c3154b549a24cb29bd36",name:"test",email:"test@mail.com",description:"test",password:"sha1$a9e0b675$1$88e95c5ff5da3b602894388a0b06ebbdefde4010",location:{name:""},gender:"Everyone",cause:"Arts and Culture",npoScore:57.75,bumpedInLastHour:!0,__v:0}},{title:"post",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",datetimePosted:"2020-05-30T23:26:20.002Z",creator:{interests:[],posts:[{title:"new post",content:"this is a new post\r\n",datetimePosted:"2020-05-30T02:31:00.862Z",creator:{interests:[],posts:[],subscriptions:["calix.huang1@gmail.com"],_id:"5ed1c3154b549a24cb29bd36",name:"test",email:"test@mail.com",description:"test",password:"sha1$a9e0b675$1$88e95c5ff5da3b602894388a0b06ebbdefde4010",location:{name:""},gender:"Everyone",cause:"Arts and Culture",npoScore:52.5,bumpedInLastHour:!0,__v:0}},{title:"a post",content:"this is a post",datetimePosted:"2020-05-30T02:31:49.423Z",creator:{interests:[],posts:[{title:"new post",content:"this is a new post\r\n",datetimePosted:"2020-05-30T02:31:00.862Z",creator:{interests:[],posts:[],subscriptions:["calix.huang1@gmail.com"],_id:"5ed1c3154b549a24cb29bd36",name:"test",email:"test@mail.com",description:"test",password:"sha1$a9e0b675$1$88e95c5ff5da3b602894388a0b06ebbdefde4010",location:{name:""},gender:"Everyone",cause:"Arts and Culture",npoScore:52.5,bumpedInLastHour:!0,__v:0}}],subscriptions:["calix.huang1@gmail.com"],_id:"5ed1c3154b549a24cb29bd36",name:"test",email:"test@mail.com",description:"test",password:"sha1$a9e0b675$1$88e95c5ff5da3b602894388a0b06ebbdefde4010",location:{name:""},gender:"Everyone",cause:"Arts and Culture",npoScore:57.75,bumpedInLastHour:!0,__v:0}}],subscriptions:["calix.huang1@gmail.com"],_id:"5ed1c3154b549a24cb29bd36",name:"test",email:"test@mail.com",description:"test",password:"sha1$a9e0b675$1$88e95c5ff5da3b602894388a0b06ebbdefde4010",location:{name:""},gender:"Everyone",cause:"Arts and Culture",npoScore:63.525,bumpedInLastHour:!0,verifiedNonprofit:!1,__v:0}},{title:"sadfd",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",datetimePosted:"2020-05-30T23:26:46.512Z",creator:{interests:[],posts:[{title:"new post",content:"this is a new post\r\n",datetimePosted:"2020-05-30T02:31:00.862Z",creator:{interests:[],posts:[],subscriptions:["calix.huang1@gmail.com"],_id:"5ed1c3154b549a24cb29bd36",name:"test",email:"test@mail.com",description:"test",password:"sha1$a9e0b675$1$88e95c5ff5da3b602894388a0b06ebbdefde4010",location:{name:""},gender:"Everyone",cause:"Arts and Culture",npoScore:52.5,bumpedInLastHour:!0,__v:0}},{title:"a post",content:"this is a post",datetimePosted:"2020-05-30T02:31:49.423Z",creator:{interests:[],posts:[{title:"new post",content:"this is a new post\r\n",datetimePosted:"2020-05-30T02:31:00.862Z",creator:{interests:[],posts:[],subscriptions:["calix.huang1@gmail.com"],_id:"5ed1c3154b549a24cb29bd36",name:"test",email:"test@mail.com",description:"test",password:"sha1$a9e0b675$1$88e95c5ff5da3b602894388a0b06ebbdefde4010",location:{name:""},gender:"Everyone",cause:"Arts and Culture",npoScore:52.5,bumpedInLastHour:!0,__v:0}}],subscriptions:["calix.huang1@gmail.com"],_id:"5ed1c3154b549a24cb29bd36",name:"test",email:"test@mail.com",description:"test",password:"sha1$a9e0b675$1$88e95c5ff5da3b602894388a0b06ebbdefde4010",location:{name:""},gender:"Everyone",cause:"Arts and Culture",npoScore:57.75,bumpedInLastHour:!0,__v:0}}],subscriptions:["calix.huang1@gmail.com"],_id:"5ed1c3154b549a24cb29bd36",name:"test",email:"test@mail.com",description:"test",password:"sha1$a9e0b675$1$88e95c5ff5da3b602894388a0b06ebbdefde4010",location:{name:""},gender:"Everyone",cause:"Arts and Culture",npoScore:63.525,bumpedInLastHour:!0,verifiedNonprofit:!1,__v:0}}],subscriptions:["calix.huang1@gmail.com"],_id:"5ed1c3154b549a24cb29bd36",name:"test",email:"test@mail.com",description:"test",password:"sha1$a9e0b675$1$88e95c5ff5da3b602894388a0b06ebbdefde4010",location:{name:""},gender:"Everyone",cause:"Arts and Culture",npoScore:69.8775,bumpedInLastHour:!0,verifiedNonprofit:!1,__v:0},{interests:[],posts:[],subscriptions:[],_id:"5ed1e2e8f59ad3298c90a5d2",name:"test3",email:"test3@mail.com",description:"test3",password:"sha1$4953804f$1$3f7c1c6e47dcb64f0831a6d1ca66a1332ba250d2",location:{name:""},gender:"Everyone",cause:"Animal Welfare",npoScore:50,bumpedInLastHour:!1,__v:0},{interests:[],posts:[],subscriptions:[],_id:"5ed1e319e55c552996187fcc",name:"test4",email:"test4@mail.com",description:"test4",password:"sha1$0cee834f$1$7f49da34badcc852f1ff69290965cd11406e4dc9",location:{name:""},gender:"Male",cause:"Arts and Culture",npoScore:50,bumpedInLastHour:!1,__v:0},{interests:[],posts:[],subscriptions:[],_id:"5ed1e36e8b552a29a6b2577d",name:"test5",email:"test5@mail.com",description:"test5",password:"sha1$4b7faffc$1$a3458c30765113a4e0e08a267284f4361677880a",location:{name:""},gender:"Male",cause:"Animal Welfare",npoScore:50,bumpedInLastHour:!1,__v:0}]})).then((function(e){l(e),r(e)})).catch((function(e){console.log("Exception:",e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){document.title="NPO Core - Organizations",f()}),[]);var h=function(e){var a=e.target;a.parentNode.style.display="none",a.parentNode.parentNode.parentNode.querySelector("p").className=""},N=function(e){E(!g)};return o.a.createElement("div",null,o.a.createElement(v.a,null,o.a.createElement("title",null,"NPO Core - A List of Nonprofit Organizations for High School & College Students"),o.a.createElement("meta",{name:"description",content:"Look at our huge, curated list of nonprofit organizations that we've built up! Find a nonprofit organization to join, partner with, or simply get in contact with here on NPO Core!"})),o.a.createElement("div",{className:"pb-5"},o.a.createElement("h1",{className:"mt-4"},"Organizations"),o.a.createElement("small",null,"If you would like your nonprofit organization removed from NPO Core, please ",o.a.createElement("a",{href:"/contact"},"contact us"),"."),o.a.createElement("br",null),g?o.a.createElement("button",{onClick:N},"Filters \u2191"):o.a.createElement("button",{onClick:N},"Filters \u2193"),g?o.a.createElement("div",{className:"filters mt-3"},o.a.createElement("input",{className:"form-control search-bar",type:"text",placeholder:"Filter",onChange:function(e){var a=e.target.value.toLowerCase();if(""===a)f();else{var n=t.filter((function(e){return e.name.toLowerCase().includes(a)}));l(n)}}}),o.a.createElement("select",{onChange:function(e){var a=e.target.value;a?l(t.filter((function(e){return e.gender===a}))):f()},required:!0},o.a.createElement("option",{value:""},"Gender"),o.a.createElement("option",{value:"Everyone"},"Everyone"),o.a.createElement("option",{value:"Male"},"Male"),o.a.createElement("option",{value:"Female"},"Female"),o.a.createElement("option",{value:"Non-binary"},"Non-binary")),o.a.createElement("select",{onChange:function(e){var a=e.target.value;a?l(t.filter((function(e){return e.cause===a}))):f()},required:!0},o.a.createElement("option",{value:""},"Cause"),o.a.createElement("option",{value:"Animal Welfare"},"Animal Welfare"),o.a.createElement("option",{value:"Arts and Culture"},"Arts and Culture"),o.a.createElement("option",{value:"Children"},"Children"),o.a.createElement("option",{value:"Civil Rights and Social Action"},"Civil Rights and Social Action"),o.a.createElement("option",{value:"Disaster Relief"},"Disaster Relief"),o.a.createElement("option",{value:"Economic Empowerment"},"Economic Empowerment"),o.a.createElement("option",{value:"Education"},"Education"),o.a.createElement("option",{value:"Environment"},"Environment"),o.a.createElement("option",{value:"Health"},"Health"),o.a.createElement("option",{value:"Human Rights"},"Human Rights"),o.a.createElement("option",{value:"Politics"},"Politics"),o.a.createElement("option",{value:"Poverty Alleviation"},"Poverty Alleviation"),o.a.createElement("option",{value:"Science and Technology"},"Science and Technology"),o.a.createElement("option",{value:"Social Services"},"Social Services")),o.a.createElement("select",{onChange:function(e){var a=e.target.value;a?l(t.filter((function(e){return e.interests.includes(a)}))):f()},required:!0},o.a.createElement("option",{value:""},"Interest"),o.a.createElement("option",{value:"Members"},"Members"),o.a.createElement("option",{value:"Partnerships"},"Partnerships"),o.a.createElement("option",{value:"Sponsors"},"Sponsors"),o.a.createElement("option",{value:"Clients"},"Clients"),o.a.createElement("option",{value:"Opportunities"},"Opportunities"))):o.a.createElement("span",null),o.a.createElement("div",{className:"organizations mt-5"},c?c.map((function(e,a){return o.a.createElement("div",{className:"organization",key:a},o.a.createElement("div",{style:{height:"50px"},className:"image-cropper"},e.logo?o.a.createElement("img",{src:"http://localhost:3000/static/media/logos/"+e.logo,alt:""}):o.a.createElement("img",{src:"http://localhost:3000/static/img/no-logo.png",alt:""})),o.a.createElement("div",null,o.a.createElement("div",{className:"organization-header"},o.a.createElement("h4",null,e.name),o.a.createElement("div",{className:"organization-resources"},o.a.createElement("a",{href:"mailto:{organization.email}",target:"_"},e.email?o.a.createElement("img",{src:"/img/email.svg",alt:"{organization.name} Email Address"}):null),o.a.createElement("a",{href:"/organizations/"+e._id},o.a.createElement("img",{style:{transform:"translateY(-2px)"},src:"/img/link.svg",alt:"{organization.name}"})))),e.location.name?o.a.createElement("div",null,o.a.createElement("strong",null,"Location:")," ",e.location.name):o.a.createElement("span",null),o.a.createElement("div",null,o.a.createElement("strong",null,"Gender:")," ",e.gender),o.a.createElement("div",null,o.a.createElement("strong",null,"Cause:")," ",e.cause),o.a.createElement("p",{className:"organization-description"},o.a.createElement("strong",null,"Description:")," ",e.description),o.a.createElement("div",{className:"text-right mb-2"},o.a.createElement("button",{className:"btn btn-link p-0",onClick:h},o.a.createElement("small",null,"Read More"))),o.a.createElement("div",{className:"organization-interests"},(e.interests||[]).map((function(e,a){return o.a.createElement("small",null,e)})))))})):o.a.createElement("div",{className:"text-center"},o.a.createElement("small",null,"No organizations yet!")))))};var E=function(){return o.a.createElement("div",null,o.a.createElement(s.a,null,o.a.createElement("div",null,o.a.createElement(b,null),o.a.createElement(c.c,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"hover-container"},o.a.createElement(c.a,{path:"/organizations",component:g})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.b5a63cd3.chunk.js.map