
var cgi_lang_list='<%CGI_LANG_LST();%>';var cgi_pc_lang='<%CGI_BR_LANG();%>';var cgi_refer='<%CGI_REFERER();%>';/*JS_PACKER*/
sHex.charAt((i>>(j*8))&0x0F);}
return h;}
function add(x,y){return(((x&0x7FFFFFFF)+(y&0x7FFFFFFF))^(x&0x80000000)^(y&0x80000000));}
function R1(A,B,C,D,X,S,T){q=add(add(A,(B&C)|(~B&D)),add(X,T));return add((q<<S)|((q>>(32-S))&(Math.pow(2,S)-1)),B);}
function R2(A,B,C,D,X,S,T){q=add(add(A,(B&D)|(C&~D)),add(X,T));return add((q<<S)|((q>>(32-S))&(Math.pow(2,S)-1)),B);}
function R3(A,B,C,D,X,S,T){q=add(add(A,B^C^D),add(X,T));return add((q<<S)|((q>>(32-S))&(Math.pow(2,S)-1)),B);}
function R4(A,B,C,D,X,S,T){q=add(add(A,C^(B|~D)),add(X,T));return add((q<<S)|((q>>(32-S))&(Math.pow(2,S)-1)),B);}
function calcMD5(sInp){wLen=(((sInp.length+8)>>6)+1)<<4;var X=new Array(wLen);j=4;for(i=0;(i*4)<sInp.length;i++){X[i]=0;for(j=0;(j<4)&&((j+i*4)<sInp.length);j++){X[i]+=(sAscii.indexOf(sInp.charAt((i*4)+j))+32)<<(j*8);}}
if(j==4){X[i++]=0x80;}else{X[i-1]+=0x80<<(j*8);}
for(;i<wLen;i++){X[i]=0;}
X[wLen-2]=sInp.length*8;a=0x67452301;b=0xefcdab89;c=0x98badcfe;d=0x10325476;for(i=0;i<wLen;i+=16){aO=a;bO=b;cO=c;dO=d;a=R1(a,b,c,d,X[i+0],7,0xd76aa478);d=R1(d,a,b,c,X[i+1],12,0xe8c7b756);c=R1(c,d,a,b,X[i+2],17,0x242070db);b=R1(b,c,d,a,X[i+3],22,0xc1bdceee);a=R1(a,b,c,d,X[i+4],7,0xf57c0faf);d=R1(d,a,b,c,X[i+5],12,0x4787c62a);c=R1(c,d,a,b,X[i+6],17,0xa8304613);b=R1(b,c,d,a,X[i+7],22,0xfd469501);a=R1(a,b,c,d,X[i+8],7,0x698098d8);d=R1(d,a,b,c,X[i+9],12,0x8b44f7af);c=R1(c,d,a,b,X[i+10],17,0xffff5bb1);b=R1(b,c,d,a,X[i+11],22,0x895cd7be);a=R1(a,b,c,d,X[i+12],7,0x6b901122);d=R1(d,a,b,c,X[i+13],12,0xfd987193);c=R1(c,d,a,b,X[i+14],17,0xa679438e);b=R1(b,c,d,a,X[i+15],22,0x49b40821);a=R2(a,b,c,d,X[i+1],5,0xf61e2562);d=R2(d,a,b,c,X[i+6],9,0xc040b340);c=R2(c,d,a,b,X[i+11],14,0x265e5a51);b=R2(b,c,d,a,X[i+0],20,0xe9b6c7aa);a=R2(a,b,c,d,X[i+5],5,0xd62f105d);d=R2(d,a,b,c,X[i+10],9,0x2441453);c=R2(c,d,a,b,X[i+15],14,0xd8a1e681);b=R2(b,c,d,a,X[i+4],20,0xe7d3fbc8);a=R2(a,b,c,d,X[i+9],5,0x21e1cde6);d=R2(d,a,b,c,X[i+14],9,0xc33707d6);c=R2(c,d,a,b,X[i+3],14,0xf4d50d87);b=R2(b,c,d,a,X[i+8],20,0x455a14ed);a=R2(a,b,c,d,X[i+13],5,0xa9e3e905);d=R2(d,a,b,c,X[i+2],9,0xfcefa3f8);c=R2(c,d,a,b,X[i+7],14,0x676f02d9);b=R2(b,c,d,a,X[i+12],20,0x8d2a4c8a);a=R3(a,b,c,d,X[i+5],4,0xfffa3942);d=R3(d,a,b,c,X[i+8],11,0x8771f681);c=R3(c,d,a,b,X[i+11],16,0x6d9d6122);b=R3(b,c,d,a,X[i+14],23,0xfde5380c);a=R3(a,b,c,d,X[i+1],4,0xa4beea44);d=R3(d,a,b,c,X[i+4],11,0x4bdecfa9);c=R3(c,d,a,b,X[i+7],16,0xf6bb4b60);b=R3(b,c,d,a,X[i+10],23,0xbebfbc70);a=R3(a,b,c,d,X[i+13],4,0x289b7ec6);d=R3(d,a,b,c,X[i+0],11,0xeaa127fa);c=R3(c,d,a,b,X[i+3],16,0xd4ef3085);b=R3(b,c,d,a,X[i+6],23,0x4881d05);a=R3(a,b,c,d,X[i+9],4,0xd9d4d039);d=R3(d,a,b,c,X[i+12],11,0xe6db99e5);c=R3(c,d,a,b,X[i+15],16,0x1fa27cf8);b=R3(b,c,d,a,X[i+2],23,0xc4ac5665);a=R4(a,b,c,d,X[i+0],6,0xf4292244);d=R4(d,a,b,c,X[i+7],10,0x432aff97);c=R4(c,d,a,b,X[i+14],15,0xab9423a7);b=R4(b,c,d,a,X[i+5],21,0xfc93a039);a=R4(a,b,c,d,X[i+12],6,0x655b59c3);d=R4(d,a,b,c,X[i+3],10,0x8f0ccc92);c=R4(c,d,a,b,X[i+10],15,0xffeff47d);b=R4(b,c,d,a,X[i+1],21,0x85845dd1);a=R4(a,b,c,d,X[i+8],6,0x6fa87e4f);d=R4(d,a,b,c,X[i+15],10,0xfe2ce6e0);c=R4(c,d,a,b,X[i+6],15,0xa3014314);b=R4(b,c,d,a,X[i+13],21,0x4e0811a1);a=R4(a,b,c,d,X[i+4],6,0xf7537e82);d=R4(d,a,b,c,X[i+11],10,0xbd3af235);c=R4(c,d,a,b,X[i+2],15,0x2ad7d2bb);b=R4(b,c,d,a,X[i+9],21,0xeb86d391);a=add(a,aO);b=add(b,bO);c=add(c,cO);d=add(d,dO);}
return hex(a)+hex(b)+hex(c)+hex(d);}
function getcPage(_url){if(_url)
return _url.replace(/.*[\/]/,'').replace(/[\?].*$/,'');alert("Dev: Err:"+cPage);}
$W=function(a){document.write(a);};$=function(a){return document.getElementById(a);};var cPage=getcPage(window.location.toString());var cTopPge=getcPage(parent.location.toString());function getCookieVal(offset){var endstr=document.cookie.indexOf(";",offset);if(endstr==-1)
endstr=document.cookie.length;return unescape(document.cookie.substring(offset,endstr));}
function GetCookie(name){var arg=name+"=";var alen=arg.length;var clen=document.cookie.length;var i=0;while(i<clen){var j=i+alen;if(document.cookie.substring(i,j)==arg)
return getCookieVal(j);i=document.cookie.indexOf(" ",i)+1;if(i==0)break;}
return null;}
function SetCookie(name,value){var expires=new Date();var path="/";var domain=null;var secure=null;expires.setTime(expires.getTime()+(365*24*60*60*1000));document.cookie=name+"="+escape(value)+((expires==null)?"":("; expires="+expires.toGMTString()))+((path==null)?"":("; path="+path))+((domain==null)?"":("; domain="+domain));}
function DeleteCookie(name){exp=new Date();exp.setTime(exp.getTime()-1);var cval=GetCookie(name);document.cookie=name+"="+cval+"; expires="+exp.toGMTString();}
function getLangM(_id){if(LangM){for(var x=0;x<LangM.length;x++){try{if(LangM[x][_id]){var tmpElem=document.createElement("div");tmpElem.innerHTML=LangM[x][_id];s=tmpElem.innerHTML;tmpElem=null;return s;}}catch(e){}}}
return null;}
function ConfirmM(_s){return confirm(getLangM(_s));}
function AlertM(_s){alert(getLangM(_s));}
function getLangAM(_ar){var a=[];for(var x in _ar){a[x]=getLangM(_ar[x]);}
return((a.join(",")).split(","));}
function getLangC(_id){var s=getLangM(_id);if(null==s)
return _id;else
return s;}
function SetTitle(_til){document.title=_til;}
function DisplayObject(id){if(document.getElementById(id)){document.getElementById(id).style.display="";document.getElementById(id).style.visibility="visible";}}
function HiddenObject(id){if(document.getElementById(id)){document.getElementById(id).style.display="none";document.getElementById(id).style.visibility="hidden";}}
function do_loginok(_cb){var url="/javascripts/acc.js";var newscript=document.createElement("script");newscript.type="text/javascript";newscript.id="ok";newscript.src=url;document.body.appendChild(newscript);setTimeout(function(){_cb();},2000);}
function ShowMainBody(){DisplayObject("mainbody");}
function HideMainBody(){HiddenObject("mainbody");}
var Lang_List=cgi_lang_list.split(" ");var LANG_ID=0;var LANG_DESC=1;var LANG_CHAR=2;var LANG_ACCP=3;var Lang={0:["EN",'English',"utf-8",["en"]],1:["NL",'Nederlands',"utf-8",["nl"]],2:["FR",'Fran&#xe7;ais',"utf-8",["fr"]],3:["ES",'Espa&#xf1;olEspa&#xf1;ol',"utf-8",["es"]],4:["DE",'Deutsch',"utf-8",["de"]],5:["IT",'Italiano',"utf-8",["it"]],6:["CN",'&#31616;&#20307;&#20013;&#25991;',"utf-8",["zh-Hans","zh-cn","zh"]],7:["TW",'&#32321;&#39636;&#20013;&#25991;',"utf-8",["zh-Hant","zh-hk","zh-mo","zh-tw"]],8:["JP",'&#26085;&#26412;&#35486;',"utf-8",["ja"]],9:["KO",'&#xD55C;&#xAD6D;&#xC758;',"euc-kr",["ko"]],10:["TR",'T&#xFC;rk&#xE7;e',"utf-8",["tr"]],11:["PT",'Portugu&#xea;s',"utf-8",["pt"]],12:["RU",'&#1088;&#1091;&#1089;&#1089;&#1082;&#1080;&#1081;',"utf-8",["ru"]],13:["EL",'&#949;&#955;&#955;&#951;&#957;&#953;&#954;&#940;',"utf-8",["el"]],14:["SV",'Svenska',"utf-8",["sv"]],15:["NO",'Norske',"utf-8",["no"]],16:["DA",'Dansk',"utf-8",["da"]],17:["FI",'Suomi',"utf-8",["fi"]],18:["BR","Portugu&#xea;s-Brazil","utf-8",["pt-BR"]],19:["MX",'Spanish-Latin America',"utf-8",["es-MX","es-419","es-ar","es-bo","es-cl","es-co","es-cr","es-ec","es-sv","es-gt","es-hn","es-ni","es-pa","es-py","es-pe","es-pr","es-ve","es-do","es-uy","es-us"]],20:["CA",'Canadien fran&#231;ais',"utf-8",["fr-CA","fr-us"]]};var brMode=3;var isSafari=0;var navdav=navigator.appVersion;var navidx=Math.max(navdav.indexOf("WebKit"),navdav.indexOf("Safari"),0);if(navidx){brMode=parseFloat(navdav.split("Version/")[1])||((parseFloat(navdav.substr(navidx+7))>419.3)?3:2)||2;isSafari=1;}
function findLangIdx(_id){for(var i in Lang){if(!i)break;var s=Lang[i][LANG_ACCP];if(s){for(var x in s){if((_id==s[x].toUpperCase()))return i;}}}
return 0;}
function GetLangIdx(){var pc_lang=cgi_pc_lang.split(" ");var xlang,idx,id;for(var x in pc_lang){xlang=pc_lang[x].toUpperCase();idx=findLangIdx(xlang);id=Lang[idx][LANG_ID];for(var y in Lang_List){if(id==Lang_List[y])return idx;}}
return 0;}
function GetLangISO(){return(Lang[0][LANG_ACCP]);}
var pg_idx=GetLangIdx();var pg_lang=Lang[pg_idx][LANG_ID].toLowerCase();var pg_charset=Lang[pg_idx][LANG_CHAR];var pg_dir=(((window.location.toString()).indexOf("dashboard/")!=-1)?"../":"");var pg_l_dir=pg_dir+"lang/"+pg_lang+"/";var LangM=[];var JsLoad=[];if("undefined"==typeof(LangJ))LangJ=[];if("undefined"==typeof(CGIs))CGIs=[];for(var js in LangJ){jspg=pg_l_dir+LangJ[js]+"_"+pg_lang+".js";document.write('<scr'+'ipt type="text/javascript" charset="'+pg_charset+'" src="'+jspg+'"></scr'+'ipt>');};if("undefined"!=typeof(CGIs)){for(var i=0;i<CGIs.length;i++){js=pg_dir+"cgi/cgi_"+CGIs[i]+'.js';document.write('<scr'+'ipt type="text/javascript" src="'+URLTimeStamp(js)+'"></scr'+'ipt>');}};/*END_JS_PACKER*/ 