"use strict";(self.webpackChunkmybatboo=self.webpackChunkmybatboo||[]).push([[4561],{4561:(l,a,i)=>{i.r(a),i.d(a,{Geolocation:()=>u,GeolocationWeb:()=>s});var t=i(5861),c=i(7423);class s extends c.Uw{getCurrentPosition(o){return(0,t.Z)(function*(){return new Promise((e,r)=>{navigator.geolocation.getCurrentPosition(n=>{e(n)},n=>{r(n)},Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},o))})})()}watchPosition(o,e){return(0,t.Z)(function*(){return`${navigator.geolocation.watchPosition(n=>{e(n)},n=>{e(null,n)},Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},o))}`})()}clearWatch(o){return(0,t.Z)(function*(){window.navigator.geolocation.clearWatch(parseInt(o.id,10))})()}checkPermissions(){var o=this;return(0,t.Z)(function*(){if(typeof navigator>"u"||!navigator.permissions)throw o.unavailable("Permissions API not available in this browser");const e=yield window.navigator.permissions.query({name:"geolocation"});return{location:e.state,coarseLocation:e.state}})()}requestPermissions(){var o=this;return(0,t.Z)(function*(){throw o.unimplemented("Not implemented on web.")})()}}const u=new s}}]);