
WANConnect={"Status":'0<% CFG_GET(STS_WAN_ST);%>',"Connect":'0<% CFG_GET(STS_WAN_CONN);%>',"Cable":'0<% CFG_GET(STS_WAN_PHY);%>',"Session":'0<% CFG_GET(STS_WAN_SES);%>',"ConnLong":(0<%CFG_GET(STS_WAN_READY);%>-0<%CFG_GET(STS_WAN_START);%>),"TryLink":(0<%CFG_GET(STS_UP_TIME);%>-0<%CFG_GET(STS_WAN_START);%>),"wantype":'<% CFG_GET(WAN_TYPE);%>',"IP":'<% CFG_GET(STS_WAN_IP);%>',"DNS":'<% CFG_GET(STS_WAN_DNS);%>',"DNSok":'<% CFG_GET(STS_WAN_DNS_RESOLV);%>'};