(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{45:function(e,t,n){e.exports=n(61)},50:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(9),l=n.n(a),c=(n(50),n(13)),i=n(14),s=n(16),p=n(15),u=n(17),m=n(24),y="SET_EMP_DETAILS",d="SET_FILELOAD_FLAG",f="SHOW_EMP_INFO",h=function(e,t){return{type:y,employeeList:e,employeeFields:t}},O=function(e){return{type:d,fileLoadFlag:e}},b=function(e,t){return{type:f,showEmployeeFlag:e,employeeId:t}},E=n(44),g=n(21),j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).routeToMainPage=function(){n.props.showEmployeeInfo(!1,null)},n.state={employee:{}},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({employee:this.props.employeeList.filter((function(t){return t.id===e.props.employeeId}))[0]})}},{key:"render",value:function(){if(console.log("state",this.state,this.props.employeeList),!this.props.showEmployeeFlag)return r.a.createElement(g.a,{to:"/"});var e=this.state.employee;return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.routeToMainPage},"Go to employee dashboard"),Object.entries(e).map((function(e){var t=Object(E.a)(e,2),n=t[0],o=t[1];return r.a.createElement("div",null,r.a.createElement("div",null,n," : ",o.toString()))})))}}]),t}(o.Component),v=n(29),w=n(37),F=n(40),L=n(3),I=n(23);n(58);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){return e.id},k=function(e){var t=e.employeeList,n=e.employeeFields,o=t;return r.a.createElement("div",{className:"card grid-container"},r.a.createElement(I.a,{rows:o,columns:n,getRowId:C},r.a.createElement(L.c,{onCommitChanges:function(t){var n,r=t.added,a=t.changed,l=t.deleted;if(r){var c=o.length>0?o[o.length-1].id+1:0;n=[].concat(Object(w.a)(o),Object(w.a)(r.map((function(e,t){return P({id:c+t},e)}))))}if(a&&(n=o.map((function(e){return a[e.id]?P({},e,{},a[e.id]):e}))),l){var i=new Set(l);n=o.filter((function(e){return!i.has(e.id)}))}e.setEmployeeDetails(n,e.employeeFields)}}),r.a.createElement(I.b,Object.assign({rowComponent:function(t){var n=t.row,o=Object(F.a)(t,["row"]);return r.a.createElement(I.b.Row,Object.assign({},o,{onClick:function(){e.showEmployeeInfo(!0,n.id)},style:{cursor:"pointer"}}))}},e)),r.a.createElement(I.e,null),r.a.createElement(I.d,null),r.a.createElement(I.c,{showAddCommand:!0,showEditCommand:!0,showDeleteCommand:!0})))},R=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(j,this.props)}}]),t}(r.a.Component),S=Object(m.b)((function(e){return{employeeList:e.employeeReducer.employeeList,employeeFields:e.employeeReducer.employeeFields,fileLoadFlag:e.employeeReducer.fileLoadFlag,showEmployeeFlag:e.employeeReducer.showEmployeeFlag,employeeId:e.employeeReducer.employeeId}}),(function(e){return{setEmployeeDetails:function(t,n){return e(h(t,n))},setFileLoadFlag:function(t){return e(O(t))},showEmployeeInfo:function(t,n){return e(b(t,n))}}}))(R),_=n(42),N=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).getKeys=function(e){if(e.length>0)return Object.keys(e[0])},n.formatData=function(e){for(var t=[],o=[],r=1;r<e.length;r++){var a={};a.id=r;for(var l=0;l<e[r].length;l++){a[e[0][l]]=e[r][l]}t.push(a)}return n.getKeys(t).forEach((function(e){var t={name:e,title:e.toUpperCase()};o.push(t)})),{employeeList:t,employeeFields:o}},n.fileHandler=function(e){var t=e.target.files[0];Object(_.ExcelRenderer)(t,(function(e,t){if(e)console.log(e);else{var o=n.formatData(t.rows.slice(0,5)),r=o.employeeList,a=o.employeeFields;n.props.setEmployeeDetails(r,a),n.props.setFileLoadFlag(!0),document.getElementById("file-input").style.backgroundColor="#0fbc0f"}}))},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.props.showEmployeeFlag?r.a.createElement(g.a,{to:"/".concat(this.props.employeeId)}):r.a.createElement("div",{className:"employee-container row no-gutters"},r.a.createElement("h2",{className:"col-12"},"Import an Excel File to proceed"),r.a.createElement("div",{className:"col-12 import-btn"},r.a.createElement("input",{id:"file-input",type:"file",onChange:function(t){e.fileHandler(t)}})),this.props.fileLoadFlag&&r.a.createElement("p",{className:"col-12"},"File loaded successfully!"),r.a.createElement("div",{className:"col-12"},this.props.employeeList.length>0&&r.a.createElement(o.Fragment,null,r.a.createElement("h2",null,"Employee Details"),r.a.createElement(k,this.props))))}}]),t}(o.Component),T=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(N,this.props)}}]),t}(r.a.Component),A=Object(m.b)((function(e){return{employeeList:e.employeeReducer.employeeList,employeeFields:e.employeeReducer.employeeFields,fileLoadFlag:e.employeeReducer.fileLoadFlag,showEmployeeFlag:e.employeeReducer.showEmployeeFlag,employeeId:e.employeeReducer.employeeId}}),(function(e){return{setEmployeeDetails:function(t,n){return e(h(t,n))},setFileLoadFlag:function(t){return e(O(t))},showEmployeeInfo:function(t,n){return e(b(t,n))}}}))(T),M=n(28),x=(n(59),n(60),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(M.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",render:function(){return r.a.createElement(A,null)}}),r.a.createElement(g.b,{path:"/:id",render:function(){return r.a.createElement(S,null)}}))))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=n(20),H={fileLoadFlag:!1,employeeList:[],employeeFields:[],showEmployeeFlag:!1,employeeId:null};function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=Object(B.c)({employeeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return G({},e,{employeeList:t.employeeList,employeeFields:t.employeeFields});case d:return G({},e,{fileLoadFlag:t.fileLoadFlag});case f:return G({},e,{showEmployeeFlag:t.showEmployeeFlag,employeeId:t.employeeId});default:return e}}}),K=n(43),U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.d;var X=Object(B.e)(J,U(Object(B.a)(K.a)));l.a.render(r.a.createElement(m.a,{store:X},r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.ee95959c.chunk.js.map