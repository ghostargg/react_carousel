(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(7),a=n.n(i),s=n(2),r=n(3),o=n(5),c=n(4),l=n(1),h=n.n(l),u=(n(12),n(13),n(0)),m=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={position:0},t.handleNext=function(){var e=t.props,n=e.itemWidth,i=e.step,a=e.images,s=e.frameSize,r=a.length*n-n*s;t.state.position+n*i<r?t.setState((function(t){return{position:t.position+n*i}})):t.setState((function(t){return{position:t.position+(r-t.position)}}))},t.handlePrev=function(){var e=t.props,n=e.itemWidth,i=e.step;t.state.position-n*i>=0?t.setState((function(t){return{position:t.position-n*i}})):t.setState({position:0})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.frameSize,i=e.images,a=e.itemWidth,s=e.animationDuration;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"Carousel",children:Object(u.jsx)("ul",{className:"Carousel__list",style:{width:"".concat(n*a-1,"px")},children:i.map((function(e){return Object(u.jsx)("li",{className:"Carousel__list-item",style:{width:"".concat(a,"px"),height:"".concat(a,"px")},children:Object(u.jsx)("img",{src:e,alt:e,width:a,height:a,style:{transition:"transform ".concat(s,"ms"),transform:"translateX(-".concat(t.state.position,"px)")}})},e)}))})}),Object(u.jsx)("button",{type:"button",onClick:this.handlePrev,children:"Prev"}),Object(u.jsx)("button",{type:"button","data-cy":"next",onClick:this.handleNext,children:"Next"})]})}}]),n}(h.a.Component),p=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],frameSize:3,itemWidth:130,step:3,animationDuration:1e3},t.handleChangeItemWidth=function(e){t.setState({itemWidth:+e.target.value})},t.handleChangeFrameSize=function(e){t.setState({frameSize:+e.target.value})},t.handleChangeStep=function(e){t.setState({step:+e.target.value})},t.handleChangeAnimationDuration=function(e){t.setState({animationDuration:+e.target.value})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state,e=t.images,n=t.frameSize,i=t.itemWidth,a=t.step,s=t.animationDuration;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",e.length," images"]}),Object(u.jsx)(m,{step:a,images:e,frameSize:n,itemWidth:i,animationDuration:s}),Object(u.jsxs)("div",{className:"inputsContainer",children:[Object(u.jsxs)("label",{htmlFor:"itemId",children:["Item Width:",Object(u.jsx)("input",{id:"itemId",type:"number",value:i,onChange:this.handleChangeItemWidth})]}),Object(u.jsxs)("label",{htmlFor:"frameId",children:["Frame Size:",Object(u.jsx)("input",{id:"frameId",type:"number",value:n,onChange:this.handleChangeFrameSize})]}),Object(u.jsxs)("label",{htmlFor:"stepId",children:["Step:",Object(u.jsx)("input",{id:"stepId",type:"number",value:a,onChange:this.handleChangeStep})]}),Object(u.jsxs)("label",{htmlFor:"animationDurationInput",children:["Animation Duration:",Object(u.jsx)("input",{id:"animationDudationInput",type:"number",value:s,onChange:this.handleChangeAnimationDuration})]})]})]})}}]),n}(h.a.Component),d=p;a.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.55698c8c.chunk.js.map