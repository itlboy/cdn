var geoip = require('geoip-lite');
var ip = "117.0.234.148";
console.time('getGeo');
for (i = 0; i < 1000; i++)
    geo = geoip.lookup(ip);
console.timeEnd('getGeo');