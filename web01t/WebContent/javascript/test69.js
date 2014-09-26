"use strict"; 

// 목표: 리팩토링 => 반복되는 코드를 함수로 추출하여 정리한다.
// extract method => changeState() 생성 
// 엘리먼트 찾는 코드 => 간단한 함수로 정의 => $()

changeState('create');

function bit(value) {
	if (value.charAt(0) == '#') { // 아이디일 경우,
	  return document.getElementById(value.substring(1));
	} else if (value.charAt(0) == '<') { // 태그일 경우,
	  return document.createElement(value.replace(/<|>/g, ''));	
	}
}

var $ = bit;

function changeState(state) {
  var stateMap = {
    create: 'none',
    detail: 'none'
  };
  
  stateMap[state] = '';
  /*
  var createState = 'none';
  var detailState = 'none';
  
  if (state == 'create') {
	  createState = '';
  } else if (state == 'detail') {
	  detailState = '';
  }
  */
  
  var detailClass = document.querySelectorAll('.detail');
  var createClass = document.querySelectorAll('.create');
  
  for (var i = 0; i < detailClass.length; i++) {
    detailClass[i].style.display = stateMap.detail;
  }
  
  for (var i = 0; i < createClass.length; i++) {
    createClass[i].style.display = stateMap.create;
  }
}

// 게시글을 저장하는 객체 생성자 함수
function Board(title, content, writer, password) {
	this.title = title;
	this.content = content;
	this.writer = writer;
	this.password = password;
	this.date = new Date();
	this.count = 0;
}

function resetForm() {
	// reset 버튼에게 click 이벤트를 전달 
	//1) MouseEvent 객체 생성
	var event = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });
	
  //2) reset  버튼에게 이벤트 전달
  $('#btnCancel').dispatchEvent(event);
}

var boardList = [];

$('#btnCancel').onclick = function(event) {
  changeState('create');
}

$('#btnAdd').onclick = function(event) {
	var board = new Board(
			$('#title').value,
			$('#content').value,
			$('#writer').value,
			$('#password').value);
	
	boardList.push(board);
	
	resetForm();
	
	refreshBoardList();
};

function refreshBoardList() {
	var boardTable = $('#boardTable');
	//var tbody = boardTable.children[0]; // <tbody>
	var tbody = boardTable.firstElementChild; // <tbody>
	for (var i = tbody.children.length -1 ; i > 0; i--) {
		//console.log(tbody.children[i]);
		tbody.removeChild(tbody.children[i]);
	}
	  
	var tr = null;
	var td = null;
	var a = null;
	var text = null;
	for (var i in boardList) {
		tr = $('<tr>');
		
		td = $('<td>');
		text = document.createTextNode(i);
		td.appendChild(text);
		tr.appendChild(td);
    
		td = $('<td>');//td 생성   
		a = $('<a>');//a 생성
		// 일반 객체가 아니라 엘리먼트에 없던 속성을 추가할 때는
		// setAttribute()를 사용한다.
		a.setAttribute('bno', new String(i));
		a.href = '#';
		a.onclick = loadBoardDetail;
		text = document.createTextNode(boardList[i].title); //제목 생성
		a.appendChild(text);//a에 붙인다.
	  td.appendChild(a);//a를 td에 붙인다.
	  tr.appendChild(td);
		
	  td = $('<td>');
    text = document.createTextNode(boardList[i].writer);
    td.appendChild(text);
	  tr.appendChild(td);
	  
	  td = $('<td>');
	  text = document.createTextNode(toYYYYMMDD(boardList[i].date));
	  td.appendChild(text);
	  tr.appendChild(td);
	  
	  td = $('<td>');
	  text = document.createTextNode(boardList[i].count);
	  td.appendChild(text);
	  tr.appendChild(td);
	  
	  tbody.appendChild(tr);
	}
}

function loadBoardDetail(event) {
	event.preventDefault();
	
	changeState('detail');
	
	var board = boardList[this.getAttribute('bno')];
	$('#no').value = this.getAttribute('bno');
	$('#title').value = board.title;
	$('#content').value = board.content;
	$('#writer').value = board.writer;
	$('#date').value = toYYYYMMDD(board.date);
}

function toYYYYMMDD(date) {
	return date.getFullYear() + '-' +
	  (date.getMonth() + 1) + '-' +
	  date.getDate();
}