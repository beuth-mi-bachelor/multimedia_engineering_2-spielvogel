/*! a3 - v0.1.0 - 2015-04-27 */
var express=require("express"),fs=require("fs"),app=express(),args=process.argv.slice(2),port=parseInt(args[0],10)||1337,pubDirName="public";app.use(express["static"](__dirname+"/"+pubDirName)),app.get("/hello",function(a,b){"use strict";b.send("Hello World!")}),app.get(/^(.+)$/,function(a,b){"use strict";b.sendFile(__dirname+a.params[0],function(c,d){var e="<ul>";404===c.status&&fs.readdir(__dirname+"/"+pubDirName+a.params[0],function(a,c){a&&(console.error(a),b.end()),c.forEach(function(a){e+="<li>"+a+"</li>"}),e+="</ul>",b.send(e)})})});var server=app.listen(port,function(){"use strict";var a=server.address().port;console.log("server listening at http://localhost:%s",a)});