
var MAX_MAC_TABLE=20;var FW_MOD=0;var FW_MAC=1;var FW_DENY=1;var FW_ALLOW=0;<%CFG_MAP(macacc_en,FW_FLT_MAC_EN);%><%CFG_MAP_ARY(mac_lst,FW_FLT_MAC+1,32,1);%>addCfg("admin_mac",2,'<%CGI_LOGIN_MAC();%>');