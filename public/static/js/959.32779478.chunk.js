(this["webpackJsonparthmis-client"]=this["webpackJsonparthmis-client"]||[]).push([[959],{1217:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n(16),a=n(28),c=n(29),o=n(195),r=n(31),s=n(30),u=n(0),l=n(2),d=function(t){return function(e){Object(r.a)(u,e);var n=Object(s.a)(u);function u(t){var e;return Object(a.a)(this,u),(e=n.call(this,t)).instance=null,e.fetchAction=null,e.getDetailAction=null,e.createAction=null,e.updateAction=null,e.deleteAction=null,e.beforeFetch=null,e.afterFtech=null,e.searchText="",e.pagination={showSizeChanger:!0,onShowSizeChange:e.onShowSizeChange.bind(Object(o.a)(e)),onChange:e.pageChange.bind(Object(o.a)(e)),pageSizeOptions:["10","20","30","40","50","60","100"],hideOnSinglePage:!1,pageIndex:1,pageSize:20,total:0},e.state={data:[],loading:!1,isCollectionVisible:!1,entity:null},e}return Object(c.a)(u,[{key:"componentDidMount",value:function(){this.beforeFetch(),this.getList(),this.afterFtech()}},{key:"searchAction",value:function(t){var e=t.keyCode,n=t.target.value;13===e&&(this.searchText=n,this.pagination.pageIndex=1,this.pagination.pageSize=20,this.getList())}},{key:"onShowSizeChange",value:function(t,e){this.pagination.pageSize=e,this.getList()}},{key:"pageChange",value:function(t){this.pagination.pageIndex=t,this.getList()}},{key:"openCollection",value:function(){this.setState({isCollectionVisible:!0})}},{key:"closeCollection",value:function(){this.setState({isCollectionVisible:!1})}},{key:"collectionCallBack",value:function(t){var e=this,n=t.isVisible,i=t.isRefresh,a=t.values,c=void 0===a?"":a;n&&this.openCollection(),!n&&this.closeCollection(),c?this.state.entity?this.updateAction(this.state.entity._id,c).then((function(){e.pagination.pageIndex=1,e.getList()})):this.createAction(c).then((function(){e.pagination.pageIndex=1,e.getList()})):i&&this.getList()}},{key:"getInstance",value:function(t){if(t){this.instance=t;var e=this.instance.init(),n=e.fetchAction,i=void 0===n?function(){}:n,a=e.getDetailAction,c=void 0===a?function(){}:a,o=e.createAction,r=void 0===o?function(){}:o,s=e.updateAction,u=void 0===s?function(){}:s,l=e.deleteAction,d=void 0===l?function(){}:l,h=e.beforeFetch,f=void 0===h?function(){}:h,p=e.afterFtech,b=void 0===p?function(){}:p;this.fetchAction=i,this.getDetailAction=c,this.createAction=r,this.updateAction=u,this.deleteAction=d,this.beforeFetch=f,this.afterFtech=b}}},{key:"getList",value:function(){var t=this;this.setState({loading:!0}),this.fetchAction({pi:this.pagination.pageIndex-1,ps:this.pagination.pageSize,keyword:this.searchText}).then((function(e){var n=e.page,i=e.total,a=e.data;t.pagination.total=i,t.pagination.pageIndex=n,t.setState({loading:!1,data:a})}))}},{key:"editEntity",value:function(t){var e=this;this.getDetailAction(t).then((function(t){e.setState({entity:t,isCollectionVisible:!0})}),(function(t){console.log(t)}))}},{key:"deleteEntity",value:function(t){var e=this;this.deleteAction(t).then((function(){e.pagination.pageIndex=1,e.getList()}),(function(t){console.log(t)}))}},{key:"getRowKey",value:function(t,e){return t.id||t._id||e}},{key:"render",value:function(){var e=this.state,n=e.loading,a=e.data,c=e.isCollectionVisible,o=e.entity;return Object(l.jsx)(t,Object(i.a)(Object(i.a)({loading:n,data:a,entity:o,pagination:this.pagination,isCollectionVisible:c,searchAction:this.searchAction.bind(this),openCollection:this.openCollection.bind(this),closeCollection:this.closeCollection.bind(this),getRowKey:this.getRowKey.bind(this),getList:this.getList.bind(this),collectionCallBack:this.collectionCallBack.bind(this),editEntity:this.editEntity.bind(this),deleteEntity:this.deleteEntity.bind(this)},this.props),{},{ref:this.getInstance.bind(this)}))}}]),u}(u.Component)}},2287:function(t,e,n){"use strict";n.r(e);n(282);var i=n(192),a=n.n(i),c=(n(277),n(179)),o=n.n(c),r=(n(640),n(642)),s=n.n(r),u=(n(1311),n(1312)),l=n.n(u),d=(n(281),n(184)),h=n.n(d),f=n(28),p=n(29),b=n(31),g=n(30),j=n(0),m=n(47),v=n(53),O=(n(652),n(653)),y=n.n(O),k=n(22),x=n(194),C=n(2),A=function(t){Object(b.a)(n,t);var e=Object(g.a)(n);function n(t){var i;return Object(f.a)(this,n),(i=e.call(this,t)).state={loading:!1},i}return Object(p.a)(n,[{key:"componentDidMount",value:function(){}},{key:"cancel",value:function(t){t.preventDefault(),this.props.callback({isVisible:!1,isRefresh:!1,values:""})}},{key:"handleSubmit",value:function(t){this.props.callback({isVisible:!1,isRefresh:!0,values:t})}},{key:"checkPhone",value:function(t,e,n){Object(x.a)(e)?n():n("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801")}},{key:"render",value:function(){var t=this.props.entity;return Object(C.jsxs)(y.a,{labelCol:{span:24},wrapperCol:{span:24},onFinish:this.handleSubmit.bind(this),initialValues:{username:t?t.username:"",password:t?t.password:""},children:[Object(C.jsx)(y.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}],children:Object(C.jsx)(s.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"})}),Object(C.jsx)(y.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}],children:Object(C.jsx)(s.a,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",type:"password"})}),Object(C.jsxs)(y.a.Item,{children:[Object(C.jsx)(o.a,{type:"primary",htmlType:"submit",className:"m-r-12",children:k.a.t("action.save")}),Object(C.jsxs)(o.a,{onClick:this.cancel.bind(this),children:[" ",k.a.t("action.cancel")]})]})]})}}]),n}(j.Component),w=n(1217),S=n(670),I=n(2288),F=n(2255),L=n(2289),V=n(564),z=function(t){Object(b.a)(n,t);var e=Object(g.a)(n);function n(){return Object(f.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"init",value:function(){return{fetchAction:S.l,getDetailAction:S.k,createAction:S.c,updateAction:S.q,deleteAction:S.f}}},{key:"editAction",value:function(t){this.props.editEntity(t._id)}},{key:"deleteAction",value:function(t){this.props.deleteEntity(t._id)}},{key:"getTable",value:function(){var t=this,e=this.props,n=e.data,i=e.loading,a=e.pagination,c=e.getRowKey,o=[{title:k.a.t("list.name"),dataIndex:"username",key:"username",render:function(t){return t}},{title:k.a.t("list.password"),dataIndex:"password",key:"password"},{title:k.a.t("list.operation"),key:"action",width:200,render:function(e,n){return Object(C.jsxs)("span",{children:[Object(C.jsx)("span",{className:"m-l-12 m-r-12 icon-action",children:Object(C.jsx)(h.a,{placement:"top",title:k.a.t("action.edit"),children:Object(C.jsx)(I.a,{onClick:t.editAction.bind(t,n)})})}),Object(C.jsx)("span",{className:"m-l-12 m-r-12 icon-action",children:Object(C.jsx)(h.a,{placement:"top",title:k.a.t("action.delete"),children:Object(C.jsx)(F.a,{onClick:t.deleteAction.bind(t,n)})})})]})}}];return Object(C.jsx)(l.a,{rowKey:c,pagination:a,loading:i,bordered:!0,columns:o,dataSource:n})}},{key:"render",value:function(){var t=this.props,e=t.searchAction,n=t.isCollectionVisible,i=t.openCollection,c=t.closeCollection,r=t.collectionCallBack,u=t.entity;return Object(C.jsxs)(m.a,{children:[Object(C.jsx)(j.Fragment,{children:Object(C.jsx)(s.a,{className:"search",onKeyDown:e,suffix:Object(C.jsx)(L.a,{}),placeholder:k.a.t("list.search")})},"left"),Object(C.jsx)(j.Fragment,{children:Object(C.jsx)(o.a,{type:"primary",icon:Object(C.jsx)(V.a,{}),className:"action-btn",onClick:i,children:k.a.t("action.create")})},"actions"),Object(C.jsxs)(j.Fragment,{children:[this.getTable(),Object(C.jsx)(a.a,{title:k.a.t("action.create"),visible:n,width:v.c.md,destroyOnClose:!0,footer:!1,onCancel:c,children:Object(C.jsx)(A,{entity:u,callback:r})})]},"main")]})}}]),n}(j.Component);e.default=Object(w.a)(z)},620:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return o}));var i=n(54),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i.a)({url:"/scrums",method:"get",params:t})},c=function(t){return Object(i.a)({url:"/scrums",method:"post",data:t})},o=function(t,e){return Object(i.a)({url:"/scrums/".concat(t),method:"put",data:e})}},624:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"c",(function(){return d}));var i=n(54),a=function(t){return Object(i.a)({url:"/tasks",method:"post",data:t})},c=function(t,e){return Object(i.a)({url:"/tasks/".concat(t),method:"put",data:e})},o=function(t){return Object(i.a)({url:"/tasks/".concat(t),method:"delete"})},r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i.a)({url:"/tasks/".concat(t),method:"get",params:e})},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i.a)({url:"/tasks",method:"get",params:t})},u=function(t,e){return Object(i.a)({url:"/tasks/".concat(t,"/sort"),method:"post",data:e})},l=function(t){return Object(i.a)({url:"/task-summary",method:"post",data:t})},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i.a)({url:"/task-summary",method:"get",params:t})}},626:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return s}));var i=n(54),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i.a)({url:"/projects",method:"get",params:t})},c=function(t){return Object(i.a)({url:"/projects",method:"post",data:t})},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i.a)({url:"/projects/".concat(t),method:"get",params:e})},r=function(t,e){return Object(i.a)({url:"/projects/".concat(t),method:"put",data:e})},s=function(t){return Object(i.a)({url:"/projects/".concat(t),method:"delete"})}},670:function(t,e,n){"use strict";var i=n(624);n.d(e,"b",(function(){return i.a})),n.d(e,"e",(function(){return i.b})),n.d(e,"i",(function(){return i.c})),n.d(e,"j",(function(){return i.e})),n.d(e,"m",(function(){return i.f})),n.d(e,"n",(function(){return i.g})),n.d(e,"p",(function(){return i.h}));var a=n(85);n.d(e,"c",(function(){return a.a})),n.d(e,"f",(function(){return a.b})),n.d(e,"k",(function(){return a.c})),n.d(e,"l",(function(){return a.e})),n.d(e,"q",(function(){return a.g}));var c=n(626);n.d(e,"a",(function(){return c.a})),n.d(e,"d",(function(){return c.b})),n.d(e,"g",(function(){return c.c})),n.d(e,"h",(function(){return c.d})),n.d(e,"o",(function(){return c.e}));n(620)}}]);
//# sourceMappingURL=959.32779478.chunk.js.map