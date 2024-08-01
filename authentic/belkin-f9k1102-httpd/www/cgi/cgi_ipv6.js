<%CFG_MAP(ipv6_en,IPV6_EN);%><%CFG_MAP(ipv6_mod,IPV6_MODE);%><%CFG_MAP(ipv6wanip,IPV6_WAN_IP);%><%CFG_MAP(ipv6wanlen,IPV6_WAN_IP_LEN);%><%CFG_MAP(ipv6wangw,IPV6_WAN_GW);%><%CFG_MAP(ipv6dns,IPV6_DNS);%><%CFG_MAP(ipv6dnsisp,IPV6_DNS_BYISP);%><%CFG_MAP(ipv6lanpd,IPV6_PD);%><%CFG_MAP(ipv6lanlen,IPV6_PD_LEN);%>addCfg("ipv6Conn",0,'');addCfg("wanip",0,'');addCfg("wanlen",0,'');addCfg("wangw",0,'');addCfg("ipv6dns1",0,'');addCfg("ipv6dns2",0,'');addCfg("lanpd",0,'');addCfg("laneui",0,'');var ipv6STSObj=null;var ipv6CFGObj=null;var IPV6ModeType=[{v:0,s:'3457'},{v:99,s:'3463'}];function getV6CFGObj(){var dns,en,o;var mod=99;setCfg("ipv6Conn",getCfgInt("ipv6_mod"));dns=getCfg("ipv6dns");dns=dns.split(" ");if(dns.length==1)dns[1]="";setCfg("ipv6dns1",dns[0]);setCfg("ipv6dns2",dns[1]);var wan_len=getCfg("ipv6wanlen");if(wan_len==0)
setCfg("wanlen","");else
setCfg("wanlen",wan_len);setCfg("wanip",getCfg("ipv6wanip"));setCfg("wangw",getCfg("ipv6wangw"));setCfg("lanpd",getCfg("ipv6lanpd"));}
function setV6CFGObj(){var mod=getCfgInt("ipv6Conn");var dns=getCfg("ipv6dns1");dns+=(getCfg("ipv6dns2"))?" "+getCfg("ipv6dns2"):"";if(mod==99){setCfg("ipv6_en",0);}else{setCfg("ipv6_mod",mod);setCfg("ipv6_en",1);setCfgV6("ipv6wanip",getCfg("wanip"));setCfg("ipv6wanlen",getCfg("wanlen"));setCfgV6("ipv6wangw",getCfg("wangw"));if(getCfgInt("ipv6dnsisp")==0){if((mod==1)||(mod==6)||(mod==7)){setCfg("ipv6dns",dns);}}
setCfgV6("ipv6lanpd",getCfg("lanpd"));setCfg("ipv6lanlen",64);}}
getV6CFGObj();