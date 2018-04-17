var http = require('http');

http.createServer(function (req, res) {
var JS_Script = 'function Test() { alert("test success")}';
res.setHeader('content-type', 'text/javascript');
res.end(JS_Script);
}).listen(8080);