// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12050_12064 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12051_12065 = null;
var count__12052_12066 = (0);
var i__12053_12067 = (0);
while(true){
if((i__12053_12067 < count__12052_12066)){
var f_12068 = cljs.core._nth.call(null,chunk__12051_12065,i__12053_12067);
cljs.core.println.call(null,"  ",f_12068);

var G__12069 = seq__12050_12064;
var G__12070 = chunk__12051_12065;
var G__12071 = count__12052_12066;
var G__12072 = (i__12053_12067 + (1));
seq__12050_12064 = G__12069;
chunk__12051_12065 = G__12070;
count__12052_12066 = G__12071;
i__12053_12067 = G__12072;
continue;
} else {
var temp__4657__auto___12073 = cljs.core.seq.call(null,seq__12050_12064);
if(temp__4657__auto___12073){
var seq__12050_12074__$1 = temp__4657__auto___12073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12050_12074__$1)){
var c__7667__auto___12075 = cljs.core.chunk_first.call(null,seq__12050_12074__$1);
var G__12076 = cljs.core.chunk_rest.call(null,seq__12050_12074__$1);
var G__12077 = c__7667__auto___12075;
var G__12078 = cljs.core.count.call(null,c__7667__auto___12075);
var G__12079 = (0);
seq__12050_12064 = G__12076;
chunk__12051_12065 = G__12077;
count__12052_12066 = G__12078;
i__12053_12067 = G__12079;
continue;
} else {
var f_12080 = cljs.core.first.call(null,seq__12050_12074__$1);
cljs.core.println.call(null,"  ",f_12080);

var G__12081 = cljs.core.next.call(null,seq__12050_12074__$1);
var G__12082 = null;
var G__12083 = (0);
var G__12084 = (0);
seq__12050_12064 = G__12081;
chunk__12051_12065 = G__12082;
count__12052_12066 = G__12083;
i__12053_12067 = G__12084;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12085 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6856__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6856__auto__)){
return or__6856__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12085);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12085)))?cljs.core.second.call(null,arglists_12085):arglists_12085));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12054 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12055 = null;
var count__12056 = (0);
var i__12057 = (0);
while(true){
if((i__12057 < count__12056)){
var vec__12058 = cljs.core._nth.call(null,chunk__12055,i__12057);
var name = cljs.core.nth.call(null,vec__12058,(0),null);
var map__12059 = cljs.core.nth.call(null,vec__12058,(1),null);
var map__12059__$1 = ((((!((map__12059 == null)))?((((map__12059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12059):map__12059);
var doc = cljs.core.get.call(null,map__12059__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__12059__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12086 = seq__12054;
var G__12087 = chunk__12055;
var G__12088 = count__12056;
var G__12089 = (i__12057 + (1));
seq__12054 = G__12086;
chunk__12055 = G__12087;
count__12056 = G__12088;
i__12057 = G__12089;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12054);
if(temp__4657__auto__){
var seq__12054__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12054__$1)){
var c__7667__auto__ = cljs.core.chunk_first.call(null,seq__12054__$1);
var G__12090 = cljs.core.chunk_rest.call(null,seq__12054__$1);
var G__12091 = c__7667__auto__;
var G__12092 = cljs.core.count.call(null,c__7667__auto__);
var G__12093 = (0);
seq__12054 = G__12090;
chunk__12055 = G__12091;
count__12056 = G__12092;
i__12057 = G__12093;
continue;
} else {
var vec__12061 = cljs.core.first.call(null,seq__12054__$1);
var name = cljs.core.nth.call(null,vec__12061,(0),null);
var map__12062 = cljs.core.nth.call(null,vec__12061,(1),null);
var map__12062__$1 = ((((!((map__12062 == null)))?((((map__12062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12062):map__12062);
var doc = cljs.core.get.call(null,map__12062__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__12062__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12094 = cljs.core.next.call(null,seq__12054__$1);
var G__12095 = null;
var G__12096 = (0);
var G__12097 = (0);
seq__12054 = G__12094;
chunk__12055 = G__12095;
count__12056 = G__12096;
i__12057 = G__12097;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
