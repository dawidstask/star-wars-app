(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["movie"],{"0458":function(e,i,t){"use strict";var n=t("2668"),r=t.n(n);r.a},2668:function(e,i,t){},"363c":function(e,i,t){},def6:function(e,i,t){"use strict";t.r(i);var n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[e.loading?e._e():t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("This is a movie page")])]),e.film?t("div",[t("p",[e._v("Title: "),t("i",[e._v(e._s(e.film.title))])]),t("p",[e._v("Director: "),t("i",[e._v(e._s(e.film.director))])]),t("p",[e._v("Producer: "),t("i",[e._v(e._s(e.film.producer))])]),t("p",[e._v("Release date: "),t("i",[e._v(e._s(e.film.release_date))])]),t("p",[e._v("Opening crawl: "),t("i",[e._v(e._s(e.film.opening_crawl))])])]):e._e()]),e.film?[t("review-form",{attrs:{id:Number(e.movieId),title:e.film.title}})]:e._e(),e.loading?t("p",[e._v("Loading...")]):e._e()],2)},r=[],s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"review-form"},[t("p",[e._v("Did you like the movie?")]),t("el-input",{attrs:{type:"textarea",placeholder:"Leave a review...",rows:4},model:{value:e.review,callback:function(i){e.review=i},expression:"review"}}),t("el-button",{on:{click:function(i){return e.submitReview()}}},[e._v("Submit")])],1)},a=[],o=(t("c5f6"),{name:"ReviewForm",props:{id:Number,title:String},data:function(){return{review:null}},methods:{submitReview:function(){this.review&&(this.$notify.success({title:"Success",message:"Thanks for adding a review",type:"success"}),this.$store.commit("addReview",{movieId:this.id,movieTitle:this.title,value:this.review}),this.review="")}}}),l=o,c=(t("0458"),t("2877")),v=Object(c["a"])(l,s,a,!1,null,null,null),u=v.exports,d={name:"Movie",components:{ReviewForm:u},data:function(){return{film:null,loading:!1,movieId:this.$route.params.id}},mounted:function(){var e=this;this.loading=!0,this.$axios.get("https://swapi.co/api/films/".concat(this.movieId)).then(function(i){e.film=i.data,e.loading=!1}).catch(function(i){e.$notify.error({title:"Error",message:i,type:"error"}),e.loading=!1})}},m=d,f=(t("f2cc"),Object(c["a"])(m,n,r,!1,null,null,null));i["default"]=f.exports},f2cc:function(e,i,t){"use strict";var n=t("363c"),r=t.n(n);r.a}}]);
//# sourceMappingURL=movie.e68d6444.js.map