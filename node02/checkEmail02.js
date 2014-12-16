/** 2. 특정 URL에 대해서만 응답하기
 * 
 */

var http = require('http');
var url = require('url');

var httpServer = http.createServer(function(request, response){
	var queryObject = url.parse(request.url, true);
	
	response.writeHead(200, 'OK', {
		'Content-Type' : 'text/html;charset=UTF-8'
	});

	if (queryObject.pathname === '/checkEmail') {
		response.write('<html><head><title>step02</title></head>');
		response.write('<body><h1>/checkEmail 을 요청하셨네요.</h1></body></html>');
	} else {
		response.write('<html><head><title>오류</title></head>');
		response.write('<body><h1>이 URL은 지원하지 않습니다.</h1></body></html>');
	}
	
	response.end();
});
httpServer.listen(9999, '127.0.0.1');
console.log('http://127.0.0.1:9999 에서 클라이언트 요청을 기다리는 중...');