
/*JS_PACKER*/
function JumpNews(f){var idx=f-1;if(news_url[idx]){var url=news_url[idx].url;if((news_url[idx].sec==0)||findMenuObj(url)){JumpTo(url,news_url[idx].sec);return false;}}
return false;}
function ShowNews(obj){var h="";var cnt=0,cnt1=0,num_rows,row_cnt=0;var row_style;for(var i=0;i<news_url.length;i++){var old=findMenuObj(news_url[i].url);if(!old)continue;cnt1++;}
for(var i=0;i<news_url.length;i++){var old=findMenuObj(news_url[i].url);if(!old)continue;if(row_cnt==0){num_rows=(cnt1-cnt)%MAX_ROWS;num_rows=(num_rows!=0)?num_rows:MAX_ROWS;if(num_rows==3)row_style="three-up";else if(num_rows==2)row_style="two-up";else if(num_rows==1)row_style="one-up";else row_style="four-up";h+='<ul class=\"block-grid '+row_style+' quick-actions\">';}
if(obj){var k=(i+1);var til=getLangM(news_url[i].til);h+='<li class=\"'+news_url[i].cName+'\"><a class="nice radius large option button" href="'+news_url[i].url+'" onClick="return JumpNews('+(k)+')"><span></span>'+til+'</a></li>';}
row_cnt++;if(row_cnt==num_rows){h+='</ul>';row_cnt=0;}
cnt++;}
setIdVal(obj,h);return cnt;}
/*END_JS_PACKER*/