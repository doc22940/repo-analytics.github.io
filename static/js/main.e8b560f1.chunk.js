(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{19:function(e,a,t){e.exports=t(44)},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},29:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(14),l=t.n(c),o=(t(24),t(8)),m=t(6),s=(t(25),t(26),t(18)),i=function(e){var a=e.username,t=e.projectName;e.visitData;return r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"card-description"},r.a.createElement("a",{href:a},a),r.a.createElement("span",{className:"path-divider"},"/"),r.a.createElement("strong",null,r.a.createElement("a",{href:"".concat(a,"/").concat(t)},t))),r.a.createElement("div",{className:"project-trend"},r.a.createElement(s.a,{smooth:!0,autoDraw:!0,autoDrawDuration:2e3,autoDrawEasing:"ease-out",data:[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],gradient:["#d7ecad","#9cd696","#2ebc4f"],radius:0,strokeWidth:1.7,strokeLinecap:"square"})))};t(29);var u=function(e){var a=e.user;return r.a.createElement("div",null,r.a.createElement("div",{className:"home-hero"},r.a.createElement("h1",{className:"home-slogan"},"Thorough analytics for your GitHub repos"),a.username?"":r.a.createElement("a",{className:"home-signin-btn",href:"https://repo-analytics.t9t.io/auth/github"},"Sign in with GitHub"),r.a.createElement("div",{className:"home-features"},r.a.createElement("div",{className:"home-feature"},r.a.createElement("h4",{className:"home-feature-title"},"Better traffic data"),r.a.createElement("p",{className:"home-feature-description"},"Track traffic to GitHub Repos for longer than 14 days.")),r.a.createElement("div",{className:"home-feature"},r.a.createElement("h4",{className:"home-feature-title"},"Understand your users"),r.a.createElement("p",{className:"home-feature-description"},"Analyze history, locations of Star, Clone, Fork data of your GitHub Repos")))),r.a.createElement("div",{className:"home-container"},r.a.createElement("h2",{className:"home-example-title"},"Example repos using ",r.a.createElement("strong",null,"Repo Analytics")),r.a.createElement("div",{className:"home-examples"},r.a.createElement("div",{className:"home-box"},r.a.createElement(i,{username:"repo-analytics",projectName:"repo-analytics.github.io"})),r.a.createElement("div",{className:"home-box"},r.a.createElement(i,{username:"timqian",projectName:"chart.xkcd"})),r.a.createElement("div",{className:"home-box"},r.a.createElement(i,{username:"t9tio",projectName:"open-source-jobs"})),r.a.createElement("div",{className:"home-box"},r.a.createElement(i,{username:"timqian",projectName:"star-history"})))),r.a.createElement("hr",{className:"home-hr"}),r.a.createElement("div",{className:"home-container"},r.a.createElement("h2",{className:"home-example-title"},"What data do we analyze")))};var h=function(e){var a=e.match;return r.a.createElement("div",null,r.a.createElement("h3",null,a.params.username),a.params.repo)},d=t(15),p=t.n(d);function E(){return r.a.createElement("div",null,r.a.createElement("h2",null,"About"))}function f(e){var a=e.match;return r.a.createElement("div",null,r.a.createElement("h2",null,"Topics"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"".concat(a.url,"/rendering")},"Rendering with React")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"".concat(a.url,"/components")},"Components")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"".concat(a.url,"/props-v-state")},"Props v. State"))),r.a.createElement(m.a,{path:"".concat(a.path,"/:topicId"),component:v}),r.a.createElement(m.a,{exact:!0,path:a.path,render:function(){return r.a.createElement("h3",null,"Please select a topic.")}}))}function v(e){var a=e.match;return r.a.createElement("div",null,r.a.createElement("h3",null,a.params.topicId))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement((function(){var e={};if(window.location.search.length>0)try{var a=p.a.parse(window.location.search);window.localStorage.setItem("user",JSON.stringify(a)),window.history.replaceState({},document.title,window.location.origin+window.location.pathname),e=a}catch(c){console.log("bad query string")}else{var t=window.localStorage.getItem("user");if(t){var n=JSON.parse(t);n.username&&(e=n)}}return r.a.createElement(o.a,null,r.a.createElement("header",null,r.a.createElement("div",{className:"header-left"},r.a.createElement("img",{src:"/logo.png",alt:"logo",width:"30px"}),"\xa0",r.a.createElement(o.b,{to:"/",className:"header-link"},"Repo Analytics")),r.a.createElement("div",null,e.username?r.a.createElement("div",{class:"dropdown"},r.a.createElement("a",{className:"header-link",href:!0},e.username," ",r.a.createElement("span",{style:{fontSize:"10px"}},"\u25bc")),r.a.createElement("div",{class:"dropdown-content"},r.a.createElement("a",{href:"/".concat(e.username)},"Your profile"),r.a.createElement("a",{href:"#"},"Add repo"),r.a.createElement("hr",null),r.a.createElement("a",{href:"#"},"Sign out"))):r.a.createElement("a",{className:"header-link",href:"https://repo-analytics.t9t.io/auth/github"},"Sign in with GitHub"))),r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(u,{user:e})),r.a.createElement(m.a,{path:"/about",component:E}),r.a.createElement(m.a,{path:"/topics",component:f}),r.a.createElement(m.a,{exact:!0,path:"/:username",component:h}),r.a.createElement(m.a,{exact:!0,path:"/:username/:repo",component:h}))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.e8b560f1.chunk.js.map