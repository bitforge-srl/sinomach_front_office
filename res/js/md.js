/*
function setNotMouseEvent()
{if(document.getElementById("container")){document.getElementById("container").setAttribute("unselectable","on");}document.getElementsByTagName("body")[0].style.cssText="-moz-user-select:none;";var obj=document;obj.oncontextmenu=function(){return false;}
    obj.onselectstart=function(){return false;}
    obj.ondragstart=function(){return false;}
    obj.oncopy=function(){document.selection.empty();}
    obj.onbeforecopy=function(){return false;}
    obj.onselect=function(){document.selection.empty()}}
if(window.opera){document.body.innerHTML='<h1>This Website works On Google Chorme,IE,FF in China</h1>';}
*/


var localCoutryStorageData = function() {};
localCoutryStorageData.prototype={setItem:function(key,value){if(window.localStorage){this.value=value||[];var curTime=new Date().getTime();localStorage.setItem(key,JSON.stringify({data:value,time:curTime}))}},getItem:function(key){if(window.localStorage){var data=localStorage.getItem(key);if(data!=null&&data!=undefined){var dataObj=JSON.parse(data);var _data=dataObj.data;if(new Date().getTime()-dataObj.time>14400000){this.removeItem(key);return''}else{return JSON.stringify(_data)}}else{return''}}},removeItem:function(key){if(window.localStorage){localStorage.removeItem(key)}},clearItem:function(){if(window.localStorage){localStorage.clear()}}}

var localCoutrydata = new localCoutryStorageData();
var Countrydata = localCoutrydata.getItem("etwvisiteadd");
if (Countrydata == "" || Countrydata == undefined) {
    var record_ip_url = '';
    for(i=0;i<document.scripts.length;i++){var tempsrc=document.scripts[i].src;if(tempsrc.indexOf("md.js")!=-1){record_ip_url=tempsrc;break}}
    var arrurl = record_ip_url.split("?");record_ip_url=arrurl[0];record_ip_url=record_ip_url.replace("public/static/js/md.js","");var script=document.createElement("script");script.setAttribute("src",record_ip_url+"serverFile/chat/index.php?get_record_country/getcountry&callback=setcountrydata");document.getElementsByTagName("head")[0].appendChild(script);
}
else {
    var datav_al=JSON.parse(Countrydata);if(datav_al.address!=undefined){if(datav_al.address=='cn'){
		//setNotMouseEvent();setInterval("setNotMouseEvent",1000)
	}}
}
function setcountrydata(data) {
    localCoutrydata.setItem("etwvisiteadd",data);
	//if(data.address=='cn'){setNotMouseEvent();setInterval("setNotMouseEvent",1000)}
}

