/** 6. Express 프레임워크 사용하기 : mysql 연동
 * 
 * [mysql 연동하기 전 준비사항]
 * 1) 콘솔 창을 띄운다.
 * 2) node02 프로젝트 폴더로 간다. 
 * 3) 프로젝트에 mysql 모듈 추가
 *    $ npm install mysql --save
 * 프로젝트 폴더를 Refresh 하여 node_modules 폴더에 mysql 모듈이 추가되었는지 확인한다.
 * 또한, package.json 파일에 의존 라이브러리 정보가 추가되었는지 확인한다. 
 */

var express = require('express');
var mysql = require('mysql');

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

// 질의하기
conn.query('select * from MEMBERS', function(err, rows) {
	// 질의한 후, 이 함수가 호출됨
	
	if (err) { // 오류가 발생했다면 오류 내용 출력
	  console.error('select 오류!');
	  console.error(err);
	  throw err;
	}
	
	console.log(rows);
});


