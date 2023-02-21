var localStorageData=function(){};
localStorageData.prototype={setItem:function(key,value){if(window.localStorage){this.value=value||[];var curTime=new Date().getTime();localStorage.setItem(key,JSON.stringify({data:value,time:curTime}))}},getItem:function(key){if(window.localStorage){var data=localStorage.getItem(key);if(data!=null && data !=undefined){var dataObj=JSON.parse(data);var _data=dataObj.data;if(new Date().getTime()-dataObj.time>300000){this.removeItem(key);return''}else{return JSON.stringify(_data)}}else{return''}}},removeItem:function(key){if(window.localStorage){localStorage.removeItem(key)}},clearItem:function(){if(window.localStorage){localStorage.clear()}}}

var dataServerUrl="";for(i=0;i<document.scripts.length;i++){var tempUrl=document.scripts[i].src;if(tempUrl.indexOf("/public/static/js/etw_public_data.js")!=-1){dataServerUrl=tempUrl;break}} 
dataServerUrl = dataServerUrl.replace("/public/static/js/etw_public_data.js", "")
   
/*显示最新的新闻、新产品
 dataServerUrl ="http://img.allhaving.com/";//调用服务器，必填项
 param.chatid;//询盘编号，必填项
 param.jsqid;//计数器编号，必填项
 param.type = "products";//数据类型，必填项
 param.num = 5;//显示条数，默认显示10条，可选项
 param.showsummary = 1;//显示简要内容，可选项
 param.words = 500;//内容字符数，默认350，可选项
 param.showimg = 1;//显示图片，可选项
*/
function news_products_index(param){var dataval;var chatid=param.chatid==undefined?"":param.chatid;var jsqid=param.jsqid==undefined?"":param.jsqid;var type=param.type==undefined?"":param.type;var post_data="chatid="+chatid+"&jsqid="+jsqid+"&type="+type+"&href="+encodeURIComponent(dataServerUrl);var keyname=chatid+"_"+jsqid+"_"+type;if(param.num!=undefined&&param.num!=""){post_data+="&num="+param.num;keyname+="_"+param.num}if(param.words!=undefined&&param.words!=""){post_data+="&words="+param.words;keyname+="_"+param.words}if(param.showsummary!=undefined&&param.showsummary=="1"){post_data+="&showsummary="+param.showsummary;keyname+="_"+param.showsummary}if(param.showimg!=undefined&&param.showimg=="1"){post_data+="&showimg="+param.showimg;keyname+="_"+param.showimg}if(param.classid!=undefined&&param.classid!=""){post_data+="&classid="+param.classid}var localdata=new localStorageData();var datas=localdata.getItem(keyname);if(datas==""||datas==undefined){jQuery.ajax({type:"POST",url:dataServerUrl+"/jsondata/index.php",cache:false,async:false,data:post_data,datatype:"html",success:function(val){dataval=val;localdata.setItem(keyname,dataval)}})}else{dataval=JSON.parse(datas)}return dataval}

function Show_news_products_index(param){jQuery("#"+param.divid).hide();var json=news_products_index(param);if(json["data"]!=undefined){new Vue({el:'#'+param.divid,data:{data:json},mounted:function(){jQuery("#"+param.divid).show()}})}else if(json["error"]!=undefined){console.log(json["error"])}}

/*新闻、新产品列表和详细内容
 dataServerUrl ="http://img.allhaving.com/";//调用服务器，必填项
 param.gid = 3632;//客户ID，必填项
 param.lanid = 1;//当前语言，必填项
 param.type = "news";//数据类型，必填项
 param.listnum = 5;//显示条数，默认显示10条，可选项
 param.showsummary = 1;//显示简要内容，可选项
 param.words = 500;//内容字符数，默认350，可选项
 param.showimg = 1;//显示图片，可选项
 param.pagesize = 10;//显示图片，可选项
 id
 page 页码
 */
