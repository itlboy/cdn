// build in maxmind file
ip = "117.0.234.148";
//var geoip = new require('maxmind-native').GeoIP();
// custom maxmind file
var geoip = new require('maxmind-native').GeoIP('GeoIP.dat');
console.log(Object.getOwnPropertyNames(geoip));
console.time('getGeo');
for (i = 0; i < 1000; i++)
    country = geoip.getCountry(ip);
console.timeEnd('getGeo');