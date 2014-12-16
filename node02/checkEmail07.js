/** 7. Express 프레임워크 사용하기 : 이메일 중복 여부 검사
 * 
 */

var express = require('express');
var mysql = require('mysql');
var app = express();

var conn = mysql.createConnection({
	host : 'localhost',
	port : 3306,
	user : 'java63',
	password : 'java63',
	database : 'java63'
});

// DB에 연결하기
conn.connect(function(err) {
	if (err) {
		console.error('mysql connection error');
		console.error(err);
		throw err;
	}
});



app.get('/checkEmail', function(request, response){
	conn.query('SELECT UID, EMAIL, TEL UNAME FROM MEMBERS WHERE EMAIL=?'
		, [request.param('email')]
		, function(err, rows) {
    		if (err) { // 오류가 발생했다면 오류 내용 출력
    		  console.error('select 오류!');
    		  console.error(err);
    		  throw err;
    		}
    		
    		// send(객체) => 클라이언트로 JSON 문자열을 출력한다.
    		response.send(rows);
	});
	
});

var httpServer = app.listen(9999, function(){
	var host = httpServer.address().address;
	var port = httpServer.address().port;
	console.log('http://%s:%s 에서 클라이언트 요청을 기다리는 중....', host, port);
});
	

