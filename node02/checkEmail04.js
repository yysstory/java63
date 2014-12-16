/** 4. Express 프레임워크 사용하기
 * 
 * [Express 사용전 준비사항]
 * 1) 콘솔창을 띄운다.
 * 2) nodejs 프로젝트 폴더로 간다.
 *    $ cd /home/user/javaide/workspace/node02
 * 3) 프로젝트의 의존 라이브러리 설정 파일 생성
 *    $ npm init
 * 명령을 실행하면 nodejs 프로젝트에 대한 기본 정보를 묻는다.
 * 예) 
      name: (node02) 
      version: (1.0.0) 
      description: node02
      entry point: (checkEmail.js) 
      ...
 * 그냥 엔터를 계속 쳐서 기본 값으로 설정한다.     
 * 설정이 끝나면 프로젝트 폴더에 package.json 파일을 생성한다.
 * 프로젝트의 컨텍스트 메뉴 > Refresh(F5) 클릭하여 파일 생성 확인할 것.
 * 
 * 4) 프로젝트에 Express 프레임워크 모듈 추가
 *    $ npm install express --save 
 * 명령을 실행하면 node_modules 폴더가 생긴다.
 * node_modules 폴더에 의존 라이브러리 폴더가 추가되어 있을 것이다.
 * 그리고, package.json 파일에 의존 라이브러리 정보가 추가되어 있다.
 * 
 * 참고!
 * --save 옵션을 주면, package.json 파일에 express 의존 라이브러리 정보가 추가된다.
 * package.json 파일을 열고 express 라이브러리 정보가 추가되었는지 확인한다. 
 *     
 */

var express = require('express');
var app = express();

app.get('/checkEmail', function(request, response){
	response.set('Content-Type', 'text/html;charset=UTF-8');
	response.write('<html><head><title>step04</title></head>');
	response.write('<body><h1>Express 프레임워크 사용하기</h1></body></html>');
	response.end();
});

var httpServer = app.listen(9999, function(){
	var host = httpServer.address().address;
	var port = httpServer.address().port;
	console.log('http://%s:%s 에서 클라이언트 요청을 기다리는 중....', host, port);
});
	