function news_pro_list_info(param){var dataval;var chatid=param.chatid==undefined?'':param.chatid;var jsqid=param.jsqid==undefined?'':param.jsqid;var type=param.type==undefined?'':param.type;var post_data="chatid="+chatid+"&jsqid="+jsqid+"&type="+type+"&href="+encodeURIComponent(dataServerUrl);var keyname=chatid+"_"+jsqid+"_"+type;if(param.listnum!=undefined&&param.listnum!=""){post_data+="&listnum="+param.listnum;keyname+="_"+param.listnum}if(param.pagesize!=undefined&&param.pagesize!=""){post_data+="&pagesize="+param.pagesize;keyname+="_"+param.listnum}if(param.words!=undefined&&param.words!=""){post_data+="&words="+param.words;keyname+="_"+param.words}if(param.showsummary!=undefined&&param.showsummary=="1"){post_data+="&showsummary="+param.showsummary;keyname+="_"+param.showsummary}if(param.showimg!=undefined&&param.showimg=="1"){post_data+="&showimg="+param.showimg;keyname+="_"+param.showimg}if(param.showrelated!=undefined&&param.showrelated=="1"){post_data+="&showrelated="+param.showrelated;keyname+="_"+param.showrelated}if(param.classid!=undefined&&param.classid!=""){post_data+="&isclass=1"}var id=GetQueryString("id");if(id!=''&&id!=undefined){post_data+="&id="+id;keyname+="_"+id}else{if(param.classid!=undefined&&param.classid!=""){post_data+="&id="+param.classid;keyname+="_"+param.classid}}var page=GetQueryString("page");if(page!=''&&page!=undefined){post_data+="&page="+page;keyname+="_"+page}var localdata=new localStorageData();var datas=localdata.getItem(keyname);if(datas==""||datas==undefined){jQuery.ajax({type:'POST',url:dataServerUrl+'/jsondata/getlist.php',cache:false,async:false,data:post_data,datatype:"html",success:function(val){dataval=val;localdata.setItem(keyname,dataval)}})}else{dataval=JSON.parse(datas)}return dataval}


function Show_news_pro_list(param){var jump=param.jump==undefined?"":param.jump;jQuery("#"+param.divid).hide();var json=news_pro_list_info(param);if(json!=undefined&&json!=""&&json["leftlist"]==undefined&&jump!=""){window.location.href=jump}if(json["data"]!=undefined||json["leftlist"]!=undefined){new Vue({el:"#"+param.divid,data:{data:json},mounted:function(){if(param.videodiv!=undefined&&param.videodiv!=""&&jQuery("#"+param.videodiv).length>0&&json["content"]!=undefined&&json["content"]["video_path"]!=undefined&&json["content"]["video_path"]!=""){etwvp.init("#"+param.videodiv,json["content"]["video_path"],json["content"]["video_server"],"","1")}jQuery("#"+param.divid).show()}})}else if(json["error"]!=undefined){console.log(json["error"])}}

/*展会内容
 dataServerUrl ="http://img.allhaving.com/";//调用服务器，必填项
 param.chatid;//询盘编号，必填项
 param.jsqid;//计数器编号，必填项
 ishome 是否为首页1:是,0否，展会有两种类型一个是首页显示、还有就是所有页面显示
 */
function get_exhibition(param){var dataval;var chatid=param.chatid==undefined?"":param.chatid;var jsqid=param.jsqid==undefined?"":param.jsqid;var type=param.type==undefined?"":param.type;var ishome=0;var page=location.pathname;if(page=="/index.html"||page=="/"||page==""){ishome=1}var post_data="chatid="+chatid+"&jsqid="+jsqid+"&type="+type+"&ishome="+ishome+"&href="+encodeURIComponent(dataServerUrl);var keyname="exh"+chatid+"_"+jsqid+"_"+type+"_"+ishome;var localdata=new localStorageData();var datas=localdata.getItem(keyname);if(datas==""||datas==undefined){jQuery.ajax({type:"POST",url:dataServerUrl+"/jsondata/getexh.php",cache:false,async:false,data:post_data,datatype:"html",success:function(val){dataval=val;localdata.setItem(keyname,dataval)}})}else{dataval=JSON.parse(datas)}return dataval}


