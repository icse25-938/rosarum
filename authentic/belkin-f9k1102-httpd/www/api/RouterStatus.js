
RouterStatus={"Status":"1","link":'<% CFG_GET(STS_WAN_CONN);%>',"cable":'<% CFG_GET(STS_WAN_PHY);%>',"login":'<% CGI_LOGIN_STAT(); %>',"nosec":'<% CGI_PWD_EMPTY(0); %>',"timout":'<% CGI_LOGIN_ESCAPE();%>',"admin":'<%CGI_LOGIN_ADMIN(0);%>',"ntp":'<% CFG_GET(STS_NTP_CONN);%>',"pic":'<% CGI_PIC_BLOCK();%>'};