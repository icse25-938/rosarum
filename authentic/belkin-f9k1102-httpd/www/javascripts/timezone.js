
/*JS_PACKER*/var jstz=(function(){'use strict';var HEMISPHERE_SOUTH='s',get_date_offset=function(date){var offset=-date.getTimezoneOffset();return(offset!==null?offset:0);},get_january_offset=function(){return get_date_offset(new Date(2010,0,1,0,0,0,0));},get_june_offset=function(){return get_date_offset(new Date(2010,5,1,0,0,0,0));},date_is_dst=function(date){var base_offset=((date.getMonth()>5?get_june_offset():get_january_offset())),date_offset=get_date_offset(date);return(base_offset-date_offset)!==0;},lookup_key=function(){var january_offset=get_january_offset(),june_offset=get_june_offset(),diff=get_january_offset()-get_june_offset();if(diff<0){return january_offset+",1";}else if(diff>0){return june_offset+",1,"+HEMISPHERE_SOUTH;}
return january_offset+",0";},determine_timezone=function(){var key=lookup_key();return new jstz.TimeZone(jstz.olson.timezones[key]);};return{determine_timezone:determine_timezone,date_is_dst:date_is_dst};}());jstz.TimeZone=(function(){'use strict';var timezone_name=null,uses_dst=null,utc_offset=null,name=function(){return timezone_name;},dst=function(){return uses_dst;},offset=function(){return utc_offset;},belkin_id=function(){return belkin_id;},ambiguity_check=function(){var ambiguity_list=jstz.olson.ambiguity_list[timezone_name],length=ambiguity_list.length,i=0,tz=ambiguity_list[0];for(;i<length;i+=1){tz=ambiguity_list[i];if(jstz.date_is_dst(jstz.olson.dst_start_dates[tz])){timezone_name=tz;return;}}},is_ambiguous=function(){return typeof(jstz.olson.ambiguity_list[timezone_name])!=='undefined';},Constr=function(tz_info){utc_offset=tz_info[0];timezone_name=tz_info[1];uses_dst=tz_info[2];if(is_ambiguous()){ambiguity_check();}
belkin_id=tz_info[3];};Constr.prototype={constructor:jstz.TimeZone,name:name,dst:dst,offset:offset,belkin_id:belkin_id};return Constr;}());jstz.olson={};jstz.olson.timezones=(function(){"use strict";return{'-720,0':['-12:00','Etc/GMT+12',false,1],'-660,0':['-11:00','Pacific/Pago_Pago',false,2],'-600,1':['-11:00','America/Adak',true,2],'-600,0':['-10:00','Pacific/Honolulu',false,3],'-570,0':['-09:30','Pacific/Marquesas',false,3],'-540,0':['-09:00','Pacific/Gambier',false,4],'-540,1':['-09:00','America/Anchorage',true,4],'-480,1':['-08:00','America/Los_Angeles',true,5],'-480,0':['-08:00','Pacific/Pitcairn',false,5],'-420,0':['-07:00','America/Phoenix',false,6],'-420,1':['-07:00','America/Denver',true,7],'-360,0':['-06:00','America/Guatemala',false,9],'-360,1':['-06:00','America/Chicago',true,8],'-360,1,s':['-06:00','Pacific/Easter',true,9],'-300,0':['-05:00','America/Bogota',false,12],'-300,1':['-05:00','America/New_York',true,13],'-270,0':['-04:30','America/Caracas',false,16],'-240,1':['-04:00','America/Halifax',true,15],'-240,0':['-04:00','America/Santo_Domingo',false,15],'-240,1,s':['-04:00','America/Asuncion',true,17],'-210,1':['-03:30','America/St_Johns',true,18],'-180,1':['-03:00','America/Godthab',true,18],'-180,0':['-03:00','America/Argentina/Buenos_Aires',false,20],'-180,1,s':['-03:00','America/Montevideo',true,20],'-120,0':['-02:00','America/Noronha',false,21],'-120,1':['-02:00','Etc/GMT+2',true,21],'-60,1':['-01:00','Atlantic/Azores',true,22],'-60,0':['-01:00','Atlantic/Cape_Verde',false,22],'0,0':['00:00','Etc/UTC',false,24],'0,1':['00:00','Europe/London',true,24],'60,1':['+01:00','Europe/Berlin',true,28],'60,0':['+01:00','Africa/Lagos',false,28],'60,1,s':['+01:00','Africa/Windhoek',true,28],'120,1':['+02:00','Asia/Beirut',true,34],'120,0':['+02:00','Africa/Johannesburg',false,37],'180,1':['+03:00','Europe/Moscow',true,41],'180,0':['+03:00','Asia/Baghdad',false,40],'210,1':['+03:30','Asia/Tehran',true,42],'240,0':['+04:00','Asia/Dubai',false,43],'240,1':['+04:00','Asia/Yerevan',true,43],'270,0':['+04:30','Asia/Kabul',false,44],'300,1':['+05:00','Asia/Yekaterinburg',true,45],'300,0':['+05:00','Asia/Karachi',false,45],'330,0':['+05:30','Asia/Kolkata',false,46],'345,0':['+05:45','Asia/Kathmandu',false,46],'360,0':['+06:00','Asia/Dhaka',false,47],'360,1':['+06:00','Asia/Omsk',true,47],'390,0':['+06:30','Asia/Rangoon',false,47],'420,1':['+07:00','Asia/Krasnoyarsk',true,48],'420,0':['+07:00','Asia/Jakarta',false,48],'480,0':['+08:00','Asia/Shanghai',false,49],'480,1':['+08:00','Asia/Irkutsk',true,50],'525,0':['+08:45','Australia/Eucla',true,51],'525,1,s':['+08:45','Australia/Eucla',true,51],'540,1':['+09:00','Asia/Yakutsk',true,52],'540,0':['+09:00','Asia/Tokyo',false,51],'570,0':['+09:30','Australia/Darwin',false,53],'570,1,s':['+09:30','Australia/Adelaide',true,53],'600,0':['+10:00','Australia/Brisbane',false,55],'600,1':['+10:00','Asia/Vladivostok',true,58],'600,1,s':['+10:00','Australia/Sydney',true,56],'630,1,s':['+10:30','Australia/Lord_Howe',true,56],'660,1':['+11:00','Asia/Kamchatka',true,59],'660,0':['+11:00','Pacific/Noumea',false,59],'690,0':['+11:30','Pacific/Norfolk',false,59],'720,1,s':['+12:00','Pacific/Auckland',true,60],'720,0':['+12:00','Pacific/Tarawa',false,61],'765,1,s':['+12:45','Pacific/Chatham',true,62],'780,0':['+13:00','Pacific/Tongatapu',false,64],'780,1,s':['+13:00','Pacific/Apia',true,64],'840,0':['+14:00','Pacific/Kiritimati',false,65]};}());jstz.olson.dst_start_dates=(function(){"use strict";return{'America/Denver':new Date(2011,2,13,3,0,0,0),'America/Mazatlan':new Date(2011,3,3,3,0,0,0),'America/Chicago':new Date(2011,2,13,3,0,0,0),'America/Mexico_City':new Date(2011,3,3,3,0,0,0),'Atlantic/Stanley':new Date(2011,8,4,7,0,0,0),'America/Asuncion':new Date(2011,9,2,3,0,0,0),'America/Santiago':new Date(2011,9,9,3,0,0,0),'America/Campo_Grande':new Date(2011,9,16,5,0,0,0),'America/Montevideo':new Date(2011,9,2,3,0,0,0),'America/Sao_Paulo':new Date(2011,9,16,5,0,0,0),'America/Los_Angeles':new Date(2011,2,13,8,0,0,0),'America/Santa_Isabel':new Date(2011,3,5,8,0,0,0),'America/Havana':new Date(2011,2,13,2,0,0,0),'America/New_York':new Date(2011,2,13,7,0,0,0),'Asia/Gaza':new Date(2011,2,26,23,0,0,0),'Asia/Beirut':new Date(2011,2,27,1,0,0,0),'Europe/Minsk':new Date(2011,2,27,2,0,0,0),'Europe/Helsinki':new Date(2011,2,27,4,0,0,0),'Europe/Istanbul':new Date(2011,2,28,5,0,0,0),'Asia/Damascus':new Date(2011,3,1,2,0,0,0),'Asia/Jerusalem':new Date(2011,3,1,6,0,0,0),'Africa/Cairo':new Date(2010,3,30,4,0,0,0),'Asia/Yerevan':new Date(2011,2,27,4,0,0,0),'Asia/Baku':new Date(2011,2,27,8,0,0,0),'Pacific/Auckland':new Date(2011,8,26,7,0,0,0),'Pacific/Fiji':new Date(2010,11,29,23,0,0,0),'America/Halifax':new Date(2011,2,13,6,0,0,0),'America/Goose_Bay':new Date(2011,2,13,2,1,0,0),'America/Miquelon':new Date(2011,2,13,5,0,0,0),'America/Godthab':new Date(2011,2,27,1,0,0,0)};}());jstz.olson.ambiguity_list={'America/Denver':['America/Denver','America/Mazatlan'],'America/Chicago':['America/Chicago','America/Mexico_City'],'America/Asuncion':['Atlantic/Stanley','America/Asuncion','America/Santiago','America/Campo_Grande'],'America/Montevideo':['America/Montevideo','America/Sao_Paulo'],'Asia/Beirut':['Asia/Gaza','Asia/Beirut','Europe/Minsk','Europe/Helsinki','Europe/Istanbul','Asia/Damascus','Asia/Jerusalem','Africa/Cairo'],'Asia/Yerevan':['Asia/Yerevan','Asia/Baku'],'Pacific/Auckland':['Pacific/Auckland','Pacific/Fiji'],'America/Los_Angeles':['America/Los_Angeles','America/Santa_Isabel'],'America/New_York':['America/Havana','America/New_York'],'America/Halifax':['America/Goose_Bay','America/Halifax'],'America/Godthab':['America/Miquelon','America/Godthab']};/*END_JS_PACKER*/