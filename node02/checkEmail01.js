/** 1. HTTP 요청에 대해 응답하기
 * 
 */

var http = require('http');

var httpServer = http.createServer(function(request, response){
	response.writeHead(200, 'OK', {
		'Content-Type' : 'text/html;charset=UTF-8'
	});
	response.write('<html><head><title>step01</title></head>');
	response.write('<body><h1>안녕하세요!</h1></body></html>');
	
	response.end();
});
httpServer.listen(9999, '127.0.0.1');
console.log('http://127.0.0.1:9999 에서 클라이언트 요청을 기다리는 중...');