function Showexhdata(param){var json=get_exhibition(param);if(json["data"]!=undefined){var html="";for(var p in json["data"]){html+='<div class="exh_title" style="font-size: 16px; line-height: 20px; margin-bottom: 6px; font-weight: bold; color: #000;">'+json["data"][p].title+"</div>";if(json["data"][p].img!=""){html+='<div class="exh_img" style="margin-bottom: 6px;"><img src="'+json["data"][p].img+'" /></div>'}var infostr=json["data"][p].info;infostr=infostr.replace(/\\/g,"");html+='<div class="exh_content" style="font-size: 14px; line-height:20px; color: #666;">'+infostr+"</div>";if(json["data"][p].href!=""){html+='<a target="_blank"  href="'+json["data"][p].href+'" >'+json["data"][p].href+"</a>"}}var width=param.width==undefined?"300":param.width;var height=param.height==undefined?"400":param.height;layer.open({type:1,title:"",offset:"r",shade:0,area:[""+width+"px",""+height+"px"],id:"myExhibition",content:'<div style="padding:10px;">'+html+"</div>",success:function(layero){layero.find('.layui-layer-close').css('right','-18px')}})}else if(json["error"]!=undefined){alert(json["error"])}}

/*分类列表
 dataServerUrl ="http://img.allhaving.com/";//调用服务器，必填项
 param.chatid;//询盘编号，必填项
 param.jsqid;//计数器编号，必填项
 */
function get_class_list(param){var dataval;var chatid=param.chatid==undefined?'':param.chatid;var jsqid=param.jsqid==undefined?'':param.jsqid;var type=param.type==undefined?'':param.type;var classsubnum=param.classsubnum==undefined?'':param.classsubnum;var post_data="chatid="+chatid+"&jsqid="+jsqid+"&type="+type+"&href="+encodeURIComponent(dataServerUrl)+"&classsubnum="+classsubnum;var keyname="class"+chatid+"_"+jsqid+"_"+type+"_"+classsubnum;var localdata=new localStorageData();var datas=localdata.getItem(keyname);if(datas==""||datas==undefined){jQuery.ajax({type:'POST',url:dataServerUrl+'/jsondata/getclass.php',cache:false,async:false,data:post_data,datatype:"html",success:function(val){dataval=val;localdata.setItem(keyname,dataval)}})}else{dataval=JSON.parse(datas)}return dataval}


function Show_class_list(param){jQuery("#"+param.divid).hide();var json=get_class_list(param);if(json["classdata"]!=undefined&&jQuery("#"+param.divid).length>0){new Vue({el:"#"+param.divid,data:{data:json},mounted:function(){jQuery("#"+param.divid).show()}})}else if(json["error"]!=undefined){console.log(json["error"])}}

/*联系方式类容
 dataServerUrl ="http://img.allhaving.com/";//调用服务器，必填项
 param.chatid;//询盘编号，必填项
 param.jsqid;//计数器编号，必填项
 */
function get_contact(param){var dataval;var chatid=param.chatid==undefined?'':param.chatid;var jsqid=param.jsqid==undefined?'':param.jsqid;var post_data="chatid="+chatid+"&jsqid="+jsqid+"&href="+encodeURIComponent(dataServerUrl);var keyname="contact"+chatid+"_"+jsqid+"_";var localdata=new localStorageData();var datas=localdata.getItem(keyname);if(datas=="" || datas == undefined){jQuery.ajax({type:'POST',url:dataServerUrl+'/jsondata/getcontact.php',cache:false,async:false,data:post_data,datatype:"html",success:function(val){dataval=val;localdata.setItem(keyname,dataval)}})}else{dataval=JSON.parse(datas)}return dataval}

//获取参数
function GetQueryString(name){var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");var r=window.location.search.substr(1).match(reg);if(r!=null){return unescape(r[2])}else{return''}}