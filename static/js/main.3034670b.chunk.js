(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"InVision",imageUrl:"https://logo.clearbit.com/invisionapp.com",count:0},{id:2,name:"DesignerNews",imageUrl:"https://logo.clearbit.com/designernews.co",count:0},{id:3,name:"Javascript",imageUrl:"https://logo.clearbit.com/javascript.com",count:0},{id:4,name:"Adobe",imageUrl:"https://logo.clearbit.com/adobe.com",count:0},{id:5,name:"Behance",imageUrl:"https://logo.clearbit.com/behance.net",count:0},{id:6,name:"Dribbble",imageUrl:"https://logo.clearbit.com/dribbble.com",count:0},{id:7,name:"Giphy",imageUrl:"https://logo.clearbit.com/giphy.com",count:0},{id:8,name:"Bootstrap",imageUrl:"https://logo.clearbit.com/getbootstrap.com",count:0},{id:9,name:"Gizmodo",imageUrl:"https://logo.clearbit.com/gizmodo.com",count:0},{id:10,name:"Medium",imageUrl:"https://logo.clearbit.com/medium.com",count:0},{id:11,name:"Heroku",imageUrl:"https://logo.clearbit.com/heroku.com",count:0},{id:12,name:"FreeCodeCamp",imageUrl:"https://logo.clearbit.com/freecodecamp.org",count:0}]},,,,,,,,function(e,t,o){e.exports=o(21)},,,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var c=o(0),n=o.n(c),a=o(3),i=o.n(a),r=(o(15),o(4)),s=o(5),l=o(7),m=o(6),u=o(8),h=(o(16),function(e){return n.a.createElement("div",{className:"Container"},e.children)}),d=(o(17),function(e){return n.a.createElement("div",{className:"Header"},n.a.createElement("div",{className:"title"},e.children),n.a.createElement("div",{className:"scores row"},"Current Score: ",e.score," High Score: ",e.highscore))}),g=(o(18),function(e){return n.a.createElement("div",{className:"Instructions"},e.children)}),f=(o(19),function(e){return n.a.createElement("div",{className:"Card",onClick:function(){return e.clickCount(e.id)}},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.imageUrl})))}),p=o(1),b=(o(20),function(e){function t(){var e,o;Object(r.a)(this,t);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(o=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={cards:p,score:0,highscore:0},o.gameOver=function(){return o.state.score>o.state.highscore&&o.setState({highscore:o.state.score},function(){console.log(this.state.highscore)}),o.state.cards.forEach(function(e){e.count=0}),alert("Looks like you clicked the same image twice! Start over! \nscore: ".concat(o.state.score)),o.setState({score:0}),!0},o.clickCount=function(e){o.state.cards.find(function(t,c){if(t.id===e){if(0===p[c].count)return p[c].count=p[c].count+1,o.setState({score:o.state.score+1},function(){console.log(this.state.score)}),o.state.cards.sort(function(){return Math.random()-.5}),!0;o.gameOver()}})},o}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(h,null,n.a.createElement(d,{score:this.state.score,highscore:this.state.highscore},"CLICKY GAME"),n.a.createElement(g,null,"The goal is to click on all the images below without clicking the same image more than once. To make things trickier, the images are shuffled after each click. Good luck!"),this.state.cards.map(function(t){return n.a.createElement(f,{clickCount:e.clickCount,id:t.id,key:t.id,imageUrl:t.imageUrl})}))}}]),t}(c.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.3034670b.chunk.js.map