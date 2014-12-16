/** 3. 요청 파라미터 값 알아내기
 * 예) http://localhost:9999/checkEmail?email=test@test.com&name=hong
 */

var http = require('http');
var url = require('url');

var httpServer = http.createServer(function(request, response){
	var queryObject = url.parse(request.url, true);
	
	response.writeHead(200, 'OK', {
		'Content-Type' : 'text/html;charset=UTF-8'
	});

	if (queryObject.pathname === '/checkEmail') {
		response.write('<html><head><title>step03</title></head>');
		response.write('<body><h1>요청 파라미터 값</h1>');
		for (var paramName in queryObject.query) {
			response.write(
				paramName 
				+ '=' 
				+ queryObject.query[paramName] 
				+ '<br>');
		}
		response.write('</body></html>');
	} else {
		response.write('<html><head><title>오류</title></head>');
		response.write('<body><h1>이 URL은 지원하지 않습니다.</h1></body></html>');
	}
	
	response.end();
});
httpServer.listen(9999, '127.0.0.1');
console.log('http://127.0.0.1:9999 에서 클라이언트 요청을 기다리는 중...');