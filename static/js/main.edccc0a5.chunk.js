(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{130:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(13),r=n.n(s),o=(n(95),n(96),n(27)),c=n(28),u=n(31),d=n(30),l=n(150),h=(n(97),n(64)),j=n.n(h),b=n(78),m=n(20),v=n(56),p=n(79),f=n.n(p),O=n(84),x=n(71),g=(n(130),n(152)),S=n(151),y=n(3);function N(e){return Object(y.jsx)(g.a,Object(v.a)({elevation:6,variant:"filled"},e))}var B=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={nominationsList:[],openSuccessBar:!1},a.addNomination=a.addNomination.bind(Object(m.a)(a)),a.removeNomination=a.removeNomination.bind(Object(m.a)(a)),a.updateSuccessBar=a.updateSuccessBar.bind(Object(m.a)(a)),a}return Object(c.a)(n,[{key:"addNomination",value:function(e){var t={};t.title=e.currentTarget.parentNode.innerText,t.id=e.currentTarget.getAttribute("data"),this.state.nominationsList.length<5&&(this.setState((function(e){return{nominationsList:[].concat(Object(O.a)(e.nominationsList),[t])}})),e.target.disabled=!0)}},{key:"removeNomination",value:function(e){var t=e.currentTarget.parentNode.getAttribute("data"),n=-1;(this.state.nominationsList.forEach((function(e,a){e.id===t&&(n=a)})),n>=0)&&(this.state.nominationsList.splice(n,1),document.getElementById(t).disabled=!1);this.forceUpdate()}},{key:"updateSuccessBar",value:function(e){this.setState({openSuccessBar:e})}},{key:"render",value:function(){var e=this;return Object(y.jsxs)("div",{className:"root",children:[Object(y.jsx)(S.a,{autoHideDuration:4e3,open:this.state.openSuccessBar,onClose:function(){return e.updateSuccessBar(!1)},children:Object(y.jsx)(N,{onClose:function(){return e.updateSuccessBar(!1)},severity:"success",children:"You have successfully selected your 5 nominees"})}),Object(y.jsxs)(x.a,{className:"search-result",elevation:3,children:[Object(y.jsxs)(l.a,{children:['Results for "',this.props.search,'"']}),Object(y.jsx)("ul",{children:this.props.result.map((function(t,n){return Object(y.jsx)("div",{children:Object(y.jsxs)("li",{className:"list",children:[Object(y.jsx)("span",{children:t.Title}),Object(y.jsx)("button",{className:"button",onClick:function(t){e.addNomination(t),e.updateSuccessBar(e.state.nominationsList.length>=4)},data:t.imdbID,id:t.imdbID,children:"Nominate"})]},n)},n)}))})]}),Object(y.jsxs)(x.a,{className:"nominationBox",elevation:3,children:[Object(y.jsx)(l.a,{children:"Nominations"}),Object(y.jsx)("ul",{children:this.state.nominationsList.map((function(t,n){return Object(y.jsx)("div",{children:Object(y.jsxs)("li",{className:"list",data:t.id,children:[Object(y.jsx)("span",{children:t.title}),Object(y.jsx)("button",{className:"button",onClick:e.removeNomination,children:"Remove"})]})},n)}))})]})]})}}]),n}(i.a.Component);function I(e){return Object(y.jsx)(g.a,Object(v.a)({elevation:6,variant:"filled"},e))}var C=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={userSearch:void 0,searchResult:void 0,errorMessage:void 0,noDataFromAPI:void 0,isLoading:!1,openInformationBar:!0},e.getMovies=e.getMovies.bind(Object(m.a)(e)),e}return Object(c.a)(n,[{key:"getMovies",value:function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com/?apikey=a2455e33&type=movie&s=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,n.ok?"True"===a.Response?this.setState({searchResult:a.Search,isLoading:!0,noDataFromAPI:!1}):this.setState({noDataFromAPI:!0,openInformationBar:!0}):this.setState({errorMessage:"Sorry ! Something has gone wrong, please try again!"});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateInformationBar",value:function(e){this.setState({openInformationBar:e})}},{key:"render",value:function(){var e=this;return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:Object(y.jsx)(f.a,{value:this.state.userSearch,onChange:function(t){return e.setState({userSearch:t,isLoading:!1})},onRequestSearch:function(){return e.getMovies(e.state.userSearch)},onCancelSearch:function(){return e.setState({userSearch:void 0,isLoading:!1})},placeholder:"Search Movie Title"})}),Object(y.jsxs)("div",{children:[this.state.noDataFromAPI&&Object(y.jsx)(S.a,{open:this.state.openInformationBar,autoHideDuration:4e3,onClose:function(){return e.updateInformationBar(!1)},children:Object(y.jsx)(I,{onClose:function(){return e.updateInformationBar(!1)},severity:"info",children:"Sorry ! It is us and not you. We do not have data available at this time"})}),this.state.isLoading&&Object(y.jsx)(B,{result:this.state.searchResult,search:this.state.userSearch})]})]})}}]),n}(i.a.Component),k=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"searchComponent",children:Object(y.jsx)(C,{})}),Object(y.jsx)("div",{className:"footer",children:Object(y.jsxs)(l.a,{align:"center",color:"inherit",variant:"body2",children:["Maher Bouidani@2021 Shopify Front End Internship Challenge"," "]})})]})}}]),n}(i.a.Component);var L=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(k,{})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,153)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};r.a.render(Object(y.jsx)(L,{}),document.getElementById("root")),D()},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){}},[[133,1,2]]]);
//# sourceMappingURL=main.edccc0a5.chunk.js.map