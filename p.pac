function FindProxyForURL(url, host) {
    var autoproxy = 'PROXY 127.0.0.1:8087';
    var blackhole = 'PROXY 127.0.0.1:8086';
    var defaultproxy = 'DIRECT';

    if (dnsDomainIs(host, '.4399.com'))
    {
        alert("禁止访问");
        host = "http://www.baidu.com";
        return host;
    }
    
}

