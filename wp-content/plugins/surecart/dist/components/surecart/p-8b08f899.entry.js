import{r as t,h as s,a as i}from"./p-cc7ce8c7.js";import{a as e}from"./p-18e45a13.js";import{o as n}from"./p-c2833cb1.js";import{a as o}from"./p-1c2e2695.js";const r=":host{display:block}.subscriptions-list{display:grid;gap:0.5em}.subscriptions-list__heading{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;margin-bottom:0.5em}.subscriptions-list__title{font-size:var(--sc-font-size-x-large);font-weight:var(--sc-font-weight-bold);line-height:var(--sc-line-height-dense)}.subscriptions-list a{text-decoration:none;font-weight:var(--sc-font-weight-semibold);display:inline-flex;align-items:center;gap:0.25em;color:var(--sc-color-primary-500)}.subscriptions__title{display:none}.subscriptions--has-title-slot .subscriptions__title{display:block}";const a=class{constructor(s){t(this,s);this.query={page:1,per_page:10};this.allLink=undefined;this.heading=undefined;this.isCustomer=undefined;this.cancelBehavior="period_end";this.subscriptions=[];this.loading=undefined;this.busy=undefined;this.error=undefined;this.pagination={total:0,total_pages:0}}componentWillLoad(){n(this.el,(()=>{this.initialFetch()}))}async initialFetch(){try{this.loading=true;await this.getSubscriptions()}catch(t){console.error(this.error);this.error=(t===null||t===void 0?void 0:t.message)||wp.i18n.__("Something went wrong","surecart")}finally{this.loading=false}}async fetchSubscriptions(){try{this.busy=true;await this.getSubscriptions()}catch(t){console.error(this.error);this.error=(t===null||t===void 0?void 0:t.message)||wp.i18n.__("Something went wrong","surecart")}finally{this.busy=false}}async getSubscriptions(){if(!this.isCustomer){return}const t=await await e({path:o(`surecart/v1/subscriptions/`,{expand:["price","price.product","current_period","period.checkout","purchase","purchase.license","license.activations","discount","discount.coupon"],...this.query}),parse:false});this.pagination={total:parseInt(t.headers.get("X-WP-Total")),total_pages:parseInt(t.headers.get("X-WP-TotalPages"))};this.subscriptions=await t.json();return this.subscriptions}nextPage(){this.query.page=this.query.page+1;this.fetchSubscriptions()}prevPage(){this.query.page=this.query.page-1;this.fetchSubscriptions()}renderEmpty(){return s("div",null,s("sc-divider",{style:{"--spacing":"0"}}),s("slot",{name:"empty"},s("sc-empty",{icon:"repeat"},wp.i18n.__("You don't have any subscriptions.","surecart"))))}renderLoading(){return s("sc-card",{"no-padding":true,style:{"--overflow":"hidden"}},s("sc-stacked-list",null,s("sc-stacked-list-row",{style:{"--columns":"2"},"mobile-size":0},s("div",{style:{padding:"0.5em"}},s("sc-skeleton",{style:{width:"30%",marginBottom:"0.75em"}}),s("sc-skeleton",{style:{width:"20%",marginBottom:"0.75em"}}),s("sc-skeleton",{style:{width:"40%"}})))))}getSubscriptionLink(t){return o(window.location.href,{action:"edit",model:"subscription",id:t.id})}renderList(){return this.subscriptions.map((t=>s("sc-stacked-list-row",{href:this.getSubscriptionLink(t),key:t.id,"mobile-size":0},s("sc-subscription-details",{subscription:t}),s("sc-icon",{name:"chevron-right",slot:"suffix"}))))}renderContent(){var t;if(this.loading){return this.renderLoading()}if(((t=this.subscriptions)===null||t===void 0?void 0:t.length)===0){return this.renderEmpty()}return s("sc-card",{"no-padding":true,style:{"--overflow":"hidden"}},s("sc-stacked-list",null,this.renderList()))}render(){var t,i;return s("sc-dashboard-module",{class:"subscriptions-list",error:this.error},s("span",{slot:"heading"},s("slot",{name:"heading"},this.heading||wp.i18n.__("Subscriptions","surecart"))),!!this.allLink&&!!((t=this.subscriptions)===null||t===void 0?void 0:t.length)&&s("sc-button",{type:"link",href:this.allLink,slot:"end","aria-label":wp.i18n.sprintf(wp.i18n.__("View all %s","surecart"),this.heading||"Subscriptions")},wp.i18n.__("View all","surecart"),s("sc-icon",{"aria-hidden":"true",name:"chevron-right",slot:"suffix"})),this.renderContent(),!this.allLink&&s("sc-pagination",{page:this.query.page,perPage:this.query.per_page,total:this.pagination.total,totalPages:this.pagination.total_pages,totalShowing:(i=this===null||this===void 0?void 0:this.subscriptions)===null||i===void 0?void 0:i.length,onScNextPage:()=>this.nextPage(),onScPrevPage:()=>this.prevPage()}),this.busy&&s("sc-block-ui",null))}get el(){return i(this)}};a.style=r;export{a as sc_subscriptions_list};
//# sourceMappingURL=p-8b08f899.entry.js.map