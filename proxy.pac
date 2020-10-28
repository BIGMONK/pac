function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, ".google.com") 
        || dnsDomainIs(host, ".youtube.com") 
        || dnsDomainIs(host, ".wikipedia.org") 
        || dnsDomainIs(host, ".twitter.org") 
        || dnsDomainIs(host, "raw.githubusercontent.com") 
        || dnsDomainIs(host, "paofu.cloud") 
       ) {
        return "SOCKS5 127.0.0.1:1080";
    }
    return "DIRECT";
}
