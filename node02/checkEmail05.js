/** 5. Express 프레임워크 사용하기 : 요청 파라미터 값 알아내기
 * 테스트: http://localhost:9999/checkEmail?email=test@test.com&name=hong
 */

var express = require('express');
var app = express();

app.get('/checkEmail', function(request, response){
	response.set('Content-Type', 'text/html;charset=UTF-8');
	response.write('<html><head><title>step05</title></head>');
	response.write('<body><h1>Express 프레임워크 사용하기</h1>');
	response.write('<p>요청 파라미터 값 알아내기</p>');
	
	//방법 1. request.param(요청 파라미터 이름) 사용하기
	response.write('email=' + request.param('email') + '<br>');
	
	//방법 2. request.query.요청파라미터이름 사용하기
	response.write('name=' + request.query.name + '<br>');
	
	response.write('</body></html>');
	response.end();
});

var httpServer = app.listen(9999, function(){
	var host = httpServer.address().address;
	var port = httpServer.address().port;
	console.log('http://%s:%s 에서 클라이언트 요청을 기다리는 중....', host, port);
});
	